import { Component, OnInit } from '@angular/core';
import { SortService, ResizeService, GroupService, ColumnMenuService, PageService, FilterService } from '@syncfusion/ej2-ng-grids';
import { ContextMenuItem, GroupSettingsModel, FilterSettingsModel, EditSettingsModel } from '@syncfusion/ej2-ng-grids';
import { orderDetails } from '../data';

@Component({
    selector: 'ej2-grid-container',
    templateUrl: 'columnmenu.html',
    providers: [SortService, ResizeService, GroupService, ColumnMenuService, PageService]
})
export class ColumnMenuComponent implements OnInit {
    public data: Object[];
    public groupOptions: GroupSettingsModel;
    public filterSettings: FilterSettingsModel;
    ngOnInit(): void {
        this.data = orderDetails;
        this.groupOptions = { showGroupedColumn: true };
        this.filterSettings = { type: 'CheckBox' };
    }
}