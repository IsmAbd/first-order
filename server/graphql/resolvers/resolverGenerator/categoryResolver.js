const Category = require("../../../models/category");

export async function addCategory(args) {
    const {name} = args.userInput;

    const tempCategory = {
        name: name
    };

    let category = new Category(tempCategory);

    let temp = category.save().then(result => {
        return result;
    });
    return temp;
}


