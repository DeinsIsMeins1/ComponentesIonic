import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.page.html',
  styleUrls: ['./breadcrumb.page.scss'],
})
export class BreadcrumbPage implements OnInit {
  maxBreadcrumbs: any;

  

  expandBreadcrumbs() {
    
    this.maxBreadcrumbs = undefined;
  }

  constructor() { }

  ngOnInit() {
    this.maxBreadcrumbs = 4;
  }

}
