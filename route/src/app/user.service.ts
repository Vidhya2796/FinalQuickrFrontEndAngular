import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = "http://localhost:8888/consumer/quickr/users";
  private productBaseUrl="http://localhost:8888/productconsumer/quickr/product"
  
  constructor(private http: HttpClient) { }

  createUser(userAccount: Object): Observable<Object> {
    console.log(userAccount)
    return this.http.post(`${this.baseUrl}` + `/create`, userAccount);
  }

  validateUser(loginAccount: Object): Observable<Object> {
    console.log(loginAccount)
    return this.http.post(`${this.baseUrl}` + `/login`,loginAccount);
  }

//retrievePassword

retrievePassword(forgetAccount: Object): Observable<Object> {
  console.log(forgetAccount)
  return this.http.post(`${this.baseUrl}` + `/retrieve`,forgetAccount);
}

sellProduct(productDetails: Object): Observable<Object> {
  console.log(productDetails)
  return this.http.post(`${this.productBaseUrl}` + `/sell`,productDetails);

  }

  viewProduct(): Observable<Object> {
    console.log("view")
    return this.http.get(`${this.productBaseUrl}` + `/view`);
  
    }

/*     deleteProduct(pid:number):Observable<any>{
      console.log("In Service  "+pid)
  return this.http.delete(`${this.productBaseUrl}/${pid}`,{ responseType: 'text' });
    } */

    /* deleteCustomer(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    } */


  }


