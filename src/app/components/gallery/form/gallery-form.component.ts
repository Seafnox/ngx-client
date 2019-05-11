import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IGallery } from '../../../services/galleries/data/i-gallery';

@Component({
    selector: 'app-gallery-form',
    templateUrl: './gallery-form.component.html',
    styleUrls: ['./gallery-form.component.css'],
})
export class GalleryFormComponent implements OnInit {
    @Input() title: string;

    @Input() data: IGallery;

    @Output() readonly submitted = new EventEmitter<IGallery>();

    form: FormGroup;

    ngOnInit(): void {
        this.form = new FormGroup(this.formControls(this.data));
    }

    protected formControls(entity: IGallery): Partial<Record<keyof IGallery, AbstractControl>> {
        return {
            id: new FormControl(entity ? entity.id : null),
            name: new FormControl(entity ? entity.name : '', Validators.required),
        };
    }
}
