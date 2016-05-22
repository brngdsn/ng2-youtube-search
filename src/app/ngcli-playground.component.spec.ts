import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgcliPlaygroundAppComponent } from '../app/ngcli-playground.component';

beforeEachProviders(() => [NgcliPlaygroundAppComponent]);

describe('App: NgcliPlayground', () => {
  it('should create the app',
      inject([NgcliPlaygroundAppComponent], (app: NgcliPlaygroundAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ngcli-playground works!\'',
      inject([NgcliPlaygroundAppComponent], (app: NgcliPlaygroundAppComponent) => {
    expect(app.title).toEqual('ngcli-playground works!');
  }));
});
