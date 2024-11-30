import { AnchorHTMLAttributes, memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';

import cls from './SocialLink.module.scss';

type SocialLinkFill = 'transparent' | 'white' | 'dark';

interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    fill?: SocialLinkFill;
}

export const SocialLink = memo((props: SocialLinkProps) => {
    const { className, fill = 'transparent', children, ...otherProps } = props;
    return (
        <a
            className={classNames(cls.SocialLink, {}, [className, cls[fill]])}
            {...otherProps}
        >
            {children}
        </a>
    );
});
