import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReportersService } from 'src/app/services/reporters.service';
import { reporters } from 'src/reporterin';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  reporter:reporters = {}
  file:any
  constructor(private  reporters: ReportersService,private router:Router) { }

  getProfile(){
    this.reporters.getProfile().subscribe({
      next:(res:any)=>{
        this.reporter = res
      }
    })
  }
  updateProfile(reporter:any){
    this.reporters.editProfile(reporter).subscribe({
      next:()=>{
        this.uploadfile()
        this.router.navigateByUrl('profile')
      }
    })
  }
  handelupload(event:any){
  this.file=event.target.files
  }
  uploadfile(){
    if(this.file){
    const myData=new FormData()
    myData.append("avatar",this.file[0])
    this.reporters.addimge(myData).subscribe(()=>{})}
  }
  
  ngOnInit(): void {
  }

}
