import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-addnwes',
  templateUrl: './addnwes.component.html',
  styleUrls: ['./addnwes.component.css']
})
export class AddnwesComponent implements OnInit {

  constructor(private fb:FormBuilder,private news:NewsService,private router:Router) { }
file:any
  newsForm = this.fb.group({
    title:['',Validators.required],
    description:['',Validators.required],
    completed:[false],
    image:[]
  })

  addnews(news:any){
   
    const myData=new FormData()
    myData.append("image",this.file[0]),
    myData.append(" title",news.title),
    myData.append("description",news.description),
    myData.append("completed",news.completed),
    this.news.addnews(myData).subscribe({
      next:()=>{
        this.router.navigateByUrl('viewnwes')
      }
    })
  }
  handelupload(event:any){
    this.file=event.target.files
    }

  get myValues(){
    return this.newsForm.controls
  }

  ngOnInit(): void {
  }

}
