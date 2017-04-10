import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterRouting } from 'app/chapter/chapter.routing';
import { ChapterListComponent } from 'app/chapter/chapter-list/chapter-list.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ChapterService } from 'app/chapter/shared/chapter.service';


@NgModule({
  imports: [
    CommonModule,
    ChapterRouting
  ],
  declarations: [
    ChapterListComponent,
    ChapterComponent
],
  providers: [ChapterService]
})
export class ChapterModule { }