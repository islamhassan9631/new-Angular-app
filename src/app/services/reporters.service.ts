import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportersService {

  url="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  editProfile(data:any){
    return this.http.patch(this.url + 'profile',data)
  }
  getProfile(){
    return this.http.get(this.url + 'profile')
  }
  addimge(img:any){

    return this.http.post(this.url+"avatar/",img)
  }
}
