import {memo, ReactNode, useEffect} from 'react';
import {useParams} from "react-router-dom";
import useAxios from "shared/hooks/useAxios/axios";
import {PostType} from "providers/models/PostType";
import {WrapperPage} from "shared/WrapperPage/WrapperPage";
import {Descriptions} from "antd";
import cls from "./DetailViewPage.module.scss"
import {Loader} from "shared/Loader/Loader";

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

    const {data, error, loading, executeRequest} = useAxios<PostType>();


    const fetchData = async () => {
        try {

            await executeRequest('GET', `https://jsonplaceholder.typicode.com/posts/${id?.substring(3)}`);


        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
    };
    useEffect(() => {
        fetchData()
    }, []);


    const {id} = useParams();


    return (
        <WrapperPage>
            {!loading && !error &&
                <Descriptions title="Post Info" className={cls.DetailViewPage}
                              bordered
                >
                    <Descriptions.Item span={3} label="User ID">{data?.userId}</Descriptions.Item>
                    <Descriptions.Item span={3} label="ID">{data?.id}</Descriptions.Item>
                    <Descriptions.Item span={3} label="Заголовок">{data?.title}</Descriptions.Item>
                    <Descriptions.Item span={3} label="Тело">{data?.body}</Descriptions.Item>
                </Descriptions>
            }
            {loading &&
                <Loader/>
            }
            {error &&
                <div>Ошибка загрузки</div>
            }
        </WrapperPage>
    );
});
export default DetailViewPage