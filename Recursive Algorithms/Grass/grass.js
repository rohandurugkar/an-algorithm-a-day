var generateGrass = function(x1, y1, angle, depth) {
    //base case
    if(depth === 0){
        return;
    }

    //manipulating values of x1 and y1
    var x2 = x1 + Math.cos((angle*180/Math.PI)) * depth * 10;
    var y2 = y1 + Math.sin((angle*180/Math.PI)) * depth * 10;

    //generating random shade of green
    var randomShadeOfGreen = Math.random() * (255 - 0) + 0;

    //drawing green lines
    stroke(0, randomShadeOfGreen, 0);
    line(x1, y1, x2, y2);

    //recursive calls
    generateGrass(x2, y2, angle + 65, depth - 1);
    generateGrass(x2, y2, angle - 65, depth - 1);
};

generateGrass(200, 200, -90 , 18);
