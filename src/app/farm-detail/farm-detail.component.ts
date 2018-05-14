import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';
import { Farm, Zone }         from '../farm';
import { FarmService }  from '../farm.service';

@Component({
  selector: 'app-farm-detail',
  templateUrl: './farm-detail.component.html',
  styleUrls: ['./farm-detail.component.css']
})
export class FarmDetailComponent implements OnInit {
  farm: Farm;
  zone: Zone;
  options: GridsterConfig;
  zones: Array<GridsterItem>;

  constructor(
    private route: ActivatedRoute,
    private farmService: FarmService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFarm();
  }

  getFarm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.farmService.getFarm(id)
      //.subscribe(this.initGridster);
      .subscribe(farm => this.initGridster(farm));
  }

  initGridster(farm): void {
    console.debug("Nuevo farm", farm)
    this.farm = farm;
    this.options = {
      draggable: {
        enabled: false
      },
      resizable: {
        enabled: false
      },

      itemChangeCallback: FarmDetailComponent.itemChange,
      
    };

    this.zones = farm.zone_set;
  }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  showZoneDetails($event, item) {
    this.zone = item;
    console.info('Zone', item, $event);    
  }
    

}
