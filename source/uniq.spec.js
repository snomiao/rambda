import {uniq} from './uniq'
import {uniq as ramdaUniq} from 'ramda'

test('happy', () => {
  const list = [1, 2, 3, 3, 3, 1, 2, 0]
  expect(uniq(list)).toEqual([1, 2, 3, 0])
})

test.only('with object', () => {
  const list = [{a: 1}, {a: 2}, {a: 1}, {a:2}]
  expect(uniq(list)).toEqual([{a: 1}, {a: 2}])
})

test.skip('with nested array', () => {
  const result = ramdaUniq([[42], [42]])
  console.log(`result`, result )
  expect(uniq([[42], [42]])).toEqual([[42]])
})

test('with falsy values', () => {
  expect(uniq([undefined, null])).toEqual([undefined, null])
})

test('can distinct between string and number', () => {
  expect(uniq([1, '1'])).toEqual([1, '1'])
})
