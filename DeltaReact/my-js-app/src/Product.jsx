import "./Product.css";
import Price from "./Price";


function Product({ title}){
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = [["8,000 DPI","5 programmable buttons"], ["Intuitive surface", "desgined for iPad Pro"], ["Designed for iPad Pro", "intuitive surface"], ["Wireless", "optical orientation"]];
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrices[idx]}/> 
        </div>
    );
}

export default Product;