

function fromDollarToYen (Doll){
    return Doll * 134;
}

function fromEuroToDollar (Eur){
    return Eur * 1.2 ;
}

function fromYenToPound (Yen){
    return Yen * 0.006;
}



module.exports = { fromYenToPound,fromDollarToYen,fromEuroToDollar };