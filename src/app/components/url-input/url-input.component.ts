import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {AnimateModule} from "primeng/animate";


@Component({
  selector: 'app-url-input',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './url-input.component.html',
  styleUrl: './url-input.component.css'
})
export class UrlInputComponent {
  originalUrl: string
  loading: boolean;

  constructor() {
    this.originalUrl = '';
    this.loading = false;
  }

  async load() {
    this.loading = true;
  }

  async startURLShorteningProcess() {

  }
}
