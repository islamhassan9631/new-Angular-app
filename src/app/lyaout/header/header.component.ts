import { Component, OnInit } from '@angular/core';
import { NameofserviceService } from 'src/app/services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http:NameofserviceService) { }
  logout(){
    this.http.logout().subscribe({
      next:()=>{
        localStorage.removeItem('token')
      },
      error:(httpError:any)=>{
    
      }
    })
  }

  get isLoggedIn(){
    let token = this.http.getToken()
    if(token){
      return true
    }
    return false
  }

  ngOnInit(): void {
  }

}
