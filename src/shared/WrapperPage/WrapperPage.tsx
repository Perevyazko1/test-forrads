import {memo, ReactNode} from 'react';
import cls from "./WrapperPage.module.scss"

interface WrapperPageProps {
    className?: string
    children?: ReactNode
}


export const WrapperPage = memo((props: WrapperPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <div className={cls.WrapperPage}>
            {children}
        </div>
    );
});