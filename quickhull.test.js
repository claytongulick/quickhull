var QuickHull = require('./quick_hull');
describe("QuickHull Tests", function () {

    test("Works", function () {
        //this is a diamond with a few points inside
        var points = [
            {x:0, y: 1}, //top
            {x:-1,y:0}, //left
            {x:1, y:0 }, //right
            {x:0, y:-1 }, // bottom
            {x:.3, y:.3}, //inside point
            {x:-.3, y:-.3}, //inside point
            {x:.3, y:-.3}, //inside point
            {x:-.3, y:.3} //inside point
        ];

        var hull = QuickHull(points);
        expect(hull.length).toEqual(5); //5 points because it's a path that joins back to the first point

    });

});
