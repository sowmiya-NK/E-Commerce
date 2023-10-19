import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoundpageComponent } from './components/pagenotfoundpage/pagenotfoundpage.component';
import { authGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'navbar', component: NavbarComponent },

  { path: '**', component: PagenotfoundpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
