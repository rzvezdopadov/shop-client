import cls from './Register.module.scss';
import loginImg from './../../../assets/img/login.png';
import { Flex, Image } from 'antd';
import { RegistrationForm } from '@/features/Registration';

export const Register = () => {
    return (
        <Flex className={cls.wrapper}>
            <Image src={loginImg.src} alt="" preview={false}></Image>
            <RegistrationForm />
        </Flex>
    );
};
