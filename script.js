const addPolynomials = (a,b) => {
    let p = new Polynomial(a).add(b);
    const pollArr = [];

    Object.keys(p.coeff).forEach((key,index) => {
        if (key === "0") {
            (p.coeff[key].toString()[0] === "-")
                ? pollArr.unshift(p.coeff[key].toString())
                : pollArr.unshift("+" + p.coeff[key]);
        }
        else {
            (p.coeff[key].toString()[0] === "-")
                ? pollArr.unshift(p.coeff[key] + "x^" + index)
                : pollArr.unshift("+" + p.coeff[key] + "x^" + index);
        }
    });

    //removing "+" from begining of polynomial
    if (pollArr[0][0].toString() === "+") {
        pollArr[0]=pollArr[0].substr(1)
    }

    return pollArr.join("")
};

//testing
let a = "x^3+3+x";
let b = "2x^4+2x-4-2x^2";


console.log(addPolynomials(a,b));