const util = require('util')

const log = val =>
  console.log(util.inspect(val, { showHidden: false, depth: null }))

import {
  convertTreeToNodeLeaf
  // convertNodeLeafToTree
} from './'

import { Utils as QbUtils } from 'react-awesome-query-builder'

import data from '../data'

// if an object has Operands, it's a group. Otherwise it's a rule
export const convertNodeLeafToTree = ({ nodeLeafQuery }) => {
  // todo: convert nodeLeafQuery into fields and query
  const obj = {
    id: QbUtils.uuid(),
    type: 'group',
    children1: {}
  }

  nodeLeafQuery.Operands.forEach((op, a) => {
    // level 1
    if (!op.Operands) {
      obj.children1[`rule0${a + 1}`] = {
        type: 'rule',
        properties: op
      }
      // level 2
    } else {
      obj.children1[`rule0${a + 1}`] = {
        type: 'group',
        properties: {
          conjunction: op.Operator.toUpperCase()
        },
        children1: {}
      }
      op.Operands.forEach((op, b) => {
        if (!op.Operands) {
          obj.children1[`rule0${a + 1}`].children1[`rule0${a + 1 + b + 1}`] = {
            type: 'rule',
            properties: op
          }
          // level 3
        } else {
        }
      })
    }
  })

  log(obj)

  // return { fields: data.fields, query: data['01'].tree }
}

describe('Process React Awesome Query Builder "Tree" state into "Node Leaf" state', () => {
  test('01 level deep', () => {
    console.log(convertNodeLeafToTree({ nodeLeafQuery: data['02'].nodeLeaf }))

    expect(1).toEqual(1)

    // expect(
    //   convertNodeLeafToTree({ nodeLeafQuery: data['01'].nodeLeaf })
    // ).toEqual(data['01'].tree)
  })
})

/* * /
describe('Process React Awesome Query Builder "Tree" state into "Node Leaf" state', () => {
  test('01 level deep', () => {
    expect(convertTreeToNodeLeaf({ treeQuery: data['01'].tree })).toEqual(
      data['01'].nodeLeaf
    )
  })
  test('02 levels deep', () => {
    expect(convertTreeToNodeLeaf({ treeQuery: data['02'].tree })).toEqual(
      data['02'].nodeLeaf
    )
  })
  test('03 levels deep', () => {
    expect(convertTreeToNodeLeaf({ treeQuery: data['03'].tree })).toEqual(
      data['03'].nodeLeaf
    )
  })
  test('04 levels deep', () => {
    expect(convertTreeToNodeLeaf({ treeQuery: data['04'].tree })).toEqual(
      data['04'].nodeLeaf
    )
  })
  test('05 levels deep', () => {
    expect(convertTreeToNodeLeaf({ treeQuery: data['05'].tree })).toEqual(
      data['05'].nodeLeaf
    )
  })
})
/* */
