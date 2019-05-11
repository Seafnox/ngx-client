import { Injectable } from '@angular/core';
import { IArticleDto } from './data/i-article-dto';
import { IArticle } from './data/i-article';
import { AbstractCrudService } from '../abstract/crud/abstract-crud.service';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../endpoints/endpoints';
import { Observable } from 'rxjs';
import { filter, map, publishReplay, refCount, take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ArticlesService extends AbstractCrudService<IArticleDto, IArticle> {
    protected constructor(
        http: HttpClient,
    ) {
        super(ENDPOINTS.ARTICLES, http);
    }

    updateArticleImage$(id: string, file: File): Observable<IArticle> {
        const endpoint = `${this.baseUrl}/${id}/avatar`;
        const uploadData = new FormData();

        uploadData.append('file', file);

        const process = (this.http.put(endpoint, uploadData) as Observable<IArticleDto>)
            .pipe(
                map((dto: IArticleDto) => this.mapEntityDtoToData(dto)),
                tap(() => this.refreshData()),
                publishReplay(1),
                refCount(),
                take(1),
            );

        process.subscribe();

        return process;
    }

    protected mapEntityDataToDto(data: IArticle): Partial<IArticleDto> {
        return data;
    }

    protected mapEntityDtoToData(dto: IArticleDto): IArticle {
        return dto;
    }

    protected getEntityById$(id: string, data$: Observable<IArticle[]>): Observable<IArticle> {
        return data$.pipe(
            filter((users) => Array.isArray(users)),
            map((users) => users.find((user) => user.id.toString() === id.toString())),
            take(1),
            publishReplay(1),
            refCount(),
        );
    }
}
