import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { CanDeactivateGuard }       from './can-deactivate-guard.service';
// import { AuthGuard }                from './auth-guard.service';
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AccountPageComponent } from './account-page/account-page.component';
import { DevicesComponent } from './devices/devices.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import { AuthGuard } from './auth-guard.service';

const appRoutes:Routes = [
    {
        path:'login', component:LoginComponent
    },
    {
        path:'home', 
        component:NavBarComponent,
        canActivate: [AuthGuard],
        children: [
            {
            path:'account', component:AccountPageComponent,
            },
            {
            path:'settings', component:SettingsComponent,
            },
            {
            path:'devices', component:DevicesComponent,
            },
        ]
    },
    {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
    },
    { 
        path: '**', component: PageNotFoundComponent 
    }
]

@NgModule({
imports: [
    RouterModule.forRoot(
    appRoutes,
    {
        // enableTracing: true, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategy,
    }
    ),
],
exports: [
    RouterModule
],
providers: [
    // CanDeactivateGuard,
    // SelectivePreloadingStrategy
]
})
export class AppRoutingModule { }