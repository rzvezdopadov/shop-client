import cls from './Language.module.scss';

const LanguageArr = ['Eng', 'Rus'];

export const Language = () => {
    return (
        <select className={cls.select}>
            {LanguageArr.map((value) => (
                <option key={value} label={value}>
                    {value}
                </option>
            ))}
        </select>
    );
};
