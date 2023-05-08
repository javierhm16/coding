import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
    { path: '', component: HomeOneComponent },
    { path: 'about', component: AboutComponent },
    { path: 'job-list', component: JobListComponent },
    { path: 'job-details', component: JobDetailsComponent },
    { path: 'post-a-job', component: PostAJobComponent },
    { path: 'login', component: LoginComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: '404', component: ErrorComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'contact', component: ContactComponent },
    // Here add new pages component

    { path: '**', component: ErrorComponent } // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }