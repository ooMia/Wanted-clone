import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

async function getData(productId:number) {

    const res = await fetch(`https://dummyjson.com/products/${productId}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function NewProduct ({productId}) {

    let isValid = true
    let data;
    try {
        data = await getData(productId)
    } catch (e) {
        isValid = false;
    }

    // 필요하면 isValid로 검증
    return (<Box>
        <img
            alt={data.title}
            src={data.thumbnail}
            style={{
                width: 210, height: 118, margin: 3
            }}
        />
        <Typography width={210} height={22} sx={{textOverflow: "ellipsis"}}>{data.title}</Typography>
    </Box>)
}