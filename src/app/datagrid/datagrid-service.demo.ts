import {
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';

import { SohoBusyIndicatorDirective } from 'ids-enterprise-ng';

import {
  SohoDataGridComponent,
  SohoDataGridService
} from 'ids-enterprise-ng';

import { DataGridDemoService } from './datagrid-demo.service';
import { SohoToastService } from 'ids-enterprise-ng';

@Component({
  selector: 'app-datagrid-service-demo',
  templateUrl: './datagrid-service.demo.html',
  providers: [ { provide: SohoDataGridService, useClass: DataGridDemoService }, SohoToastService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataGridServiceDemoComponent {
  @ViewChild(SohoDataGridComponent) dataGrid: SohoDataGridComponent;
  @ViewChild(SohoBusyIndicatorDirective) busyIndicator: SohoBusyIndicatorDirective;
  constructor(private el: ElementRef, private toastService: SohoToastService) {
  }

  onSelected(e: SohoDataGridSelectedEvent) {
    this.toastService.show({title: 'Selected', message: `${e.rows[0].data.productId}`});
  }

  onOpenFilterRow(e: SohoDataGridOpenFilterRowEvent) {
    this.toastService.show({title: 'Filterbar', message: 'filter row opened'});
  }

  onCloseFilterRow(e: SohoDataGridCloseFilterRowEvent) {
    this.toastService.show({title: 'Filterbar', message: 'filter row closed'});
  }

  busy() {
    this.busyIndicator.activated = true;
  }

  toggleFilterRow() {
    this.dataGrid.toggleFilterRow();
  }

  clearFilter() {
    this.dataGrid.clearFilter();
  }

  sortColumn() {
    this.dataGrid.setSortColumn('price1');
  }

  addRow() {
  }
}
