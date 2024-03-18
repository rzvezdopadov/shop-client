import { Flex } from 'antd';
import Link from 'next/link';
import React from 'react';
import cls from './NavbarMenu.module.scss';

interface SelectProps {
    href: string;
    label: string;
}

const SelectLocal = (props: SelectProps[]) => {
    return (
        <select className={cls.select}>
            {props.map((value, index) => (
                <option label={value.label} key={`${value}${index}`}>
                    <Link href={value.href}>{value.label}</Link>
                </option>
            ))}
        </select>
    );
};

const firstArr: SelectProps[] = [
    { label: 'HOMES', href: '/' },
    { label: 'HOMES1', href: '/' },
    { label: 'HOMES2', href: '/' },
];

const secondArr: SelectProps[] = [
    { label: 'PAGES', href: '/' },
    { label: 'PAGES1', href: '/' },
    { label: 'PAGES2', href: '/' },
];

const thirdArr: SelectProps[] = [
    { label: 'PRODUCTS', href: '/' },
    { label: 'PRODUCTS1', href: '/' },
    { label: 'PRODUCTS2', href: '/' },
];

export const NavbarMenu = () => {
    return (
        <Flex align="center" justify="center" className={cls.wrapper}>
            {SelectLocal(firstArr)}
            {SelectLocal(secondArr)}
            {SelectLocal(thirdArr)}
            <Link href={'/'} className={cls.link_additional}>
                CONTACT
            </Link>
        </Flex>
    );
};
