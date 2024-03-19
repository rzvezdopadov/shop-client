import { Flex, Input, Image } from 'antd';
import cls from './SearchCategories.module.scss';
import littleGlass from './../../../assets/img/littleGlass.png';

const categories = ['All Categories', 'Categorie1', 'Categorie2', 'Categorie3'];

export const SearchCategories = () => {
    return (
        <Flex>
            <select className={cls.select}>
                {categories.map((value) => (
                    <option title={value} key={value}>
                        {value}
                    </option>
                ))}
            </select>
            <Input className={cls.input} placeholder="Search anything..."></Input>
            <Flex className={cls.img_wrapper}>
                <Image src={littleGlass.src} alt="glass" preview={false}></Image>
            </Flex>
        </Flex>
    );
};
