import { Injectable } from '@angular/core';
import { IUserDto } from './data/i-user-dto';
import { IUser } from './data/i-user';
import { AbstractCrudService } from '../abstract/crud/abstract-crud.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../endpoints/endpoints';
import { Observable } from 'rxjs';
import { filter, map, publishReplay, refCount, take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UsersService extends AbstractCrudService<IUserDto, IUser> {
    protected constructor(
        http: HttpClient,
    ) {
        super(ENDPOINTS.USERS, http);
    }

    updateUserImage$(id: string, file: File): Observable<IUser> {
        const endpoint = `${this.baseUrl}/${id}/avatar`;
        const uploadData = new FormData();

        uploadData.append('file', file);

        const process = (this.http.put(endpoint, uploadData) as Observable<IUserDto>)
            .pipe(
                map((dto: IUserDto) => this.mapEntityDtoToData(dto)),
                tap(() => this.refreshData()),
                publishReplay(1),
                refCount(),
                take(1),
            );

        process.subscribe();

        return process;
    }

    protected mapEntityDataToDto(data: IUser): Partial<IUserDto> {
        return data;
    }

    protected mapEntityDtoToData(dto: IUserDto): IUser {
        return dto;
    }

    protected getEntityById$(id: string, data$: Observable<IUser[]>): Observable<IUser> {
        return data$.pipe(
            filter((users) => Array.isArray(users)),
            map((users) => users.find((user) => user.id.toString() === id.toString())),
            take(1),
            publishReplay(1),
            refCount(),
        );
    }
}
