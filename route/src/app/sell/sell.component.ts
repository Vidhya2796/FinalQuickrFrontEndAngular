import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../productDetails';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  submitted:boolean=false;
  response:any;
 sellForm: FormGroup;
  productDetails:ProductDetails=new ProductDetails();
  constructor(private fb: FormBuilder,private route:Router,private userService: UserService) {}

  ngOnInit() {
    this.sellForm=this.fb.group(
      {
       /*  email:[''],
        password:[''] */
        productId:['',[Validators.required]],
        category:['',[Validators.required]],
        productBrand:['',[Validators.required]],
        productModel:['',[Validators.required]],
        color:[''],
        image:['',[Validators.required]],
        fuelType:['',[Validators.required]],
        yearOfRegistration:['',[Validators.required]],
        kmsDriven:['',[Validators.required]],
        location:['',[Validators.required]],
        description:[''],
        expectedSellingPrice:[''],
        sellerName:[''],
        sellerPhoneNumber:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[6-9]\\d{9}')]],
        sellerEmail:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')]]
      
      })
  }

  onSell(){
    this.submitted=true;
  console.log("in sell() method")
  console.log(this.productDetails)
  this.userService.sellProduct(this.productDetails)
      .subscribe((response) =>{ 
        this.response=response
        console.log(this.response)});
  }

}
