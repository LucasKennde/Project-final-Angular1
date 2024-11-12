import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGame } from '../../interfaces/IGame';
import { ApiService } from '../../service/api.service';
import { NgIf } from '@angular/common';
import { FormEditGameComponent } from "../../components/form-edit-game/form-edit-game.component";
import { ModalServiceService } from '../../service/Modal/modal-service.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, FormEditGameComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  gameId: number = 0
  categoryId: number = 0
  game: Partial<IGame> = {}
  ApiService = inject(ApiService)
  DeleteId: number = 0
  modal: boolean = false
  modal2: boolean = false
  modalService = inject(ModalServiceService);
  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.gameId = this.route.snapshot.params['id']
    this.categoryId = this.route.snapshot.params['category']
    const dataGame = this.ApiService.findGameByGameId(+this.gameId)
    this.game = dataGame
  }

  deleteProduct(id: number) {
    const games = this.ApiService.getData('games')
    const productDeleted = games.filter((games: IGame) => games.id != id)
    const resultado = this.ApiService.postData('games', productDeleted)
    this.router.navigate([`/categories/${this.categoryId}`])
  }

  toggleModal() {
    this.modal = !this.modal
  }
  toggleModal2() {
    this.modal2 = !this.modal2
  }
}
