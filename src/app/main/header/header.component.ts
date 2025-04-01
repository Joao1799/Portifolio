import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() menuSelecionado = new EventEmitter<string>();
  menuSelecionadoAtual: string = 'About';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(filter(carregando => carregando instanceof NavigationEnd)).subscribe((carregou) => {
      const abas = carregou.url.split('/').filter(aba => aba);
      if (abas.length > 0) {
        this.menuSelecionadoAtual = abas[abas.length - 1];
      }
    });
  }

  selecionarMenu(opcao: string) {
    this.router.navigate([`/${opcao.toLowerCase()}`]); 
  }

  }
