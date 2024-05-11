import {FC, lazy, Suspense} from "react";

export const ListViewPageAsync = lazy<FC>(()=> import("./ListViewPage"))

export const DetailsListViewPage =() => (
    <Suspense>
        <ListViewPageAsync/>
    </Suspense>
)