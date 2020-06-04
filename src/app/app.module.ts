import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TestComponent } from './menu-bar/test/test.component';
import { HomePageComponent } from './menu-bar/home-page/home-page.component';
import { MemberListComponent } from './menu-bar/member-list/member-list.component';
import { MemberDetailComponent } from './menu-bar/member-list/member-detail/member-detail.component';
import { NewsListComponent } from './menu-bar/home-page/news-list/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MenuBarComponent, LoginPageComponent, TestComponent, HomePageComponent, MemberListComponent, MemberDetailComponent, NewsListComponent, NewsDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
