import { BreakpointObserver } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NEVER } from 'rxjs';
import { MainNavigationComponent } from './main-navigation.component';

import { anyString, instance, mock, when } from 'ts-mockito';

describe('MainNavigationComponent', () => {
  const mockBreakpointObserver = mock(BreakpointObserver);

  let component: MainNavigationComponent;
  let fixture: ComponentFixture<MainNavigationComponent>;

  when(mockBreakpointObserver.observe(anyString())).thenReturn(NEVER);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainNavigationComponent],
      imports: [],
      providers: [{ provide: BreakpointObserver, useFactory: () => instance(mockBreakpointObserver) }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationComponent);
    component = fixture.componentInstance;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
