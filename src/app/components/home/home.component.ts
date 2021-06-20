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

  public mailbtn=true;

  public contactModel=new ContactModel("","",123,"");
  // public contactModel={name:"",email:"",phone:"",message:""};

  constructor(private _contact: ContactService) { }

  ngOnInit(): void {
  }

  sendContact(){
    this.mailbtn=false;
    //console.log(value);
    //window.alert("please wait...");
    this._contact.dataToServer(this.contactModel).subscribe(data=>{
      window.alert("Message sent!");
      this.contactModel=new ContactModel("","",123,"");
    this.mailbtn=true;
  },error=>{
    window.alert("Get Error: "+error.error.error);
    this.contactModel=new ContactModel("","",123,"");
    this.mailbtn=true;});
  }

}
