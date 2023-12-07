import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FeedbackService, FeedbackResponse } from 'src/app/services/feedback.service';


@Component({
  selector: 'app-adminfeedback',
  templateUrl: './adminfeedback.component.html',
  styleUrls: ['./adminfeedback.component.css']
})
export class AdminfeedbackComponent {


  constructor(private feedbackService: FeedbackService,private auth:AuthenticationService) {}
  user:any;
  feedbacks!: FeedbackResponse[];

  ngOnInit(): void {
    this.getFeedbackLists();
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

  getFeedbackLists(){
    this.feedbackService.getFeedbacks().subscribe((res) =>{
      console.log(res);
      this.feedbacks = res.feedbacks
    });
  }


  deleteFeedback(event:any,eventId:number){
      if(confirm('Are your sure you want to delete this data ?'))
      {
        event.target.innertext = "Deleting....";

        this.feedbackService.destoryFeedback(eventId).subscribe((res:any) => {
           this.getFeedbackLists();
           alert(res.message);
        });

      }
  }

}
