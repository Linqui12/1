class RangeValidator{
    constructor(form,to){this.form(form),this.to(to);}
    getterRange(){return[form,to]}
    setterRange(form,to){constructor(form,to)}

};

console.log(5);
let test=new RangeValidator(5,7);
let test1=test.getterRange();
console.log(test1);