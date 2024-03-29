import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticleFormComponent } from './article-form.component';

describe('EntityFormComponent', () => {
    let component: ArticleFormComponent;
    let fixture: ComponentFixture<ArticleFormComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ArticleFormComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
