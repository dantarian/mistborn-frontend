import { configure } from '@storybook/react';

require('typeface-roboto');

const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

