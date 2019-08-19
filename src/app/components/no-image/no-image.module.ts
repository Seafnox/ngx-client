import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImageComponent } from './no-image.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [NoImageComponent],
    exports: [NoImageComponent],
    imports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
    ],
})
export class NoImageModule {}
