import { UserPipe } from './user.pipe';

import { User } from '../model/user.model';

describe('UserPipe', () => {

    const pipe = new UserPipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('user is valid', () => {
        const userValid = new User();
        userValid.username = 'abcde';
        expect(pipe.transform(userValid)).toBeTruthy();
    });
    it('user is valid with custom limit', () => {
        const userValid = new User();
        userValid.username = 'abcdefghij';
        expect(pipe.transform(userValid, 10)).toBeTruthy();
    });

    it('user is on error', () => {
        const userError = new User();
        userError.username = 'abcdef';
        expect(pipe.transform(userError)).toBeFalsy();
    });

    it('user is on error with custom limit', () => {
        const userError = new User();
        userError.username = 'abcd';
        expect(pipe.transform(userError, 3)).toBeFalsy();
    });
});
