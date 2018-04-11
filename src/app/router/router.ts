import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = []

export const RootRouter = RouterModule.forRoot(
  appRoutes,
  // 路由追踪
  {enableTracing: true}
)
