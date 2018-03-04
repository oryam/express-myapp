import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    users: Observable<User[]>;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.users = this.userService.list2();
    }

}
