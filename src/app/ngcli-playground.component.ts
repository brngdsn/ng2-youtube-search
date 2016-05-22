import { Component } from '@angular/core';
import { FORM_PROVIDERS } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { YoutubesearchComponent } from './+youtubesearch';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ngcli-playground-app',
  templateUrl: 'ngcli-playground.component.html',
  styleUrls: ['ngcli-playground.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, FORM_PROVIDERS, HTTP_PROVIDERS]
})
@Routes([
  {path: '/youtubesearch', component: YoutubesearchComponent}
])
export class NgcliPlaygroundAppComponent {
  title = 'ngcli-playground works!';
}
