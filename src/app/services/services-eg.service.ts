import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesEgService {
  constructor() { }

  commonInput: any;

  // factorial, prime, fibonacci, armstrong

  factorial() {
    let fact: number = 1;
    for (let i = 1; i <= this.commonInput; i++) {
      fact = fact * i;
    }

    return fact;
  }

  prime() {
    for (let i = 2; i < this.commonInput; i++) {
      if (this.commonInput % i === 0) {
        return 'not prime';
      }
    }
    return 'prime';
  }
  fibonacci() {
    console.log('this is fibonacci');
    return this.commonInput;
  }

  armstrong() {
    console.log('this is armstrong');
    return this.commonInput;
  }

  calculateStudentResult(studentMarks: any) {
    let sum: number =
      Number(studentMarks.subjectOne) +
      Number(studentMarks.subjectTwo) +
      Number(studentMarks.subjectThree) +
      Number(studentMarks.subjectFour);
    let percentage = (sum / 400) * 100;
    if (percentage >= 75) {
      return `passed with distinction ${percentage}`;
    } else if (percentage >= 60 && percentage < 75) {
      return `passed with first class ${percentage}`;
    } else if (percentage < 60 && percentage >= 35) {
      return 'passed with second class';
    } else {
      return 'failed !';
    }
  }

  // fitness club methods
  membershipCheck(membershipInfo: any) {
    let duration = Number(membershipInfo.duration);
    if (duration === 3) {
      return 'You are a bronze member';
    } else if (duration === 6) {
      return 'you are a silver member';
    } else if (duration > 6) {
      return 'you are a gold member';
    } else if (duration < 6 && duration != 3) {
      return 'invalid duration';
    }
    return 'invalid input';
  }
}
