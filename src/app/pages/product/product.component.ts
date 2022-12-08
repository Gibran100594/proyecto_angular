import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {

    this.getProducts()
    this.getProduct()
    this.ProductCreate()
    this.ProductUpdate()
    this.ProductDelete()


  }

getProducts(){
    return this.http.get("http://api.escuelajs.co/api/v1/products").subscribe
    (res=>{
    console.log(res)
    })
    }

getProduct(){
    return this.http.get('http://api.escuelajs.co/api/v1/products/11').subscribe(res=>{
  console.log(res)})
    }


ProductCreate(){
const product = {
  title:"Titulo",
  price:3500,
  description: "Motos Gibran Quiñonez",
  images:["ggggg"],
  categoryId:1
}
return this.http.post("http://api.escuelajs.co/api/v1/products", product).subscribe(res=>{
console.log(res)})
}

ProductUpdate(){
const product = {
title: "Titulo",
price:3500,
description:"Motos Gibran Quiñonez actualizado",
images:["ggggg"],
categoryId:1
}
return this.http.put("http://api.escuelajs.co/api/v1/products/11", product).subscribe(res=>{
console.log(res)})
}

ProductDelete(){
return this.http.delete("http://api.escuelajs.co/api/v1/products/7").subscribe
(res=>{console.log(res)})
}
}
