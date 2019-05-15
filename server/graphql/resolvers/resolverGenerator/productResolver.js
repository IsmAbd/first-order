import Restaurant from "../../../models/product";

export async function addProduct(args) {
    const {name, description, category, type, image_path} = args.userInput;

    const tempProduct = {
        name: name,
        description: description,
        category: category,
        type: type,
        image_path:image_path
    };

    var product = new Product(tempProduct);

    var temp = product.save().then(result => {
        return result;
    });
    return temp;
}


export async function getProductByID(args) {
    var result = await Product.filter({id: args.id})
        .getJoin({category: true})
        .then(result => {
            console.log(result[0]);
            return result[0];
        });

    return result;
}

export async function getAllProductsByRestaurant() {
    var result = await Restaurant.getJoin({category: true}).then(result => {
        return result;
    });

    return result;
}