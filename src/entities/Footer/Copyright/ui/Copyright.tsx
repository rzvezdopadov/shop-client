'use client';
import { Flex, Image, Typography } from 'antd';
import img_pay1 from './../../../../assets/img/pay1.png';
import img_pay2 from './../../../../assets/img/pay2.png';
import img_pay3 from './../../../../assets/img/pay3.png';
import img_pay4 from './../../../../assets/img/pay4.png';
import img_pay5 from './../../../../assets/img/pay5.png';
import cls from './Copyrighting.module.scss';
import Link from 'next/link';

const linkArr = [
    { src: img_pay1.src, href: '/' },
    { src: img_pay2.src, href: '/' },
    { src: img_pay3.src, href: '/' },
    { src: img_pay4.src, href: '/' },
    { src: img_pay5.src, href: '/' },
];

export const Copyright = () => {
    return (
        <Flex className={cls.wrapper}>
            <Flex>
                <Typography.Text>© 2024</Typography.Text>
                <Typography.Text className={cls.name}>&nbsp;Rzvezdopadov&nbsp;</Typography.Text>
                <Typography.Text>. All Rights Reserved</Typography.Text>
            </Flex>
            <Flex>
                {linkArr.map((value) => (
                    <Flex className={cls.img_link_wrapper} key={value.src}>
                        <Image className={cls.img_link} alt="" preview={false} src={value.src} />
                    </Flex>
                ))}
            </Flex>
            <Flex>
                <Link className={cls.mobile_link} href={'/'}>
                    Mobile Site
                </Link>
            </Flex>
        </Flex>
    );
};
