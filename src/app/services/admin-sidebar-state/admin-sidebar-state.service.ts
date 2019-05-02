import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AdminSidebarStateService {
    private _isOpened$ = new BehaviorSubject(true);

    toggle(): void {
        this._isOpened$.next(!this._isOpened$.value);
    }

    get isOpened$(): Observable<boolean> {
        return this._isOpened$.asObservable();
    }
}
