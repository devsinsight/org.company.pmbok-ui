import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterListComponent } from 'app/book/chapter-list/chapter-list.component';
import { ChapterComponent } from 'app/book/chapter/chapter.component';

const routes: Routes = [
  { path: '', component: ChapterListComponent },
  { path: 'chapter/:id', component: ChapterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRouting {}
