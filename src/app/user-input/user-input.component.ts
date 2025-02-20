import { Component, EventEmitter, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input-model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  investmentService = inject(InvestmentService);
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
 onSubmit() {

      this.investmentService.calculateInvestmentResults({
        initialInvestment : +this.enteredInitialInvestment(),
        duration : +this.enteredDuration(),
        expectedReturn : +this.enteredExpectedReturn(),
        annualInvestment : +this.enteredAnnualInvestment()
      });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');

 }
}
