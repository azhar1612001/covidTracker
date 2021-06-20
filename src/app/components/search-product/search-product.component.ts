import {
  Component,
  OnInit
} from '@angular/core';

import { AllCovidDataService } from '../../services/all-covid-data.service';
import { IndiaCovidDataService } from '../../services/india-covid-data.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  public initial=false;
  public searEle="";
  public visibility=false;
  public found=false;
  public state=false;
  public searchResult={
    Country: "",
    CountryCode: "",
    Slug: "",
    NewConfirmed: "",
    TotalConfirmed: "",
    NewDeaths: "",
    TotalDeaths: "",
    NewRecovered: "",
    TotalRecovered: "",
    Date: "",
    state: "",
    statecode: "",
    statenotes: "",
    active: "",
    confirmed: "",
    recovered: "",
    deaths: "",
    lastupdatedtime: ""
  };
  public countryData=[] as any;
  public stateData=[] as any;

  constructor(private _data: AllCovidDataService,private _sdata: IndiaCovidDataService) { }

  ngOnInit(): void {
    this._data.sendData().subscribe(data => this.countryData=data);
    this._sdata.sendData().subscribe(data => this.stateData=data);
  }

  countryClick(){
    this.state=false;
    this.visibility=true;
    this.found=false;
    this.initial=false;
    // this.searchResult={
    //   Country: "",
    //   CountryCode: "",
    //   Slug: "",
    //   NewConfirmed: "",
    //   TotalConfirmed: "",
    //   NewDeaths: "",
    //   TotalDeaths: "",
    //   NewRecovered: "",
    //   TotalRecovered: "",
    //   Date: ""
    // };
    this.searEle="Enter Country Name";
  }

  stateClick(){
    this.state=true;
    this.visibility=true;
    this.found=false;
    this.initial=false;
    // this.searchResult={
    //   Country: "",
    //   CountryCode: "",
    //   Slug: "",
    //   NewConfirmed: "",
    //   TotalConfirmed: "",
    //   NewDeaths: "",
    //   TotalDeaths: "",
    //   NewRecovered: "",
    //   TotalRecovered: "",
    //   Date: ""
    // };
    this.searEle="Enter State Name";
  }

  searchClick(value: string){
    this.initial=true;
    this.visibility=false;
    value=value.toLowerCase();
    //console.log(value);
    if(this.searEle==="Enter Country Name"){
      for(let country of this.countryData.Countries){
        if(value===country.Country.toLowerCase()){
          //console.log(country);
          this.searchResult=country;
          // this.searchResult.Country=country.Country;
          // this.searchResult.CountryCode=country.CountryCode;
          // this.searchResult.Slug=country.Slug;
          // this.searchResult.NewConfirmed=country.NewConfirmed;
          // this.searchResult.TotalConfirmed=country.TotalConfirmed;
          // this.searchResult.NewDeaths=country.NewDeaths;
          // this.searchResult.TotalDeaths=country.TotalDeaths;
          // this.searchResult.NewRecovered=country.NewRecovered;
          // this.searchResult.TotalRecovered=country.TotalRecovered;
          // this.searchResult.Date=country.Date;
          //console.log(country.Country);
          this.found=true;
          break;
        }
      }
    }else{
      for(let state of this.stateData.statewise){
        if(value===state.state.toLowerCase()){
          this.searchResult=state;
          //console.log(state);
          this.found=true;
          break;
        }
      }
    }
  }

}
