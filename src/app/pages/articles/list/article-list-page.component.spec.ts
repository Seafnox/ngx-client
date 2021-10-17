import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticleListPageComponent } from './article-list-page.component';

describe('ArticleListPageComponent', () => {
    let component: ArticleListPageComponent;
    let fixture: ComponentFixture<ArticleListPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ArticleListPageComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleListPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
