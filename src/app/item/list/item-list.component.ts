import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Item } from '../model/item.model';
import { SearchResult } from '../model/result.model';
import { ItemService } from '../service/item.service';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

    items$: Observable<Item[]>;

    constructor(private itemService: ItemService) { }

    ngOnInit() {
        this.items$ = this.itemService.list().map((data: SearchResult<Item>) => data.values);
    }

}
