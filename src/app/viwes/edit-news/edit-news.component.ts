import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { news } from 'src/nwesin';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
file:any
  news:news = {}
  constructor(private newss:NewsService,private route:ActivatedRoute,private router:Router) { }

  id:string = this.route.snapshot.params['id']
  getSinglenews(){
    this.newss.getSinglenews(this.id).subscribe({
      next:(res:any)=>{
        this.news = res
      }
    })
  }

  updatenews( news:any){
    this.newss.updatenews(this.id, news).subscribe({
      next:()=>{
        this.router.navigateByUrl('viewnwes')
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
      this.newss.addimge(myData).subscribe(()=>{})}
    }
  ngOnInit(): void {
  }

}
