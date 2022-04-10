import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ProblemsComponent } from './problems/problems.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MdDisplayComponent } from './md-display/md-display.component';  
import { ProblemMdDisplayComponent } from './problem-md-display/problem-md-display.component';  


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    HomepageComponent,
    ProjectsComponent,
    BlogComponent,
    AboutComponent,
    ProblemsComponent,
    MdDisplayComponent,
    ProblemMdDisplayComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
