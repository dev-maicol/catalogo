import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherFormComponent } from './searcher-form.component';

describe('SearcherFormComponent', () => {
  let component: SearcherFormComponent;
  let fixture: ComponentFixture<SearcherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearcherFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearcherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
