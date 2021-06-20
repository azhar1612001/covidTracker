import {
  Component,
  OnInit
} from '@angular/core';

import { AllCovidDataService } from '../../services/all-covid-data.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  public fetchData=[] as any;

  constructor(private _data: AllCovidDataService) { }

  ngOnInit(): void {
    this._data.sendData().subscribe(data => this.fetchData=data);
  }

}
