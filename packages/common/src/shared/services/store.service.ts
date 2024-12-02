import { ICommonStoreService, StoreSchema } from '@core/common/base';

export class StoreService implements ICommonStoreService {

    private readonly memory = new Map<keyof StoreSchema, string>();

    get<G extends keyof StoreSchema>(key: G): StoreSchema[G] {
        return this.memory.get(key)!;
    }

    has(key: keyof StoreSchema) {
        return this.memory.has(key);
    }

    remove(key: keyof StoreSchema) {
        this.memory.delete(key);
    }

    set<S extends keyof StoreSchema>(key: S, value: StoreSchema[S]) {
        this.memory.set(key, value);
    }
}
