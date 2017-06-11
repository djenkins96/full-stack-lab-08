//shape, circle, triangle, rectangle, square

function Shape(name, height, width) {
    this.x = Math.random() * 500;
    this.y = Math.random() * 500;
    this.height = height;
    this.width = width;
    this.div = document.createElement('div');
    this.div.className = 'shape';
    this.div.style.top = this.y + 'px';
    this.div.style.left = this.x + 'px';
    document.getElementById('sand-box').appendChild(this.div);
    this.div.addEventListener('dblclick', function () {
        this.divClick();
    }.bind(this));
    this.div.addEventListener('click', function () {
        console.log('you clicked this div!')
    }.bind(this));
}

Shape.prototype.divClick = function () {
    this.div.remove();
}

function Rectangle(height, width) {
    Shape.call(this, 'Rectangle', height, width);
    this.height = height;
    this.width = width;
    this.div.height = rectangleHeight.value + 'px';
    this.div.width = rectangleWidth.value + 'px';
    this.div.className = 'rectangle';
}

// rectangle button
var rectangleHeight = document.getElementById('rectangle-height');
var rectangleWidth = document.getElementById('rectangle-width');

document.getElementById('rectangle-button').addEventListener('click', function () {
    new Rectangle(rectangleHeight.value, rectangleWidth.value);
    
})

var circleVal = document.getElementById('circle-form');

function Circle(radius) {
    Shape.call(this, 'Circle', radius, null);
    this.radius = radius;
    this.div.style.width = this.diameter() + 'px';
    this.div.style.height = this.diameter() + 'px';
    this.div.className = 'circle';

}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
//circle button
document.getElementById('circle-button').addEventListener('click', function () {
    new Circle(circleVal.value);
})


Circle.prototype.area = function () {
    return Math.PI * Math.pow(this.radius, 2);
}
Circle.prototype.perimeter = function () {
    return 2 * Math.PI * this.radius;
}
Circle.prototype.diameter = function () {
    return 2 * this.radius;
}



var Triangle = function (height, width) {
    Shape.call(this, 'Triangle', height, width);
    this.height = 0;
    this.width = 0;
    this.div.className = 'triangle';
    this.div.style.height = triangleVal.value + 'px';
    this.div.style.width = triangleVal.value + 'px';
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

//trianglebutton
document.getElementById('triangle-button').addEventListener('click', function () {
    new Triangle(triangleVal.value, triangleVal.value);
});

var triangleVal = document.getElementById('triangle-form');














