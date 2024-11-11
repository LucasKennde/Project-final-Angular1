import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { IGame } from '../../interfaces/IGame';
import { FormAddGameComponent } from "../../components/form-add-game/form-add-game.component";
import { ModalServiceService } from '../../service/Modal/modal-service.service';
import { ICategory } from '../../interfaces/ICategory';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor, RouterModule, NgIf, FormAddGameComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  ApiService = inject(ApiService)
  categoryID: number = 0
  category: Partial<ICategory> = {}
  games: IGame[] = []
  modal: boolean = false
  modalService = inject(ModalServiceService);
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryID = this.route.snapshot.params['id']
    const dataCategory = this.ApiService.searchCategoryById(this.categoryID)
    this.category = dataCategory
    this.games = this.ApiService.searchGamesByCategoryId(this.categoryID)

    this.modalService.modalState$.subscribe(state => {
      this.modal = state;
    });
  }

  toggleModal() {
    this.modal = !this.modal
    this.modalService.setModalState(this.modal);
  }
}
