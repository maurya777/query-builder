import { convertTreeToNodeLeaf, convertNodeLeafToTree } from './query'

import { convertMetaToFields, convertFieldsToMeta } from './meta'

import getData, { metaFields } from '../data'
const data = getData()

describe('Convert "Meta" array into "fields" for React Awesome Query Builder', () => {
  test('Convert meta to fields', () => {
    expect(convertMetaToFields({ meta: metaFields.meta })).toEqual(
      metaFields.fields
    )
  })
  test('Convert fields to meta', () => {
    expect(convertFieldsToMeta({ fields: metaFields.fields })).toEqual(
      metaFields.meta
    )
  })
})

describe('Convert "Node Leaf" state into React Awesome Query Builder "Tree" state', () => {
  test('01 level deep', () => {
    expect(
      convertNodeLeafToTree({ id: '123', nodeLeafQuery: data['01'].nodeLeaf })
    ).toEqual(data['01'].tree)
  })
  test('02 levels deep', () => {
    expect(
      convertNodeLeafToTree({ id: '123', nodeLeafQuery: data['02'].nodeLeaf })
    ).toEqual(data['02'].tree)
  })
  test('03 levels deep', () => {
    expect(
      convertNodeLeafToTree({ id: '123', nodeLeafQuery: data['03'].nodeLeaf })
    ).toEqual(data['03'].tree)
  })
  test('04 levels deep', () => {
    expect(
      convertNodeLeafToTree({ id: '123', nodeLeafQuery: data['04'].nodeLeaf })
    ).toEqual(data['04'].tree)
  })
  test('05 levels deep', () => {
    expect(
      convertNodeLeafToTree({ id: '123', nodeLeafQuery: data['05'].nodeLeaf })
    ).toEqual(data['05'].tree)
  })
  test('Error at 06 levels deep', () => {
    try {
      convertNodeLeafToTree({ id: '123', nodeLeafQuery: data['06'].nodeLeaf })
    } catch (error) {
      expect(error.toString()).toEqual('Error: max nesting 5 levels')
    }
  })
})

describe('Convert React Awesome Query Builder "Tree" state into "Node Leaf" state', () => {
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
