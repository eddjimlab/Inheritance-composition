function createProgrammer(name) {
    //мы создаем объект, в которую передаем переменую и присваиваем переменную из функции
    //если оба имени совпадают можно оставить одно
    // const programmer = {name: name};
    const programmer = {name};
    return {
        ...programmer,
        ...canCode(programmer)
    }
}

function createFrontender(name) {
    const frontender = createProgrammer(name);
    return {
        ...frontender,
        ...canAngular(frontender)
    }
}

function createBackend(name) {
    const backender = createProgrammer(name);
    return {
        ...backender,
        ...canNode(backender)
    }
}

function createFullstack(name) {
    const fullstack = createProgrammer(name);
    return {
        ...fullstack,
        ...canNode(fullstack),
        ...canAngular(fullstack),
        ...canVueandReact(fullstack)
    }

}

//внимание здесь принимает объект
function canCode({name}) {
    return {
        code: () => console.log(`${name} can code ...`)
    }
}

function canAngular({name}) {
    return {
        angular: () => console.log(`${name} can code Angular ...`)
    }
}

function canNode({name}) {
    return {
        node: () => console.log(`${name} can code Node.js ...`)
    }
}
function canVueandReact({name}){
    return {
        vueandreact: () => console.log(`${name} can code React and Vue`)
    }
}

const programmer = createProgrammer('Greg');
programmer.code();

const frontender1 = createFrontender('Eduard');
frontender1.code();
frontender1.angular();
const backender1 = createBackend('Dimon');
backender1.code();
backender1.node();
const fullstack1 = createFullstack('Vlad');
fullstack1.code();
fullstack1.node();
fullstack1.angular();
fullstack1.vueandreact();
