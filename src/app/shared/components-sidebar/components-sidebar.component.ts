import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-components-sidebar',
  templateUrl: './components-sidebar.component.html',
  styleUrls: ['./components-sidebar.component.scss']
})
export class ComponentsSidebarComponent implements OnInit {

  menus: any[];

  constructor() { }

  ngOnInit() {

    axios.get('/assets/menus.json').then(response => (
      this.menus = response.data
    ));
  }

}
