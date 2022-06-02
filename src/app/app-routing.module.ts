import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProblemsComponent } from './problems/problems.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ProblemMdDisplayComponent } from './problem-md-display/problem-md-display.component';
import { ArticleMdDisplayComponent } from './article-md-display/article-md-display.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'projects', component: ProjectsComponent },
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
