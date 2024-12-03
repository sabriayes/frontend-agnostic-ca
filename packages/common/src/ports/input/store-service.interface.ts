export type StoreSchema = Record<'accessToken' | 'refreshToken', string>;

export interface IStoreService<T, K extends keyof T = keyof T> {

    set<S extends K>(key: S, value: T[S]): void;

    get<G extends K>(key: G): T[G];

    has(key: K): boolean;

    remove(key: K): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ICommonStoreService extends IStoreService<StoreSchema>{ }
