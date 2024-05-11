import {memo, MutableRefObject, ReactNode, useEffect, useRef} from 'react';
import useAxios from "../../../shared/hooks/useAxios/axios";
import {PostType} from "../../../providers/models/PostType";
// import cls from "./ListViewPage.module.scss"
import {Card} from "antd";
import {useInfiniteScroll} from "../../../shared/hooks/useInfinityScroll/useInfinityScroll";
import {useNavigate} from "react-router-dom";
import {WrapperPage} from "../../../shared/WrapperPage/WrapperPage";

interface ListViewPageProps {
    className?: string
    children?: ReactNode
}


const ListViewPage = memo((props: ListViewPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props
    const {dataPost: dataSort, error, loading, executeRequest} = useAxios();
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const navigate = useNavigate()


    const fetchData = async () => {
        try {

            await executeRequest('GET', 'https://jsonplaceholder.typicode.com/posts/');


        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
    };
    useEffect(() => {
        fetchData()
    }, []);


    const {
        rowTopHeight,
        rowBottomHeight,
        wrapperHeight,
        startSlice,
        marginRow,
        visibleRow,
        rowHeight,
        widthElement,
        dataScroll
    } = useInfiniteScroll(
        {
            triggerRef,
            rowHeight: 130,
            marginRow: 30,
            widthElement: 440,
            data: dataSort
        }
    )


    return (


            <div
                style={{
                    height: wrapperHeight(), overflow: 'auto', justifyContent: "center",
                    display: "flex"
                }}
                ref={triggerRef}
                {...otherProps}
            >

                <div style={{justifyContent: "center"}}>
                    <div
                        style={{height: rowTopHeight(), marginTop: marginRow}}/>
                    {dataScroll && dataScroll.slice(startSlice, startSlice + visibleRow).map((row: any, index: number) => (
                            <div key={startSlice + index}
                                 style={{display: "flex", height: rowHeight, marginTop: marginRow}}
                            >
                                {row[1].map((post: PostType, index: number) => (
                                    <Card
                                        onClick={() => navigate(`/detail/id=${post.id}`)}
                                        size="small"
                                        title={post.title}
                                        key={index + ""}

                                        style={{width: widthElement, marginRight: marginRow, marginLeft: marginRow}}
                                    >
                                        <p>{post.body}</p>
                                    </Card>

                                ))}
                            </div>
                        )
                    )}
                    <div style={{height: rowBottomHeight()}}/>


                </div>
            </div>
    )
        ;
});
export default ListViewPage