import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesEgService } from '../services/services-eg.service';

@Component({
  selector: 'app-fitness-club',
  templateUrl: './fitness-club.component.html',
  styleUrls: ['./fitness-club.component.css'],
})
export class FitnessClubComponent implements OnInit {
  constructor(private commonService: ServicesEgService) { }

  ngOnInit(): void { }

  output: any;
  fitnessClub = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    duration: new FormControl(''),
  });
  membershipCheck(membershipGroup: any) {
    this.output = this.commonService.membershipCheck(membershipGroup)
  }
}
