import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  imports: [FieldsetModule,CardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
