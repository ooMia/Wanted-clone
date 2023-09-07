'use client'


import {CircularProgress, Skeleton} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useEffect, useState} from "react";

import axios from "axios";
import dynamic from "next/dynamic";


const Products = ({url}) => {
    const [items, setItems] = useState(undefined);

    useEffect(() => {
            axios.get(url)
                .then(res => setItems(res.data))
        }, [url]
    )

    const Product = dynamic(() => import('./Product'), {
        loading: () => <Skeleton width={210} height={118} style={{margin: 3}}/>,
    })

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch">
            {items
                ? (items.products.map((item) => <Product item={item} key={item.id}/>))
                : (<CircularProgress/>)}
        </Grid>)
}

export default Products