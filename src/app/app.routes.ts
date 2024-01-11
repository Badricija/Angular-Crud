import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { ViewComponent } from './post/view/view.component';
import { ArtistComponent } from './post/artist/artist.component';
import { HomeComponent } from './post/home/home.component';

export const routes: Routes = [
    {path: 'post', redirectTo: 'post/home', pathMatch: 'full'},
    {path: 'post/index', component: IndexComponent},
    {path: 'post/create', component: CreateComponent},
    {path: 'post/artist', component: ArtistComponent},
    {path: 'post/:postId/edit', component: EditComponent},
    {path: 'post/:postId/view', component: ViewComponent},
    {path: 'post/home', component: HomeComponent},

];
