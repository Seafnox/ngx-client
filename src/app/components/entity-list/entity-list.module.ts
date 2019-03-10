import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListComponent } from './entity-list.component';

@NgModule({
    declarations: [EntityListComponent],
    exports: [EntityListComponent],
    imports: [
        CommonModule,
    ],
})
export class EntityListModule {}
