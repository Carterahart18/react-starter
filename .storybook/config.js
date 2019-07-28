
// Replacement for babel polyfill as of babel 7.4.0
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { addDecorator, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
addDecorator(withA11y);

function loadStories() {
  const storyFiles = require.context('../stories', true, /\.stories\.js$/);
  storyFiles.keys().forEach(fileName => storyFiles(fileName));
}

configure(loadStories, module);
