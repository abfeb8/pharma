import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quarterinfo } from './Quarterinfo';
import { InvestorsService } from './investors.service';
import { CheckcasingPipe } from './checkcasing.pipe';
@Component({
  selector: 'app-investors',
  // templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit {
  quaterForm!: FormGroup;
  quaterDetails!: Quarterinfo;
  showTable: boolean = false;
  selectedQDetails!: string;
  errorMessage: string = "Only the above mention quater details are currently available";
  showError: boolean = false;

  //Inject the FormBuilder and investorsService, InvestorsService and CheckcasingPipe objects to the constructor
  constructor(
    private formBuilder: FormBuilder,
    private investorService: InvestorsService,
    checkCasePipe: CheckcasingPipe) { }

  ngOnInit() {
    //Initialize the variable quaterForm with a FormBuilder group method containing the below mentioned form control.
    //quater: required validation
    //fyear: required validation
    this.quaterForm = this.formBuilder.group({
      quater: ["", Validators.required],
      fyear: ["", Validators.required, Validators.email]
    })
  }

  //Implement getQDetails method that takes in value from input field and display the details of the quater asked for
  getQDetails() {
    //initialize selectedQDetails to the call of the customPipe transform method to convert quater in uppercase and then combine the quater and year entered
    this.selectedQDetails = new CheckcasingPipe().
      transform(this.quaterForm.value['quater'], this.quaterForm.value['fyear']);

    //implement the call to getQDetails() of investorsService that will filter the detail of the selected quater and financial year, if specified quater is not available show corresponding errorMessage
    let check: boolean = false;
    this.investorService.getQDetails().subscribe(quatersArray => quatersArray.forEach(quater => {
      if (quater.quater === this.selectedQDetails) {
        this.quaterDetails = <Quarterinfo>quater;
        console.log(this.quaterDetails.result);
        check = true
      }
      if (!check) {
        this.showError = true;
      } else {
        this.showError = false;
      }
    }), () => this.showError = true, () => this.showTable = true);
  }
}
