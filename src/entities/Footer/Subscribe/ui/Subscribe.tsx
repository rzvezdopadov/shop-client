import { Flex, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import cls from './Subscribe.module.scss';
import Link from 'next/link';

export const Subscribe = () => {
    return (
        <Flex vertical className={cls.wrapper}>
            <Title level={5} className={cls.title}>
                SUBSCRIBE & GET <span className={cls.title_red}>10% OFF</span> FOR YOUR FIRST ORDER
            </Title>
            <Flex>
                <Input
                    className={cls.input}
                    placeholder="Enter your email address"
                    suffix={'SUBSCRIBE'}
                    styles={{ suffix: { color: '#1ABA1A', fontWeight: 'bold' } }}
                ></Input>
            </Flex>
            <Flex>
                <span className={cls.under_input}>By subscribing, you’re accepted the our&nbsp;</span>
                <Link className={cls.under_input_link} href={'/'}>
                    Policy
                </Link>
            </Flex>
        </Flex>
    );
};
