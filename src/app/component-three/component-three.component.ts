import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css']
})
export class ComponentThreeComponent implements OnInit {

  public books = [];
  constructor(private _bookservice:BooksService) { }

  ngOnInit() {
    this.books = this._bookservice.GetBooksDetails();
  }

}
