import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesEgService } from '../services/services-eg.service';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css'],
})
export class StudentMarksComponent implements OnInit {
  constructor(private commonService: ServicesEgService) { }

  ngOnInit(): void { }

  studentMarks = new FormGroup({
    name: new FormControl(''),
    class: new FormControl(''),
    subjectOne: new FormControl(''),
    subjectTwo: new FormControl(''),
    subjectThree: new FormControl(''),
    subjectFour: new FormControl(''),
  });

  output: any = '';
  calculate(studentMarks: any) {
    this.output = this.commonService.calculateStudentResult(studentMarks)
  }
}
