import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { BodyComponent } from "./app/main/body/body.component";
import { HeaderComponent } from "./app/main/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<div @enter> 
    <app-header> </app-header>
    <app-body> </app-body>
  </div>` ,
  imports: [BodyComponent, HeaderComponent],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({ opacity: 0, scale:0.7 }),
        animate('400ms ease-in', style({ opacity: 1,scale: 1})),
      ]),
    ]),
  ],
})

export class App{

}


setTimeout(() => {
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
}, 3000);