import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { TabsComponent } from 'app/tabs/tabs.component';
import { ListComponent } from 'app/list/list.component';
import { CreateCharacterComponent } from 'app/create-character/create-character.component';

const routes = [
  {
    path: 'characters',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':side', component: ListComponent }
    ]
  },
  { path: 'new-character', component: CreateCharacterComponent },
  { path: '**', redirectTo: '/characters' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
