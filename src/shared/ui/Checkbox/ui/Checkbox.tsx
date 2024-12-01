import { InputHTMLAttributes, memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import CheckMarker from '@shared/assets/icons/check_marker.svg';
import RadioMarker from '@shared/assets/icons/radio_marker.svg';

import cls from './Checkbox.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

interface CheckboxProps extends HTMLInputProps {
    className?: string;
    label?: string;
    type?: 'checkbox' | 'radio';
    backgroundColor?: string;
}

export const Checkbox = memo((props: CheckboxProps) => {
    const {
        className,
        label,
        type = 'checkbox',
        disabled = false,
        backgroundColor = 'white',
        ...otherProps
    } = props;

    return (
        <label
            className={classNames(cls.check, { [cls.disabled]: disabled }, [
                className,
            ])}
        >
            <input className={cls.input} type={type} {...otherProps} />
            <span
                className={classNames(cls.marker, {}, [cls[type]])}
                style={{ backgroundColor: backgroundColor }}
            >
                {type === 'checkbox' ? <CheckMarker /> : <RadioMarker />}
            </span>
            {label}
        </label>
    );
});
