import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import location from './location.svg';

const meta = {
    title: 'shared/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const icon_14: Story = {
    args: { Svg: location, size: 14 },
};
export const icon_18: Story = {
    args: { Svg: location, size: 18 },
};
export const icon_22: Story = {
    args: { Svg: location, size: 22 },
};
export const icon_24: Story = {
    args: { Svg: location, size: 24 },
};
export const icon_40: Story = {
    args: { Svg: location, size: 40 },
};
