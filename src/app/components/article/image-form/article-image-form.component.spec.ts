import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticleImageFormComponent } from './article-image-form.component';

describe('GalleryImageFormComponent', () => {
    let component: ArticleImageFormComponent;
    let fixture: ComponentFixture<ArticleImageFormComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ArticleImageFormComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleImageFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
