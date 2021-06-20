import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.css']
})
export class AllMembersComponent implements OnInit {

  public status=false;
  public childData={};
  public btnVis=true;

  public localItem=[] as any;
  public allMembers=[] as any;

  constructor() {
    this.localItem=localStorage.getItem('members');
    if(this.localItem==null){
      this.allMembers=[];
    }else{
      this.allMembers=JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void { }

  changeStatus(){
    this.status=true;
    this.btnVis=false;
  }

  addMember(value: object){
    this.allMembers.push(value); 
    localStorage.setItem("members", JSON.stringify(this.allMembers));
  }

  removeMember(index: number){
    //console.log(index);
    this.allMembers.splice(index, 1);
    localStorage.setItem("members", JSON.stringify(this.allMembers));
  }

  removeAll(){
    this.allMembers=[];
    localStorage.clear();
  }

}
