import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRouting } from 'app/book/book.routing';
import { BookService } from 'app/book/shared/book.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';


@NgModule({
  imports: [
    CommonModule,
    BookRouting
  ],
  declarations: [
    BookListComponent,
    BookComponent
],
  providers: [BookService]
})
export class BookModule { }
