import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectComponent} from "./projects/project/project.component";
import {HomeComponent} from "./home/home.component";
import {ProjectDetailComponent} from "./projects/project-detail/project-detail.component";

const routes: Routes = [
    {path:'projects', component: ProjectComponent},
    {path:'projects/:id', component: ProjectDetailComponent},
    {path:'home', component: HomeComponent},
    {path:'**', redirectTo:'/home'},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}