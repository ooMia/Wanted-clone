import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

async function getData(productId: number) {

    const res = await fetch(`https://dummyjson.com/products/${productId}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function NewProduct({productId}) {

    let isValid = true
    let item;
    try {
        item = await getData(productId)
    } catch (e) {
        isValid = false;
    }

    // 필요하면 isValid로 검증
    return (<Box>
        <Link href={`/ssr/${productId}`}>
            <Image
                alt={item.title}
                src={item.thumbnail}
                width={210}
                height={118}
                style={{
                    width: 210, height: 118, margin: 3
                }}
            />
        </Link>

        <Typography width={210} sx={{textOverflow: "ellipsis"}}>{item.title}</Typography>
    </Box>)


}