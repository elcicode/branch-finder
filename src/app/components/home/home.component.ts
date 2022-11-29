import { Component } from '@angular/core';
import { HttpsucursalService } from 'src/app/services/httpsucursal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  results: any;

  constructor(private http: HttpsucursalService) {}

  ngOnInit(): void {}

  ngAfterViewInit (){
    // this.getSucursalId();
  }


  getSucursalId(event: any){
    const id = event.target.value;

    this.http.getSucursales(id)
    .subscribe(res => {
        this.results = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
