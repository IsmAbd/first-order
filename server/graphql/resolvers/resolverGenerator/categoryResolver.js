import Category from "../../../models/category";

export async function addCategory(args) {
    const {name} = args.userInput;

    const tempCategory = {
        name: name
    };

    var category = new Category(tempCategory);

    var temp = category.save().then(result => {
        return result;
    });
    return temp;
}


