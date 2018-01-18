import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

 @Input() name: string;
 @Input() price: string;
 @Input() imagePath: string;
 @Output() onBuyProduct: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  buyProduct() {
    this.onBuyProduct.emit(this.name);
  }

  ngOnInit() {
    setTimeout(() => {
      this.onBuyProduct.emit(this.name);
    }, 5000);
  }
}

