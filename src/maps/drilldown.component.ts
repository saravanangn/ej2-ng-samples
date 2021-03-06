import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MapsTheme, Maps, shapeSelected, IShapeSelectedEventArgs, Highlight,
         MapsTooltip, Marker, ILoadEventArgs } from '@syncfusion/ej2-ng-maps';
import { World_Map } from './MapData/WorldMap'; 
import { Africa } from './MapData/Africa'; 
import { Europe } from './MapData/Europe'; 
import { NorthAmerica } from './MapData/NorthAmerica'; 
import { Oceania } from './MapData/Oceania'; 
import { SouthAmerica } from './MapData/SouthAmerica'; 

import { Asia } from './MapData/Asia'; 
import { dafaultData } from './MapData/salesCountry';

Maps.Inject(Highlight, MapsTooltip, Marker );

export interface ShapeData { continent?: string; }

/**
 * Drilldown sample
 */
@Component({
    selector: 'control-content',
    templateUrl: 'drilldown.html',
    styleUrls: ['maps.style.css'],  
    encapsulation: ViewEncapsulation.None
})
export class MapsDrilldownComponent {
    @ViewChild('maps')
    public maps: Maps;

    public load = (args: ILoadEventArgs) => { 
        let theme: string = location.hash.split('/')[1]; 
        theme = theme ? theme : 'Material'; 
        args.maps.theme = <MapsTheme>(theme.charAt(0).toUpperCase() + theme.slice(1));
    }
    
    public shapeSelected = (args: IShapeSelectedEventArgs) : void => { 
        let shape: string = (args.shapeData as ShapeData).continent; 
        
        if (shape === 'Africa') { 
            this.maps.baseLayerIndex = 1; 
            this.maps.refresh(); 
        } 
        else if (shape === 'Europe') { 
            this.maps.baseLayerIndex = 2; 
            this.maps.refresh(); 
        } 
        else if (shape === 'Asia') { 
            this.maps.baseLayerIndex = 3; 
            this.maps.refresh(); 
        } 
        else if (shape === 'North America') { 
            this.maps.baseLayerIndex = 4; 
            this.maps.refresh(); 
        }
        else if (shape === 'South America') {
            this.maps.baseLayerIndex = 5; 
            this.maps.refresh(); 
        } 
        else if (shape === 'Australia') { 
            this.maps.baseLayerIndex = 6; 
            this.maps.refresh(); 
        }
        let button: HTMLElement = document.getElementById('button'); button.style.display = 'block'; 
        document.getElementById('content').innerHTML = ''; 
        (<HTMLElement>document.getElementById('category')).style.visibility = 'visible';
        (<HTMLElement>document.getElementById('text')).innerHTML = shape;
        (<HTMLElement>document.getElementById('symbol')).style.visibility = 'visible';
    };
    
    public zoomSettings: object = { enable: false };
    
    public layers: object[] = [
        {
            layerType: 'Geometry',
            shapePropertyPath: 'continent',
            shapeDataPath: 'continent',
            dataSource: dafaultData,
            shapeData: World_Map,
            shapeSettings: {
                colorValuePath: 'drillColor'
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'continent'
            },
            markerSettings: [
                {
                    visible: true,
                    tooltipSettings: {
                        visible: true
                    },
                    template: '<div id="marker1" class="markersTemplate" style="color:white;">Asia' +
                        '</div>',
                    dataSource: [
                        { latitude: 50.32087157990324, longitude: 90.015625 }
                    ],
                    animationDuration: 0
                },
                {
                    visible: true,
                    template: '<div id="marker2" class="markersTemplate" style="color:white;">Australia' +
                        '</div>',
                    dataSource: [
                        { latitude: -28.88583769986199, longitude: 130.296875 }
                    ],
                    animationDuration: 0
                },
                {
                    visible: true,
                    template: '<div id="marker3" class="markersTemplate" style="color:white;">Africa' +
                        '</div>',
                    dataSource: [
                        { latitude: 10.97274101999902, longitude: 16.390625 }
                    ],
                    animationDuration: 0
                },
                {
                    visible: true,
                    template: '<div id="marker4" class="markersTemplate" style="color:white;">Europe' +
                        '</div>',
                    dataSource: [
                        { latitude: 47.95121990866204, longitude: 18.468749999999998 }
                    ],
                    animationDuration: 0,
                },
                {
                    visible: true,
                    template: '<div id="marker5" class="markersTemplate" style="width:50px;color:white;">North America' +
                        '</div>',
                    dataSource: [
                        { latitude: 59.88893689676585, longitude: -109.3359375 }
                    ],
                    animationDuration: 0
                },
                {
                    visible: true,
                    template: '<div id="marker6" class="markersTemplate" style="width:50px;color:white;">South America' +
                        '</div>',
                    dataSource: [
                        { latitude: -6.64607562172573, longitude: -55.54687499999999 }
                    ],
                    animationDuration: 0
                },
            ]
        },
        {
            layerType: 'Geometry',
            shapeData: Africa,
            shapeSettings: {
                fill: '#80306A'
            },
            highlightSettings: {
                enable: true,
                fill: '#80306A'
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        },
        {
            layerType: 'Geometry',
            shapeData: Europe,
            shapeSettings: {
                fill: '#622D6C'
            },
            highlightSettings: {
                enable: true,
                fill: '#622D6C'
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        },
        {
            layerType: 'Geometry',
            shapeData: Asia,
            shapeSettings: {
                fill: '#462A6D'
            },
            highlightSettings: {
                enable: true,
                fill: '#462A6D'
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        },
        {
            layerType: 'Geometry',
            shapeData: NorthAmerica,
            shapeSettings: {
                fill: '#C13664'
            },
            highlightSettings: {
                enable: true,
                fill: '#C13664'
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        },
        {
            layerType: 'Geometry',
            shapeData: SouthAmerica,
            shapeSettings: {
                fill: '#9C3367'
            },
            highlightSettings: {
                enable: true,
                fill: '#9C3367'
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        },
        {
            layerType: 'Geometry',
            shapeData: Oceania,
            shapeSettings: {
                fill: '#2A2870'
            },
            highlightSettings: {
                enable: true,
                fill: '#2A2870'
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        }
    ]

    ngAfterViewInit(){
        document.getElementById('category').onclick = () => {
            this.maps.baseLayerIndex = 0;
            this.maps.refresh();
            let button: HTMLElement = document.getElementById('button');
            button.style.display = 'none';
            document.getElementById('content').innerHTML = 'Click on a shape to drill';
            (<HTMLElement>document.getElementById('category')).style.visibility = 'hidden';
            (<HTMLElement>document.getElementById('text')).innerHTML = '';
            (<HTMLElement>document.getElementById('symbol')).style.visibility = 'hidden';
        };
    }
    
    constructor() {
        
    }

}