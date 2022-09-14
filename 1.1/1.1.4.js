//OOP в Javascript
//=======================================

function AbstractProduct ({key,name,description,price,amountProduct,reviews,image,date,brand}) {
        this.key = key;
        this.name = name;
        this.description = description;
        this.price = price;
        this.amountProduct = amountProduct;
        this.reviews = reviews;
        this.image = image;
        this.date = date;
        this.brand = brand;
}

AbstractProduct.prototype.getKey = function(){
    return this.key;
}
AbstractProduct.prototype.setKey = function(key){
    this.key = key;
}
AbstractProduct.prototype.getName = function(){
    return this.name;
}
AbstractProduct.prototype.setName = function(name){
    this.name = name;
}
AbstractProduct.prototype.getDescription = function(){
    return this.description;
}
AbstractProduct.prototype.setDescription = function(description){
    this.description = description;
}
AbstractProduct.prototype.getPrice = function(){
    return this.price;
}
AbstractProduct.prototype.setPrice = function(price){
    this.price = price;
}
AbstractProduct.prototype.getAmountProduct = function(){
    return this.amountProduct;
}
AbstractProduct.prototype.setAmountProduct = function(amountProduct){
    this.amountProduct = amountProduct;
}
AbstractProduct.prototype.getReviews = function(){
    return this.reviews;
}
AbstractProduct.prototype.setReviews = function(reviews){
    this.reviews = reviews;
}
AbstractProduct.prototype.getImage = function(){
    return this.image;
}
AbstractProduct.prototype.setImage = function(image){
    this.image = image;
}
AbstractProduct.prototype.getDate = function(){
    return this.date;
}
AbstractProduct.prototype.setDate = function(date){
    this.date = date;
}
AbstractProduct.prototype.setBrand = function(){
    return this.brand;
}
AbstractProduct.prototype.setBrand = function(brand){
    this.brand = brand;
}

AbstractProduct.prototype.getFullInformation = function(){
    let string
    for(let options in this){
        if(typeof(this[String(options)]) != "function") {
        string += `${options} - ${this[String(options)]}\n`;
        }
    }
    return string;
}

AbstractProduct.prototype.getPriceForQuantity = function(number){
    let result = 0;
    for(let i = 0; number>i;i++){
        result +=this.price;
    }
    return `$ ${result}`;
}

//-----------------------------------------------------------------------------------------------------------------

function Clothes({key,name,description,price,amountProduct,reviews,image,date,brand,material,color}){
    AbstractProduct.call(this,{key,name,description,price,amountProduct,reviews,image,date,brand})
        this.material = material;
        this.color = color;
}

Clothes.prototype.setMaterial = function(material){
    this.material = material;
}
Clothes.prototype.getMaterial = function(){
    return this.material;
}
Clothes.prototype.setColor = function(color){
    this.color = color;
}
Clothes.prototype.getColor = function(){
    return this.color;
}

Clothes.prototype = Object.create(AbstractProduct.prototype);
Clothes.prototype.construnctor = Clothes;

function Electronics({key,name,description,price,amountProduct,reviews,image,date,brand,warranty,power}){
    AbstractProduct.apply(this,{key,name,description,price,amountProduct,reviews,image,date,brand})
        this.warranty = warranty;
        this.power = power;
}

Electronics.prototype.setWarranty = function(warranty){
    this.warranty = warranty;
}
Electronics.prototype.getWarranty = function(){
    return this.warranty;
}
Electronics.prototype.setPower = function(power){
    this.power = power;
}
Electronics.prototype.getPower = function(){
    return this.power;
}

Electronics.prototype = Object.create(AbstractProduct.prototype);
Electronics.prototype.construnctor = Electronics;




AbstractProduct.prototype.getAnsSet = function(options, element){
    if(element==undefined){
        return this[options]
        }
        this[options] = element;
}




/** Search. Searches for a product with a containing word in the title, or comments
 * 
 * @param {*} products Array products
 * @param {*} search search word
 * @returns An array of products that contain words
 */
 let searchProducts = function(products,search){
    this.searchProducts = [];
    for(let i=0 ;products.length>i; i++){
     if(products[i].name.toLowerCase().includes(search.toLowerCase()) || products[i].description.toLowerCase().includes(search.toLowerCase())){
        this.searchProducts.push(products[i]);
     }
    }
    return this.searchProducts;
}

/** A function that sorts an array of products
 * 
 * @param {*} products Array products
 * @param {*} sortRule number sort. 
                       1 - key
                       2 - name
                       3 - price
 * @returns sorted array
 */
let sortProducts = function(products,sortRule){
    switch(sortRule){
        case 1:{
            this.sortKey = function(a,b){
                return a.key > b.key ? 1 : a.key < b.key ? -1 : 0;
            }
            return products.sort(this.sortKey);
        }
        case 2:{
            this.sortName = function(a,b){
                return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
            }
            return products.sort(this.sortName);
        }
        case 3:{
            this.sortPrice = function(a,b){
                return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
            }
            return products.sort(this.sortPrice);
        }
    }
}


//---------------------------------------------------Testing---------------------------------------------------


const p1 = new Clothes({
    key: 1,
    name: "Б Шорты",
    description: "Отличный пляжный вариант, подойдёт под белую футболку",
    price: 15.63,
    material: "Стрейч",
    color: "Чёрный"
});

const p2 = new Clothes({
    key: 3,
    name: "А Шапка",
    description: "Очень согревает в холодные зимние дни",
    price: 5.2,
    material: "Ткань",
    color: "Белый"
});

const p3 = new Clothes({
    key: 2,
    name: "В Свитшот",
    description: "Подойдёт для осенних, вечерних, посиделок",
    price: 100.458,
    material: "Стрейч",
    color: "Серый"
});



let a = [p1,p2,p3];


console.log(searchProducts(a,"Шапка"))



// console.log(a.getPriceForQuantity(5))
// console.log(a.getMaterial())


//  a.setMaterial("Джинс")
// console.log(a.getMaterial())
// console.log(a.getColor())
