import { Parser } from "acorn"
const acornParser = Parser.extend(require("acorn-jsx")())

const parseToReact = (str) => {
  function buildElement(nodeList) {
    const elements = []

    nodeList.map(node => {
      if (node.type === "JSXElement") {
        const { children, openingElement } = node
        const { attributes } = openingElement
        const attsObj = {}
        attributes.forEach((item) => {
          attsObj[item.name.name] = item.value.value;
        })

        const el = React.createElement(
          openingElement.name.name,
          { key: Math.random().toString(36).substring(7), ...attsObj },
          children.length ? buildElement(children || []) : null
        )

        elements.push(el)
      } else if (node.type === "JSXText") {
        const { value } = node
        elements.push(value)
      }
    })

    return elements
  }

  try {
    const astTree = acornParser.parse(str)
    const expression = astTree.body[0].expression
    return buildElement([expression])
  } catch {
    return null
  }

}

export default parseToReact