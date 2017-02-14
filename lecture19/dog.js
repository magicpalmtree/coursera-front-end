function Dog(name){
    this.name=name;
    console.log("'this' is: ",this);
};

var myDog=new Dog("Max");
//console.log("myDog: ",myDog);

Dog("Max2");