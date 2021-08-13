import { convertNodeLeafToTree } from './'
import data from './data'

describe('Process React Awesome Query Builder "Node Leaf" state into "Tree" state', () => {
  test('01 level deep', () => {
    expect(convertNodeLeafToTree({ treeQuery: data['01'].nodeLeaf })).toEqual(
      data['01'].tree
    )
  })
})
