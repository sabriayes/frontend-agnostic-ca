import 'vitest';

interface CustomMatchers<R = unknown> {
    toBeEmptyStr: () => R
}

declare module 'vitest' {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}
