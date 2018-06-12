// import { NgModule }             from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { AccountPageComponent } from '../account-page/account-page.component';
// import { SettingsComponent } from '../settings/settings.component';
// import { DevicesComponent } from '../spaces-tabs-component/spaces-tabs-component.component';
// import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


// const navBarRoutes:Routes = [
//     {
//       path:'account', component:AccountPageComponent,
//       outlet: 'content'
//     },
//     {
//       path:'settings', component:SettingsComponent,
//       outlet: 'content'
//     },
//     {
//       path:'devices', component:SpacesTabsComponent,
//       outlet: 'content'
//     },
//     {
//       path:'',
//       redirectTo: 'devices',
//       pathMatch: 'full'
//     },
//     { path: '**', component: PageNotFoundComponent }
//   ]
  
//   @NgModule({
//     imports: [
//       RouterModule.forChild(
//         navBarRoutes
//         // { enableTracing: true } // <-- debugging purposes only
//       )
//     ],
//     exports: [
//       RouterModule
//     ]
//   })
//   export class NavBarRoutingModule {}