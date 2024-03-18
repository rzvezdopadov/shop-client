import cls from './Currency.module.scss';

const CurrencyArr = ['USD', 'RUB', 'EUR'];

export const Currency = () => {
    return (
        <select className={cls.select}>
            {CurrencyArr.map((value) => (
                <option key={value} label={value}>
                    {value}
                </option>
            ))}
        </select>
    );
};
