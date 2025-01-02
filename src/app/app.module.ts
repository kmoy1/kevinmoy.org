import { NgModule } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TopNavbarComponent } from './home/top-navbar/top-navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ProjectsComponent } from './base/projects/projects.component';
import { BlogComponent } from './base/blog/blog.component';
import { AboutComponent } from './base/about/about.component';
import { ProblemsComponent } from './base/problems/problems.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MdDisplayComponent } from './markdown/md-display/md-display.component';
import { ProblemMdDisplayComponent } from './markdown/problem-md-display/problem-md-display.component';
import { ArticleMdDisplayComponent } from './markdown/article-md-display/article-md-display.component';
import { NgxMathMdModule } from 'projects/ngx-math-md/src/public-api';
import { NgxIpynbModule } from 'projects/ngx-ipynb/src/public-api';
import { TestComponent } from './test/test.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';


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
    ArticleMdDisplayComponent,
    TestComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMathMdModule,
    NgxIpynbModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    })
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
