import { Component, inject } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ModalServiceService } from '../../service/Modal/modal-service.service';
import { ICategory } from '../../interfaces/ICategory';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { IGame } from '../../interfaces/IGame';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-edit-game',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './form-edit-game.component.html',
  styleUrl: './form-edit-game.component.css'
})
export class FormEditGameComponent {
  game: Partial<IGame> = {}
  ApiService = inject(ApiService)
  modalService = inject(ModalServiceService);
  gameId: number = 0
  categories: ICategory[] = []
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.categories = this.ApiService.getData('categories')
    this.gameId = this.route.snapshot.params['id']
    const dataGame = this.ApiService.findGameByGameId(+this.gameId)
    this.game = dataGame
  }
  onSubmit() {
    const games = this.ApiService.getData('games');
    const gameIndex = games.findIndex((game: IGame) => game.id === this.game.id);
    if (gameIndex !== -1) {
      games[gameIndex] = { ...games[gameIndex], ...this.game };
    } else {
      games.push(this.game);
    }
    this.ApiService.postData('games', games);
    this.router.navigate([`/categories/${this.game.category?.id}`])

  }
}
