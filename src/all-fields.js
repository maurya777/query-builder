// https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc
export default {
  text: {
    label: 'Text',
    type: 'text'
    // tooltip: 'foo'
    // mode: 'none' // some, all, none
  },
  number: {
    label: 'Number',
    type: 'number',
    fieldSettings: {
      min: 0
      // max: 100
    },
    valueSources: ['value'],
    preferWidgets: ['number']
  },
  slider: {
    label: 'Slider',
    type: 'number', // NB slider has type of numner ?
    valueSources: ['value'],
    fieldSettings: {
      min: 10,
      max: 100
    },
    preferWidgets: ['slider', 'rangeslider', 'number']
  },
  options: {
    label: 'Select',
    type: 'select',
    valueSources: ['value'],
    fieldSettings: {
      listValues: [
        { value: 'one', title: 'One' },
        { value: 'two', title: 'Two' },
        { value: 'three', title: 'Three' }
      ]
    }
  },
  boolean: {
    label: 'Boolean',
    type: 'boolean',
    operators: ['equal'],
    valueSources: ['value']
  },
  multiselect: {
    label: 'Multi Select',
    type: 'multiselect',
    valueSources: ['value'],
    fieldSettings: {
      listValues: [
        { value: 'a', title: 'A' },
        { value: 'b', title: 'B' },
        { value: 'C', title: 'C' }
      ]
    }
  },
  treeselect: {
    label: 'Tree Select',
    type: 'treeselect' // not working?
  },
  treemultiselect: {
    label: 'Tree Multi Select',
    type: 'treemultiselect',
    valueSources: ['value'],
    fieldSettings: {
      listValues: [
        { value: 'a', title: 'A' },
        { value: 'b', title: 'B' },
        { value: 'c', title: 'C' }
      ]
    }
  },
  datetime: {
    label: 'Date Time',
    type: 'datetime' // only showing one date
  },
  time: {
    label: 'Time',
    type: 'time' // only showing one date
  },
  date: {
    label: 'Date',
    type: 'date' // only showing one date
  },
  user: {
    type: '!struct', // special keyword for comlex fields
    label: 'User',
    subfields: {
      // subfields of complex field
      firstName: {
        type: 'text',
        label: 'First Name',
        label2: 'firstname' //optional, see below
        // fieldSettings: {
        //   validateValue: (val, _fieldSettings) => val.length <= 20
        // }
      },
      lastName: {
        type: 'text',
        label: 'Last Name',
        label2: 'lastname' //optional, see below
        // fieldSettings: {
        //   validateValue: (val, _fieldSettings) => val.length <= 20
        // }
      }
    }
  }
}
