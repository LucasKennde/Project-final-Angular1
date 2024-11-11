import { Component, inject, Inject } from '@angular/core';
import { ICategory } from '../../interfaces/ICategory';
import { ApiService } from '../../service/api.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalServiceService } from '../../service/Modal/modal-service.service';

@Component({
  selector: 'app-form-add-game',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule,],
  templateUrl: './form-add-game.component.html',
  styleUrl: './form-add-game.component.css'
})
export class FormAddGameComponent {
  name: string = ''
  title: string = ''
  description: string = ''
  image: string = ''
  categories: ICategory[] = []
  price: number = 0
  stock: number = 0
  ApiService = inject(ApiService)
  modalService = inject(ModalServiceService);
  ngOnInit() {
    this.categories = this.ApiService.getData('categories')
  }
  onSubmit() {
    const games = this.ApiService.getData('games')
    const newGame = {
      name: this.name,
      title: this.title,
      description: this.description,
      image: this.image,
      category: this.ApiService.searchCategoryById(+this.categories),
      price: +this.price,
      stock: +this.stock
    }
    if (newGame) {

      games.push({ id: games.length, ...newGame })
      this.ApiService.postData('games', games)
      this.modalService.setModalState(false);
    } else {
      alert("Todos os campos são necessarios")
    }
  }
}
