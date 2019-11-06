import { Component } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  cars: any[] = [];
  selectedCar: any = {};
  
  constructor(
    public carServices: CarService
    ) {
      
    }
      
    ngOnInit() {
      this.carServices.getCars()
      .subscribe(
        (data) => {
          this.cars = data['vehicles'];
      },
      (error) => {
        console.log(error);
      }
      )
    }

    details(id){
      this.selectedCar = this.cars.filter((car)  => {
        return car.vehicleID === id
      })[0]
    }
}
