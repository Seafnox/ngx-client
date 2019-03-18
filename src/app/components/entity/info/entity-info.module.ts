import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityInfoComponent } from './entity-info.component';

@NgModule({
    declarations: [EntityInfoComponent],
    exports: [EntityInfoComponent],
    imports: [
        CommonModule,
    ],
})
export class EntityInfoModule {}
