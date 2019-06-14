import Product from "../../../models/product";
import Restaurant from "../../../models/restaurant";
import Category from "../../../models/category";

export async function addProduct(args) {
    const {name, description, categoryID, type, image_path} = args.userInput;

    const tempProduct = {
        name: name,
        description: description,
        type: type,
        image_path: image_path
    };

    let product = new Product(tempProduct);

    let category = await Category.filter({id: categoryID}).then(result => {
        return result[0];
    });

    category.products = product;
    product.category = category;

    let result = await product.saveAll({category: true}).then(result => {
        return result;
    });

    return result;
}

export async function getProductByID(args) {
    let result = await Product.filter({id: args.id})
        .getJoin({category: true})
        .then(result => {
            console.log(result[0]);
            return result[0];
        });

    return result;
}

export async function getAllProductsByRestaurant() {
    let result = await Restaurant.getJoin({category: true, product: {price: true}}).then(result => {
        return result;
    });

    return result;
}
