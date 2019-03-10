import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityFormComponent } from './entity-form.component';

@NgModule({
    declarations: [EntityFormComponent],
    exports: [EntityFormComponent],
    imports: [
        CommonModule,
    ],
})
export class EntityFormModule {}
