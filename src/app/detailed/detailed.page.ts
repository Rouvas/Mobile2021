import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Country } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.page.html',
  styleUrls: ['./detailed.page.scss'],
})
export class DetailedPage implements OnInit {

  cCountry: Country = {}
  newConfirmed: any
  newDeaths: any
  newRecovered: any

  constructor(private route: ActivatedRoute, private httpService: HttpService, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.httpService.getCountryInfo(params.id)
        .subscribe((country: Country[]) => {

          if (country.length === 0) {this.router.navigate['']} else {

          this.cCountry = country[country.length - 1]

         
          this.newConfirmed = +this.cCountry.Confirmed - +country[country.length - 2].Confirmed
          this.newDeaths = +this.cCountry.Deaths - +country[country.length - 2].Deaths
          this.newRecovered = +this.cCountry.Recovered - +country[country.length - 2].Recovered
        }

        })
    })
  }

}
