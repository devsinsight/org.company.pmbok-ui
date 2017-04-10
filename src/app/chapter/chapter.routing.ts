import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterListComponent } from 'app/chapter/chapter-list/chapter-list.component';
import { ChapterComponent } from 'app/chapter/chapter/chapter.component';

const routes: Routes = [
  { path: '', component: ChapterListComponent },
  { path: ':id', component: ChapterComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterRouting {}
