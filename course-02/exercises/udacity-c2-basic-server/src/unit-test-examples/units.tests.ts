import { add, divide, concat } from './units';

import { expect } from 'chai';
import 'mocha';

describe('add function', () => {

  it('should add two and two', () => {
    const result = add(2,2);
    expect(result).to.equal(4);
  });

  it('should add -2 and two', () => {
    const result = add(-2,2);
    expect(result).to.equal(0);
  });

});

describe('divide', () => {

  it('should divide 6 by 3', () => {
    const result = divide(6,3);
    expect(result).to.equal(2);
  });

  it('should divide 5 and 2', () => {
    const result = divide(5,2);
    expect(result).to.equal(2.5);
  });

  it('should throw an error if div by zero', () => {
    expect(()=>{ divide(5,0) }).to.throw('div by 0')
  });

});



/**
 * it should contain an it block for each it statement in the units.ts
*/
describe('concat function', () => {
  it("should return a string containg both string parameters", 
    ()=> {
    expect(concat("Vascon", "celos")).to.have.string("Vasconcelos");
  });

  it('should throw an error missing second parameter', () => {
    expect(()=>{ concat("only one", null) }).to.throw("It's necessary two strings")
  });

  it('should throw an error because it is missing first parameters', () => {
    expect(()=>{ concat(null, "only second parameter") }).to.throw("It's necessary two strings")
  });
})