import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { news} from 'src/nwesin';


@Component({
  selector: 'app-viewnwes',
  templateUrl: './viewnwes.component.html',
  styleUrls: ['./viewnwes.component.css']
})
export class ViewnwesComponent implements OnInit {
  news:news[]=[]
  constructor(private newss:NewsService) { }
  getnewss(){
    this.newss.getnews().subscribe({
      next:(res:any)=>{
     
        
        this.news = res
      },
      error:(httpError:any)=>{
    
      }
    })
  }
  deletnews(id:any,i:number){
    this.newss.deletenews(id).subscribe({
      next:()=>{
        this.news.splice(i,1)
      }
    })
  }

  ngOnInit(): void {
    this.getnewss()
  }

}
