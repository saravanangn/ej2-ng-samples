import { Component, OnInit, Inject } from '@angular/core';
import { orderDetails } from './data';
import { RowDDService, SelectionService } from '@syncfusion/ej2-ng-grids';


@Component({
    selector: 'ej2-srcgrid',
    templateUrl: 'draganddrop.html',
    styleUrls: ['draganddrop.style.css'],
    providers: [RowDDService,
        SelectionService]
})
export class DragAndDropComponent implements OnInit {
    public srcData: Object[] = [];
    public destData: Object[] = [];
    public pageOptions: Object;
    public selectionOptions: Object;
    public srcDropOptions: Object;
    public destDropOptions: Object;

    constructor(@Inject('sourceFiles') private sourceFiles: any) {
        sourceFiles.files = ['draganddrop.style.css'];
    }

    ngOnInit(): void {
        this.srcData = orderDetails;
        this.pageOptions = { pageCount: 2 };
        this.selectionOptions = { type: 'Multiple' };
        this.srcDropOptions = { targetID: 'DestGrid' };
        this.destDropOptions = { targetID: 'Grid' };
    }
}