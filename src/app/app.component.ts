import { Component } from '@angular/core';
import { NavigationEnd, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-final-dom';
  urlAtual: string = ''
  constructor(private router: Router) { }

  ngOnInit() {
    const background = document.querySelector('.background')
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.urlAtual = event.url
          console.log(this.urlAtual);


          if (this.urlAtual === '/signup') {
            background!.classList.add('signup')
          } else if (this.urlAtual === '/categories') {
            background!.classList.remove('signup')
            background!.classList.add('categories')
          } else {
            background!.classList.remove('categories')
            background!.classList.remove('signup')
          }
        }
      }
    )
  }
}
