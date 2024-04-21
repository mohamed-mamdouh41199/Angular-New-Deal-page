import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule}  from 'primeng/button';
import { ChipsModule  } from 'primeng/chips';
import { NewDealComponent } from './new-deal/new-deal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ButtonModule,
    ChipsModule,
    NewDealComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'job-task';
}
