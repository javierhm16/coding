import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { AboutComponent } from './components/pages/about/about.component';
import { JobListComponent } from './components/pages/job-list/job-list.component';
import { JobDetailsComponent } from './components/pages/job-details/job-details.component';
import { PostAJobComponent } from './components/pages/post-a-job/post-a-job.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CreateAccountComponent } from './components/pages/create-account/create-account.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeOneComponent,
    AboutComponent,
    JobListComponent,
    JobDetailsComponent,
    PostAJobComponent,
    LoginComponent,
    CreateAccountComponent,
    ErrorComponent,
    FaqComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
