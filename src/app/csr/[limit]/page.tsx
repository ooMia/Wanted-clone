'use client'
// 이거 안 해주면 하위 컴포넌트 로딩될 때까지 기다려야함

import dynamic from "next/dynamic";
import {Skeleton} from "@mui/material";
import Grid from "@mui/material/Grid";

export default async function SS({params}) {

    const {limit} = params

    const NewProduct = dynamic(() => import('../../../components/NewProduct'), {
        ssr: false, loading: () => <Skeleton width={210} height={146} style={{margin: 3}}/>,
    })

    const obj = []
    for (let i = 1; i <= limit; ++i) {
        obj.push({productId: i})
    }

    return (<>
            {limit}
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch">
                {obj.map((e) => <NewProduct productId={e.productId} key={e.productId}/>)}
            </Grid>
        </>

    )
}