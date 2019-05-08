import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImageComponent } from './no-image.component';
import { MatIconModule, MatToolbarModule } from '@angular/material';

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
