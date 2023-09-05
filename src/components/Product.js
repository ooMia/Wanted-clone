import {Suspense} from "react";
import {Skeleton} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Product = ({item}) => {
    return (<Suspense fallback={<Skeleton width={210} height={118} style={{margin: 3}}/>}>
        {item ? (<Box>
            <img
                alt={item.title}
                src={item.thumbnail}
                style={{
                    width: 210, height: 118, margin: 3
                }}
            />
            <Typography width={210} sx={{textOverflow: "ellipsis"}}>{item.title}</Typography>
        </Box>) : (<Skeleton width={210} height={118}/>)}
    </Suspense>)
}

export default Product