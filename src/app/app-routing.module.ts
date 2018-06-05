import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { CanDeactivateGuard }       from './can-deactivate-guard.service';
// import { AuthGuard }                from './auth-guard.service';
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes:Routes = [
    {path:'', component:AppComponent},
    {path:'settings', component:SettingsComponent}
]

@NgModule({
imports: [
    RouterModule.forRoot(
    appRoutes,
    {
        enableTracing: true, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategy,
    }
    )
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