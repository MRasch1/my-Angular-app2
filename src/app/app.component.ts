import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "basket of baby beavers";
  imgSrc: string ="https://cwhl.vet.cornell.edu/system/files/media/baby%20beavers%20%286%29.JPG"
  constructor() {   
  }
}