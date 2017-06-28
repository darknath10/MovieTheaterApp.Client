import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

import { JQ_TOKEN } from '../services/index';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  el: HTMLElement;
  @Input('modal-trigger') modalId: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}