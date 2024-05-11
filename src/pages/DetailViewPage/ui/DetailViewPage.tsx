import {memo, ReactNode, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useAxios from "../../../shared/hooks/useAxios/axios";
import {PostType} from "../../../providers/models/PostType";
import {useDataPostContext} from "../../../providers/DataPostContext/DataPostContext";
import {WrapperPage} from "../../../shared/WrapperPage/WrapperPage";

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

    const {id} = useParams();
    const navigate = useNavigate()
    const {dataPost, setDataPost} = useDataPostContext()
    const [postDetail, setPostDetail] =
        useState<PostType[]>(dataPost.filter(post => post.id === Number(id?.substring(3))))



    return (
        <WrapperPage
        >
            {JSON.stringify(postDetail)}
        </WrapperPage>
    );
});
export default DetailViewPage