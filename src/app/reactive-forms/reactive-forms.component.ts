import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  sportsData: any;
  jobPortalData: any;
  foodDeliveryData: any;

  constructor(private database: DatabaseService) {}

  jobPortal = new FormGroup({
    name: new FormControl('', []),
    qualification: new FormControl('', []),
    skills: new FormControl('', []),
    experience: new FormControl('', []),
  });

  foodDelivery = new FormGroup({
    name: new FormControl('', []),
    address: new FormControl('', []),
    phoneNumber: new FormControl('', []),
    email: new FormControl('', []),
    restaurants: new FormControl('', []),
    foodItems: new FormControl('', []),
    quantity: new FormControl('', []),
  });

  sportsItem = new FormGroup({
    name: new FormControl('', []),
    email: new FormControl('', []),
    sportType: new FormControl('', []),
    quantity: new FormControl('', []),
  });

  commonSubmit(data: any, collectionName: string) {
    this.database.add(data, collectionName);
    console.log(data, collectionName);
  }
  ngOnInit(): void {
    this.database.getAll('food-delivery').subscribe((value) => {
      this.foodDeliveryData = value;
    });

    this.database.getAll('job-portal').subscribe((value) => {
      this.jobPortalData = value;
    });
    this.database.getAll('sports-item').subscribe((value) => {
      this.sportsData = value;
    });
  }
}
