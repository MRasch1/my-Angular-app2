import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'pikachu',
      type: 'electric',
      isCool: false,
      isStylish: true,
    },
    {
      id: 2,
      name: 'squirtle',
      type: 'water',
      isCool: true,
      isStylish: true,
    },
    {
      id: 3,
      name: 'charmander',
      type: 'fire',
      isCool: true,
      isStylish: false,
    },
  ];

  constructor() {

  }

  handleRemove(event: Pokemon){
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    })
  }

  ngOnInit(): void {

  }
}
