import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'http',
    loadChildren: () => import('./core/http/http.module').then( m => m.HttpPageModule)
  },
  {
    path: 'default',
    loadChildren: () => import('./layout/default/default.module').then( m => m.DefaultPageModule)
  },
  {
    path: 'passport',
    loadChildren: () => import('./layout/passport/passport.module').then( m => m.PassportPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./routes/passport/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./routes/passport/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./routes/passport/shared/shared.module').then( m => m.SharedPageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./routes/passport/forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./routes/passport/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./routes/passport/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./shared/components/components.module').then( m => m.ComponentsPageModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./shared/directives/directives.module').then( m => m.DirectivesPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./routes/passport/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'discovery',
    loadChildren: () => import('./routes/passport/discovery/discovery.module').then( m => m.DiscoveryPageModule)
  },
  {
    path: 'moments',
    loadChildren: () => import('./routes/passport/moments/moments.module').then( m => m.MomentsPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./routes/passport/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'class',
    loadChildren: () => import('./routes/passport/class/class.module').then( m => m.ClassPageModule)
  },
  {
    path: 'sign',
    loadChildren: () => import('./routes/passport/sign/sign.module').then( m => m.SignPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
