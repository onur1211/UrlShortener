import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UrlManagerService {

  private readonly logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
   }

  async saveUrl(originalUrl: string, shortURL: string): Promise<boolean> {

    try {
      localStorage.setItem(shortURL, originalUrl);
      return true;
    } catch (error) {
      this.logger.error(error);
      return false; 
    }
    
  }

  async getOriginalUrl(shortURL: string): Promise<any> {
    return localStorage.getItem(shortURL);
  }
}
