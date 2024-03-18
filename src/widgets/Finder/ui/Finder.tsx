import cls from './Finder.module.scss';
import { SearchCategories } from '@/features/SearchCategories';
import Link from 'next/link';

export const Finder = () => {
    return (
        <section className={cls.wrapper}>
            <SearchCategories />
            <Link className={cls.link} href={'/'}>
                FREE SHIPING OVER $199
            </Link>
            <Link className={cls.link} href={'/'}>
                30 DAYS MONEY BACK
            </Link>
            <Link className={cls.link} href={'/'}>
                100% SECURE PAYMENT
            </Link>
        </section>
    );
};
