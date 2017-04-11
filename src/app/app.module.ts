import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from 'app/app.component';
import { AppRouting, routableComponents } from 'app/app.routing';
import { CommonService } from 'app/core/services/common.service';
import { MenuService } from 'app/menu/shared/menu.service';
import './rxjs-extensions';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    MenuComponent,
    NavbarComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [CommonService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
