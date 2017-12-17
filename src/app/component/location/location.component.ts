import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../service/location.service";
import { Location } from '../../model/location'
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations : Location[] = [];
  constructor(private locationService : LocationService) { }

  ngOnInit() {

    this.locationService.getLocations()
      .subscribe(locations => {
        this.locations = locations;
      });

  }

}
