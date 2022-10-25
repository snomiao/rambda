import { groupBy } from './groupBy.js'
import { prop } from './prop.js'

test('groupBy', () => {
  const list = [
    {
      age  : 12,
      name : 'john',
    },
    {
      age  : 12,
      name : 'jack',
    },
    {
      age  : 24,
      name : 'mary',
    },
    {
      age  : 24,
      name : 'steve',
    },
  ]
  const expectedResult = {
    12 : [
      {
        age  : 12,
        name : 'john',
      },
      {
        age  : 12,
        name : 'jack',
      },
    ],
    24 : [
      {
        age  : 24,
        name : 'mary',
      },
      {
        age  : 24,
        name : 'steve',
      },
    ],
  }

  expect(groupBy(prop('age'))(list)).toEqual(expectedResult)
  expect(groupBy(prop('age'), list)).toEqual(expectedResult)
})

test('groupBy with key="constructor"', () => {
  // groupBy "object.constructor" bug
  // call groupBy() something include "constructor"
  // at version rambda@7.3.0
  // this test will got TypeError: result[key].push is not a function, because constructor is a prototype prop of object
  expect(groupBy(prop('name'))([{name: "constructor"}])).toEqual({constructor: [{name: 'constructor'}]})
})
