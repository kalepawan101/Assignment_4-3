import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  GetBooksDetails()
  {
      return [
          {"Name":"C ", "Price":400, "Author":"ABC","No_of_Pages":500},
          {"Name":"C++", "Price":500, "Author":"PQR","No_of_Pages":450},
          {"Name":"Linux", "Price":600, "Author":"XYZ","No_of_Pages":756},
          {"Name":"WinSDK", "Price":900, "Author":"SSS","No_of_Pages":235},
      ];
  }

}
