import { Component, OnInit } from '@angular/core';
import { ReportersService } from 'src/app/services/reporters.service';
import { reporters } from 'src/reporterin';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  reporter:reporters= {}
  constructor(private reporterss:ReportersService) { }
  getProfile(){
    console.log('here')
    this.reporterss.getProfile().subscribe({
      next:(res:any)=>{
        
        this.reporter = res
      },
      error:(httpError:any)=>{
     
      }
    })
  }

  ngOnInit(): void {
    this.getProfile()
  }

}
