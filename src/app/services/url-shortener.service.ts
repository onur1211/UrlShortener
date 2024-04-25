import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  constructor() { }

  async execute(url: string): Promise<string> {
    return url;
  }
}
