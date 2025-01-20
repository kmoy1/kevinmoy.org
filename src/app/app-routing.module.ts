import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ProjectsComponent } from './base/projects/projects.component';
import { ProblemsComponent } from './base/problems/problems.component';
import { BlogComponent } from './base/blog/blog.component';
import { AboutComponent } from './base/about/about.component';
import { ProblemMdDisplayComponent } from './markdown/problem-md-display/problem-md-display.component';
import { ArticleMdDisplayComponent } from './markdown/article-md-display/article-md-display.component';
import { TestComponent } from './test/test.component';
import { ProjectDemoComponent } from './project-demo/project-demo.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:project_id', component: ProjectDemoComponent },
  { path: 'problems', component: ProblemsComponent },
  { path: 'problems/:id', component: ProblemMdDisplayComponent},
  { path: 'articles/:id', component: ArticleMdDisplayComponent},
  { path: 'articles', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
