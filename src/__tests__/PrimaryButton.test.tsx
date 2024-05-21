import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import PrimaryButton from '@components/Fragments/PrimaryButton'
import AchievementIcon from '@assets/icons/achievement-outline.svg?react'

describe('PrimaryButton', () => {
  test('renders', () => {
    const { container: elm } = render(<PrimaryButton>My Button</PrimaryButton>)

    expect(elm).toBeDefined()
    expect(elm.querySelector('span:first-child')).toBeDefined()
    expect(elm.querySelector('span:first-child')?.innerHTML).toBe('My Button')
    expect(elm.querySelector('span:nth-child(2)')).toBeNull()
  })
})

describe('PrimaryButton with Icon', () => {
  test('renders', () => {
    const { container: elm } = render(<PrimaryButton icon={<AchievementIcon />}>My Button</PrimaryButton>)

    expect(elm).toBeDefined()
    expect(elm.querySelector('span:first-child')).toBeDefined()
    expect(elm.querySelector('span:first-child')?.innerHTML).toBe('My Button')
    expect(elm.querySelector('span:last-child > svg')).toBeDefined()
  })
})
