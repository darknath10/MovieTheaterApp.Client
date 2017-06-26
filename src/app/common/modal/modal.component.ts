import { Component, OnInit, Inject, Input, ViewChild, ElementRef } from '@angular/core';

import { JQ_TOKEN } from '../../services/jQuery.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() modalId: string;
  @ViewChild('modalContainer') element: ElementRef;
  
  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal() {
    this.$(this.element.nativeElement).modal('hide');
  }

}
