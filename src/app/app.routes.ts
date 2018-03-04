import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/list/user-list.component';
import { TodoListComponent } from './todo/list/todo-list.component';
import { ItemListComponent } from './item/list/item-list.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SampleComponent } from './sample/sample.component';

export const AppRoute: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UserListComponent },
    { path: 'todos', component: TodoListComponent },
    { path: 'items', component: ItemListComponent },
    { path: 'sandbox', component: SandboxComponent },
    { path: 'sample', component: SampleComponent },
];
