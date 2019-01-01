/*高阶函数：将函数作为参数的函数
* 无状态函数组件（函数组件）：返回的结果为JSX的函数
* 高阶组件：将组件作为参数，返回的结果也是一个组件的函数*/

// function qianFeng(){
//     var userName="老铁";
//     console.log("我在千锋学习"+userName);
// }
// function home(){
//     var userName="老铁";
//     console.log("我在家里学习"+userName);
// }
// qianFeng();
// home();


function my(me){
    var fn=()=>{
        // 处理了一些重复内容
        var userName="老张";
        me(userName);
    }
    return fn;
}
function qianFeng(userName){
    console.log("我在千锋学习"+userName);
}
function home(userName){
    console.log("我在家里学习"+userName);
}
var qianFeng=my(qianFeng);
var home=my(home);
qianFeng();
home();


