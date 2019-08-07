import { Component, OnInit, HostListener } from '@angular/core';
import { JsonpClientBackend } from '@angular/common/http';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // @HostListener("click")onclick(){
  //   (<HTMLElement>event.deepPath.).style.visibility="visible";
  // }
products:string[];
categoryts:string[];
arr:number[];
  constructor() {
    this.products=["תמונה","תאור","מחיר"];
    this.categoryts=["category1","category2","category3"];
    this.arr=[1,2,3]; }
  ngOnInit() {
  }

}
