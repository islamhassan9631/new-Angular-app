import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NameofserviceService {
url="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  getpost(){
    return this.http.get(this.url)
  }
  signUp(credentials:any){
    return this.http.post(this.url + 'reporters',credentials)
  }
  getSinglePost(id:string){
   return this.http.get(this.url+id)
  }
  // addpost(post:posts){
  //   return this.http.post(this.url,post)
  // }
  login(credentials:any){
    return this.http.post(this.url + 'login',credentials)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logout(){
    return this.http.delete(this.url+'logout')
  }
  addimge(img:any){

    return this.http.post(this.url+"news/",img)
  }

}
