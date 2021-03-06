/**
 * Created by Rain on 2016/8/16.
 */
var f = v => v;

//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
var f2 = id => ({
  _id: 2
});

console.log(f2());

//（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
//（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
//（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。


