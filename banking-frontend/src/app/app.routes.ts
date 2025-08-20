import { Routes } from '@angular/router';
import { Home } from './feature/auth/home/home';
export const routes: Routes = [
    { component: Home, path: 'home' },
    { path: '**', redirectTo: 'home' }
];
