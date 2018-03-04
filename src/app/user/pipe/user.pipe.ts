import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../model/user.model';

@Pipe({
    name: 'user'
})
export class UserPipe implements PipeTransform {

    transform(user: User, limit: number = 5): boolean {
        return user.username.length <= limit;
    }

}
