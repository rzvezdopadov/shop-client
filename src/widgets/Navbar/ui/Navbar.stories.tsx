import { Story, type Meta, type StoryObj } from '@storybook/react';
import './../../../app/styles/index.scss';
import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Flex } from 'antd';

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

type StoryType = StoryObj<typeof meta>;

const decorator = (StoryComponent: Story) => {
    return (
        <Flex style={{ width: '90vw' }}>
            <StoryComponent />
        </Flex>
    );
};
export const Normal: StoryType = {
    args: {},
    decorators: [decorator],
};
