import ProductCard from "./ProductCard";

const Product=()=>{
    let Product=[{
        name:"mobile",
        price:2000, 
        description:"good condition",
        ratings:"⭐⭐⭐⭐",
        imageSrc:"https://cdn.beebom.com/mobile/vivo-y29-5g/vivo-y29-5g-front-and-back-1.png",
    },
    
        {
        name:"laptop",
        price:20000, 
        description:"good condition",
        ratings:"⭐⭐⭐",
        imageSrc:"https://tse4.mm.bing.net/th/id/OIP.0z4Ax_w_t-Ls-Xp_rc6ExAHaF3?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
        name:"tablets",
        price:30000, 
        description:"good condition",
        ratings:"⭐⭐⭐⭐",
        imageSrc:"https://cdn.mos.cms.futurecdn.net/Fx8DinujXdfCqpFYNUH9y6.jpg",
    },
    ]
    return(<div>
        {products.map(()=>(
            <div>
                <ProductCard details={product}/>
                const ProductCard
            </div>
        ))}
    </div>
        
    )
}
export default Product;