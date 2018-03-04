import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user.model';

@Injectable()
export class UserService {

    private url = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: Http, private client: HttpClient) { }

    list(): Observable<User[]> {
        return this.http
            .get(this.url)
            .map(response => response.json() as User[]);
    }

    list2(): Observable<User[]> {
        return this.client.get<User[]>(this.url);
    }

}
