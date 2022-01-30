import { Component, OnInit, NgZone } from '@angular/core';

import {Hero} from "../hero";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) { return; }
    this.heroService.addHero({ name: heroName } as Hero).subscribe(
      hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe(
       (deleted: boolean) => {
        if (deleted) {
          this.heroes = this.heroes.filter(h => h !== hero);
        }
    });
  }
} 
