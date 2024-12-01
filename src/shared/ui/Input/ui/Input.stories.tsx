import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { DarkBgDecorator } from '@shared/config/storybook';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const light: Story = {
    args: {
        variant: 'light',
        placeholder: 'Enter your email',
    },
};

export const dark: Story = {
    args: {
        variant: 'dark',
        placeholder: 'Enter your email',
    },
    decorators: [DarkBgDecorator],
};

export const label: Story = {
    args: {
        variant: 'light',
        placeholder: 'Enter your email',
        label: 'email',
    },
};

export const error: Story = {
    args: {
        variant: 'light',
        placeholder: 'Enter your email',
        error: 'error',
    },
};
