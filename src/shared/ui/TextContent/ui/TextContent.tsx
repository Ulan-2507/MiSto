import { memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './TextContent.module.scss';

type TextVariant = 'primary' | 'error';

type TextAlign = 'right' | 'left' | 'center';

type TextSize = 's' | 'm' | 'l';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    'data-testid'?: string;
}

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
};

type TitileTagType = 'h1' | 'h2' | 'h3';

const mapSizeToTitleTag: Record<TextSize, TitileTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const TextContent = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold,
        'data-testid': dataTestId = 'Text',
    } = props;

    const TitleTag = mapSizeToTitleTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, cls[variant], cls[align], sizeClass];

    return (
        <div
            className={classNames('', { [cls.bold]: bold }, additionalClasses)}
        >
            {title && (
                <TitleTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Title`}
                >
                    {title}
                </TitleTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
