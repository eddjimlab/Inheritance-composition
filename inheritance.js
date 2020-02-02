class Programmer {
    constructor(name) {
        this.name = name;
    }
    code() {
        console.log(`${this.name}  can code ...`)
    }
}
const programmer = new Programmer('Programmer1');
programmer.code();
//=============
class Frontender extends Programmer {
    angular () {
        console.log(`${this.name} code Angular ...`)
    }
}
const frontender = new Frontender('Frontender 1');
frontender.code();
frontender.angular();
//============
class Backender extends Programmer{
    node () {
        console.log(`${this.name} code Node.js...`)
    }
}
const backender = new Backender('Backender 1');
backender.code();
backender.node();
// If yuo like to add new class Fullstack. So you have to repeat some code.
class Fullstack extends Frontender{
    node () {
        console.log(`${this.name} code Node.js...`)
    }
}
const fullstack = new Fullstack('Vlad');
fullstack.code();
fullstack.angular();
fullstack.node();
