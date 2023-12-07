import { Component } from '@angular/core';
import { AuspiciousService } from 'src/app/services/auspicious.service'; 
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editauspicious',
  templateUrl: './editauspicious.component.html',
  styleUrls: ['./editauspicious.component.css']
})
export class EditauspiciousComponent {

  auspicioussId!: any;
  auspiciouss!: any;

  errors: any = [];

  constructor(private route: ActivatedRoute, private auspiciousService: AuspiciousService,private router:Router){

  }

  ngOnInit(){
    this.auspicioussId = this.route.snapshot.paramMap.get('id');
    //alert(this.eventId);

    this.auspiciousService.getAuspicious(this.auspicioussId).subscribe((res:any) => {
      console.log(res)
      this.auspiciouss = res.auspiciouss
  });
  }

  updateAuspicious(){
    var inputData = {
      auspicious_date:this.auspiciouss.auspicious_date,
      auspicious_day:this.auspiciouss.auspicious_day,
      auspicious_time_start:this.auspiciouss.auspicious_time_start,
      auspicious_time_end:this.auspiciouss.auspicious_time_end
    }
    this.auspiciousService.updateAuspicious(inputData,this.auspicioussId).subscribe({
      next:(res:any) => {
        this.router.navigate(['/auspicious/adminauspicious']);
        console.log(res);
        alert(res.message);
      },
      error: (err: any) => {
        console.log(err);
        this.errors = err.error.errors;
      }
    });
  }
}
