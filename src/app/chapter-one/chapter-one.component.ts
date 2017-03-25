import { Component, OnInit } from '@angular/core';
import { ChapterOneService } from 'app/chapter-one/shared/chapter-one.service';

@Component({
  selector: 'app-chapter-one',
  templateUrl: './chapter-one.component.html',
  styleUrls: ['./chapter-one.component.css']
})
export class ChapterOneComponent implements OnInit {

  greetings: string;

  constructor(private chapterOneService: ChapterOneService) { }

  ngOnInit() {
    this.chapterOneService.getGreetings().subscribe(greetings => this.greetings = greetings._body);
  }

}