import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {UrlInputComponent} from "../url-input/url-input.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    UrlInputComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
