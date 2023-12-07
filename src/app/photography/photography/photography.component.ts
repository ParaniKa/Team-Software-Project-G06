import { Component } from '@angular/core';
import { PhotographyService, PhotographyResponse} from 'src/app/services/photography.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent {

  constructor(private photographyService: PhotographyService) {}

  photographys!: PhotographyResponse[];
  user:any;


  ngOnInit() {
    this.getPhotographyLists();
  }

  //refreshing the data
  getPhotographyLists(){
    this.photographyService.getPhotographys().subscribe((res) =>{
      console.log(res);
      this.photographys = res.photographys
    });
  }


  deletePhotography(event:any,eventId:number){
      if(confirm('Are your sure you want to delete this data ?'))
      {
        event.target.innertext = "Deleting....";

        this.photographyService.destoryPhotography(eventId).subscribe((res:any) => {
           this.getPhotographyLists();
           alert(res.message);
        });

      }
  }

}
