import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from './App.tsx'

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
})