import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  constructor() { }

  onSubmit(productForm: NgForm): void{
    if(productForm.valid)
    {
      console.log(productForm.value);
    }
  }
}
