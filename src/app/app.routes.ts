import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { authGuard } from './service/guard/auth.guard';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    { path: '', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'categories/:id', component: CategoryComponent },
    { path: 'category/:category/:id', component: ProductComponent },
    { path: '**', component: Error404Component }
];
