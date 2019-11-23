class Dog {
    constructor(name: string) {
        this.name = name;
    }

    name: string;

    run() {
    }
}

let dog =  new Dog('dsflkjsdlfkj');

class Husky extends Dog {
    constructor(name:string,color:string){
        super('name');
        this.color = color;
    }
    color:string;
}

