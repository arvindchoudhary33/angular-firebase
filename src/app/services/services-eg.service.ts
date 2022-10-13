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
}
