import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export abstract class AbstractCrudService<DTO, DATA> {
    protected _data$ = new BehaviorSubject<DATA>(this.initialValue);
    protected lastUpdatedTime: number;
    protected updateTimeout = 300000;

    protected constructor(
        protected baseUrl: string,
        protected http: HttpClient,
    ) {}

    get data$(): Observable<DATA> {
        return this._data$.asObservable();
    }

    requestData(): void {
        if (this.lastUpdatedTime <= (Date.now() + this.updateTimeout)) {
            this.fetchData()
                .pipe(map((dto) => this.mapDtoToData(dto)))
                .subscribe((data) => this._data$.next(data));
        }
    }

    refreshData(): void {
        this.lastUpdatedTime = 0;
        this.requestData();
    }

    protected get initialValue(): DATA {
        return null;
    }

    protected abstract mapDtoToData(dto: DTO): DATA;

    protected fetchData(): Observable<DTO> {
        return this.http.get(this.baseUrl).pipe(map((data): DTO => data as DTO));
    }
}
