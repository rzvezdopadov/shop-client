import cls from './Login.module.scss';
import loginImg from './../../../assets/img/login.png';
import { Flex, Image } from 'antd';
import { LoginForm } from '@/features/AuthByEmail';

export const Login = () => {
    return (
        <Flex className={cls.wrapper}>
            <Image src={loginImg.src} alt="" preview={false}></Image>
            <LoginForm />
        </Flex>
    );
};
