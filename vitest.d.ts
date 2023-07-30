import type { Assertion, AsymmetricMatchersContaining } from 'vitest'
import { type TestingLibraryMatchers } from '@testing-library/jest-dom/matchers.js'

interface CustomMatchers<R = unknown> {
  toMatchImageSnapshot(): R
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T>, TestingLibraryMatchers<T, void> {}
  interface AsymmetricMatchersContaining<T = any> extends CustomMatchers<T>, TestingLibraryMatchers<T, void> {}
}