import { Utils as QbUtils } from 'react-awesome-query-builder'
import { v4 as uuidv4 } from 'uuid'

const data = {
  one: {
    nodeLeaf: {
      Operator: 'and',
      Operands: [
        {
          Operator: 'like',
          Attribute: 'ReportDevice.ComputerName',
          Value: '%1E%'
        },
        {
          Operator: '==',
          Attribute: 'ReportDevice.DomainName',
          Value: '1E.local'
        }
      ]
    },
    tree: {
      id: QbUtils.uuid(),
      type: 'group',
      children1: {
        [uuidv4()]: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerName',
            operator: 'like',
            value: ['1E'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        [uuidv4()]: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.DomainName',
            operator: 'equal',
            value: ['1E.local'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        }
      }
    }
  },
  two: {
    nodeLeaf: {
      Operator: 'and',
      Operands: [
        {
          Operator: 'equal',
          Attribute: 'ReportDevice.ComputerId',
          Value: '123'
        },
        {
          Operator: 'like',
          Attribute: 'ReportDevice.ComputerName',
          Value: '%comp%'
        },
        {
          Operator: 'and',
          Operands: [
            {
              Operator: '==',
              Attribute: 'ReportDevice.DomainName',
              Value: 'dom'
            },
            {
              Operator: '==',
              Attribute: 'ReportDevice.DeviceName',
              Value: 'dev'
            }
          ]
        }
      ]
    },
    tree: {
      id: QbUtils.uuid(),
      type: 'group',
      children1: {
        [uuidv4()]: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerId',
            operator: 'equal',
            value: ['123'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        [uuidv4()]: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerName',
            operator: 'like',
            value: ['comp'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        [uuidv4()]: {
          type: 'group',
          properties: {
            conjunction: 'AND'
          },
          children1: {
            [uuidv4()]: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.DomainName',
                operator: 'equal',
                value: ['dom'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            [uuidv4()]: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.DeviceName',
                operator: 'equal',
                value: ['dev'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            }
          }
        }
      }
    }
  },
  three: {
    nodeLeaf: {
      Operator: 'and',
      Operands: [
        {
          Operator: 'equal',
          Attribute: 'ReportDevice.ComputerId',
          Value: 'comp-id-123'
        },
        {
          Operator: 'like',
          Attribute: 'ReportDevice.ComputerName',
          Value: '%comp-name%'
        },
        {
          Operator: 'and',
          Operands: [
            {
              Operator: '==',
              Attribute: 'ReportDevice.DomainName',
              Value: 'dom-name'
            },
            {
              Operator: 'and',
              Operands: [
                {
                  Operator: '==',
                  Attribute: 'ReportDevice.DeviceId',
                  Value: 'dev-id'
                },
                {
                  Operator: '==',
                  Attribute: 'ReportDevice.DeviceName',
                  Value: 'dev-name'
                }
              ]
            }
          ]
        }
      ]
    },
    tree: {
      id: QbUtils.uuid(),
      type: 'group',
      children1: {
        [uuidv4()]: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerId',
            operator: 'equal',
            value: ['comp-id-123'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        [uuidv4()]: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerName',
            operator: 'like',
            value: ['comp-name'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        [uuidv4()]: {
          type: 'group',
          properties: {
            conjunction: 'AND'
          },
          children1: {
            [uuidv4()]: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.DomainName',
                operator: 'equal',
                value: ['dom-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            [uuidv4()]: {
              type: 'group',
              properties: {
                conjunction: 'AND'
              },
              children1: {
                [uuidv4()]: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceId',
                    operator: 'equal',
                    value: ['dev-id'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                [uuidv4()]: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceName',
                    operator: 'equal',
                    value: ['dev-name'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  four: {
    nodeLeaf: {},
    tree: {
      id: QbUtils.uuid(),
      type: 'group',
      children1: {
        [uuidv4()]: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerId',
            operator: 'equal',
            value: ['comp-id-123'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        [uuidv4()]: {
          type: 'group',
          properties: {
            conjunction: 'AND'
          },
          children1: {
            [uuidv4()]: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.DomainName',
                operator: 'equal',
                value: ['dom-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            [uuidv4()]: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.ComputerName',
                operator: 'like',
                value: ['comp-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            [uuidv4()]: {
              type: 'group',
              properties: {
                conjunction: 'AND'
              },
              children1: {
                [uuidv4()]: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceId',
                    operator: 'equal',
                    value: ['dev-id'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                [uuidv4()]: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceName',
                    operator: 'equal',
                    value: ['dev-name'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                [uuidv4()]: {
                  type: 'group',
                  properties: {
                    conjunction: 'AND'
                  },
                  children1: {
                    [uuidv4()]: {
                      type: 'rule',
                      properties: {
                        field: 'ReportDevice.DeviceId',
                        operator: 'equal',
                        value: ['dev-id'],
                        valueSrc: ['value'],
                        valueType: ['text']
                      }
                    },
                    [uuidv4()]: {
                      type: 'rule',
                      properties: {
                        field: 'ReportDevice.DeviceName',
                        operator: 'equal',
                        value: ['dev-name'],
                        valueSrc: ['value'],
                        valueType: ['text']
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  five: {
    nodeLeaf: {},
    tree: {
      id: QbUtils.uuid(),
      type: 'group',
      children1: {
        [uuidv4()]: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerId',
            operator: 'equal',
            value: ['comp-id-123'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        [uuidv4()]: {
          type: 'group',
          properties: {
            conjunction: 'AND'
          },
          children1: {
            [uuidv4()]: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.DomainName',
                operator: 'equal',
                value: ['dom-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            [uuidv4()]: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.ComputerName',
                operator: 'like',
                value: ['comp-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            [uuidv4()]: {
              type: 'group',
              properties: {
                conjunction: 'AND'
              },
              children1: {
                [uuidv4()]: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceId',
                    operator: 'equal',
                    value: ['dev-id'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                [uuidv4()]: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceName',
                    operator: 'equal',
                    value: ['dev-name'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                [uuidv4()]: {
                  type: 'group',
                  properties: {
                    conjunction: 'AND'
                  },
                  children1: {
                    [uuidv4()]: {
                      type: 'rule',
                      properties: {
                        field: 'ReportDevice.DeviceId',
                        operator: 'equal',
                        value: ['dev-id'],
                        valueSrc: ['value'],
                        valueType: ['text']
                      }
                    },
                    [uuidv4()]: {
                      type: 'rule',
                      properties: {
                        field: 'ReportDevice.DeviceName',
                        operator: 'equal',
                        value: ['dev-name'],
                        valueSrc: ['value'],
                        valueType: ['text']
                      }
                    },
                    [uuidv4()]: {
                      type: 'group',
                      properties: {
                        conjunction: 'AND'
                      },
                      children1: {
                        [uuidv4()]: {
                          type: 'rule',
                          properties: {
                            field: 'ReportDevice.DeviceId',
                            operator: 'equal',
                            value: ['dev-id'],
                            valueSrc: ['value'],
                            valueType: ['text']
                          }
                        },
                        [uuidv4()]: {
                          type: 'rule',
                          properties: {
                            field: 'ReportDevice.DeviceName',
                            operator: 'equal',
                            value: ['dev-name'],
                            valueSrc: ['value'],
                            valueType: ['text']
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export default data
