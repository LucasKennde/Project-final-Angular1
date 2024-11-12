import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './form-signup.component.html',
  styleUrl: './form-signup.component.css'
})
export class FormSignupComponent {

  formSignUp!: FormGroup
  ApiService = inject(ApiService)
  isLoading: boolean = false

  constructor(private router: Router) { }
  ngOnInit() {
    this.formSignUp = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    })
  }
  onSubmit() {
    if (this.formSignUp.get('password')?.value !== this.formSignUp.get('confirmPassword')?.value) {
      alert('As senhas não conferem')
      return
    }
    this.isLoading = true
    const newUser = {
      name: this.formSignUp.get('name')?.value,
      email: this.formSignUp.get('email')?.value,
      password: this.formSignUp.get('password')?.value
    }
    if (this.formSignUp.valid) {
      this.ApiService.postUsers('users', newUser)
      this.router.navigate(['/'])
    } else {
      alert('Preencha todos os campos')
      this.isLoading = false
    }





  }
}
