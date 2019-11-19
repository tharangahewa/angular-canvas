import { Component, Input, OnInit } from '@angular/core';
import { IResizeEvent } from "angular2-draggable/lib/models/resize-event";
import { IPosition } from "angular2-draggable";

@Component({
  selector: 'app-generic-object',
  templateUrl: './generic-object.component.html',
  styleUrls: ['./generic-object.component.scss']
})
export class GenericObjectComponent implements OnInit {

  styles: any;

  @Input()
  bounds: HTMLElement;
  @Input()
  order: number;
  position: IPosition;

  constructor() {
  }

  ngOnInit() {
    const colors = ['green', 'red', 'yellow'];
    this.styles = {
      'background-color': colors[this.order - 1]
    }
    this.position = {} as IPosition;
    this.position.x = this.order * 30;
    this.position.y = this.order * 30;
  }

  onStart(event: any) {
    console.log("onStart moving");

  }

  onStop(event: any) {
    console.log("onStop moving");
  }

  onMoveEnd(event) {
    console.log("x=" + event.x + " y=" + event.y)
  }

  onRzStart(event: IResizeEvent) {
    console.log("onStart resizing");
  }

  onRzStop(event: IResizeEvent) {
    console.log("width=" + event.size.width + " height=" + event.size.height)
  }

}
