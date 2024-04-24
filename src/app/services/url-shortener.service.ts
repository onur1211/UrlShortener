import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  constructor() { }

  execute(url: string): string {
    return url;
  }
}
