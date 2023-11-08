export class StaticValueConstant {
    static get CurrentUserKey(): string {
        return StaticValueConstant._CurrentUserKey;
    }

    private static _CurrentUserKey: string = 'currentUser';
}
