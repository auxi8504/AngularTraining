import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  productsList = [
  {
    name: 'Foco mágico',
    price: 200,
    imagePath: '/../assets/foco.jpg'
  },
  {
    name: 'Cámara',
    price: 30000,
    imagePath: '/../assets/camara.jpg'
  },
  {
    name: 'Computadora',
    price: 500,
    imagePath: '/../assets/compu.jpg'
  }
  ];


  buyProduct(message: string) {
    console.warn(message);
  }
}

