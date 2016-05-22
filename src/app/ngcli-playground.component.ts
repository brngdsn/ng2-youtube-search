import { Component } from '@angular/core';
import { YoutubesearchComponent } from './+youtubesearch';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ngcli-playground-app',
  templateUrl: 'ngcli-playground.component.html',
  styleUrls: ['ngcli-playground.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/youtubesearch', component: YoutubesearchComponent}
])
export class NgcliPlaygroundAppComponent {
  title = 'ngcli-playground works!';
}
