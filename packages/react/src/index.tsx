import { styli } from '@styli/core'
import presetDefault from '@styli/preset-default'
import { styled } from '@styli/styled'

export const View = styled('div')
export const Text = styled('span')
export const Button = styled('button')
export const Image = styled('img')
export const Anchor = styled('a')
export const Heading = styled('h2')
export const Input = styled('input')
export const Svg = styled('svg')

export * from '@styli/theming'
export * from '@styli/core'
export * from '@styli/styled'
export * from './Box'
export { jsx } from './jsx'

styli.configure(() => presetDefault)
