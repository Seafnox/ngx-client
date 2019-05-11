import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../../../endpoints/endpoints';
import { mapTo, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IGallery } from '../../../services/galleries/data/i-gallery';
import { GalleriesService } from '../../../services/galleries/galleries.service';

@Component({
    selector: 'app-gallery-info',
    templateUrl: './gallery-info.component.html',
    styleUrls: ['./gallery-info.component.css'],
})
export class GalleryInfoComponent implements OnInit {
    @Input() entity: IGallery;

    fullEntity$: Observable<IGallery>;

    baseUrl = ENDPOINTS.BASE;

    destroying$: Observable<boolean>;

    constructor(
        private entitiesService: GalleriesService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.fullEntity$ = this.entitiesService.getFullEntity$(this.entity.id);
    }

    edit(id: string): void {
        this.router.navigate(['entities', 'edit', id]);
    }

    destroy(id: string): void {
        this.destroying$ = this.entitiesService.destroyEntity$(id)
            .pipe(
                mapTo(false),
                startWith(true),
            );
    }

}
