import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';
import { Farm }         from '../farm';
import { FarmService }  from '../farm.service';

@Component({
  selector: 'app-farm-detail',
  templateUrl: './farm-detail.component.html',
  styleUrls: ['./farm-detail.component.css']
})
export class FarmDetailComponent implements OnInit {
  @Input() farm: Farm;
  options: GridsterConfig;
  zones: Array<GridsterItem>;

  constructor(
    private route: ActivatedRoute,
    private farmService: FarmService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFarm();

    this.zones = [
      {cols: 2, rows: 1, y: 0, x: 0, id:1},
      {cols: 2, rows: 2, y: 0, x: 1, id:2},
      {cols: 1, rows: 1, y: 0, x: 4, id:3},
      {cols: 3, rows: 2, y: 1, x: 4, id:4},
    ];
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
        enabled: true
      },
      resizable: {
        enabled: true
      },

      itemChangeCallback: FarmDetailComponent.itemChange,
      
    };
  }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }


}
