import { Menu, MenuProps } from 'antd';
import Link, { LinkProps } from 'next/link';
import { Image } from 'antd';

import React from 'react';
import star from './../../../assets/img/star.png';
import glass from './../../../assets/img/glass.png';
import basket from './../../../assets/img/basket.png';
import { ItemType } from 'antd/es/menu/hooks/useItems';

interface ILocalLinkProps extends LinkProps {
    title?: string;
    icon?: string;
    key: string;
}

const createMenuItem = (props: ILocalLinkProps): ItemType => {
    return {
        style: { padding: '0px 8px' },
        label: <Link href={props.href}>{props.icon ? <Image src={props.icon} width={30} preview={false} title={props.title} /> : props.title}</Link>,
        key: props.key,
    };
};

const itemsAuthUser: MenuProps['items'] = [
    createMenuItem({ key: '1', title: 'Товары', href: '/user/favorite', icon: star.src }),
    createMenuItem({ key: '2', title: 'Поиск', href: '/user/search', icon: glass.src }),
    createMenuItem({ key: '3', title: 'Корзина', href: '/user/shop', icon: basket.src }),
];

export const NavbarMenu = () => {
    return (
        <Menu
            defaultSelectedKeys={['1']}
            style={{ minWidth: 380, justifyContent: 'center', alignItems: 'center' }}
            mode="horizontal"
            theme="dark"
            triggerSubMenuAction="click"
            items={itemsAuthUser}
        ></Menu>
    );
};
