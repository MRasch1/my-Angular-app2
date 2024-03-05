import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PokemonListComponent },
      { path: ':id', component: PokemonTemplateFormComponent },
    ],
  },
];

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  providers: [
    PokemonService
  ]

})
export class PokemonBaseModule {}
