export async function generateStaticParams() {
    const categories =
        await fetch('https://dummyjson.com/products/categories')
            .then((res) => res.json())

    return categories.map((category) => ({
        category: category
    }))
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function SSG({ params }) {
    const { category } = params

    // useSearchParams
    // generateStaticParams
    return (
        <div>
            {category}
        </div>
    );
}

