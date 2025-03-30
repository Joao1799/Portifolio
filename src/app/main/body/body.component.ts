import { Component,Input, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [RouterModule,CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
  standalone: true
})
export class BodyComponent {
  @Input() menu: string = '';
  about:  boolean = false;
  contact:  boolean = false;
  skills:  boolean = false;
  work: boolean = false;
}
