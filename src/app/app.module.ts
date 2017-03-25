import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'app/app.component';
import { AppRouting, routableComponents } from 'app/app.routing';
import { CommonService } from 'app/core/services/common.service';
import './rxjs-extensions';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRouting
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
