import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent {
@Output() updataDatEvent = new EventEmitter<string>();
}