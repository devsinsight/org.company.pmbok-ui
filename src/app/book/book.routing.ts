import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from 'app/book/book/book.component';
import { BookListComponent } from 'app/book/book-list/book-list.component';

const routes: Routes = [
  { path: '', component: BookListComponent, pathMatch: 'full' },
  { path: ':id', component: BookComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRouting { }
