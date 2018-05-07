import { Component, OnInit } from '@angular/core';
import { Farm } from '../farm'
import { FarmService } from '../farm.service';


@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {

  farms: Farm[];

  constructor(private farmService: FarmService) { }

  ngOnInit() {
    this.getFarms();
  }

  getFarms(): void {
    this.farmService.getFarms().subscribe(farms => this.farms = farms);
  }

}
