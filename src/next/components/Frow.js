import React from 'react'
import PropTypes from 'prop-types'

const Frow = ({container, nonfluid, gutters, row, column, centered, justify, items, content, nowrap, inline, xs, sm, md, lg, visible, hidden, myself, grow, shrink, component: Tag = 'div', hug, className, style, children, ...props}) => {
  // if(React.Children.count(children) === 0) {
  //   return null
  // }

  let config = []
  container && config.push(nonfluid ? 'frow-container' : 'frow')
  gutters && config.push('gutters')
  row && config.push(typeof row === 'string' ? `row-${row}` : 'direction-row')
  column && config.push(typeof column === 'string' ? `column-${column}` : 'direction-column')
  centered && config.push(column ? 'centered-column' : 'centered')
  justify && config.push(`justify-${justify}`)
  items && config.push(`items-${items}`)
  content && config.push(`content-${content}`)
  nowrap && config.push('nowrap')
  inline && config.push('inline')
  xs && config.push(`col-xs-${xs === 'auto' ? 'auto' : xs.replace("/", "-")}`)
  sm && config.push(`col-sm-${sm === 'auto' ? 'auto' : sm.replace("/", "-")}`)
  md && config.push(`col-md-${md === 'auto' ? 'auto' : md.replace("/", "-")}`)
  lg && config.push(`col-lg-${lg === 'auto' ? 'auto' : lg.replace("/", "-")}`)
  visible && visible.forEach(item => config.push(`visible-${item}`))
  hidden && hidden.forEach(item => config.push(`hidden-${item}`))
  myself && config.push(`self-${myself}`)
  className && config.push(className)

  const flexedStyle = {
    ...style,
    flexGrow: grow,
    flexShrink: shrink,
  }

  if (hug || React.Children.count(children) > 1) {
    return (
    <Tag className={config.join(' ')} style={flexedStyle} {...props}>
      {children}
    </Tag>
    )
  } else {
    const child = React.Children.only(children)

    const { className: childClassName, style: childStyle, ...childProps } = child.props

    childClassName && config.push(childClassName)

    return React.cloneElement(child, { className: config.join(' '),  style: { ...flexedStyle, ...childStyle }, ...props, ...childProps })
  }
}

Frow.propTypes = {
  container: PropTypes.bool,
  nonfluid: PropTypes.bool,
  gutters: PropTypes.bool,
  row: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['center', 'start', 'end', 'between', 'around'])
  ]),
  column: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['center', 'start', 'end'])
  ]),
  centered: PropTypes.bool,
  justify: PropTypes.oneOf(['center', 'start', 'end', 'between', 'around']),
  items: PropTypes.oneOf(['center', 'start', 'end', 'stretch', 'baseline']),
  content: PropTypes.oneOf(['center', 'start', 'end', 'between', 'around']),
  nowrap: PropTypes.bool,
  inline: PropTypes.bool,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  component: PropTypes.element
}

export default Frow
