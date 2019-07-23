

import { addDecorator, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

function loadStories() {
  const storyFiles = require.context('../stories', true, /\.stories\.js$/);
  storyFiles.keys().forEach(fileName => storyFiles(fileName));
}

configure(loadStories, module);
