import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css'],
})
export class TemplateDrivenFormsComponent implements OnInit {



  qualifications = ['msc', 'mca', 'btec', 'mba']
  areaOfInterest = ['web-dev', 'marketing', 'ai', 'ml', 'mobile-dev']
  constructor() { }

  ngOnInit(): void { }
  //
  // formData = {
  //   name: 'hi',
  // };
  availableWorkshop = ""
  workShops = [{ areaOfInterest: "ai", workshop: "AI based 2 day workshop" }, { areaOfInterest: "ml", workshop: "ML based" }]
  onFormSubmit(data: any) {
    console.log(data)
    for (let i = 0; i < this.workShops.length; i++) {
      if (data.areaOfInterest == this.workShops[i].areaOfInterest) {
        this.availableWorkshop = this.workShops[i].workshop
      }

    }
  }
}
