import { memo, SVGProps } from 'react';

type IconSize = 14 | 18 | 22 | 24 | 40;

interface IconProps extends SVGProps<SVGSVGElement> {
    Svg: string;
    size: IconSize;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, size = 18, ...otherProps } = props;
    return <Svg width={size} hanging={size} {...otherProps} />;
});
