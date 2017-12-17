import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { LoginService } from './service/login.service';
import { LocationService } from './service/location.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LocationComponent } from './component/location/location.component';
import { AuthGuard } from './guard/auth.guard';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [LoginService, LocationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
