import { Flex, Tag, Typography } from 'antd';
import cls from './About.module.scss';

export const About = () => {
    return (
        <Flex className={cls.wrapper}>
            <Tag className={cls.tag}>Hotline 24/7</Tag>
            <Typography.Text className={cls.phone}>(123) 4567 89 01</Typography.Text>
        </Flex>
    );
};
