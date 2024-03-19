import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';
import cls from './Links.module.scss';

interface Link {
    title: string;
    href: string;
}

interface LinkBlock {
    header: string;
    data: Link[];
}

const categories: Link[] = [
    { title: 'Laptops', href: '/' },
    { title: 'PC & Computers', href: '/' },
    { title: 'Cell Phones', href: '/' },
    { title: 'Tablets', href: '/' },
    { title: 'Gaming & VR', href: '/' },
    { title: 'Networks', href: '/' },
    { title: 'Cameras', href: '/' },
    { title: 'Sounds', href: '/' },
    { title: 'Office', href: '/' },
];
const company: Link[] = [
    { title: 'About Swoo', href: '/' },
    { title: 'Contact', href: '/' },
    { title: 'Career', href: '/' },
    { title: 'Blog', href: '/' },
    { title: 'Sitemap', href: '/' },
];
const help: Link[] = [
    { title: 'Customer Service', href: '/' },
    { title: 'Policy', href: '/' },
    { title: 'Terms', href: '/' },
    { title: 'Trach order', href: '/' },
    { title: 'FAQs', href: '/' },
    { title: 'My account', href: '/' },
    { title: 'Product Support', href: '/' },
];
const partner: Link[] = [
    { title: 'Become Seller', href: '/' },
    { title: 'Affilate', href: '/' },
    { title: 'Advertise', href: '/' },
    { title: 'Parthnership', href: '/' },
];

const LinkBlockGen = (props: LinkBlock) => {
    const { header, data } = props;
    return (
        <Flex vertical className={cls.link_block_wrapper}>
            <Title className={cls.link_block_header} level={5} key={header}>
                {header}
            </Title>
            {data.map((value) => (
                <Link className={cls.link} href={value.href} key={value.title}>
                    {value.title}
                </Link>
            ))}
        </Flex>
    );
};

export const Links = () => {
    return (
        <Flex className={cls.wrapper}>
            <LinkBlockGen header={'TOP CATEGORIES'} data={categories} />
            <LinkBlockGen header={'COMPANY'} data={company} />
            <LinkBlockGen header={'HELP CENTER'} data={help} />
            <LinkBlockGen header={'PARTNER'} data={partner} />
        </Flex>
    );
};
