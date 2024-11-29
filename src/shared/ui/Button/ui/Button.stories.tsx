import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const light: Story = {
    args: {
        children: 'see all',
        variant: 'light',
    },
};
export const dark: Story = {
    args: {
        children: 'add to card',
        variant: 'dark',
    },
};
export const text: Story = {
    args: {
        children: 'see all',
        variant: 'text',
    },
};
export const clear: Story = {
    args: {
        children: 'see all',
        variant: 'clear',
    },
};
export const outline: Story = {
    args: {
        children: 'join us',
        variant: 'outline',
    },
    decorators: [
        Story => (
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
        ),
    ],
};
export const partial: Story = {
    args: {
        children: 'Accessories',
        variant: 'light',
        border: 'partial',
    },
};
export const round: Story = {
    args: {
        children: '>',
        variant: 'text',
        border: 'round',
    },
};
export const square: Story = {
    args: {
        children: 'xs',
        variant: 'light',
        square: true,
    },
};
export const capitalize: Story = {
    args: {
        children: 'clear all',
        variant: 'clear',
        capitalize: true,
    },
};
export const fullWidth: Story = {
    args: {
        children: 'see all',
        variant: 'light',
        fullWidth: true,
    },
    decorators: [
        Story => (
            <div
                style={{
                    width: '500px',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #121212',
                }}
            >
                <Story />
            </div>
        ),
    ],
};
