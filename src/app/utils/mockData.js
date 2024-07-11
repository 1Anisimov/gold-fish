import httpService from "../services/http.service";
import products from "../mockData/products.json";
import categories from "../mockData/categories.json";
import subcategories from "../mockData/subcategories.json";
import saleProducts from "../mockData/saleProducts.json";
import specialProducts from "../mockData/specialProducts.json";



export async function initialize() {
    try {
        for (const product of products) {
            await httpService.put("product/" + product.id, product);
            
        }
        for (const category of categories) {
            await httpService.put("category/" + category.value, category);
            
        }
        for (const subcategory of subcategories) {
            await httpService.put("subcategory/" + subcategory.value, subcategory);
            
        }
        for (const saleProduct of saleProducts) {
            await httpService.put("saleProducts/" + saleProduct.id, saleProduct);
            
        }
        for (const specialProduct of specialProducts) {
            await httpService.put("specialProducts/" + specialProduct.id, specialProduct);
            
        }
    } catch (error) {
        console.log("ERROR:", error)
    }
}