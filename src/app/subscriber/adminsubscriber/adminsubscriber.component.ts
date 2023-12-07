import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SubscriberService, SubscribeResponse} from 'src/app/services/subscriber.service';

@Component({
  selector: 'app-adminsubscriber',
  templateUrl: './adminsubscriber.component.html',
  styleUrls: ['./adminsubscriber.component.css']
})
export class AdminsubscriberComponent {
  
  constructor(private auth:AuthenticationService, private subscribeService: SubscriberService) {}
  subscribes!: SubscribeResponse[];
  user:any;


  ngOnInit() {
    this.getSubscribeLists();
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
  getSubscribeLists(){
    this.subscribeService.getSubscribes().subscribe((res) =>{
      console.log(res);
      this.subscribes = res.subscribes
    });
  }


  deleteSubscribe(event:any,eventId:number){
      if(confirm('Are your sure you want to delete this data ?'))
      {
        event.target.innertext = "Deleting....";

        this.subscribeService.destorySubscribe(eventId).subscribe((res:any) => {
           this.getSubscribeLists();
           alert(res.message);
        });

      }
  }


}
