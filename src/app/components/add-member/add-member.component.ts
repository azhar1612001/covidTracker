import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  @Input() public parentData=false;

  @Output() public childEvent=new EventEmitter();
  @Output() public childEventData=new EventEmitter();

  public addMemberData=this.fb.group({
    name: ['',Validators.required],
    role: ['',Validators.required],
    experience: ['',Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  sendToParent(){
    this.childEvent.emit(false);
    this.childEventData.emit(this.addMemberData.value);
    this.addMemberData=this.fb.group({
      name: ['',Validators.required],
      role: ['',Validators.required],
      experience: ['',Validators.required]
    });
  }

}
