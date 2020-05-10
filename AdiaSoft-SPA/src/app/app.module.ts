import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule, ModalModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
// import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';

// MDB Angular Pro
import { StepperModule, ToastModule, WavesModule } from 'ng-uikit-pro-standard';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeAgoPipe } from 'time-ago-pipe';
import { NgxEchartsModule } from 'ngx-echarts';
// import { SharedModule } from './shared/shared.module';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { registerLocaleData, CommonModule } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
registerLocaleData(fr);

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    TimeAgoPipe,
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    FormsModule,
    BsDropdownModule,
    TabsModule,
    BsDatepickerModule,
    PaginationModule,
    ButtonsModule,
    ModalModule,
    StepperModule,
    ToastModule.forRoot(),
    WavesModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forRoot(appRoutes),
    // NgxGalleryModule,
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      },
    }),
    NgxEchartsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
