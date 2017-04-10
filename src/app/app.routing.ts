import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { AppPageNotFoundComponent } from 'app/app.page-not-found';

const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', loadChildren: 'app/book/book.module#BookModule' },
  { path: 'chapters', loadChildren: 'app/chapter/chapter.module#ChapterModule' },
  { path: '**', pathMatch: 'full', component: AppPageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRouting { }
export const routableComponents = [HomeComponent, AppPageNotFoundComponent];
