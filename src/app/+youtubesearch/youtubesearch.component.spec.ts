import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { YoutubesearchComponent } from './youtubesearch.component';

describe('Component: Youtubesearch', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [YoutubesearchComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([YoutubesearchComponent],
      (component: YoutubesearchComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(YoutubesearchComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(YoutubesearchComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-youtubesearch></app-youtubesearch>
  `,
  directives: [YoutubesearchComponent]
})
class YoutubesearchComponentTestController {
}

