import Grid from "@mui/material/Grid";
import Product from "./Product";


async function getData(url) {

    const res = await fetch(url)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


export default async function Products({url}) {

    const items = await getData(url)
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
        >
            {items.products.map((item) => <Product item={item} key={item.id} link={`ssr/${item.id}`}/>)}
        </Grid>)
}