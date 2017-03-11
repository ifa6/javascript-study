/**
 * https://segmentfault.com/q/1010000008114430
 * Created by Rain on 2017/3/11.
 */

/*
 由我写的这篇文章中: JS中的关系比较与相等比较运算，里面有谈到相等比较运算的规则。

 []==![]的运算步骤为下:

 右值受了逻辑否运算(!)的影响会转为布尔值，跟据ECMAScript标准中的ToBoolean内部运算规定，数组为物件类型，转为true，前面因带了逻辑否运算(!)则反转布尔值，变为false。此运算变为[] == false。
 根据标准相等比较演算第(7)规则，Type(y)是Boolean时，进行x == ToNumber(y)，右值需经ToNumber内部运算，右值转变为0数字，此运算变为[] == 0
 根据标准相等比较演算第(9)规则(详略)，左值此时的数组为对象类型，进行ToPrimitive内部运算，左值得出空字符串""，此运算变为"" == 0
 根据标准相等比较演算第(5)规则(详略)，左值此时的空字串符进行ToNumber内部运算，得出0数字。此运算变为0 == 0
 因左值与右值此时为同数据类型，进行严格相等比较演算，依4-b规则，左值与右值为同样数字，最后得出true结果。
 以上，最终结果为true。

 整体运作逻辑就这样，规则里都有排愈前面的愈优先。
 */
// 为什么[]＝＝！[]／／true有优先级么