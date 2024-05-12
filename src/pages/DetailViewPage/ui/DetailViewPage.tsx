import {memo, ReactNode, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useAxios from "../../../shared/hooks/useAxios/axios";
import {PostType} from "../../../providers/models/PostType";
import {useDataPostContext} from "../../../providers/DataPostContext/DataPostContext";
import {WrapperPage} from "../../../shared/WrapperPage/WrapperPage";
import {Descriptions} from "antd";
import cls from "./DetailViewPage.module.scss"

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
        <WrapperPage>
            {postDetail.length > 0 &&
            <Descriptions title="Post Info" className={cls.DetailViewPage}
                          bordered
            >
                <Descriptions.Item span={3} label="User ID">{postDetail[0].userId}</Descriptions.Item>
                <Descriptions.Item span={3} label="ID">{postDetail[0].id}</Descriptions.Item>
                <Descriptions.Item span={3} label="Заголовок">{postDetail[0].title}</Descriptions.Item>
                <Descriptions.Item span={3} label="Тело">{postDetail[0].body}</Descriptions.Item>
            </Descriptions>
            }
        </WrapperPage>
    );
});
export default DetailViewPage