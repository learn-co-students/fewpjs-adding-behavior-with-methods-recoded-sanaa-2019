// Your code here
class Cat{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
       
    }
    speak(){
        return this.name+" says meow!";
    }
}

class Dog {
    constructor(name,sex ){
        this.name=name;
        this.sex=sex;
      
    }
    speak(){
        return this.name+" says woof!";
    }
  }
   
  class Bird {
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(){
        if(this.sex=="male"){
             return "It's me! "+this.name+", the parrot!";
        }
        else{
            return this.name+" says squawk!"
        }
       
    }
  }
  let dog=new Dog("hawhaw","male")
  dog.speak();
  let bird=new Bird("sawsaw","male")
  bird.speak();
  bird.sex="female"
  bird.speak();
///Done