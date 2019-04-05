import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { forEach } from '@angular/router/src/utils/collection';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any
  product:any
open:boolean=false
cart:boolean=false



  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.userService.viewProduct().subscribe((products)=>{
      this.products=products;
    /*  console.log(this.products); */
    },(error)=>{
         console.log(error)
    })


  }
  oneProductDetails(pid:number){
    this.open=true
    this.userService.viewProduct().subscribe((products)=>{
      this.products=products;
     
    },(error)=>{
         console.log(error)
    })
    
    for(this.product of this.products){
    
     if(this.product.productId==pid){
    
       var priductid=this.product.productId;
       var check=true;
       console.log("product details" + pid)
       break;
     }
    }


    console.log("product details" + pid)
  }



  addToCart(price:any,pid:number){
   this.cart=true
console.log(price+"      Product Id is  "+pid)

/* this.userService.deleteProduct(pid).subscribe((products)=>{
  this.products=products;
 
},(error)=>{
     console.log(error)
}) */
  }
}
