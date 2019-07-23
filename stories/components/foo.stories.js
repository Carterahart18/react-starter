import React from 'react';
import { storiesOf } from '@storybook/react';

import Component from 'src/components/foo';

storiesOf('Components/Foo', module).add('Standard', () => <Component />);
