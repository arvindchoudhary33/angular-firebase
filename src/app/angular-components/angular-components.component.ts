import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-components',
  templateUrl: './angular-components.component.html',
  styleUrls: ['./angular-components.component.css']
})
export class AngularComponentsComponent implements OnInit {


  radius: number = 0;
  height: number = 0;
  width: number = 0;
  length: number = 0;
  pi: number = 3.14;

  constructor() { }

  ngOnInit(): void {
  }

}
