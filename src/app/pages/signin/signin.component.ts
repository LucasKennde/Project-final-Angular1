import { Component, inject } from '@angular/core';
import { FormSigninComponent } from "../../components/form-signin/form-signin.component";
import { Router, RouterModule } from '@angular/router';
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

  constructor(private router: Router) { }
  ngOnInit() {
    const data = this.ApiService.getData('games')
    if (!data) {
      this.ApiService.instalDB()
    } else {
      const logado = this.ApiService.getData('logado')
      if (logado) {
        this.router.navigate(['/categories'])
      }
    }

  }
}
