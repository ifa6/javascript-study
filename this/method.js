var foo = {x: 10};

var bar = {
  x: 20,
  test: function () {

    console.log(this === bar); // true
    console.log(this.x); // 20

//            this = foo; // 错误，任何时候不能改变this的值

    console.log(this.x); // 如果不出错的话，应该是10，而不是20

  }

};

// 在进入上下文的时候
// this被当成bar对象
// determined as "bar" object; why so - will
// be discussed below in detail

bar.test(); // true, 20

foo.test = bar.test;

// 不过，这里this依然不会是foo
// 尽管调用的是相同的function

foo.test(); // false, 10
