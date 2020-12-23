export const ELEMENT_PLACEHOLDER = 'Select HTML element*';
export const DISPLAY_PLACEHOLDER = 'Select display property*';
export const POSITION_PLACEHOLDER = 'Select position property*';

export enum Elements {
    div = 'div',
    span = 'span',
    p = 'p',
    a = 'a',
    thead = 'thead',
    tbody = 'tbody',
    h1 = 'h1',
    ul = 'ul',
    li = 'li'

}

export enum DisplayProperty {
    block = 'block',
    inline = 'inline',
    runIn = 'run-in',
    flow = 'flow',
    flowRoot = 'flow-root',
    table = 'table',
    flex = 'flex',
    grid = 'grid',
    ruby = 'ruby',
    none = 'none',
    inlineBlock = 'inline-block',
    inlineTable = 'inline-table',
    inlineFlex = 'inline-flex',
    inlineGrid = 'inline-grid',
    initial = 'initial',
    unset = 'unset'
}

export enum PositionProperty {
    static = 'static',
    relative = 'relative',
    absolute = 'absolute',
    fixed = 'fixed',
    sticky = 'sticky'
}
