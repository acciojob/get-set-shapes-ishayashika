//complete this code
class Rectangle {
	constructor(_width,_height){
		this._width=_width;
		this._height=_height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	getArea(){
		return this._width*this._height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		return this.width*4;
	}
}
const rectangle=new Rectangle(5,10);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.getArea());

const square=new Square(7);
console.log(square.width);
console.log(square.height);
console.log(square.getArea());
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
