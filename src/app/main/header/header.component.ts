import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() menuSelecionado = new EventEmitter<string>();
  menuSelecionadoAtual: string = 'About';

  constructor(private router: Router) {}

  selecionarMenu(opcao: string) {
    this.menuSelecionado.emit(opcao);
    this.menuSelecionadoAtual = opcao;  
    this.router.navigate([`/${opcao.toLowerCase()}`]); 
  }

  }
