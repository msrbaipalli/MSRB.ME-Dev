import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksWatchComponent } from './projects/stocks-watch/stocks-watch.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
{ path: '', component: InfoComponent },
{ path: 'home', component: InfoComponent },
{ path: 'stocks-watch', component: StocksWatchComponent },
{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }