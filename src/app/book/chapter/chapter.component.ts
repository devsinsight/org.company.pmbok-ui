import { Component, OnInit } from '@angular/core';
import { BookService } from 'app/book/shared/book.service';
import { Observable } from 'rxjs/Observable';
import { Section } from 'app/book/shared/section.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  chapterId: number;
  sections: Observable<Section[]>;

  constructor(private service: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.chapterId = +params['id'];
       this.sections = this.service.getSectionByChapterId(this.chapterId);
    });
  }

}
