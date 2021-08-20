import { convertPayloadToValues } from './'

import { meta, values } from '../../data'

describe('Convert "Values" payload into "values" for React Awesome Query Builder', () => {
  test('Convert payload to values', () => {
    expect(
      convertPayloadToValues({ meta: meta.meta, payload: values.payload })
    ).toEqual(values.values)
  })
})
