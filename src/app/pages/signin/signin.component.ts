import { Component, inject } from '@angular/core';
import { FormSigninComponent } from "../../components/form-signin/form-signin.component";
import { RouterModule } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormSigninComponent, RouterModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  ApiService = inject(ApiService)

  ngOnInit() {
    this.ApiService.instalDB()
  }
}
