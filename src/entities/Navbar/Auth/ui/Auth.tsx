import { Flex, Image } from 'antd';
import mockImg from './../../../../assets/img/mock.jpg';
import Link from 'next/link';
import cls from './Auth.module.scss';

interface TImage {
    src?: string;
    key?: number | string;
    alt?: string;
}

const ImageLocal = (props: TImage) => {
    return (
        <Flex className={cls.image_wrapper} key={props.key}>
            <Image src={props.src} height="40px" width="40px" preview={false} alt={props.alt} className={cls.image}></Image>
        </Flex>
    );
};
const ImageArr = [{ src: mockImg.src }, { src: mockImg.src }, { src: mockImg.src }];

export const Auth = () => {
    return (
        <Flex align="center" className={cls.wrapper}>
            {ImageArr.map((value, index) => ImageLocal({ key: index, src: value.src }))}
            <Flex vertical className={cls.auth_widget_wrapper}>
                <Flex>
                    <span className={cls.header_inscription}>WELCOME</span>
                </Flex>
                <Flex className={cls.link_wrapper}>
                    <span>
                        <Link href={'/'}>LOG IN </Link>
                    </span>
                    <span>&nbsp;/&nbsp;</span>
                    <span>
                        <Link href={'/'}>REGISTER</Link>
                    </span>
                </Flex>
            </Flex>
        </Flex>
    );
};
