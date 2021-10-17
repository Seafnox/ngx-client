import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticleInfoComponent } from './article-info.component';

describe('EntityInfoComponent', () => {
    let component: ArticleInfoComponent;
    let fixture: ComponentFixture<ArticleInfoComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ArticleInfoComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
