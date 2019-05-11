import { Injectable } from '@angular/core';
import { IGalleryDto } from './data/i-gallery-dto';
import { IGallery } from './data/i-gallery';
import { AbstractCrudService } from '../abstract/crud/abstract-crud.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../endpoints/endpoints';
import { Observable } from 'rxjs';
import { filter, map, publishReplay, refCount, take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class GalleriesService extends AbstractCrudService<IGalleryDto, IGallery> {
    protected constructor(
        http: HttpClient,
    ) {
        super(ENDPOINTS.GALLERIES, http);
    }

    updateGalleryItemImage$(id: string, file: File): Observable<IGallery> {
        const endpoint = `${this.baseUrl}/${id}/avatar`;
        const uploadData = new FormData();

        uploadData.append('file', file);

        const process = (this.http.put(endpoint, uploadData) as Observable<IGalleryDto>)
            .pipe(
                map((dto: IGalleryDto) => this.mapEntityDtoToData(dto)),
                tap(() => this.refreshData()),
                publishReplay(1),
                refCount(),
                take(1),
            );

        process.subscribe();

        return process;
    }

    protected mapEntityDataToDto(data: IGallery): Partial<IGalleryDto> {
        return data;
    }

    protected mapEntityDtoToData(dto: IGalleryDto): IGallery {
        return dto;
    }

    protected getEntityById$(id: string, data$: Observable<IGallery[]>): Observable<IGallery> {
        return data$.pipe(
            filter((users) => Array.isArray(users)),
            map((users) => users.find((user) => user.id.toString() === id.toString())),
            take(1),
            publishReplay(1),
            refCount(),
        );
    }
}
