import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { WeUiModule } from 'ngx-weui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RootRouter } from './router/router';
import { ElModule } from 'element-angular/release/element-angular.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootRouter,
    ElModule.forRoot()
    // WeUiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
