import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'app/chapter/shared/chapter.service';
import { Observable } from 'rxjs/Observable';
import { Chapter } from 'app/chapter/shared/chapter.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  bookId: number;
  chapters: Observable<Chapter[]>;

  constructor(private service: ChapterService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.bookId = +params['id'];
       this.chapters = this.service.getChaptersByBookId(this.bookId);
    });
  }
}
