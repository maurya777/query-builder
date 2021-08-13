import { convertTreeToNodeLeaf, convertNodeLeafToTree } from './'
import data from './data'

// describe('Process React Awesome Query Builder "Tree" state into "Node Leaf" state', () => {
//   test('01 level deep', () => {
//     expect(convertTreeToNodeLeaf({ treeQuery: data['01'].tree })).toEqual(
//       data['01'].nodeLeaf
//     )
//   })
//   test('02 levels deep', () => {
//     expect(convertTreeToNodeLeaf({ treeQuery: data['02'].tree })).toEqual(
//       data['02'].nodeLeaf
//     )
//   })
//   test('03 levels deep', () => {
//     expect(convertTreeToNodeLeaf({ treeQuery: data['03'].tree })).toEqual(
//       data['03'].nodeLeaf
//     )
//   })
//   test('04 levels deep', () => {
//     expect(convertTreeToNodeLeaf({ treeQuery: data['04'].tree })).toEqual(
//       data['04'].nodeLeaf
//     )
//   })
//   test('05 levels deep', () => {
//     expect(convertTreeToNodeLeaf({ treeQuery: data['05'].tree })).toEqual(
//       data['05'].nodeLeaf
//     )
//   })
// })

describe('Process React Awesome Query Builder "Node Leaf" state into "Tree" state', () => {
  test('01 level deep', () => {
    expect(convertNodeLeafToTree({ treeQuery: data['01'].nodeLeaf })).toEqual(
      data['01'].tree
    )
  })
})
