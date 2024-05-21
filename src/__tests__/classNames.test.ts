import { expect, test } from 'vitest'
import classNames from '@functions/classNames'

test('concat className', () => {
  expect(classNames('hello', 'world')).toBe('hello world')
})
