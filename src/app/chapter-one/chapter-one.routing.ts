import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChapterOneComponent } from 'app/chapter-one/chapter-one.component';

const routes: Routes = [
  {
    path: '', component: ChapterOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterOneRouting { }
export const routableComponents = [ChapterOneComponent];