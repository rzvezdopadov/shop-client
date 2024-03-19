'use client';
import { Flex, Typography, Image } from 'antd';
import cls from './About.module.scss';
import Title from 'antd/es/typography/Title';
import img_link from './../../../../assets/img/Link.png';
import img_link1 from './../../../../assets/img/Link-1.png';
import img_link2 from './../../../../assets/img/Link-2.png';
import img_link3 from './../../../../assets/img/Link-3.png';
import img_link4 from './../../../../assets/img/Link-4.png';
import { Language } from '@/features/Language';
import { Currency } from '@/features/Currency';

const linkArr = [
    { src: img_link.src, href: '/' },
    { src: img_link1.src, href: '/' },
    { src: img_link2.src, href: '/' },
    { src: img_link3.src, href: '/' },
    { src: img_link4.src, href: '/' },
];

export const About = () => {
    return (
        <Flex vertical>
            <Flex vertical>
                <Title className={cls.header} level={5}>
                    SWOO - 1ST NYC TECH ONLINE MARKET
                </Title>
                <Typography.Text>HOTLINE 24/7</Typography.Text>
                <Typography.Text className={cls.phone}>(123) 4567 89 01</Typography.Text>
                <Typography.Text>257 Thatcher Road St, Brooklyn, Manhattan,</Typography.Text>
                <Typography.Text>NY 10092</Typography.Text>
                <Typography.Text>contact@Swootechmart.com</Typography.Text>
                <Flex>
                    {linkArr.map((value) => (
                        <Flex className={cls.img_link_wrapper} key={value.src}>
                            <Image className={cls.img_link} alt="" preview={false} src={value.src} />
                        </Flex>
                    ))}
                </Flex>
            </Flex>
            <Flex className={cls.currency}>
                <Currency />|
                <Language />
            </Flex>
        </Flex>
    );
};
