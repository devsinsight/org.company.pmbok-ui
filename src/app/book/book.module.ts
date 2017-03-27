import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BookRouting } from 'app/book/book.routing';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterComponent } from './chapter/chapter.component';
import { BookService } from 'app/book/shared/book.service';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    BookRouting
  ],
  declarations: [
    ChapterListComponent,
    ChapterComponent
  ],
  providers: [BookService]
})
export class BookModule { }
