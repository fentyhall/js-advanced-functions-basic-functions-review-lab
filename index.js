function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper = "*") {
    return function(string = "special") {
        return `You are ${wrapper}${string}${wrapper}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b;
    }
}

const actionApplyer = function(start, arr) {
    let int = start;
    for (let fn of arr) {
        int = fn(int)
    }
    return int;
}