import { AbstractReadListService } from './abstract-read-list.service';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount, take, tap } from 'rxjs/operators';

export abstract class AbstractCrudService<DTO, DATA> extends AbstractReadListService<DTO, DATA> {
    createEntity$(data: DATA): Observable<DATA> {
        const process$ = (this.http.post(this.createUrl(), this.mapEntityDataToDto(data)) as Observable<DTO>)
            .pipe(
                map((dto: DTO) => this.mapEntityDtoToData(dto)),
                tap(() => this.refreshData()),
                publishReplay(1),
                refCount(),
                take(1),
            );

        process$.subscribe();

        return process$;
    }

    updateEntity$(id: string | number, data: DATA): Observable<DATA> {
        const process$ = (this.http.put(this.updateUrl(id), this.mapEntityDataToDto(data)) as Observable<DTO>)
            .pipe(
                map((dto: DTO) => this.mapEntityDtoToData(dto)),
                tap(() => this.refreshData()),
                publishReplay(1),
                refCount(),
                take(1),
            );

        process$.subscribe();

        return process$;
    }

    destroyEntity$(id: string | number): Observable<DATA> {
        const process$ = (this.http.delete(this.destroyUrl(id)) as Observable<DTO>)
            .pipe(
                map((dto: DTO) => this.mapEntityDtoToData(dto)),
                tap(() => this.refreshData()),
                publishReplay(1),
                refCount(),
                take(1),
            );

        process$.subscribe();

        return process$;
    }

    protected createUrl(): string {
        return this.baseUrl;
    }

    protected updateUrl(id: string | number): string {
        return `${this.baseUrl}/${id}`;
    }

    protected destroyUrl(id: string | number): string {
        return `${this.baseUrl}/${id}`;
    }

    protected abstract mapEntityDataToDto(data: DATA): Partial<DTO>;
}
