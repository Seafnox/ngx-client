import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';

export abstract class AbstractReadService<DTO, DATA> {
    protected _data$ = new BehaviorSubject<DATA>(this.initialValue);
    protected _readInProgress$ = new BehaviorSubject<boolean>(false);

    protected lastUpdatedTime = 0;
    protected updateTimeout = 300000;

    protected constructor(
        protected baseUrl: string,
        protected http: HttpClient,
    ) {}

    get data$(): Observable<DATA> {
        return this._data$.asObservable();
    }

    get readInProgress$(): Observable<boolean> {
        return this._readInProgress$.asObservable();
    }

    requestData(): void {
        console.log('requestData', this.constructor.name);

        if (this.lastUpdatedTime <= (Date.now() + this.updateTimeout)) {
            this._readInProgress$.next(true);
            (this.http.get(this.baseUrl) as Observable<DTO>)
                .pipe(
                    map((dto) => this.mapDtoToData(dto)),
                    tap(() => this.lastUpdatedTime = Date.now()),
                    finalize(() => this._readInProgress$.next(false))
                )
                .subscribe((data) => this._data$.next(data));
        }
    }

    refreshData(): void {
        console.log('refreshData', this.constructor.name);

        this.lastUpdatedTime = 0;
        this.requestData();
    }

    protected get initialValue(): DATA {
        return null;
    }

    protected abstract mapDtoToData(dto: DTO): DATA;
}
