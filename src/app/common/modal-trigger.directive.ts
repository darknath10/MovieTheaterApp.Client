import { Directive, OnInit, Inject, ElementRef } from '@angular/core';

import { JQ_TOKEN } from '../services/jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  el: HTMLElement;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$('#myModal').modal({});
    });
  }

}