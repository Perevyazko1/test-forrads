import {memo, ReactNode} from 'react';
import cls from "./Loader.module.scss"

interface LoaderProps {
    className?: string
    children?: ReactNode
}


export const Loader = memo((props: LoaderProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <div>
            <div className={cls.Wrapper}>
                <div className={cls.circle}></div>
                <div className={cls.circle}></div>
                <div className={cls.circle}></div>
                <div className={cls.shadow}></div>
                <div className={cls.shadow}></div>
                <div className={cls.shadow}></div>
            </div>
        </div>
    );
});