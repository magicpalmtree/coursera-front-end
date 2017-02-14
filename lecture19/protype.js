var parent={
    value:"parentValue",
    obj:{
        objValue:"parentObjValue"
    },
    walk:function(){
        console.log("walking");
    }
};

var child=Object.create(parent);
child.value="childValue";
child.obj.objValue="childObjValue";

console.log("Child-child.value: ",child.value);
console.log("Child-child.obj.objValue: ",child.obj.objValue);
console.log("Child-child.walk: ",child.walk());