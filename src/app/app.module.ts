import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppRoute } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/list/user-list.component';
import { UserService } from './user/service/user.service';
import { UserPipe } from './user/pipe/user.pipe';
import { TodoListComponent } from './todo/list/todo-list.component';
import { TodoService } from './todo/service/todo.service';
import { ItemListComponent } from './item/list/item-list.component';
import { ItemService } from './item/service/item.service';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SampleComponent } from './sample/sample.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserListComponent,
        TodoListComponent,
        ItemListComponent,
        SandboxComponent,
        SampleComponent,
        UserPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoute, { useHash: false, preloadingStrategy: PreloadAllModules }),
    ],
    providers: [
        UserService,
        TodoService,
        ItemService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
