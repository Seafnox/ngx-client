import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { EditorsPageModule } from '../pages/editors/editors-page.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard-page.module';

@NgModule({
              declarations: [
                  AppComponent,
              ],
              imports: [
                  BrowserModule,
                  AppRouting,
                  EditorsPageModule,
                  DashboardPageModule,
              ],
              providers: [],
              bootstrap: [AppComponent],
          })
export class AppModule {}
