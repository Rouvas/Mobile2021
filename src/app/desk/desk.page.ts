import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-desk',
  templateUrl: 'desk.page.html',
  styleUrls: ['desk.page.scss'],
})
export class DeskPage implements OnInit{

  countryFilter: any = { Country: '' };

  countries: any = []

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getCountries()
      .subscribe((countries) => {
        this.countries = countries
      })
  }
  
}
