import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mapTo, startWith } from 'rxjs/operators';
import { GalleriesService } from '../../../services/galleries/galleries.service';
import { IGallery } from '../../../services/galleries/data/i-gallery';

@Component({
    selector: 'app-gallery-list',
    templateUrl: './gallery-list.component.html',
    styleUrls: ['./gallery-list.component.css'],
})
export class GalleryListComponent {
    @Input() entities: IGallery[];

    @Input() selectedId: string;

    @Output() readonly selectedIdChange = new EventEmitter<string>();

    destroying$: Observable<boolean>;

    constructor(public entitiesService: GalleriesService, public router: Router) {}

    select(id: string): void {
        if (this.selectedId === id) {
            return;
        }

        this.selectedId = id;
        this.selectedIdChange.emit(id);
    }

    edit(id: string): void {
        this.router.navigate(['galleries', 'edit', id]);
    }

    editImage(id: string): void {
        this.router.navigate(['galleries', 'edit', id], {
            queryParams: {
                index: 1,
            }
        });
    }

    destroy(id: string): void {
        this.destroying$ = this.entitiesService.destroyEntity$(id)
            .pipe(
                mapTo(false),
                startWith(true),
            );
    }
}
