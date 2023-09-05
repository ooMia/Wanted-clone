'use client'

import {useCallback, useMemo, useRef} from 'react';
import Button from "@mui/material/Button";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Products from "../../components/Products";


export default function CSR() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const details=true
    // const [details, setDetails] = useState(false)

    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
        return params.toString()
    }, [searchParams])

    const searchKeyword = searchParams.get('search');
    const url = useMemo(
        () => {
            let res = `https://dummyjson.com/products/`
                if (searchKeyword && searchKeyword !== "")
                    res += `search?q=${searchKeyword}`
            return res
        },[searchKeyword]
    )

    const onClickEventHandler = () => {
        setDetails(true)
    }

console.log(searchParams)
    const inputRef = useRef()
    return (
        <Container maxWidth={"xl"}>
            <Box sx={{marginTop: 5,}}>
                <Typography variant="h3">{searchKeyword}</Typography>
                <TextField
                    inputRef={inputRef}
                    style={{border: "solid black 1px"}}
                />
                <Button onClick={(e) => {
                    const val = inputRef.current.value
                    router.push(pathname + '?' + createQueryString('search', val))
                }}>search</Button>
            </Box>
            <Box sx={{marginTop: 5,}}>
                {!details && <Button onClick={onClickEventHandler}>CLICK ME</Button>}
                {details && <Products url={url}/>}
            </Box>
        </Container>
    );
};