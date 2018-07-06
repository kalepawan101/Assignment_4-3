import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  public books = [];
  constructor(private _bookservice:BooksService) { }

  ngOnInit() {
    this.books = this._bookservice.GetBooksDetails();
  }

}
