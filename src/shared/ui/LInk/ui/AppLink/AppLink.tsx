import { memo, ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';
import { LinkProps, NavLink } from 'react-router';

type AppLinkVariant = 'underline' | 'pill' | 'clear';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    activeClassName?: string;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to = '/',
        variant = 'underline',
        activeClassName = '',
        children,
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
