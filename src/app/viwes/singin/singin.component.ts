import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameofserviceService } from 'src/app/services/home.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
 

  invalidEmail:boolean = false
  invalidAge:boolean = false
  invalidPassword:boolean = false
  msg:string = ''
  msgPassword:string = ''
  constructor(private http:NameofserviceService,private router:Router) { }
  signUp(credentials:any){
    this.http.signUp(credentials).subscribe({
      next:(res:any)=>{
      
        localStorage.setItem('token',res.token)
        this.router.navigateByUrl('profile')
      },
      error:(httpError:any)=>{
      
       if(httpError.error.code){
         this.invalidEmail = true
       }
       else if(httpError.error.errors.age)
       {
         this.invalidAge = true
         this.msg = httpError.error.errors.age.message
       }
       // password
       else if(httpError.error.errors.password)
       {
         this.invalidPassword = true
         this.msgPassword = httpError.error.errors.password.message
       }
       

       
      }
    })
  }
  changeEmail(){
    this.invalidEmail = false
  }
  changeAge(){
    this.invalidAge = false
  }
 
  changePassword(){
    this.invalidPassword = false
  }

  ngOnInit(): void {
  }

}
