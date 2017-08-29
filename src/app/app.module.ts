import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StarWarsService } from 'app/star-wars.service';
import { LoggerService } from 'app/logger.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    StarWarsService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
