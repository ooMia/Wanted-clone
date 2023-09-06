import Product from "../../../components/Product";

async function getData(productId) {

    const res = await fetch(`https://dummyjson.com/products/${productId}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function SSR({params}) {

    const {productId} = params

    let isValid = true

    let data;
    try {
        data = await getData(productId)
    } catch (e) {
        isValid = false;
    }

    return (<>
        {isValid
            ? <Product item={data}/>
            : <p>invalid id</p>}
    </>)
}