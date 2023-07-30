import matchers from '@testing-library/jest-dom/matchers';
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import { expect } from 'vitest';

expect.extend(matchers);
expect.extend({ toMatchImageSnapshot })