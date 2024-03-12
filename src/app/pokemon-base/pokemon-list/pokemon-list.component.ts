import { AfterViewInit, Component, ContentChildren, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  pokemons!: Pokemon[];
  @ViewChildren('pokemonRef') pokemonRef!: ElementRef;
  @ViewChild('pokemonTh') pokemonTh!: ElementRef;
  @ContentChildren(PokemonDetailComponent) contentList!: any;

  constructor(private pokemonService: PokemonService) {

  }

  ngAfterContentinit(): void{

  }

  ngAfterViewInit(): void {
    console.log(this.pokemonTh);
    this.pokemonTh.nativeElement.innerText = "Pokemon Name";
  }

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    });
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data;
    });
  }
}
