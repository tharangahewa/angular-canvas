import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  scale: number = 1;
  styles: any;

  constructor() { }

  ngOnInit() {
  }

  zoom(number: number) {
    if (this.scale + number > 0) {
      this.scale += number;
      this.styles = {
        'transform': 'scale(' + this.scale + ')'
      }
    }
  }
}
