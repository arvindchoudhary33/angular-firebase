import { Component, OnInit } from '@angular/core';
import { ServicesEgService } from '../services/services-eg.service';
@Component({
  selector: 'app-services-eg',
  templateUrl: './services-eg.component.html',
  styleUrls: ['./services-eg.component.css'],
})
export class ServicesEgComponent implements OnInit {
  commonInput?: any;
  numberOutput?: any;
  arrayOutput?: any[];
  stringOutput: string = '';
  constructor(private commonService: ServicesEgService) { }

  ngOnInit(): void { }

  prime() {
    this.numberOutput = '';
    this.arrayOutput = [];
    this.commonService.commonInput = this.commonInput;
    this.stringOutput = this.commonService.prime();
    this.commonInput = '';
  }

  armstrong() {
    this.numberOutput = '';
    this.arrayOutput = [];
    this.stringOutput = '';
    let sum = 0;
    let arm: number = parseInt(this.commonInput);
    let digits: number = this.commonInput.toString().length;
    let rem: number = 0,
      temp: number = 0;
    while (arm > 0) {
      rem = arm % 10;
      temp = temp + Math.pow(rem, digits);
      arm = Math.floor(arm / 10);
    }
    if (parseInt(this.commonInput) === temp) {
      this.stringOutput = 'amrstrong';
    } else {
      console.log(this.commonInput, sum);
      this.stringOutput = 'not armstrong';
    }
    this.commonInput = '';
  }
  fibonacci() {
    this.numberOutput = '';
    this.stringOutput = '';
    this.arrayOutput = [];
    let fibonacciSeries = [0, 1]
    for (let i = 1; i < this.commonInput; i++) {
      fibonacciSeries.push(fibonacciSeries[i] + fibonacciSeries[i - 1]);
    }
    console.log(fibonacciSeries);
    this.arrayOutput = fibonacciSeries
    this.commonInput = ''


  }
  factorial() {
    this.numberOutput = '';
    this.stringOutput = '';
    this.arrayOutput = [];
    this.commonService.commonInput = this.commonInput;
    this.numberOutput = this.commonService.factorial();
    this.commonInput = '';
  }
}
