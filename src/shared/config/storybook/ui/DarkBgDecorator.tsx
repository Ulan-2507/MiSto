import { StoryFn } from '@storybook/react';

export const DarkBgDecorator = (Story: StoryFn) => (
    <div
        style={{
            width: '500px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#121212',
        }}
    >
        <Story />
    </div>
);
