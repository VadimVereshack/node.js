//The array contains the products 
let products = [];



/**
 *  Constructor product
 * 
 * @param {*} id id product
 * @param {*} name name product
 * @param {*} description description product
 * @param {*} price price product
 * @param {*} brand brand product
 * @param {*} sizes sizes product
 * @param {*} activeSize Actual size product
 * @param {*} quantity quantity product
 * @param {*} date date release product
 * @param {*} reviews Array of comments
 * @param {*} images image product
 */
let Product = function(id,name,description,price,brand,sizes,activeSize,quantity,date,reviews,images){
    //Array of comments
    this.reviews = reviews;

    //Product
    this.product = {id:id,name:name,description:description,price:price,
        brand:brand,sizes:sizes,activeSize:activeSize,quantity:quantity,
        date:date,reviews:this.reviews,images:images};

    /** Return comment by key
     * 
     * @param {*} key id user
     * @returns comment
     */
    this.getReviewByID = function(key){
        for(let i = 0; this.reviews.length>i; i++){
            if(this.reviews[i].id == key){
                return this.reviews[i];
            }
        }
    } 

    /** Return product image by number
     * 
     * @param {*} number number image
     * @returns image
     */
    this.getImage = function(number){
        return number == null ? this.product.images[0] : this.product.images[number];
    }

    /** add size product
     * 
     * @param {*} size size
     */
    this.addSize = function(size){
        this.product.sizes.push(size);
    }

    /** delete size product
     * 
     * @param {*} size size
     */
    this.deleteSize = function(size){
        this.product.sizes.splice(this.product.sizes.indexOf(size),1);
    }

    /** add product comment
     * 
     * @param {*} id id coment
     * @param {*} name name user
     * @param {*} date date comment
     * @param {*} comment comment
     * @param {*} rating rating
     */
   this.addReview = function(id,name, date, comment,rating){
        this.review = {id:id,name:name,date:date,comment:comment,rating:rating};
        this.reviews.push(this.review);
    }

    /** delete comment
     * 
     * @param {*} id id coment
     */
    this.deleteReviewv = function(id){
        for(let i=0; this.reviews.length>i; i++){
            if(this.reviews[i].id === id){
                this.reviews.splice(i,1);
            }
        }
    }

    /** Calculates the average rating value
     * 
     * @returns rating average
     */
    this.getAverageRating = function(){
        this.numberRating = 0;
        this.result = 0;
        for (let i = 0; i < this.reviews.length;i++){
            if(this.reviews[i].rating["service"] != null){
                this.result+= this.reviews[i].rating["service"];
                this.numberRating++;
            }
            if(this.reviews[i].rating["price"] != null){
                this.result+= this.reviews[i].rating["price"];
                this.numberRating++;
            }
            if(this.reviews[i].rating["value"] != null){
                this.result+= this.reviews[i].rating["value"];
                this.numberRating++;
            }
            if(this.reviews[i].rating["quality"] != null){
                this.result+= this.reviews[i].rating["quality"];
                this.numberRating++;
            }
       }
       return this.result/this.numberRating
    }
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
     if(products[i].product.name.toLowerCase().includes(search.toLowerCase()) || products[i].product.description.toLowerCase().includes(search.toLowerCase())){
        this.searchProducts.push(products[i].product);
     }
    }
    return this.searchProducts;
}

/** A function that sorts an array of products
 * 
 * @param {*} products Array products
 * @param {*} sortRule number sort. 
                       1 - id
                       2 - name
                       3 - price
 * @returns sorted array
 */
let sortProducts = function(products,sortRule){
    switch(sortRule){
        case 1:{
            this.sortId = function(a,b){
                return a.product.id > b.product.id ? 1 : a.product.id < b.product.id ? -1 : 0;
            }
            return products.sort(this.sortId);
        }
        case 2:{
            this.sortName = function(a,b){
                return a.product.name > b.product.name ? 1 : a.product.name < b.product.name ? -1 : 0;
            }
            return products.sort(this.sortName);
        }
        case 3:{
            this.sortPrice = function(a,b){
                return a.product.price > b.product.price ? 1 : a.product.price < b.product.price ? -1 : 0;
            }
            return products.sort(this.sortPrice);
        }
    }
}













let p1 = new Product(
    "2", //id
    "Футболка", // name
"Круто, стильно, молодёжно", //description
200, //price
"Nike", //brand
['XS', 'S', 'M', 'L', 'XL', 'XXL'], //sizes
"M", //activeSize
18, //quantity
new Date("5.02.22"),//date
[], //reviews
["im1","im2","im3"] //Images
);

p1.dadReview(
    "1",
    "Вадик",
    new Date("6.02.22"),
    "Носить можно", 
    {"service": 3,"price": 5,"value": 5, "quality": 2}
);

p1.addReview(
    "2",
    "Лера",
    new Date("7.02.22"),
    "Норм",
    {"service": 1,"price": 1,"value": 1, "quality": 3}
);

p1.addReview(
    "3",
    "Дима",
    new Date("8.02.22"),
    "Отлично",
    {"service": 5,"price": 5,"value": 5, "quality": 4}
);











let p2 = new Product(
    "3", //id
    "Майка", // name
"Дорого богатор, круто", //description
1000, //price
"Nike", //brand
['XS', 'M', 'L', 'XL', 'XXL'], //sizes
"L", //activeSize
55, //quantity
new Date("1.01.22"),//date
[], //reviews
["im1","im2","im3"] //Images
);

p2.addReview(
    "1",
    "Вадик",
    new Date("6.02.22"),
    "Носить можно",
    {"service": 3,"price": 5,"value": 5, "quality": 2}
);

p2.addReview(
    "2",
    "Лера",
    new Date("7.02.22"),
    "Норм",
    {"service": 1,"price": 4,"value": 1, "quality": 3}
);

p2.addReview(
    "3",
    "Дима",
    new Date("8.02.22"),
    "Отлично",
    {"service": 5,"price": 5,"value": 5, "quality": 4}
);


let p3 = new Product(
    "1", //id
    "Штаны", // name
"Круто, стильно", //description
350, //price
"Nike", //brand
['XS', 'M', 'XXL'], //sizes
"L", //activeSize
14, //quantity
new Date("2.01.22"),//date
[], //reviews
["im1","im3"] //Images
);


products.push(p1);
products.push(p2);
products.push(p3);


console.log(sortProducts(products,3));