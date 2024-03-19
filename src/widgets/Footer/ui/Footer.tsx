import { Flex } from 'antd';
import cls from './Footer.module.scss';
import { About, Copyright, Links, Subscribe } from '@/entities/Footer';

export const Footer = () => {
    return (
        <footer className={cls.wrapper}>
            <Flex vertical>
                <Flex vertical>
                    <Flex>
                        <About />
                        <Flex vertical>
                            <Links />
                            <Subscribe />
                        </Flex>
                    </Flex>
                    <hr className={cls.hr} />
                </Flex>
                <Copyright />
            </Flex>
        </footer>
    );
};
