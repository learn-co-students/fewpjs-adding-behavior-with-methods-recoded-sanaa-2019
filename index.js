// Your code here
class Cat {
  //...
  consrtuctor(name,sex){
    this.name = name;
    this.sex = sex;
  }
  let speak=function(){
    return `${name} says meow!`;
  }
}
 
class Dog {
  //...
   consrtuctor(name,sex){
    this.name = name;
    this.sex = sex;
  }  
    let speak=function(){
    return `${name} says woof!`;
  }
}
 
class Bird {
  //...
   consrtuctor(name,sex){
    this.name = name;
    this.sex = sex;
  }
  let speak=function(){
    if(this.sex=='female')
      return `${name} says squawk!`;
    else if (this.sex=='male')
    {
      return  "It's me! " +this.name + ", the parrot!";
    }
  }
}
