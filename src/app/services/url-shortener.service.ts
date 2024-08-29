import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { UrlManagerService } from './url-manager.service';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  private readonly urlManager: UrlManagerService;

  constructor(urlManager: UrlManagerService) {
    this.urlManager = urlManager;
  }

  async execute(originalUrl: string): Promise<string> {
    const uid = uuidv4();
    const shortURL = `${window.location.origin}/${uid}`;
    const isSavedSuccessfully = await this.urlManager.saveUrl(originalUrl, shortURL);
    return shortURL;
  }
}
