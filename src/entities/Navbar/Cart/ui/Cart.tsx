import { Flex, Image } from 'antd';
import mockImg from './../../../../assets/img/mock.jpg';
import cls from './Cart.module.scss';

export const Cart = () => {
    return (
        <Flex className={cls.wrapper}>
            <Flex style={{ position: 'relative' }}>
                <Image src={mockImg.src} alt="cart" height="40px" width="40px" preview={false} className={cls.image_wrapper}></Image>
                <Flex justify="center" align="center" className={cls.basket_value_wrapper}>
                    <span className={cls.basket_value}>5</span>
                </Flex>
            </Flex>
            <Flex vertical className={cls.cart_wrapper}>
                <span className={cls.cart_header}>CART</span>
                <span className={cls.cart_price}>$1,689.00</span>
            </Flex>
        </Flex>
    );
};
