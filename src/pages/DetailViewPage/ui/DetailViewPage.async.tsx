import {FC, lazy, Suspense} from "react";

export const DetailViewPageAsync = lazy<FC>(()=> import("./DetailViewPage"))

export const DetailsDetailViewPage =() => (
    <Suspense>
        <DetailViewPageAsync/>
    </Suspense>
)