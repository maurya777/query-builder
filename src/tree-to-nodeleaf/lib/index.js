import { processRuleFields } from './process-fields'

// this is where we process React Awesome Query Builder Tree state into Node Leaf state
export const convertTreeToNodeLeaf = ({ treeQuery }) => {
  const recurse = ({ children }) =>
    Object.entries(children)
      .map(val => val[1])
      .map(({ type, properties, children1 }) =>
        type === 'rule'
          ? {
              ...processRuleFields({ ...properties })
            }
          : {
              Operator: properties.conjunction.toLowerCase(),
              Operands: recurse({ children: children1 })
            }
      )

  return {
    Operator: 'and',
    Operands: recurse({ children: treeQuery.children1 })
  }
}
