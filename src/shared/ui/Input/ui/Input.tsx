import { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react';
import cls from './Input.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';

type InputVariant = 'light' | 'dark';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    error?: string;
    onChange?: (value: string) => void;
    variant?: InputVariant;
}

export const Input = forwardRef(function CustomInput(
    props: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
) {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        label,
        error,
        variant = 'light',
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    return (
        <div
            className={classNames(cls.inputWrapper, {}, [
                className,
                cls[variant],
            ])}
        >
            {label && <label className={cls.label}>{label}</label>}

            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.input, {}, [])}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                {...otherProps}
            />

            {error && <small className={cls.error}>{error}</small>}
        </div>
    );
});
