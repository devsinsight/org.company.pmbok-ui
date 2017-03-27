import { Component, OnInit } from '@angular/core';
import { BookService } from 'app/book/shared/book.service';
import { Observable } from 'rxjs/Observable';
import { Chapter } from 'app/book/shared/chapter.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  bookId: number;
  chapters: Observable<Chapter[]>;

  constructor(private service: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.bookId = +params['id'];
       this.chapters = this.service.getChaptersByBookId(this.bookId);
    });
  }

}