import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AccumulationChartComponent, IAccTextRenderEventArgs, AccumulationChart,
         IAccPointRenderEventArgs, IAccLoadedEventArgs, AccumulationTheme } from '@syncfusion/ej2-ng-charts';

/**
 * Sample for groping in pie chart
 */
@Component({
    selector: 'control-content',
    templateUrl: 'grouping.html',
    encapsulation: ViewEncapsulation.None
})
export class GroupingPieComponent {
    public data: Object[] = [
        { 'x': 'China', y: 26, text: 'China: 26' },
        { 'x': 'Russia', y: 19, text: 'Russia: 19' },
        { 'x': 'Germany', y: 17, text: 'Germany: 17' },
        { 'x': 'Japan', y: 12, text: 'Japan: 12' },
        { 'x': 'France', y: 10, text: 'France: 10' },
        { 'x': 'South Korea', y: 9, text: 'South Korea: 9' },
        { 'x': 'Great Britain', y: 27, text: 'Great Britain: 27' },
        { 'x': 'Italy', y: 8, text: 'Italy: 8' },
        { 'x': 'Australia', y: 8, text: 'Australia: 8' },
        { 'x': 'Netherlands', y: 8, text: 'Netherlands: 8' },
        { 'x': 'Hungary', y: 8, text: 'Hungary: 8' },
        { 'x': 'Brazil', y: 7, text: 'Brazil: 7' },
        { 'x': 'Spain', y: 7, text: 'Spain: 7' },
        { 'x': 'Kenya', y: 6, text: 'Kenya: 6' },
    ];

    @ViewChild('pie')
    public pie: AccumulationChartComponent | AccumulationChart;
    public onTextRender(args: IAccTextRenderEventArgs): void {
        args.text = args.point.x + ' ' + args.point.y;
    }
    public onPointRender(args: IAccPointRenderEventArgs): void {
        if ((args.point.x as string).indexOf('Others') > -1) {
            args.fill = '#D3D3D3';
        }
    }
    //Initializing Legend
    public legendSettings: Object = {
        visible: false,
    };
    //Initializing DataLabel
    public dataLabel: Object = {
        visible: true,
        position: 'Outside',
        connectorStyle: { type: 'Line', length: '5%' },
        font: {
            size: '14px'
        }
    };
    public onClubvalue(e: Event): void {
        let clubvalue: string = (document.getElementById('clubvalue') as HTMLSelectElement).value;
        this.pie.series[0].groupTo = clubvalue;
        this.pie.series[0].animation.enable = false;
        document.getElementById('clubtext').innerHTML = clubvalue;
        this.pie.removeSvg();
        this.pie.refreshSeries();
        this.pie.refreshChart();
    };
    public load(args: IAccLoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    public clubvalue: string = '10';
    public startAngle: number = 0;
    public endAngle: number = 360;
    public tooltip: Object = { enable: true, format: '${point.x} : <b>${point.y} Medals</b>' };
    public title: string = 'RIO Olympics Gold ';
    constructor() {
        //code
    };

}