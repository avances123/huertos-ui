import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';
import { Farm, Zone }         from '../farm';
import { FarmService }  from '../farm.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';


@Component({
  selector: 'app-farm-detail',
  templateUrl: './farm-detail.component.html',
  styleUrls: ['./farm-detail.component.css']
})
export class FarmDetailComponent implements OnInit {
  mapOptions;  
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
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 2,
      center: latLng(46.879966, -121.726909)
    };
  }

  getFarm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.farmService.getFarm(id)
      .subscribe(farm => this.initGridster(farm));
  }

  initGridster(farm): void {
    console.debug("Nuevo farm", farm)
    this.farm = farm;
    this.options = {
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },

      itemChangeCallback: FarmDetailComponent.itemChange,
    };

    this.zones = farm.zone_set;
  }


  showZoneDetails($event, item) {
    this.zone = item;
    console.info('Zone', item, $event);    
  }

}
