import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import categories from '../utils/categories'
import games from '../utils/games';
import { IGame } from '../interfaces/IGame';
import { ICategory } from '../interfaces/ICategory';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private apiUrl = 'https://firstapi-j64y.onrender.com';

  constructor(private http: HttpClient) { }

  isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  getData(key: string) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : false;
    } else {
      console.warn('localStorage não está disponível.');
      return false;
    }
  }
  postData(key: string, object: any) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(object));
    } else {
      console.warn('localStorage não está disponível.');
    }
  }

  postUsers(key: string, object: any) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const users = this.getData(key) || [];
      users.push(object);
      localStorage.setItem(key, JSON.stringify(users));
    } else {
      console.warn('localStorage não está disponível.');
    }
  }
  postLoginUsers(key: string, object: any) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const { email, password } = object
      const users: Array<{ email: string, password: string }> = this.getData(key)
      const user = users.find(element => element.email === email && element.password === password)
      return user ? true : false
    } else {
      console.warn('localStorage não está disponível.');
      return false

    }
  }
  instalDB() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('categories', JSON.stringify(categories))
      localStorage.setItem('games', JSON.stringify(games))
    } else {
      console.warn('localStorage não está disponível.');
    }
  }

  searchGamesByCategoryId(categoryId: number) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const boardGames = this.getData('games')
      if (!boardGames) {
        console.error('No games data found');
        return [];
      }
      const filterGamesByCategory = boardGames.filter((game: IGame) => game.category.id == categoryId);
      return filterGamesByCategory;
    } else {
      console.warn('localStorage não está disponível.');
    }
  }
  findGameByGameId(gameId: number) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const boardGames = this.getData('games')
      if (!boardGames) {
        console.error('No games data found');
        return [];
      }
      const findGameById = boardGames.find((game: IGame) => game.id == gameId)
      return findGameById
    } else {
      console.warn('localStorage não está disponível.');
    }
  }
  searchCategoryById(id: number) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const data = this.getData('categories')
      const category = data.find((category: ICategory) => category.id == id)
      return category
    } else {
      console.warn('localStorage não está disponível.');
    }
  }
  isLoggedIn(): boolean {
    return this.isLocalStorageAvailable() && !!localStorage.getItem('logado');
  }
  logout() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('logado')
    } else {
      console.warn('localStorage não está disponível.');
    }
  }
}
