import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalculateServices } from '../services/calculate-services';

@Component({
  selector: 'ab-form-calculator',
  templateUrl: './form-calculator.component.html',
  styleUrls: ['./form-calculator.component.css']
})
export class FormCalculatorComponent implements OnInit {

  public calculatorForm: FormGroup;
  public dataSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private CalculateServices: CalculateServices
  ) {
    this.calculatorForm = this.fb.group({
      location: ['', [Validators.required]],
      price: ['', [Validators.required]],
      interest: ['', [Validators.required]],
      mi: ['', [Validators.required]],
      insurance: ['', [Validators.required]],
      taxes: ['', [Validators.required]],
      loanTerm: ['', [Validators.required]],
      ltv: ['', [Validators.required]],
      loanType: ['', [Validators.required]],
      loanAmount: ['', [Validators.required]],
      maxPay: ['', [Validators.required]],
      hoa: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  get calculatorFormControls() { return this.calculatorForm.controls; }

  onFormSubmit() {
    try {
      debugger;
      const location = this.calculatorFormControls.location.value;
      const price = this.calculatorFormControls.price.value;
      const loanAmount = this.calculatorFormControls.loanAmount.value;
      const interest = this.calculatorFormControls.interest.value;
      const mi = this.calculatorFormControls.mi.value;
      const insurance = this.calculatorFormControls.insurance.value;
      const ltv = this.calculatorFormControls.ltv.value;
      const loanTerm = this.calculatorFormControls.loanTerm.value;
      const loanType = this.calculatorFormControls.loanType.value;
      const maxPay = this.calculatorFormControls.maxPay.value;
      const hoa = this.calculatorFormControls.hoa.value;
      const taxes = this.calculatorFormControls.taxes.value;

      const dataParamElement = {
        location: location,
        price: price,
        loanAmount: loanAmount,
        interest: interest,
        mi: mi,
        insurance: insurance,
        ltv: ltv,
        loanTerm: loanTerm,
        loanType: loanType,
        maxPay: maxPay,
        hoa: hoa,
        taxes: taxes
      };


      this.dataSubscription = this.CalculateServices.getCalculate(dataParamElement).pipe(
        map((CalculateElement) => {
          return {
            CalculateElement
          };
        })
      ).subscribe(result => {
        debugger;
        const datosCalculados = result.CalculateElement;
      });
    } catch (err) {
      console.log(err);
    }
  }

}
