import { Injectable } from '@angular/core';
import { IUserDto } from './data/i-user-dto';
import { IUser } from './data/i-user';
import { AbstractCrudService } from '../abstract/crud/abstract-crud.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../endpoints/endpoints';
import { Observable } from 'rxjs';
import { filter, map, publishReplay, refCount, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UsersService extends AbstractCrudService<IUserDto, IUser> {
    protected constructor(
        http: HttpClient,
    ) {
        super(ENDPOINTS.USERS, http);
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
