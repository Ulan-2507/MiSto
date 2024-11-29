import { FC } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';

import cls from './CartPage.module.scss';

interface CartPageProps {
    className?: string;
}

const CartPage: FC<CartPageProps> = ({ className }) => {
    return (
        <div className={classNames(cls.CartPage, {}, [className])}>
            Cart page
        </div>
    );
};

export default CartPage;
