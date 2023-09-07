import Products from "../../../components/Products";

export async function generateStaticParams() {

    const response = await fetch("https://dummyjson.com/products/categories");
    const categories = await response.json();
    console.log(categories);

    return categories.map((category) => ({
        category: category
    }))
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function SSG({params}) {
    const {category} = params

    const url = `https://dummyjson.com/products/category/${category}`

    return <>
        {category}
        <Products url={url}/>
    </>


}
