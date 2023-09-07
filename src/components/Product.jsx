import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Product = ({item}) => {
    return (<Box>
        <img
            alt={item.title}
            src={item.thumbnail}
            style={{
                width: 210, height: 118, margin: 3
            }}
        />
        <Typography width={210} sx={{textOverflow: "ellipsis"}}>{item.title}</Typography>
    </Box>)
}

export default Product