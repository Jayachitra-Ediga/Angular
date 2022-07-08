import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { employeeData } from './employeeData';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DummyApiService {
  // "http://dummy.restapiexample.com/api/v1/employee/1";
  // "http://jsonplaceholder.typicode.com/posts";

  url="http://localhost:3000/employees/";

  constructor(private httpClient: HttpClient) {
   }
   getEmployeeData():Observable<employeeData[]> {
 


    return this.httpClient.get<employeeData[]>(this.url).pipe(catchError(this.errorHandler))
    

   }
   errorHandler(error: HttpErrorResponse){
     return throwError(error.message || "unknown server error")

   }
   addEmployeeData(data:employeeData):Observable<any>{
     
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(data);
 

    return this.httpClient.post(this.url,body,{'headers':headers})
    
   }
   updateEmplyoyeeData(data:employeeData):Observable<any>{
     debugger
     let   url="http://localhost:3000/employees/1";
     console.log(data)

     return this.httpClient.put(url,data)

   }
   deleteEmplyoyeeData(data:any):Observable<any>{
    debugger
    let   url=`http://localhost:3000/employees/${data}`;
    console.log(data)

    return this.httpClient.delete(url)

  }

}
