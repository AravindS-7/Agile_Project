import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';
import { ProductComponent } from './products/product/product.component';
import { RegisterComponent } from './site/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './site/login/login.component';
import { HomeappComponent } from './products/homeapp/homeapp.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ModifyProductComponent } from './products/modify-product/modify-product.component';
import { SuperUserComponent } from './site/super-user/super-user.component';
import { BillingComponent } from './products/billing/billing.component';
import { SummaryComponent } from './products/summary/summary.component';
import { PurchaseHistoryComponent } from './products/purchase-history/purchase-history.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    RegisterComponent,
    LoginComponent,
    HomeappComponent,
    AddProductComponent,
    ModifyProductComponent,
    SuperUserComponent,
    BillingComponent,
    SummaryComponent,
    PurchaseHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
