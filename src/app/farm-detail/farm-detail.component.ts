import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';
import { Farm, Zone }         from '../farm';
import { FarmService }  from '../farm.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer, geoJSON, Layer } from 'leaflet';


@Component({
  selector: 'app-farm-detail',
  templateUrl: './farm-detail.component.html',
  styleUrls: ['./farm-detail.component.css']
})
export class FarmDetailComponent implements OnInit {
  water_modal_active : boolean = false;
  mapOptions;
  farmLayer;
  layers = []; 
  fitBounds = [];
  farm: Farm;
  zone: Zone;
  options: GridsterConfig;
  zones: Array<GridsterItem>;
  imports: [
    LeafletModule
  ];

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }



  constructor(
    private route: ActivatedRoute,
    private farmService: FarmService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFarm();
    this.mapOptions = {
      layers: [
        tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 12,
      center: latLng(43,1)
    };
  }

  getFarm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.farmService.getFarm(id)
      .subscribe(farm => this.initGridster(farm));
  }

  initGridster(farm): void {
    console.log("Nuevo farm", farm)
    this.farm = farm;
    this.zones = farm.zone_set;    
    this.farmLayer = geoJSON((farm.mpoly) as any,{ style: () => ({ color: '#ff7800' })});
    this.layers.push(this.farmLayer);
    this.fitBounds = this.farmLayer.getBounds();

    this.options = {
      draggable: {
        enabled: false
      },
      resizable: {
        enabled: false
      },

      itemChangeCallback: FarmDetailComponent.itemChange,
    };

  }


  showZoneDetails($event, item) {
    this.zone = item;
    console.info('Zone', item, $event);    
  }

}
