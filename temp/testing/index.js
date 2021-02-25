import chai from './import-wrappers/chai.js';
import './register-chai-plugins.js';

export {
  html,
  unsafeStatic,
  triggerBlurFor,
  triggerFocusFor,
  oneEvent,
  isIE,
  defineCE,
  aTimeout,
  nextFrame,
  litFixture,
  litFixtureSync,
  fixture,
  fixtureSync,
  fixtureCleanup,
  elementUpdated,
  waitUntil,
} from '@temp/testing-helpers';

// @ts-ignore
const { expect, should, assert } = chai;
export { expect, should, assert };
