import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-object',
  templateUrl: './generic-object.component.html',
  styleUrls: ['./generic-object.component.scss']
})
export class GenericObjectComponent implements OnInit {

  @Input()
  bounds:HTMLElement

  constructor() { }

  ngOnInit() {
  }

  onStart(event: any) {
    // console.log("onStart");
    console.log(event);
  }

  onStop(event: any) {
    // console.log("onStop");
    console.log(event);
  }

  onMoveEnd(event) {
    console.log( "x=" + event.x + " y=" + event.y)
  }
}
