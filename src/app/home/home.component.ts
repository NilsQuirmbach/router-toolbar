import { Component, OnInit } from '@angular/core';

import { IToolbarComponent, ToolbarCollection } from '../toolbar/toolbar-collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, IToolbarComponent {

  constructor() { }

  ngOnInit() {
  }

  addButtons(collection: ToolbarCollection) {
    collection.addButton('Home Button', () => {
      alert('Hello from Home');
    });
  }

}
