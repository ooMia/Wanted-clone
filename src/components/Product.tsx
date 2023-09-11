import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Product = ({item, link}) => {
    return (<Box>
        <Link href={link}>
            <img
                alt={item.title}
                src={item.thumbnail}
                style={{
                    width: 210, height: 118, margin: 3,
                }}
            />
        </Link>

        <Typography width={210} sx={{textOverflow: "ellipsis"}}>{item.title}</Typography>
    </Box>)
}

export default Product