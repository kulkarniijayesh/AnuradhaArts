import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  responsiveNav : boolean = false;

  showTopNav = function()
  {
    this.responsiveNav = !this.responsiveNav;
  }

  constructor() { }

  ngOnInit() {
  }

  
}
