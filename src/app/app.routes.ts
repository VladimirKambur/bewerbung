import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./booklet-cover/booklet-cover').then(m => m.BookletCover)
  },
  {
    path: 'cl',
    loadComponent: () => import('./cover-letter/cover-letter').then(m => m.CoverLetter)
  },
  {
    path: 'cv/:type',
    loadComponent: () => import('./cv/cv').then(m => m.CV)
  },
  {
    path: 'info/:type',
    loadComponent: () => import('./certificates/certificates').then(m => m.Certificates)
  },

];
