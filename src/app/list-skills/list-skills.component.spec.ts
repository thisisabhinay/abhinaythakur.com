import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSkillsComponent } from './list-skills.component';

describe('ListSkillsComponent', () => {
  let component: ListSkillsComponent;
  let fixture: ComponentFixture<ListSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
