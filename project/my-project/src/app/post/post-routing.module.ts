import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ForumInfoComponent } from './forum-info/forum-info.component';
import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
    {
        path: 'forums',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: MainComponent
            },
            {
                path: ':themeId',
                component: ForumInfoComponent
            }
        ],
    },
    {
        path: 'add-post',
        component: NewPostComponent,
        canActivate: [AuthActivate],    
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }
