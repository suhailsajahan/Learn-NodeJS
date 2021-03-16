var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b) {
    console.log("Solving a rectangular with l= "+ l + " b= "+ b);

    if(l<=0 || b<=0){
        console.log("Rectanular diamentions should be greater than zero: l = " + l + " and b = " + b);
    }
    else{
        console.log("The area of the rectangular is " + rect.area(l,b));
        console.log("The perimeter of the rectangular is " + rect.perimeter(l,b));
    }
    console.log("");
}

solveRect(2,3);
solveRect(0,2);
solveRect(4,-2);