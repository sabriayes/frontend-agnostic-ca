export type EnvironmentVars = {
    port: number;
    debugMode: boolean,
    appVersion: `${number}.${number}`,
    apiURL: `https://${string}`,
    maxRetryCount: 0 | 1 | 2 | 3 | 4 | 5,
}

export interface IConfigService<T, K extends keyof T = keyof T> {
    setVariables(envs: T): void;

    set<S extends K>(key: S, value: T[S]): void;

    getVariables(): T;

    get<G extends K>(key: G): T[G];
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ICommonConfigService extends IConfigService<EnvironmentVars> {
}
