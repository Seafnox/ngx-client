import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { EditorsPageModule } from '../pages/editors/editors-page.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard-page.module';
import { NotFoundPageModule } from '../pages/not-found/not-found-page.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRouting,
        EditorsPageModule,
        DashboardPageModule,
        NotFoundPageModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
