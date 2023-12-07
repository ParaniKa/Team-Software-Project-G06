import { Component } from '@angular/core';
import { SubscriberService } from 'src/app/services/subscriber.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private subscribeService: SubscriberService){}

  email!: string
  errors: any = [];

  saveSubscribe(){
    var inputData = {
      email:this.email,
    }

    this.subscribeService.saveSubscribe(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert(res.message);
        this.email = '';

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })
  }


}
