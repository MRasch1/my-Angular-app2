import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemon: string;

  constructor() {
    this.pokemon ="";
  }

  ngOnInit(): void {
    console.log("ngOninitFired");
    this.pokemon = "";
  }


}
