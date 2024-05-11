import {memo, ReactNode} from 'react';
import {useNavigate, useParams} from "react-router-dom";

interface DetailViewPageProps {
    className?: string
    children?: ReactNode
}


const DetailViewPage = memo((props: DetailViewPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const { id } = useParams();
    const navigate = useNavigate()


    return (
        <div
            {...otherProps}
        >
            {children}
        </div>
    );
});
export default DetailViewPage