import { FC } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';

import cls from './AboutPage.module.scss';

interface AboutPageProps {
    className?: string;
}

const AboutPage: FC<AboutPageProps> = ({ className }) => {
    return (
        <div className={classNames(cls.AboutPage, {}, [className])}>
            About page
        </div>
    );
};

export default AboutPage;
