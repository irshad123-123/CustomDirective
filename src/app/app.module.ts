import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParaCssComponent } from './shared/component/para-css/para-css.component';
import { Highlighter1, Highlighter5 } from './shared/directive/csshighlighter.directive';
import { Highlighter2 } from './shared/directive/csshighlighter.directive';
import { Highlighter3 } from './shared/directive/csshighlighter.directive';
import { Highlighter4 } from './shared/directive/csshighlighter.directive';
import { LowercaseDirective } from './shared/directive/lowercase.directive';
import { UppercaseDirective } from './shared/directive/uppercase.directive';
import { ContentProjectionComponent } from './shared/component/content-projection/content-projection.component';
import { ContentMobileComponent } from './shared/component/content-mobile/content-mobile.component';
import { PostsApiComponent } from './shared/component/posts-api/posts-api.component';
import{HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    ParaCssComponent,
    Highlighter1,
    Highlighter2,
    Highlighter3,
    Highlighter4,
    Highlighter5,
    LowercaseDirective,
    UppercaseDirective,
    ContentProjectionComponent,
    ContentMobileComponent,
    PostsApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
