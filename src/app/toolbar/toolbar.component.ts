import { Component, EventEmitter } from '@angular/core';

import { ToolbarCollection, ToolbarButton } from './toolbar-collection';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  buttons: Array<ToolbarButton> = [];

  constructor() { }

  onRouteChanged(component: any) {
    if (component.addButtons) {
      let collection = new ToolbarCollection();

      component.addButtons(collection);

      this.buttons = collection.buttons;
    }
  }

}
