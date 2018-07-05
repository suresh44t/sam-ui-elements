import {
  Component,
  Input,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'sam-page-title',
  template: `
    <h1 class="sam heading" [attr.id]="id" [attr.tabindex]="tabIndex">
      <span class="intro">{{ super }}</span> 
      {{ title }} 
    </h1>
    <ng-content></ng-content>
  `
})
export class SamPageTitle {
  /**
   * Skip nav target ID, should be unique
   */
  @Input('id') public id = 'primary-content';
  /**
   * Sets the tabindex attribute on the header tag
   */
  @Input() public tabIndex: number = 0;
  /**
   * Main text of the title
   */
  @Input() public title: string;
  /**
   * Super text of the title
   */
  @Input() public super: string;
}