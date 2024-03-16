import cls from './NavbarLogo.module.scss';
import logoNavBar from '../../../assets/img/logoNavBar.png';
import logoNameNavBar from '../../../assets/img/logoNameNavBar.svg';
import Link from 'next/link';
import { Image } from 'antd';

export const NavbarLogo = () => {
    return (
        <div className={cls.wrapper}>
            <Link className={cls.logoNavBar} href={'https://miss-you.ru'}>
                <Image className={cls.logoNavBar} src={logoNavBar.src} alt="logo" preview={false} height={40}></Image>
            </Link>
            <Image className={cls.logoNameNavBar} src={logoNameNavBar.src} alt="miss-you" preview={false} height={30}></Image>
        </div>
    );
};
