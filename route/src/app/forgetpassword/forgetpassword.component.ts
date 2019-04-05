import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ForgetAccount } from '../forgetAccount';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  submitted:boolean=false;
 response: any ;
  constructor(private fb: FormBuilder,private route:Router,private userService: UserService) { }
  forgetForm: FormGroup;

  forgetAccount:ForgetAccount=new ForgetAccount();

  ngOnInit() {
    this.forgetForm=this.fb.group(
{
  email:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
  //password:['',[Validators.required,Validators.maxLength(15),Validators.minLength(6)]]

})
  }//ngOnInit() ends here


  onForget(){
    this.submitted=true
    console.log("in forget() method")
    console.log(this.forgetAccount)
    this.userService.retrievePassword(this.forgetAccount)
    .subscribe((response) =>{ 
      this.response=response
      console.log(this.response)});

  }

  onLoginPage(){

    this.route.navigateByUrl("login");

  }

  onHomePage(){
    this.route.navigateByUrl("/");
  }
}

/* onLogin(){
    this.submitted=true
    console.log("in login() method")
    console.log(this.loginAccount)
      this.userService.validateUser(this.loginAccount)
      .subscribe((response) =>{ 
        this.response=response
        console.log(this.response)});
      
      console.log(this.loginAccount)

      if(this.response){

      }
    //this.route.navigateByUrl("product");
     } */











/* submitted:boolean=false;
 response: any ;
  constructor(private fb: FormBuilder,private route:Router,private userService: UserService) { }
  loginForm: FormGroup;

  loginAccount:LoginAccount=new LoginAccount();
  userAccount:UserAccount=new UserAccount();
  ngOnInit() {
    this.loginForm=this.fb.group(
{
  email:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
  password:['',[Validators.required,Validators.maxLength(15),Validators.minLength(6)]]

})
  }
  onLogin(){
    this.submitted=true
    console.log("in login() method")
    console.log(this.loginAccount)
      this.userService.validateUser(this.loginAccount)
      .subscribe((response) =>{ 
        this.response=response
        console.log(this.response)});
      
      console.log(this.loginAccount)

      if(this.response){

      }
    //this.route.navigateByUrl("product");
     }
     onProduct():any{
     

      this.route.navigateByUrl("");
    

     }
     onLoginPage(){
       
           this.route.navigateByUrl("home");
     }
 */