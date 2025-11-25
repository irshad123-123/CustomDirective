import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParaCssComponent } from './shared/component/para-css/para-css.component';
import { Highlighter1, Highlighter5 } from './shared/directive/css.highlighter.directive';
import { Highlighter2 } from './shared/directive/css.highlighter.directive';
import { Highlighter3 } from './shared/directive/css.highlighter.directive';
import { Highlighter4 } from './shared/directive/css.highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParaCssComponent,
    Highlighter1,
    Highlighter2,
    Highlighter3,
    Highlighter4,
    Highlighter5
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
