import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  public books = [];
  constructor(private _bookservice:BooksService) { }

  ngOnInit() {
    this.books = this._bookservice.GetBooksDetails();
  }

}
