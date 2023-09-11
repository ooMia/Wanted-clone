import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Product({item}) {
    return (<Box>
        <Image
            alt={item.title}
            src={item.thumbnail}
            width={210}
            height={118}
            style={{
                width: 210, height: 118, margin: 3
            }}
        />
        <Typography width={210} sx={{textOverflow: "ellipsis"}}>{item.title}</Typography>
    </Box>)
}