import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './core/auth/interceptors/auth.interceptor';
import {AuthModule} from './core/auth/auth.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomModalModule } from './core/modules/modal/custom-modal.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    CustomModalModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
