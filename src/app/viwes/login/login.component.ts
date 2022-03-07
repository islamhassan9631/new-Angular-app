import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameofserviceService } from 'src/app/services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:boolean = false
  constructor(private http:NameofserviceService, private router:Router) { }
  login(credentials:any){
    this.http.login(credentials).subscribe({
      next:(res:any)=>{
        localStorage.setItem('token',res.token)
        this.router.navigateByUrl('profile')
      },
      error:(httpError:any)=>{
     
        this.invalidLogin = true
      }
    })
  }
  changeLogin(){
    this.invalidLogin = false
  }

  ngOnInit(): void {
  }

}

