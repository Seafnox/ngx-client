import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-no-image',
    templateUrl: './no-image.component.html',
    styleUrls: ['./no-image.component.css'],
})
export class NoImageComponent {
    @Input() height = 200;
}
