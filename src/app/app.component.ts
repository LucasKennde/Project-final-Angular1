import { Component, Renderer2 } from '@angular/core';
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
  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    const background = this.renderer.selectRootElement('.background', true);
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.urlAtual = event.url;
          console.log(this.urlAtual);

          if (this.urlAtual === '/signup') {
            this.renderer.addClass(background, 'signup');
          } else if (this.urlAtual === '/categories') {
            this.renderer.removeClass(background, 'signup');
            this.renderer.addClass(background, 'categories');
          } else {
            this.renderer.removeClass(background, 'categories');
            this.renderer.removeClass(background, 'signup');
          }
        }
      }
    );
  }
}
