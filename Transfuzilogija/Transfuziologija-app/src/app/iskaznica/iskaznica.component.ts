import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iskaznica',
  templateUrl: './iskaznica.component.html',
  styleUrls: ['./iskaznica.component.scss'],
})
export class IskaznicaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  goToLink(url: string)
  {
    window.open(url,"");
  }

}
