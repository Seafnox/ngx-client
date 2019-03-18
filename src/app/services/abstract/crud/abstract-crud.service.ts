import { AbstractReadListService } from './abstract-read-list.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export abstract class AbstractCrudService<DTO, DATA> extends AbstractReadListService<DTO, DATA> {
    createEntity$(data: DATA): Observable<DATA> {
        return (this.http.post(this.createUrl(), this.mapEntityDataToDto(data)) as Observable<DTO>)
            .pipe(
                map((dto: DTO) => this.mapEntityDtoToData(dto)),
                tap((result) => this._data$.next([...this._data$.value, result])),
                tap(() => this.refreshData()),
            );
    }

    updateEntity$(id: string | number, data: DATA): Observable<DATA> {
        return (this.http.put(this.updateUrl(id), data) as Observable<DTO>)
            .pipe(
                map((dto: DTO) => this.mapEntityDtoToData(dto)),
                tap(() => this.refreshData()),
            );
    }

    destroyEntity$(id: string | number): Observable<DATA> {
        return (this.http.delete(this.destroyUrl(id)) as Observable<DTO>)
            .pipe(
                map((dto: DTO) => this.mapEntityDtoToData(dto)),
                tap(() => this.refreshData()),
            );
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

    protected abstract mapEntityDataToDto(data: DATA): DTO;
}
