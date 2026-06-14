// Minimal ambient declarations to satisfy test TypeScript imports
// Some Angular packages expose ESM .mjs modules without bundled .d.ts
// Provide minimal module declarations so the test runner compiles.
declare module '@angular/core/testing' {
  export const TestBed: any;
  export type ComponentFixture<T = any> = any;
}

export {};
