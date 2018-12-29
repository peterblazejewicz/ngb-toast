import { Component, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngb-toast',
  templateUrl: './ngb-toast.component.html',
  styleUrls: ['./ngb-toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'toast',
    role: 'alert',
    'aria-live': 'assertive',
    'aria-atomic': 'true',
  }
})
export class NgbToastComponent {}
