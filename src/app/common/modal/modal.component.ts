import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movies-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  
  constructor() { }

  ngOnInit() {
  }

}
