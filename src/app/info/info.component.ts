import { Component, OnInit } from '@angular/core';
import { IToolbarComponent, ToolbarCollection } from '../toolbar/toolbar-collection';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, IToolbarComponent {

  constructor() { }

  ngOnInit() {
  }

  addButtons(collection: ToolbarCollection) {
    collection.addButton('Info Button', () => {
      alert('Hello from Info');
    });
  }

}
