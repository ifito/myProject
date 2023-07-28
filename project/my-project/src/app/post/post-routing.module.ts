import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
    {
        path: 'forums',
        component: MainComponent
    },
    {
        path: 'add-post',
        component: NewPostComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }
