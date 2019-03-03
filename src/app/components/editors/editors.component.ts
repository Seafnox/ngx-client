import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ipsum } from './data/text';
// tslint:disable-next-line:ban-ts-ignore
// @ts-ignore
import * as Quill from 'quill';
// tslint:disable-next-line:ban-ts-ignore
// @ts-ignore
import { ImageDrop } from 'quill-image-drop-module';
// tslint:disable-next-line:ban-ts-ignore
// @ts-ignore
import quillImageResizeModule from 'quill-image-resize-module';

@Component({
    selector: 'app-editors',
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.css'],
})
export class EditorsComponent implements OnInit {
    form = new FormControl(ipsum);
    quillModules = {};

    ngOnInit(): void {

        Quill.register('modules/imageResize', quillImageResizeModule);
        Quill.register('modules/imageDrop', ImageDrop);
        this.quillModules = {
            imageResize: {},
            imageDrop: true,
        };
    }

    // tslint:disable-next-line:ban-ts-ignore
    // @ts-ignore
    onContentChanged({ quill, html, text }): void {
        console.log('quill content is changed!', { quill, html, text });
    }
}
