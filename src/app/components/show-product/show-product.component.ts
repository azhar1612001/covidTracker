import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { AllCovidDataService } from '../../services/all-covid-data.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  public fetchData=[] as any;

  constructor(private _data: AllCovidDataService,private router: Router) { }

  ngOnInit(): void {
    this._data.sendData().subscribe(data => this.fetchData=data);
  }

  countryDetail(country: object){
    console.log(country);
    console.log(typeof(country));
    this.router.navigate(['/detail',country]);
  }

}
