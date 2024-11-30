import type { Meta, StoryObj } from '@storybook/react';
import { SocilLink } from './SocilLink';
import LocationIcon from './location.svg';

const meta = {
    title: 'shared/Link/SocilLink',
    component: SocilLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SocilLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const transparent: Story = {
    args: {
        children: (
            <>
                <LocationIcon /> Ukraine, Kyiv,Khreshchatyk 1
            </>
        ),
        fill: 'transparent',
    },
};
export const white: Story = {
    args: {
        children: <LocationIcon />,
        fill: 'white',
    },
};
export const dark: Story = {
    args: {
        children: <LocationIcon />,
        fill: 'dark',
    },
};
