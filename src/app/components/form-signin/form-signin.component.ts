import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-signin',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './form-signin.component.html',
  styleUrl: './form-signin.component.css'
})
export class FormSigninComponent {
  formSignIn!: FormGroup
  ApiService = inject(ApiService)
  isLoading: boolean = false
  constructor(private router: Router) { }

  ngOnInit() {
    this.formSignIn = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.formSignIn.value);
    this.isLoading = true
    try {
      const login = this.ApiService.postLoginUsers('users', this.formSignIn.value)
      if (login) {
        this.router.navigate(['/categories'])
      } else {
        alert('Email ou senha incorretos')
      }
    } catch (err) {
      console.log(err);
      this.isLoading = false
    }
    this.isLoading = false
  }
}
