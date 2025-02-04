import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() menuSelecionado = new EventEmitter<string>();
  
  constructor(private router: Router) {}

  selecionarMenu(opcao: string) {
    this.menuSelecionado.emit(opcao);
  }

  }
