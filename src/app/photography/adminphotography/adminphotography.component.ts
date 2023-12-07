import { Component } from '@angular/core';
import { PhotographyService, PhotographyResponse} from 'src/app/services/photography.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-adminphotography',
  templateUrl: './adminphotography.component.html',
  styleUrls: ['./adminphotography.component.css']
})
export class AdminphotographyComponent {
  
constructor(private auth:AuthenticationService, private photographyService: PhotographyService) {}

  photographys!: PhotographyResponse[];
  user:any;


  ngOnInit() {
    this.getPhotographyLists();
    // Check status
    this.auth.status().subscribe((res)=>{
      console.log(res);
    })
    this.auth.user().subscribe((res)=>{
      this.user = res;
    }, (err) =>{
      console.log(err);
    })
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
