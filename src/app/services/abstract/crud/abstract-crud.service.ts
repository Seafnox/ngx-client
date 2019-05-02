import { AbstractReadListService } from './abstract-read-list.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';

export abstract class AbstractCrudService<DTO, DATA> extends AbstractReadListService<DTO, DATA> {
    protected _createInProgress$ = new BehaviorSubject<boolean>(false);
    protected _updateInProgress$ = new BehaviorSubject<boolean>(false);
    protected _destroyInProgress$ = new BehaviorSubject<boolean>(false);

    get createInProgress$(): Observable<boolean> {
        return this._createInProgress$.asObservable();
    }

    get updateInProgress$(): Observable<boolean> {
        return this._updateInProgress$.asObservable();
    }

    get destroyInProgress$(): Observable<boolean> {
        return this._destroyInProgress$.asObservable();
    }

    createEntity$(data: DATA): Observable<DATA> {
        this._createInProgress$.next(true);

        return (this.http.post(this.createUrl(), this.mapEntityDataToDto(data)) as Observable<DTO>)
            .pipe(
                map((dto: DTO) => this.mapEntityDtoToData(dto)),
                tap((result) => this._data$.next([...this._data$.value, result])),
                tap(() => this.refreshData()),
                finalize(() => this._createInProgress$.next(false))
            );
    }

    updateEntity$(id: string | number, data: DATA): Observable<DATA> {
        this._updateInProgress$.next(true);

        return (this.http.put(this.updateUrl(id), data) as Observable<DTO>)
            .pipe(
                map((dto: DTO) => this.mapEntityDtoToData(dto)),
                tap(() => this.refreshData()),
                finalize(() => this._updateInProgress$.next(false))
            );
    }

    destroyEntity$(id: string | number): Observable<DATA> {
        this._destroyInProgress$.next(true);

        return (this.http.delete(this.destroyUrl(id)) as Observable<DTO>)
            .pipe(
                map((dto: DTO) => this.mapEntityDtoToData(dto)),
                tap(() => this.refreshData()),
                finalize(() => this._destroyInProgress$.next(false))
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
