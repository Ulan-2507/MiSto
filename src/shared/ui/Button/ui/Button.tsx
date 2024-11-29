import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type ButtonVariant = 'light' | 'dark' | 'clear' | 'text' | 'outline';
type ButtonBorder = 'normal' | 'round' | 'partial';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    border?: ButtonBorder;
    capitalize?: boolean;
    fullWidth?: boolean;
    square?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'light',
        border = 'normal',
        capitalize,
        fullWidth,
        square,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(
                cls.Button,
                {
                    [cls.capitalize]: capitalize,
                    [cls.fullWidth]: fullWidth,
                    [cls.square]: square,
                },
                [className, cls[variant], cls[border]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
});
