import {
  Component,
  OnInit
} from '@angular/core';

import { ContactModel } from 'src/app/models/contact-model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public contactModel=new ContactModel("","",123,"");
  // public contactModel={name:"",email:"",phone:"",message:""};

  constructor(private _contact: ContactService) { }

  ngOnInit(): void {
  }

  sendContact(){
    //console.log(value);
    this._contact.dataToServer(this.contactModel).subscribe(data=>console.log("success!",data),error=>console.log("get error",error));
  }

}
