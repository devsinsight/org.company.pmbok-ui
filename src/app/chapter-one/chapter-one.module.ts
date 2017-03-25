import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ChapterOneRouting, routableComponents } from './chapter-one.routing';
import { ChapterOneService } from 'app/chapter-one/shared/chapter-one.service';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ChapterOneRouting
  ],
  declarations: [routableComponents],
  providers:[ChapterOneService]
})
export class ChapterOneModule { }