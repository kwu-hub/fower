import { PlainObject, StyliStyle } from '../types'
import { getValue, kebab } from '../utils'

const canUseDom = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

interface ToCSSConfig {
  mediaList?: number[]
}

export class ToCss {
  name: string
  version: string
  config: ToCSSConfig
  styliTag: any
  mediaStyliTag: any

  constructor(config: ToCSSConfig) {
    this.name = 'className'
    this.version = '1.0.0'
    this.config = config

    this.styliTag = this.generateStyliTag('styli')
    this.mediaStyliTag = (this.config.mediaList || []).map((v) => this.generateMediaStyliTag(v))
  }

  generateStyliTag(name: string) {
    const tag = document.createElement('style')
    tag.dataset.styli = name
    document.querySelector('head')?.append(tag)
    return tag
  }

  generateMediaStyliTag(value: number) {
    const tag = this.generateStyliTag(`mediaStyli${value}`)
    tag.innerHTML = `@media (min-width: ${value}px}) {}`
    return tag
  }

  generateClassName = (function () {
    let seed = 0
    let cache: any = {}
    return (key: string) => {
      cache[key] = cache[key] || `styli-${seed++}`
      return cache[key]
    }
  })()

  styleToCss(style: StyliStyle) {
    let className = this.generateClassName(JSON.stringify(style))
    let cssFragment = ''
    let cssFragmentList: string[] = []
    for (let [key, value] of Object.entries(style)) {
      const cssKeyName = kebab(key)
      // media queries
      if (Array.isArray(value)) {
        const mediaList = this.config.mediaList
        if (!mediaList || !mediaList.length) {
          throw new Error('mediaList is not provide, array value is not support')
        }
        for (let i = 0; i < mediaList.length; i++) {
          cssFragmentList[i] = `${cssFragmentList[i] || ''} ${cssKeyName}: ${value[i]};`
        }
      } else {
        cssFragment = `${cssFragment} ${cssKeyName}: ${value};`
      }
    }

    cssFragmentList = cssFragmentList.map((fragment) => `.${className} { ${fragment} }`)
    cssFragment = `.${className} { ${cssFragment} }`

    return { cssFragment, className, cssFragmentList }
  }

  // get media size content
  getMediaTagContent(idx: number) {
    const content = this.mediaStyliTag[idx].innerHTML
    const [, match = ''] = content.match(/{(.*)}/) || []
    return match
  }

  // set media size content
  setMediaTagContent(idx: number, content: string) {
    const mediaList = this.config.mediaList || []
    this.mediaStyliTag[idx].innerHTML = `@media (min-width: ${getValue(
      mediaList[idx],
    )}) {${content}}`
  }

  // set common content
  setStyliTagContent(content: string) {
    this.styliTag.innerHTML = this.styliTag.innerHTML + content
  }

  exec(styliStyle: StyliStyle, props: PlainObject) {
    if (!canUseDom) {
      throw new Error('current environment is not support this plugin')
    }
    const { cssFragment, className, cssFragmentList } = this.styleToCss(styliStyle)

    this.setStyliTagContent(cssFragment)

    cssFragmentList.forEach((mediaCSSFragment, idx) => {
      const content = this.getMediaTagContent(idx)
      this.setMediaTagContent(idx, `${content} ${mediaCSSFragment}`)
    })

    return `${className} ${props.className || ''}`
  }
}
