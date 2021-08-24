// get meta and payload
// only return SoftwareTag and DeviceTag
// return Attribute from meta AND and Values from payload
export const convertPayloadToValues = ({ meta, payload = [] }) => {
  return meta
    .filter(({ Type }) => Type === 'SoftwareTag' || Type === 'DeviceTag')
    .map(({ Type, Attribute, Id }) => {
      const obj =
        payload.find((val) => val.Id === Id && val.TypeName === Type) || {};
      return { Attribute, Values: obj.Values?.map(({ Value }) => Value) };
    });
}
