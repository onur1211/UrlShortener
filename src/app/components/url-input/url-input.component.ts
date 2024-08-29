import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {AnimateModule} from "primeng/animate";
import { UrlShortenerService } from '../../services/url-shortener.service';
import { UrlManagerService } from '../../services/url-manager.service';
import { Logger } from '../../services/logger.service';


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
  urlShortener: UrlShortenerService;
  urlManager: UrlManagerService;
  logger: Logger;
shortenedUrl: any;

  constructor() {
    this.originalUrl = '';
    this.loading = false;
    this.logger = new Logger();
    this.urlManager = new UrlManagerService(this.logger)
    this.urlShortener = new UrlShortenerService(this.urlManager);

  }

  async load() {
    this.loading = true;
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=> resolve(), ms)).then(()=>console.log("fired"));
  }

  async startURLShorteningProcess() {
    const shortUrl = await this.urlShortener.execute(this.originalUrl);
    await this.delay(500);
    this.loading = false;
    this.shortenedUrl = shortUrl;
  }
}
