import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

  public country={};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.country=parseInt(this.route.snapshot.paramMap.get('country'));
    this.country=this.route.snapshot.params.country;
    console.log(this.country);
  }

}
