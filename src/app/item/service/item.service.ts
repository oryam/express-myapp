import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Item } from '../model/item.model';
import { SearchResult } from '../model/result.model';

@Injectable()
export class ItemService {

    private url = 'http://java-ws2-route-java.7e14.starter-us-west-2.openshiftapps.com/service/rest/item';

    constructor(private http: HttpClient) { }

    list(): Observable<SearchResult<Item>> {
        return this.http
            .get<SearchResult<Item>>(this.url);
    }

}
