import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IdleButtonProps } from './interfaces/idle-button-props.interface';

@Component({
  selector: 'app-idle-button',
  templateUrl: './idle-button.component.html',
  styleUrls: ['./idle-button.component.scss']
})
export class IdleButtonComponent implements OnInit {

  @Input() props: IdleButtonProps;
  @Output() onClick: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  onClickEmit () {
    this.onClick.emit();
  }

}