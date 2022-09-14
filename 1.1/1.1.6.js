//FP
//=======================================

let base = `44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент

#
46.49,36.58,#Бердянськ,121111692,
49.15,28.41,Вінниця,356665,
40,22.5,Снежное,23443
1.5,34.5,Новоукраинка,232234
63.123,20,Антрацит,12112
45.40,34.29,Джанкой,4331143,

# в этом файле три строки-коммента :)
12,23,Курахово,12312
10,10.10,Долина,9342
99.1232,234.1,Хмельник,12321
37,44.113,Балаклея,133`



function parser(text){
text = text.split(`\n`) 
.filter(text => /^(?!\#)([1-9]\d*(\.\d*)?\,){2}(.)+\,[1-9]\d*/.test(text))
.map(text => {text = text.split(`,`)
return {x: text[0],y: text[1], name: text[2], population: text[3]} })
.sort((a,b) => b.population - a.population)
.slice(0,10)
.reduce((obj, element) => {obj[element.name] = {population: element.population, rating: Object.keys(obj).length+1}
return obj},{});


return function fun(t){
let keys = Object.keys(text);
keys.forEach(el => (t = t.replace(el,`${el}(${text[el].rating} место в ТОП-10 самых крупных городов Украины, население ${text[el].population} человек)`)))
return t;
}

}

let pars = parser(base);

//---------------------------------------------------Testing---------------------------------------------------

console.log(pars(`Город Вінниця 
i Новоукраинка`));