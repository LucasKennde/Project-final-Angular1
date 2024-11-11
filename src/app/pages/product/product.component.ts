import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from '../../interfaces/IGame';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  gameId: number = 0
  game: Partial<IGame> = {}
  ApiService = inject(ApiService)
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.gameId = this.route.snapshot.params['id']
    const dataGame = this.ApiService.findGameByGameId(+this.gameId)
    this.game = dataGame
    console.log(this.game);

  }
}
