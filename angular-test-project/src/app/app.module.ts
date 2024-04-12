import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/components/login/login.component';
import { MyProfileModule } from 'src/components/my-profile/my-profile.module';
import { MenuComponent } from 'src/components/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyProfileComponent } from 'src/components/my-profile/my-profile.component';
import { HttpClientModule } from '@angular/common/http'; // Importă HttpClientModule
import { StoreModule } from '@ngrx/store'; // Importă StoreModule

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}), // Adaugă StoreModule.forRoot() în lista de importuri
    MyProfileModule,
    HttpClientModule, // Adaugă HttpClientModule în lista de importuri
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
