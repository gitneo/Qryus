import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {ListItemInterface} from "./list-Item.interface";

@Component({
  selector: 'listOf',
  template: `
    <ng-container *ngFor="let item of listOfItems | async">
      <app-list-item [item]=item></app-list-item>
    </ng-container>
  `,
})
export class ListComponent<T extends ListItemInterface> {
    @Input()
    listOfItems: Observable<T[]> | undefined;
}
