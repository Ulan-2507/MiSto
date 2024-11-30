import type { Preview } from '@storybook/react';
import { AppDecorator } from '../src/shared/config/storybook';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [AppDecorator({})],
};

export default preview;
