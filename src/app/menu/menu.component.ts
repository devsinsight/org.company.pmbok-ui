import { Component, OnInit } from '@angular/core';
import { MenuService } from 'app/menu/shared/menu.service';
import { Observable } from 'rxjs/Observable';
import { Book } from 'app/menu/shared/book.model';
import { Chapter } from 'app/menu/shared/chapter.model';


@Component({
  selector: 'div[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  books: Observable<Book[]>;
  chapters: Observable<Chapter[]>;
  bookTitle: string;
  bookId: number;

  constructor(private service: MenuService) {
    this.bookTitle = 'PM Books';
    this.bookId = 0;
  }

  ngOnInit() {
    this.books = this.service.getBooks();
  }

  loadBook(book) {
    this.bookTitle = book.name;
    this.bookId = book.id;
  }

}