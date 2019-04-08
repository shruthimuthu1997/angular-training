import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { UsertableComponent } from './usertable/usertable.component';
import { ValidationComponent } from './validation/validation.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { LogicComponent } from './logic/logic.component';
import { UserviewComponent } from './users-view/users-view.component';
import { FormsComponent } from './forms/forms.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsdescComponent } from './productsdesc/productsdesc.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AlertComponent } from './alert/alert.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from './product-service.service';
import { UsersService } from './users.service';
import { TablewithactionsComponent } from './tablewithactions/tablewithactions.component';



@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    DashboardComponent,
    HeaderComponent,
    UsertableComponent,
    ValidationComponent,
    LoginComponent,
    UsersComponent,
    ProductsComponent,
    LogicComponent,
    UserviewComponent,
    FormsComponent,
    ShopComponent,
    ProductsdescComponent,
    SidenavComponent,
    AlertComponent,
    TablewithactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [ProductServiceService, UsersService],

  bootstrap: [AppComponent]
})
export class AppModule { }
