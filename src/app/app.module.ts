import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { WeUiModule } from 'ngx-weui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RootRouter } from './router/router';
import { ElModule } from 'element-angular/release/element-angular.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessageComponent } from './components/message/message.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { EquipmentchildComponent } from './components/equipmentchild/equipmentchild.component';
import { DeviceComponent } from './components/device/device.component';
import { MainMessageComponent } from './components/main-message/main-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    MessageComponent,
    EquipmentComponent,
    EquipmentchildComponent,
    DeviceComponent,
    MainMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    RootRouter

    // WeUiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
