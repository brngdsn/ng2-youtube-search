import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-youtubesearch',
  templateUrl: 'youtubesearch.component.html',
  styleUrls: ['youtubesearch.component.css']
})
export class YoutubesearchComponent implements OnInit {

  searchForm: any;
  results$: Observable<any>;

  constructor(private _formBuilder: FormBuilder, private _http: Http) {
    const API_URL = 'https://www.googleapis.com/youtube/v3/search';
    const API_KEY = 'AIzaSyCRwaAmISwzih5Clcpmrxoxtm19OLfKptw';

    this.searchForm = this._formBuilder.group({
      'search': ['', Validators.required]
    });

    this.results$ = this.searchForm.controls.search.valueChanges // <- Observable Form
      .debounceTime(200)
      .switchMap(query => this._http.get(`${API_URL}?q=${query}&key=${API_KEY}&part=snippet`))  // <-- Observable Http
      .map(res => res.json())
      .map(res => res.items);
  }

  ngOnInit() {
  }

}
