'use client'

import {useCallback, useMemo, useRef} from 'react';
import Button from "@mui/material/Button";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import {Skeleton} from "@mui/material";


export default function CSR() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const details = true
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
        }, [searchKeyword]
    )

    // const onClickEventHandler = () => {
    //     setDetails(true)
    // }

    const Products = dynamic(() => import('../../components/Products'), {
        ssr:false,
        loading: () => <Skeleton width={210} height={146} style={{margin: 3}}/>
    })

    console.log(searchParams)
    const inputRef:any = useRef();
    return (
        <Container maxWidth={"xl"}>
            <Box sx={{marginTop: 5,}}>
                <Typography variant="h3">{searchKeyword}</Typography>
                <TextField
                    inputRef={inputRef}
                    style={{border: "solid black 1px"}}
                />
                <Button onClick={() => {
                    const val = inputRef.current.value
                    router.push(pathname + '?' + createQueryString('search', val))
                }}>search</Button>
            </Box>
            <Box sx={{marginTop: 5,}}>
                {/*{!details && <Button onClick={onClickEventHandler}>Search</Button>}*/}
                {details && <Products url={url}/>}
            </Box>
        </Container>
    );
};