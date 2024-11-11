import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import categories from '../utils/categories'
import games from '../utils/games';
import { IGame } from '../interfaces/IGame';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private apiUrl = 'https://firstapi-j64y.onrender.com';

  constructor(private http: HttpClient) { }

  getData(key: string) {
    // return this.http.get(`${this.apiUrl}/${endpoint}`);
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  postData(key: string, object: any) {
    // return this.http.post(`${this.apiUrl}/${endpoint}`, data);
    const data = localStorage.setItem(`${key}`, JSON.stringify(object))

    return data
  }
  postUsers(key: string, object: any) {
    const users = this.getData(key)
    users.push(object)
    const data = localStorage.setItem(`${key}`, JSON.stringify(users))
    return data
  }
  postLoginUsers(key: string, object: any) {
    const { email, password } = object
    const users: Array<{ email: string, password: string }> = this.getData(key)
    const user = users.find(element => element.email === email && element.password === password)
    return user ? true : false
  }
  instalDB() {
    localStorage.setItem('categories', JSON.stringify(categories))
    localStorage.setItem('games', JSON.stringify(games))
  }

  searchGamesByCategoryId(categoryId: number) {
    const boardGames = this.getData('games')
    if (!boardGames) {
      console.error('No games data found');
      return [];
    }
    const filterGamesByCategory = boardGames.filter((game: IGame) => game.category.id == categoryId);
    console.log(filterGamesByCategory);
    return filterGamesByCategory;
  }
  findGameByGameId(gameId: number) {
    const boardGames = this.getData('games')
    if (!boardGames) {
      console.error('No games data found');
      return [];
    }
    const findGameById = boardGames.find((game: IGame) => game.id == gameId)
    return findGameById
  }
  searchCategoryById(id: number) {
    const data = this.getData('categories')
    const category = data.find((category: any) => category.id == id)
    return category
  }
}
