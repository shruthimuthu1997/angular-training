import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogicComponent } from './logic/logic.component';
import { AlertComponent } from './alert/alert.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { UserviewComponent } from './users-view/users-view.component';
import { FormsComponent } from './forms/forms.component';
import { ShopComponent } from './shop/shop.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'logic',
    component: LogicComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'users/:id',
    component: UserviewComponent
  },
  {
    path: 'userview',
    component: UserviewComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'sidenav',
    component: SidenavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
