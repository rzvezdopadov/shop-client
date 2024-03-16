import { type Meta, type StoryObj } from '@storybook/react';
import './../../../app/styles/index.scss';
import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [StoreDecorator],
} as Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
