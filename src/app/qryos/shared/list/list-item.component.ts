import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ListItemInterface} from "./list-Item.interface";

@Component({
  selector: 'app-list-item',
  template: `
    <ng-container [ngTemplateOutlet]="itemTemplate"></ng-container>
    <ng-template #itemTemplate>
      <question-list-item [questionlistItem]="item" *ngIf="isInstanceOf('question')"></question-list-item>
      <question-list-item [questionlistItem]="item" *ngIf="isInstanceOf('questionz')"></question-list-item>
    </ng-template>
  `
})
export class ListItemComponent<T extends ListItemInterface>{

  @Input()
  item!: T

  isInstanceOf(type: string): boolean{
    return this.item.name === type;
  }

}
