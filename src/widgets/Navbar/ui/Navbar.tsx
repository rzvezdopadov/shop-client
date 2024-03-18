'use client';
import cls from './Navbar.module.scss';
import { Header } from 'antd/es/layout/layout';
import { NavbarMenu } from '@/features/NavbarMenu';
import { About, Auth, Cart, Logo } from '@/entities/Navbar';
import { Flex } from 'antd';
import { Currency } from '@/features/Currency';
import { Language } from '@/features/Language';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <Header className={cls.navbar}>
            <Flex justify="space-between" align="start" style={{ width: '100%', paddingLeft: '30px', paddingRight: '30px' }}>
                <About />
                <Flex align="center" style={{ marginTop: '15px', lineHeight: '0px' }}>
                    <Flex align="center">
                        <Link href={'/'} style={{ marginRight: '20px', fontSize: '14px' }}>
                            Sell on Swoo
                        </Link>
                        <Link href={'/'} style={{ marginRight: '50px', fontSize: '14px' }}>
                            Order Tracki
                        </Link>
                    </Flex>
                    <Currency></Currency>
                    <span style={{ color: '#0003' }}>|</span>
                    <Language></Language>
                </Flex>
            </Flex>
            <Flex justify="space-between" align="center" style={{ width: '100%', padding: '15px' }}>
                <Logo />
                <NavbarMenu />
                <Auth />
                <Cart />
            </Flex>
        </Header>
    );
};
