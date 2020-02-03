import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { RegisterComponent } from './site/register/register.component';
import { LoginComponent } from './site/login/login.component';
import { HomeappComponent } from './products/homeapp/homeapp.component';
import { SuperUserComponent } from './site/super-user/super-user.component';
import { ModifyProductComponent } from './products/modify-product/modify-product.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { BillingComponent } from './products/billing/billing.component';
import { SummaryComponent } from './products/summary/summary.component';
import { AuthGuard } from './auth.guard';
import { PurchaseHistoryComponent } from './products/purchase-history/purchase-history.component';


const routes: Routes = [
  {path:'products',component: ProductComponent},
  {path:'homeapp',component: HomeappComponent, canActivate: [AuthGuard] },
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'pendingList',component: SuperUserComponent,canActivate: [AuthGuard] },
  {path:'modify/:id',component: ModifyProductComponent},
  {path:'userList',component: SuperUserComponent,canActivate: [AuthGuard]},
  {path:'addProduct',component:AddProductComponent},
  {path:'billing',component:BillingComponent,canActivate: [AuthGuard] },
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'app-summary', component:SummaryComponent,canActivate: [AuthGuard] },
  {path:'purchases', component:PurchaseHistoryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
