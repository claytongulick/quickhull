# QuickHull
A pure javascript implementation of the QuickHull algorithm for finding the smallest polygon enclosing a set of points

## Install

    npm install quickhull

## Usage
    let QuickHull = require('quickhull');

    let points = [
        {x: 1, y:1},
        {x: 5, y: 10},
        {x: 4, y: 11},
        {x: 9, y: 2}
    ];

    let hull = QuickHull(points);

    console.log(JSON.stringify(hull)); //TA-DA!
