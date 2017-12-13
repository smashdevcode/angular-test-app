import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyTestComponent } from './my-test/my-test.component';
import { TestContentService } from './test-content.service';


@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent
  ],
  imports: [
    BrowserModule
    // ,
    // AppRoutingModule
  ],
  providers: [TestContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
