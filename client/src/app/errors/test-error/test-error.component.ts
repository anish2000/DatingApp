import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent {

  baseUrl = 'https://localhost:5001/api/';
  constructor(private http : HttpClient){}
  validationError : string[] = [];


  get404Error()
  {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
      next : Response => console.log(Response),
      error : error => console.log(error)
      
    })
  }

  get400Error()
  {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe({
      next : Response => console.log(Response),
      error : error => console.log(error)
      
    })
  }

  get500Error()
  {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
      next : Response => console.log(Response),
      error : error => console.log(error)
      
    })
  }

  get401Error()
  {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe({
      next : Response => console.log(Response),
      error : error => console.log(error)
      
    })
  }

  get400ValidationError()
  {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe({
      next : Response => console.log(Response),
      error : error => {console.log(error);
        this.validationError = error;
      }
      
    })
  }
}
