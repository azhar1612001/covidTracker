import {
  Component,
  OnInit
} from '@angular/core';

import { IndiaCovidDataService } from '../../services/india-covid-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public fetchData=[] as any;

  constructor(private _data: IndiaCovidDataService) {
    // this._data.sendData().subscribe(data => this.fetchData=data);
    // //this.fetchData=JSON.parse(this.fetchData);
    // this.indiaData=this.fetchData;
    // console.log(this.indiaData);
   }

  ngOnInit(): void {
    this._data.sendData().subscribe(data => this.fetchData=data);
    //this.fetchData=JSON.parse(this.fetchData);
    //console.log(this.indiaData);
  }

}
