import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Hero} from "./hero";
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    return new Observable<Hero[]>((subscriber) => {
      subscriber.next(HEROES);
      subscriber.complete();
      this.messageService.addMessage("Successfully fetched heroes!");
    });
    // Tutorial does the following which is way easier:
    // import {of} from 'rxjs'
    // const heroes = of(HEROES);
    // return heroes;
  }
}
