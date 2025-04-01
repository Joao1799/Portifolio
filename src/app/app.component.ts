import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./main/header/header.component";
import { BodyComponent } from "./main/body/body.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent,BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ofc-Portifolio';
  opcaoSelecionada: string = '';
  // @Output() menuSelecionado = new EventEmitter<string>();

  receberMenu(aba: string) {
    this.opcaoSelecionada = aba;  
  }
}
