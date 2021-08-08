import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { create } from '@storybook/theming'
import store from '../src/store';
import { Provider } from 'react-redux';

export const parameters = {
  options: {
    theme: create({
        base: 'light',
        brandTitle: '주짓수 스쿨',
        brandImage: '',
        brandUrl: '#',
        fontBase: '"Open Sans", sans-serif',
    }),
    hierarchyRootSeparator: /\|/,
    panelPosition: 'right',
  },
  viewport: {
    viewports: {
      iphone8: {
        name: "iPhone 8",
        styles: {
          height: "667px",
          width: "375px",
        },
        type: "mobile"
      },
      ...INITIAL_VIEWPORTS,
    },
    defaultViewport: 'iphone8'
  },
  controls: {
    expanded: true
  },
}

import '@.storybook/storybook.scss';

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
]