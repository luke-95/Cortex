import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { CanDeactivateGuard }       from './can-deactivate-guard.service';
// import { AuthGuard }                from './auth-guard.service';
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AccountPageComponent } from './account-page/account-page.component';
import { SpacesTabsComponent } from './spaces-tabs-component/spaces-tabs-component.component';


const appRoutes:Routes = [
    {
        path:'account', component:AccountPageComponent
    },
    {
        path:'settings', component:SettingsComponent
    },
    {
        path:'spaces', component:SpacesTabsComponent
    },
    {
        path:'',
        redirectTo: 'settings',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
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