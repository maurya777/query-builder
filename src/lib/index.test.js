const util = require('util')

const log = val =>
  console.log(util.inspect(val, { showHidden: false, depth: null }))

import {
  convertTreeToNodeLeaf
  // convertNodeLeafToTree
} from './'

import { Utils as QbUtils } from 'react-awesome-query-builder'
import { v4 as uuidv4 } from 'uuid'

import data from '../data'

// if an object has Operands, it's a group. Otherwise it's a rule
export const convertNodeLeafToTree = ({ nodeLeafQuery }) => {
  // todo: convert nodeLeafQuery into fields and query
  const obj = {
    id: QbUtils.uuid(),
    type: 'group',
    children1: {}
  }

  nodeLeafQuery.Operands.forEach(op => {
    // level 1
    if (!op.Operands) {
      const id_1 = uuidv4()

      obj.children1[id_1] = {
        type: 'rule',
        properties: op
      }
      // level 2
    } else {
      obj.children1[uuidv4()] = {
        type: 'group',
        properties: {
          conjunction: 'AND' // todo: get this from data
        },
        children1: {}
      }
      // op.Operands.forEach(op => {
      //   console.log(op)
      // })
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
