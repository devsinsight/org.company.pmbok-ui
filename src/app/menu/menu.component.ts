import { Component, OnInit } from '@angular/core';
import { MenuService } from 'app/menu/shared/menu.service';
import { Observable } from 'rxjs/Observable';
import { Book } from 'app/menu/shared/book.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  books: Observable<Book[]>;
  bookTitle: string;
  bookId: number;

  constructor(private service: MenuService) {
    this.bookTitle = 'PM Books';
    this.bookId = 0;
  }

  ngOnInit() {
    this.books = this.service.getBooks();
  }

  changeBook(book) {
    this.bookTitle = book.name;
    this.bookId = book.id;
  }

}