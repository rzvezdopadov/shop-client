'use client';
import cls from './Navbar.module.scss';
import { Header } from 'antd/es/layout/layout';
import { NavbarLogo } from '@/entities/NavbarLogo';
import { NavbarMenu } from '@/features/NavbarMenu';

export const Navbar = () => {
    return (
        <Header className={cls.navbar}>
            <NavbarLogo />
            <NavbarMenu />
        </Header>
    );
};
