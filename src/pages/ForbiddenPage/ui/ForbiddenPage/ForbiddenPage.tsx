import { classNames } from '@shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { memo } from 'react';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ForbiddenPage, {}, [className])}>
            ForbiddenPage
        </div>
    );
});

export default ForbiddenPage;
