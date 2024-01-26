import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pokemonName: string = "";

  constructor() {   
  }

  handleClick(value: any){
    console.log(value);
  }
}