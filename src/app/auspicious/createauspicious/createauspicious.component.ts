import { Component } from '@angular/core';
import { AuspiciousService } from 'src/app/services/auspicious.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-createauspicious',
  templateUrl: './createauspicious.component.html',
  styleUrls: ['./createauspicious.component.css']
})
export class CreateauspiciousComponent {

  constructor(private auspiciousService: AuspiciousService, private router:Router){}

  auspicious_date!: any
  auspicious_day!: string
  auspicious_time_start!: any
  auspicious_time_end!: any
  errors: any = [];

  saveAuspicious(){
    var inputData = {
      auspicious_date:this.auspicious_date,
      auspicious_day:this.auspicious_day,
      auspicious_time_start:this.auspicious_time_start,
      auspicious_time_end:this.auspicious_time_end
    }

    this.auspiciousService.saveAuspicious(inputData).subscribe({
      next: (res: any) => {
        this.router.navigate(['/auspicious/adminauspicious']);
        console.log(res, 'response');
        alert(res.message);
        this.auspicious_date = '';
        this.auspicious_day = '';
        this.auspicious_time_start = '';
        this.auspicious_time_end = '';

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })

}
}
