import { Component, inject } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ICategory } from '../../interfaces/ICategory';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: ICategory[] = []
  ApiService = inject(ApiService)

  constructor(private router: Router) { }
  ngOnInit() {
    const res = this.ApiService.getData('categories')
    this.categories = res

    const logado = this.ApiService.getData('logado')
    if (!logado) {
      this.router.navigate(['/'])
    }
  }


}
