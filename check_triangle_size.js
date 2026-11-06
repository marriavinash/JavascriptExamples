//wrtie a function to check the traingle type with name checkTraingleType that three parameters represting
//the lenghts of the sides of the triangle. The function should return a string indicating the type of the triangle
//equilateral, isosceles, scalene

const checkTriangleType =(a, b, c) =>
{
    if(a===b && b===c) {
    return "equilateral";
    } else if(a===b || b===c || a===c){
        return "isosceles";
    }else {
        return "scalene";
    }
}

console.log(checkTriangleType(10, 20, 10));
console.log(checkTriangleType(10, 10, 10));