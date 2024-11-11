import { Component } from '@angular/core';
import { FormSignupComponent } from "../../components/form-signup/form-signup.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormSignupComponent, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
