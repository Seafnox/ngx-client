import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ipsum } from './data/text';

@Component({
    selector: 'app-editors',
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.css'],
})
export class EditorsComponent {
    form = new FormControl(ipsum);
    quillModules = {

    };

    // tslint:disable-next-line:ban-ts-ignore
    // @ts-ignore
    onContentChanged({ quill, html, text }): void {
        console.log('quill content is changed!', { quill, html, text });
    }
}
