import { Routes } from '@angular/router';
import { HomePages } from './pages/home-pages/home-pages';
import { UsersPages } from './pages/users-pages/users-pages';
import { SettingsPages } from './pages/settings-pages/settings-pages';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePages,
  },
  {
    path: 'users',
    component: UsersPages,
  },
  {
    path: 'settings',
    component: SettingsPages,
  },
];
