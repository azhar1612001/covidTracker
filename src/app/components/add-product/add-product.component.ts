import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { IndiaCovidDataService } from '../../services/india-covid-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public fetchData=[] as any;

  constructor(private _data: IndiaCovidDataService,private router: Router) { }

  ngOnInit(): void {
    this._data.sendData().subscribe(data => this.fetchData=data);
  }

  countryDetail(country: object){
    console.log(country);
    console.log(typeof(country));
    this.router.navigate(['/detail',country]);
  }

}
