import { FC } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';

import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = ({ className }) => {
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            main page
        </div>
    );
};

export default MainPage;
