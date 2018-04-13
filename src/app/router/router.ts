import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent} from '../components/home/home.component';
import { DeviceComponent } from '../components/device/device.component';
import { EquipmentComponent } from '../components/equipment/equipment.component';
import { EquipmentchildComponent } from '../components/equipmentchild/equipmentchild.component';
import { MainMessageComponent} from '../components/main-message/main-message.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'device', component: DeviceComponent},
  {path: 'equipment', component: EquipmentComponent},
  {path: 'eChild', component: EquipmentchildComponent},
  {path: 'home', component: HomeComponent},
  {path: 'mainMessage', component: MainMessageComponent}
];
export const RootRouter = RouterModule.forRoot(
  appRoutes,
  {enableTracing: true}
  // 路由追踪
);
