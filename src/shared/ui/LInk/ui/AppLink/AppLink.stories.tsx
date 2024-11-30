import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { DarkBgDecorator } from '@shared/config/storybook';

const meta = {
    title: 'shared/Link/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const clear: Story = {
    args: {
        children: 'about us',
        to: '/',
        variant: 'clear',
    },
};
export const underline: Story = {
    args: {
        children: 'about us',
        to: '/',
        variant: 'underline',
    },
};
export const pill: Story = {
    args: {
        children: 'Accessories',
        to: '/',
        variant: 'pill',
    },
    decorators: [DarkBgDecorator],
};
