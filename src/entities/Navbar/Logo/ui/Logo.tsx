import { Flex, Image } from 'antd';
import logo from './../../../../assets/img/logo.png';

export const Logo = () => {
    return (
        <Flex>
            <Image src={logo.src} alt="logo" preview={false}></Image>
        </Flex>
    );
};
