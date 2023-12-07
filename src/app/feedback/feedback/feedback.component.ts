import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service'; 

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  constructor(private feedbackService:FeedbackService){}

  name!: string
  email!: string
  message!: string
  mobilenumber!:any
  posting_date!:any

  errors: any = [];

  saveFeedback(){
    var inputData = {
      name:this.name,
      email:this.email,
      mobilenumber:this.mobilenumber,
      message:this.message,
      posting_date:this.posting_date,
    }

    this.feedbackService.saveFeedback(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert(res.message);
        this.name = '';
        this.email = '';
        this.mobilenumber = '';
        this.message = '';
        this.posting_date = '';
        

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })
  }



}
