// console.log(this);

var ob1 = {
    name: 'Nikunj',
    lastName: 'Pansuriya'
}


var f1 = function() {
    console.log("function 1");
    console.log(this);
    var f2 = function() {
        console.log("function 2");
        console.log(this);
        var f3 = function() {
            console.log("function 3");
            console.log(this);
            var f4 = function() {
                console.log("function 4");
                console.log(this);
                var f5 = function() {
                    console.log("function 5");
                    console.log(this);
                    var f6 = function() {
                        console.log("function 6");
                        console.log(this);
                        var f7 = function() {
                            console.log("function7");
                            console.log(this);
                            var f8 = function() {
                                console.log("function 8");
                                console.log(this);
                            }
                            f8();
                        }
                        f7();
                    }
                    f6();
                }
                f5();
            }
            f4();
        }
        f3();
    }
    f2();
}
f1();