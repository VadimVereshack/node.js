//Regular expressions
//=======================================

/**
 * Object with functions to check mail, phone number and password
 */
let Validator = function(){
    /**
     * check mail
     * @param {*} email mail
     * @returns true or false
     */
     this.validateEmail = function(email){
        return /^[a-z0-9][a-z0-9\-\.\+]{1,19}\@[a-z0-9\.\!\$\%\&\’\*\+\/\=\?\^\_\-]{1,15}\.[a-z]{1,5}$/.test(email)
     }

     /**
      * check phone
      * @param {*} phone phone number
      * @returns true or false
      */
     this.validatePhone = function(phone){
        return /^(?=.{10,25}$)([\s\-]*?(\+?[\s\-]*?(\d[\s\-]*?){2})?(\([\s\-]*?(\d[\s\-]*?){3}\)|[\s\-]*?(\d[\s\-]*?){3})[\s\-]*?(\d[\s\-]*?){7})$/.test(phone)
     }

     /**
      * check password
      * @param {*} password password
      * @returns true or false
      */
     this.validatePassword = function(password){
         return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w]{8,}$/.test(password);
     }
}


let a = new Validator();

console.log("Почта");
console.log(a.validateEmail("fi@secondpart.end"));
console.log(a.validateEmail("first-part@.se=cond%p.art.end"));
console.log(a.validateEmail("first.part@se=cond%part.r"));
console.log("--------------------");
console.log(a.validateEmail("f@secondart.end,"));
console.log(a.validateEmail("first-part@.se=cond@part.end"));
console.log(a.validateEmail("-firstpart@.se=cond%.enddeded"));
console.log(a.validateEmail("firs_tpart@.se.en"));
console.log(a.validateEmail("firstpart@.se.enddeded"));


// console.log("ПАроль!");
// console.log(a.validatePassword("A0a______"));
// console.log(a.validatePassword("0aA______"));
// console.log(a.validatePassword("Aa0______"));
// console.log(a.validatePassword("A0a______"));
// console.log(a.validatePassword("aA0______"));
// console.log(a.validatePassword("a0A______"));
// console.log(a.validatePassword("passSS_wo0"));
// console.log(a.validatePassword("pAsS_Wo0"));
// console.log(a.validatePassword("p_A_s_S_W_o_0"));
// console.log(a.validatePassword("Pa_sw00rD"));
// console.log(a.validatePassword("0234__242Pa"));
// console.log("--------------------");
// console.log(a.validatePassword("Paaaaaa"));
// console.log(a.validatePassword("aaaaaaaaaa"));
// console.log(a.validatePassword("PPPPPPPPPPPPPPPP"));
// console.log(a.validatePassword("PPPPPPP0000PPP"));
// console.log(a.validatePassword("aa0000aaaaa"));
// console.log(a.validatePassword("00000000000"));
// console.log(a.validatePassword("Cool_pass"));
// console.log(a.validatePassword("cool_pass"));
// console.log(a.validatePassword("coolpass"));
// console.log(a.validatePassword("C00l"));



// console.log("Телефон!");
// console.log(a.validatePhone("+38 (099) 567 8901"));
// console.log(a.validatePhone("+38 099 5 6 7 8 9  01"));
// console.log(a.validatePhone("(09-9) 567-890-1"));
// console.log(a.validatePhone("--  (099) 567 890-1"));
// console.log(a.validatePhone("+38 (099) 567 8901"));
// console.log("--------------------");
// console.log(a.validatePhone("+38 (0--9--9 5678901"));
// console.log(a.validatePhone("+38 (099) 567 8901 0"));
// console.log(a.validatePhone("+38 099 a0000000"));
// console.log(a.validatePhone("+38 (0989) 567 8901"));
// console.log(a.validatePhone("+48 (0989) 567 8901"));