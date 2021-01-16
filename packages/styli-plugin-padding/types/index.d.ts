import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set padding
     *
     * @example
     * ```tsx
     * <View p-10></View>
     * <View p-1rem></View>
     * <View p-10p></View>
     * <View p={10}></View>
     * <View p="10px 4px"></View>
     * <View p={a + b}></View>
     * ```
     */
    p?: PropValue

    /**
     * Set padding
     *
     * NOTE: Theme restrict.

     *
     * p0 is `padding: 0px`
     */
    p0?: boolean

    /**
     * Set padding
     *
     * NOTE: Theme restrict.

     *
     * p1 is `padding: 4px`
     */
    p1?: boolean

    /**
     * Set padding
     *
     * NOTE: Theme restrict.

     *
     * p2 is `padding: 8px`
     */
    p2?: boolean

    /**
     * Set padding
     *
     * NOTE: Theme restrict.

     *
     * p3 is `padding: 12px`
     */
    p3?: boolean

    /**
     * Set padding
     *
     * NOTE: Theme restrict.

     *
     * p4 is `padding: 16px`
     */
    p4?: boolean

    /**
     * Set padding
     *
     * NOTE: Theme restrict.

     *
     * p5 is `padding: 20px`
     */
    p5?: boolean

    /**
     * Set padding
     *
     * NOTE: Theme restrict.

     *
     * p6 is `padding: 24px`
     */
    p6?: boolean

    /**
     * Set padding
     *
     * NOTE: Theme restrict.

     *
     * p7 is `padding: 28px`
     */
    p7?: boolean

    /**
     * Set padding
     *
     * NOTE: Theme restrict.

     *
     * p8 is `padding: 32px`
     */
    p8?: boolean

    /**
     * Set padding
     *
     * NOTE: Theme restrict.

     *
     * p9 is `padding: 36px`
     */
    p9?: boolean

    p10?: boolean
    p11?: boolean
    p12?: boolean
    p13?: boolean
    p14?: boolean
    p15?: boolean
    p16?: boolean
    p17?: boolean
    p18?: boolean
    p19?: boolean
    p20?: boolean

    /**
     * Set padding horizontal
     *
     * px-10 is `padding-left: 10px; padding-right: 10px;`
     *
     * @example
     * ```tsx
     * <View px-10></View>
     * <View px-1rem></View>
     * <View px-10p></View>
     * <View px={a + b}></View>
     * ```
     */
    px?: PropValue

    /**
     * Set paddingLeft and paddingRight
     *
     * NOTE: Theme restrict.

     *
     * px0 is `padding-left: 0px; padding-right: 0px`
     */
    px0?: boolean

    /**
     * Set paddingLeft and paddingRight
     *
     * NOTE: Theme restrict.

     *
     * px1 is `padding-left: 4px; padding-right: 4px`
     */
    px1?: boolean

    /**
     * Set paddingLeft and paddingRight
     *
     * NOTE: Theme restrict.

     *
     * px2 is `padding-left: 8px; padding-right: 8px`
     */
    px2?: boolean

    /**
     * Set paddingLeft and paddingRight
     *
     * NOTE: Theme restrict.

     *
     * px3 is `padding-left: 12px; padding-right: 12px`
     */
    px3?: boolean

    /**
     * Set paddingLeft and paddingRight
     *
     * NOTE: Theme restrict.

     *
     * px4 is `padding-left: 16px; padding-right: 16px`
     */
    px4?: boolean

    /**
     * Set paddingLeft and paddingRight
     *
     * NOTE: Theme restrict.

     *
     * px5 is `padding-left: 20px; padding-right: 20px`
     */
    px5?: boolean

    /**
     * Set paddingLeft and paddingRight
     *
     * NOTE: Theme restrict.

     *
     * px6 is `padding-left: 24px; padding-right: 24px`
     */
    px6?: boolean

    /**
     * Set paddingLeft and paddingRight
     *
     * NOTE: Theme restrict.

     *
     * px7 is `padding-left: 28px; padding-right: 28px`
     */
    px7?: boolean

    /**
     * Set paddingLeft and paddingRight
     *
     * NOTE: Theme restrict.

     *
     * px8 is `padding-left: 32px; padding-right: 32px`
     */
    px8?: boolean

    /**
     * Set paddingLeft and paddingRight
     *
     * NOTE: Theme restrict.

     *
     * px9 is `padding-left: 36px; padding-right: 36px`
     */
    px9?: boolean
    px10?: boolean
    px11?: boolean
    px12?: boolean
    px13?: boolean
    px14?: boolean
    px15?: boolean
    px16?: boolean
    px17?: boolean
    px18?: boolean
    px19?: boolean
    px20?: boolean

    /**
     * Set padding vertical
     *
     * py-10 is `padding-top: 10px; padding-bottom: 10px;`
     *
     * @example
     * ```tsx
     * <View py-10></View>
     * <View py-1rem></View>
     * <View py-10p></View>
     * <View py={a + b}></View>
     * ```
     */
    py?: PropValue

    /**
     * Set paddingTop and paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * py0 is `padding-left: 0px; padding-right: 0px`
     */
    py0?: boolean

    /**
     * Set paddingTop and paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * py1 is `padding-left: 4px; padding-right: 4px`
     */
    py1?: boolean

    /**
     * Set paddingTop and paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * py2 is `padding-left: 8px; padding-right: 8px`
     */
    py2?: boolean

    /**
     * Set paddingTop and paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * py3 is `padding-left: 12px; padding-right: 12px`
     */
    py3?: boolean

    /**
     * Set paddingTop and paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * py4 is `padding-left: 16px; padding-right: 16px`
     */
    py4?: boolean

    /**
     * Set paddingTop and paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * py5 is `padding-left: 20px; padding-right: 20px`
     */
    py5?: boolean

    /**
     * Set paddingTop and paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * py6 is `padding-left: 24px; padding-right: 24px`
     */
    py6?: boolean

    /**
     * Set paddingTop and paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * py7 is `padding-left: 28px; padding-right: 28px`
     */
    py7?: boolean

    /**
     * Set paddingTop and paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * py8 is `padding-left: 32px; padding-right: 32px`
     */
    py8?: boolean

    /**
     * Set paddingTop and paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * py9 is `padding-left: 36px; padding-right: 36px`
     */
    py9?: boolean
    py10?: boolean
    py11?: boolean
    py12?: boolean
    py13?: boolean
    py14?: boolean
    py15?: boolean
    py16?: boolean
    py17?: boolean
    py18?: boolean
    py19?: boolean
    py20?: boolean

    /**
     * Set paddingTop
     *
     * @example
     * ```tsx
     * <View pt-10></View>
     * <View pt-1rem></View>
     * <View pt-10p></View>
     * <View pt={10}></View>
     * <View pt="10px 4px"></View>
     * <View pt={a + b}></View>
     * ```
     */
    pt?: PropValue

    /**
     * Set paddingTop
     *
     * NOTE: Theme restrict.

     *
     * pt0 is `padding-top: 0px`
     */
    pt0?: boolean

    /**
     * Set paddingTop
     *
     * NOTE: Theme restrict.

     *
     * pt1 is `padding-top: 4px`
     */
    pt1?: boolean

    /**
     * Set paddingTop
     *
     * NOTE: Theme restrict.

     *
     * pt2 is `padding-top: 8px`
     */
    pt2?: boolean

    /**
     * Set paddingTop
     *
     * NOTE: Theme restrict.

     *
     * pt3 is `padding-top: 12px`
     */
    pt3?: boolean

    /**
     * Set paddingTop
     *
     * NOTE: Theme restrict.

     *
     * pt4 is `padding-top: 16px`
     */
    pt4?: boolean

    /**
     * Set paddingTop
     *
     * NOTE: Theme restrict.

     *
     * pt5 is `padding-top: 20px`
     */
    pt5?: boolean

    /**
     * Set paddingTop
     *
     * NOTE: Theme restrict.

     *
     * pt6 is `padding-top: 24px`
     */
    pt6?: boolean

    /**
     * Set paddingTop
     *
     * NOTE: Theme restrict.

     *
     * pt7 is `padding-top: 28px`
     */
    pt7?: boolean

    /**
     * Set paddingTop
     *
     * NOTE: Theme restrict.

     *
     * pt8 is `padding-top: 32px`
     */
    pt8?: boolean

    /**
     * Set paddingTop
     *
     * NOTE: Theme restrict.

     *
     * pt9 is `padding-top: 36px`
     */
    pt9?: boolean
    pt10?: boolean
    pt11?: boolean
    pt12?: boolean
    pt13?: boolean
    pt14?: boolean
    pt15?: boolean
    pt16?: boolean
    pt17?: boolean
    pt18?: boolean
    pt19?: boolean
    pt20?: boolean

    /**
     * Set padding bottom, pb is padding-bottom
     *
     * @example
     * ```tsx
     * <View pb-10></View>
     * <View pb-1rem></View>
     * <View pb-10p></View>
     * <View pb={10}></View>
     * <View pb="10px 4px"></View>
     * <View pb={a + b}></View>
     * ```
     */
    pb?: PropValue

    /**
     * Set paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * pb0 is `padding-bottom: 0px`
     */
    pb0?: boolean

    /**
     * Set paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * pb1 is `padding-bottom: 4px`
     */
    pb1?: boolean

    /**
     * Set paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * pb2 is `padding-bottom: 8px`
     */
    pb2?: boolean

    /**
     * Set paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * pb3 is `padding-bottom: 12px`
     */
    pb3?: boolean

    /**
     * Set paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * pb4 is `padding-bottom: 16px`
     */
    pb4?: boolean

    /**
     * Set paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * pb5 is `padding-bottom: 20px`
     */
    pb5?: boolean

    /**
     * Set paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * pb6 is `padding-bottom: 24px`
     */
    pb6?: boolean

    /**
     * Set paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * pb7 is `padding-bottom: 28px`
     */
    pb7?: boolean

    /**
     * Set paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * pb8 is `padding-bottom: 32px`
     */
    pb8?: boolean

    /**
     * Set paddingBottom
     *
     * NOTE: Theme restrict.

     *
     * pb9 is `padding-bottom: 36px`
     */
    pb9?: boolean
    pb10?: boolean
    pb11?: boolean
    pb12?: boolean
    pb13?: boolean
    pb14?: boolean
    pb15?: boolean
    pb16?: boolean
    pb17?: boolean
    pb18?: boolean
    pb19?: boolean
    pb20?: boolean

    /**
     * Set paddingRight
     *
     * @example
     * ```tsx
     * <View pr-10></View>
     * <View pr-1rem></View>
     * <View pr-10p></View>
     * <View pr={10}></View>
     * <View pr="10px 4px"></View>
     * <View pr={a + b}></View>
     * ```
     */
    pr?: PropValue

    /**
     * Set paddingRight
     *
     * NOTE: Theme restrict.

     *
     * pr0 is `padding-right: 0px`
     */
    pr0?: boolean

    /**
     * Set paddingRight
     *
     * NOTE: Theme restrict.

     *
     * pr1 is `padding-right: 4px`
     */
    pr1?: boolean

    /**
     * Set paddingRight
     *
     * NOTE: Theme restrict.

     *
     * pr2 is `padding-right: 8px`
     */
    pr2?: boolean

    /**
     * Set paddingRight
     *
     * NOTE: Theme restrict.

     *
     * pr3 is `padding-right: 12px`
     */
    pr3?: boolean

    /**
     * Set paddingRight
     *
     * NOTE: Theme restrict.

     *
     * pr4 is `padding-right: 12px`
     */
    pr4?: boolean

    /**
     * Set paddingRight
     *
     * NOTE: Theme restrict.

     *
     * pr5 is `padding-right: 16px`
     */
    pr5?: boolean

    /**
     * Set paddingRight
     *
     * NOTE: Theme restrict.

     *
     * pr6 is `padding-right: 24px`
     */
    pr6?: boolean

    /**
     * Set paddingRight
     *
     * NOTE: Theme restrict.

     *
     * pr7 is `padding-right: 28px`
     */
    pr7?: boolean

    /**
     * Set paddingRight
     *
     * NOTE: Theme restrict.

     *
     * pr8 is `padding-right: 32px`
     */
    pr8?: boolean

    /**
     * Set paddingRight
     *
     * NOTE: Theme restrict.

     *
     * pr9 is `padding-right: 36px`
     */
    pr9?: boolean
    pr10?: boolean
    pr11?: boolean
    pr12?: boolean
    pr13?: boolean
    pr14?: boolean
    pr15?: boolean
    pr16?: boolean
    pr17?: boolean
    pr18?: boolean
    pr19?: boolean
    pr20?: boolean

    /**
     * Set paddingLeft
     *
     * @example
     * ```tsx
     * <View pl-10></View>
     * <View pl-1rem></View>
     * <View pl-10p></View>
     * <View pl={10}></View>
     * <View pl="10px 4px"></View>
     * <View pl={a + b}></View>
     * ```
     */
    pl?: PropValue

    /**
     * Set paddingLeft
     *
     * NOTE: Theme restrict.

     *
     * pl0 is `padding-left: 0px`
     */
    pl0?: boolean

    /**
     * Set paddingLeft
     *
     * NOTE: Theme restrict.

     *
     * pl1 is `padding-left: 4px`
     */
    pl1?: boolean

    /**
     * Set paddingLeft
     *
     * NOTE: Theme restrict.

     *
     * pl2 is `padding-left: 8px`
     */
    pl2?: boolean

    /**
     * Set paddingLeft
     *
     * NOTE: Theme restrict.

     *
     * pl3 is `padding-left: 12px`
     */
    pl3?: boolean

    /**
     * Set paddingLeft
     *
     * NOTE: Theme restrict.

     *
     * pl4 is `padding-left: 16px`
     */
    pl4?: boolean

    /**
     * Set paddingLeft
     *
     * NOTE: Theme restrict.

     *
     * pl5 is `padding-left: 20px`
     */
    pl5?: boolean

    /**
     * Set paddingLeft
     *
     * NOTE: Theme restrict.

     *
     * pl6 is `padding-left: 24px`
     */
    pl6?: boolean

    /**
     * Set paddingLeft
     *
     * NOTE: Theme restrict.

     *
     * pl7 is `padding-left: 28px`
     */
    pl7?: boolean

    /**
     * Set paddingLeft
     *
     * NOTE: Theme restrict.

     *
     * pl8 is `padding-left: 32px`
     */
    pl8?: boolean

    /**
     * Set paddingLeft
     *
     * NOTE: Theme restrict.

     *
     * pl9 is `padding-left: 36px`
     */
    pl9?: boolean
    pl10?: boolean
    pl11?: boolean
    pl12?: boolean
    pl13?: boolean
    pl14?: boolean
    pl15?: boolean
    pl16?: boolean
    pl17?: boolean
    pl18?: boolean
    pl19?: boolean
    pl20?: boolean
  }
}
