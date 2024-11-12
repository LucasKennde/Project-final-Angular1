import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  ApiService = inject(ApiService)
  constructor(private router: Router) { }
  Logout() {
    this.ApiService.logout()
    this.router.navigate(['/'])
  }
}
