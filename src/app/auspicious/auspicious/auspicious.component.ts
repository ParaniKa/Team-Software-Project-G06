import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuspiciousService,AuspiciousResponse } from 'src/app/services/auspicious.service'; 

@Component({
  selector: 'app-auspicious',
  templateUrl: './auspicious.component.html',
  styleUrls: ['./auspicious.component.css']
})
export class AuspiciousComponent {

  constructor(private auth:AuthenticationService,private auspiciousService: AuspiciousService) {}

  user:any;
  auspiciouss!: AuspiciousResponse[];
  

  ngOnInit(): void {
    this.getAuspiciousLists();
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
  getAuspiciousLists(){
    this.auspiciousService.getAuspiciouss().subscribe((res) =>{
      console.log(res);
      this.auspiciouss = res.auspiciouss
    });
  }


  deleteAuspicious(auspicious:any,auspiciousId:number){
      if(confirm('Are your sure you want to delete this data ?'))
      {
        auspicious.target.innertext = "Deleting....";

        this.auspiciousService.destoryAuspicious(auspiciousId).subscribe((res:any) => {
           this.getAuspiciousLists();
           alert(res.message);
        });

      }
  }

}
