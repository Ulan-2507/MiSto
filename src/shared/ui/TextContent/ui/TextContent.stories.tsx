import type { Meta, StoryObj } from '@storybook/react';
import { TextContent } from './TextContent';

const meta = {
    title: 'shared/TextContent',
    component: TextContent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TextContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
    args: {
        title: 'Some Test Title',
        text: 'Some test text',
    },
};

export const error: Story = {
    args: {
        title: 'Some Test Title',
        text: 'Some test text',
        variant: 'error',
    },
};

export const small: Story = {
    args: {
        title: 'Some Test Title',
        text: 'Some test text',
        size: 's',
    },
};

export const normal: Story = {
    args: {
        title: 'Some Test Title',
        text: 'Some test text',
        size: 'm',
    },
};

export const big: Story = {
    args: {
        title: 'Some Test Title',
        text: 'Some test text',
        size: 'l',
    },
};

export const bold: Story = {
    args: {
        title: 'Some Test Title',
        text: 'Some test text',
        size: 'l',
        bold: true,
    },
};
