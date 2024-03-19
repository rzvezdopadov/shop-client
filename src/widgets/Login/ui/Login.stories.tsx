import { Story, type Meta, type StoryObj } from '@storybook/react';
import './../../../app/styles/index.scss';
import { Login } from './Login';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Flex } from 'antd';

const meta = {
    title: 'widgets/Login',
    component: Login,
    parameters: {
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: [],
    argTypes: {},
    decorators: [StoreDecorator],
} as Meta<typeof Login>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const decorator = (StoryComponent: Story) => {
    return (
        <Flex style={{ width: '1360px' }}>
            <StoryComponent />
        </Flex>
    );
};
export const Normal: StoryType = {
    args: {},
    decorators: [decorator],
};
