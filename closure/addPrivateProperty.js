function addPrivateProperty(o, name, predicate) {
  var value;  //这是一个属性值
  name = name.substring(0, 1).toUpperCase() + name.substring(1);

//getter方法简单的将其返回
  o["get" + name] = function () {
    return value;
  };

//setter方法首先检测值是否合法，若不合法就抛出异常
//否则将其存储起来
  o["set" + name] = function (v) {
    if (predicate && !predicate(v))
      throw Error("set" + name + ":invalid value" + v);
    else
      value = v;
  }
}

var o = {};   //设置一个空对象

addPrivateProperty(o, "name", function (x) {
  return typeof x == "string"
});

o.setName("Frank");         //setter属性
console.log(o.getName());   //getter属性
o.setName(o);               //试图设置错误属性
