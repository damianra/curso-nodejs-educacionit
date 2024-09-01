class Operations{
    constructor(val1, val2){
        this.val1 = val1;
        this.val2 = val2
    }

    sum() {
        return this.val1 + this.val2;
    }
    rest() {
        return this.val1 - this.val2;
    }
    mult() {
        return this.val1 * this.val2;
    }
    div() {
        return this.val1 / this.val2;
    }

}

const operaciones = new Operations(20, 5)

console.log(`La suma entre ${operaciones.a} y ${operaciones.b} es: ${operaciones.sum()}`)
console.log(`La resta entre ${operaciones.a} y ${operaciones.b} es: ${operaciones.rest()}`)
console.log(`La multiplicación entre ${operaciones.a} y ${operaciones.b} es: ${operaciones.mult()}`)
console.log(`La división entre ${operaciones.a} y ${operaciones.b} es: ${operaciones.div()}`)