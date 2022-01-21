import { Component, Inject, OnInit } from '@angular/core';

import {Hero} from "../hero";
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.heroService.getHeros().subscribe((heroes) => {
      this.heroes = heroes;
    })
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.addMessage(`Selected hero ${hero.name}`);
  }
} 
