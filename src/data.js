const getData = ({ id }) => ({
  fields: {
    'ReportDevice.ComputerName': {
      label: 'ReportDevice.ComputerName',
      type: 'text'
    },
    'ReportDevice.DomainName': {
      label: 'ReportDevice.DomainName',
      type: 'text'
    },
    'ReportDevice.DeviceName': {
      label: 'ReportDevice.DeviceName',
      type: 'text'
    },
    'ReportDevice.ComputerNumber': {
      label: 'ReportDevice.ComputerNumber',
      type: 'text'
    },
    'ReportDevice.DomainNumber': {
      label: 'ReportDevice.DomainNumber',
      type: 'text'
    },
    'ReportDevice.DeviceNumber': {
      label: 'ReportDevice.DeviceNumber',
      type: 'text'
    },
    'ReportDevice.ComputerId': {
      label: 'ReportDevice.ComputerId',
      type: 'text'
    },
    'ReportDevice.DomainId': {
      label: 'ReportDevice.DomainId',
      type: 'text'
    },
    'ReportDevice.DeviceId': {
      label: 'ReportDevice.DeviceId',
      type: 'text'
    }
  },
  '01': {
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
      id,
      type: 'group',
      children1: {
        obj1: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerName',
            operator: 'like',
            value: ['1E'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        obj2: {
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
  '02': {
    nodeLeaf: {
      Operator: 'and',
      Operands: [
        {
          Operator: '==',
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
      id,
      type: 'group',
      children1: {
        obj1: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerId',
            operator: 'equal',
            value: ['123'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        obj2: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerName',
            operator: 'like',
            value: ['comp'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        obj3: {
          type: 'group',
          properties: {
            conjunction: 'AND'
          },
          children1: {
            obj4: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.DomainName',
                operator: 'equal',
                value: ['dom'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            obj5: {
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
  '03': {
    nodeLeaf: {
      Operator: 'and',
      Operands: [
        {
          Operator: '==',
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
      id,
      type: 'group',
      children1: {
        obj1: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerId',
            operator: 'equal',
            value: ['comp-id-123'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        obj2: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerName',
            operator: 'like',
            value: ['comp-name'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        obj3: {
          type: 'group',
          properties: {
            conjunction: 'AND'
          },
          children1: {
            obj4: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.DomainName',
                operator: 'equal',
                value: ['dom-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            obj5: {
              type: 'group',
              properties: {
                conjunction: 'AND'
              },
              children1: {
                obj6: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceId',
                    operator: 'equal',
                    value: ['dev-id'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                obj7: {
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
  '04': {
    nodeLeaf: {
      Operator: 'and',
      Operands: [
        {
          Operator: '==',
          Attribute: 'ReportDevice.ComputerId',
          Value: 'comp-id-123'
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
              Operator: 'like',
              Attribute: 'ReportDevice.ComputerName',
              Value: '%comp-name%'
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
                },
                {
                  Operator: 'and',
                  Operands: [
                    {
                      Operator: '==',
                      Attribute: 'ReportDevice.DomainId',
                      Value: 'dom-id'
                    },
                    {
                      Operator: '==',
                      Attribute: 'ReportDevice.DomainNumber',
                      Value: 'dom-num'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    tree: {
      id,
      type: 'group',
      children1: {
        obj1: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerId',
            operator: 'equal',
            value: ['comp-id-123'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        obj2: {
          type: 'group',
          properties: {
            conjunction: 'AND'
          },
          children1: {
            obj3: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.DomainName',
                operator: 'equal',
                value: ['dom-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            obj4: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.ComputerName',
                operator: 'like',
                value: ['comp-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            obj5: {
              type: 'group',
              properties: {
                conjunction: 'AND'
              },
              children1: {
                obj6: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceId',
                    operator: 'equal',
                    value: ['dev-id'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                obj7: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceName',
                    operator: 'equal',
                    value: ['dev-name'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                obj8: {
                  type: 'group',
                  properties: {
                    conjunction: 'AND'
                  },
                  children1: {
                    obj9: {
                      type: 'rule',
                      properties: {
                        field: 'ReportDevice.DomainId',
                        operator: 'equal',
                        value: ['dom-id'],
                        valueSrc: ['value'],
                        valueType: ['text']
                      }
                    },
                    obj10: {
                      type: 'rule',
                      properties: {
                        field: 'ReportDevice.DomainNumber',
                        operator: 'equal',
                        value: ['dom-num'],
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
  '05': {
    nodeLeaf: {
      Operator: 'and',
      Operands: [
        {
          Operator: '==',
          Attribute: 'ReportDevice.ComputerId',
          Value: 'comp-id-123'
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
              Operator: 'like',
              Attribute: 'ReportDevice.ComputerName',
              Value: '%comp-name%'
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
                },
                {
                  Operator: 'and',
                  Operands: [
                    {
                      Operator: '==',
                      Attribute: 'ReportDevice.DomainId',
                      Value: 'dom-id'
                    },
                    {
                      Operator: '==',
                      Attribute: 'ReportDevice.DomainNumber',
                      Value: 'dom-num'
                    },
                    {
                      Operator: 'and',
                      Operands: [
                        {
                          Operator: '==',
                          Attribute: 'ReportDevice.DeviceNumber',
                          Value: 'dev-num-999'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    tree: {
      id,
      type: 'group',
      children1: {
        obj1: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerId',
            operator: 'equal',
            value: ['comp-id-123'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        obj2: {
          type: 'group',
          properties: {
            conjunction: 'AND'
          },
          children1: {
            obj3: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.DomainName',
                operator: 'equal',
                value: ['dom-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            obj4: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.ComputerName',
                operator: 'like',
                value: ['comp-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            obj5: {
              type: 'group',
              properties: {
                conjunction: 'AND'
              },
              children1: {
                obj6: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceId',
                    operator: 'equal',
                    value: ['dev-id'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                obj7: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceName',
                    operator: 'equal',
                    value: ['dev-name'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                obj8: {
                  type: 'group',
                  properties: {
                    conjunction: 'AND'
                  },
                  children1: {
                    obj9: {
                      type: 'rule',
                      properties: {
                        field: 'ReportDevice.DomainId',
                        operator: 'equal',
                        value: ['dom-id'],
                        valueSrc: ['value'],
                        valueType: ['text']
                      }
                    },
                    obj10: {
                      type: 'rule',
                      properties: {
                        field: 'ReportDevice.DomainNumber',
                        operator: 'equal',
                        value: ['dom-num'],
                        valueSrc: ['value'],
                        valueType: ['text']
                      }
                    },
                    obj11: {
                      type: 'group',
                      properties: {
                        conjunction: 'AND'
                      },
                      children1: {
                        obj12: {
                          type: 'rule',
                          properties: {
                            field: 'ReportDevice.DeviceNumber',
                            operator: 'equal',
                            value: ['dev-num-999'],
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
  },
  '06': {
    nodeLeaf: {
      Operator: 'and',
      Operands: [
        {
          Operator: '==',
          Attribute: 'ReportDevice.ComputerId',
          Value: 'comp-id-123'
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
              Operator: 'like',
              Attribute: 'ReportDevice.ComputerName',
              Value: '%comp-name%'
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
                },
                {
                  Operator: 'and',
                  Operands: [
                    {
                      Operator: '==',
                      Attribute: 'ReportDevice.DomainId',
                      Value: 'dom-id'
                    },
                    {
                      Operator: '==',
                      Attribute: 'ReportDevice.DomainNumber',
                      Value: 'dom-num'
                    },
                    {
                      Operator: 'and',
                      Operands: [
                        {
                          Operator: '==',
                          Attribute: 'ReportDevice.DeviceNumber',
                          Value: 'dev-num-999'
                        },
                        {
                          Operator: 'and',
                          Operands: [
                            {
                              Operator: '==',
                              Attribute: 'ReportDevice.ComputerNumber',
                              Value: 'comp-num-456'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    tree: {
      id,
      type: 'group',
      children1: {
        obj1: {
          type: 'rule',
          properties: {
            field: 'ReportDevice.ComputerId',
            operator: 'equal',
            value: ['comp-id-123'],
            valueSrc: ['value'],
            valueType: ['text']
          }
        },
        obj2: {
          type: 'group',
          properties: {
            conjunction: 'AND'
          },
          children1: {
            obj3: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.DomainName',
                operator: 'equal',
                value: ['dom-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            obj4: {
              type: 'rule',
              properties: {
                field: 'ReportDevice.ComputerName',
                operator: 'like',
                value: ['comp-name'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            obj5: {
              type: 'group',
              properties: {
                conjunction: 'AND'
              },
              children1: {
                obj6: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceId',
                    operator: 'equal',
                    value: ['dev-id'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                obj7: {
                  type: 'rule',
                  properties: {
                    field: 'ReportDevice.DeviceName',
                    operator: 'equal',
                    value: ['dev-name'],
                    valueSrc: ['value'],
                    valueType: ['text']
                  }
                },
                obj8: {
                  type: 'group',
                  properties: {
                    conjunction: 'AND'
                  },
                  children1: {
                    obj9: {
                      type: 'rule',
                      properties: {
                        field: 'ReportDevice.DomainId',
                        operator: 'equal',
                        value: ['dom-id'],
                        valueSrc: ['value'],
                        valueType: ['text']
                      }
                    },
                    obj10: {
                      type: 'rule',
                      properties: {
                        field: 'ReportDevice.DomainNumber',
                        operator: 'equal',
                        value: ['dom-num'],
                        valueSrc: ['value'],
                        valueType: ['text']
                      }
                    },
                    obj11: {
                      type: 'group',
                      properties: {
                        conjunction: 'AND'
                      },
                      children1: {
                        obj12: {
                          type: 'rule',
                          properties: {
                            field: 'ReportDevice.DeviceNumber',
                            operator: 'equal',
                            value: ['dev-num-999'],
                            valueSrc: ['value'],
                            valueType: ['text']
                          }
                        },
                        obj13: {
                          type: 'group',
                          properties: {
                            conjunction: 'AND'
                          },
                          children1: {
                            obj14: {
                              type: 'rule',
                              properties: {
                                field: 'ReportDevice.ComputerNumber',
                                operator: 'equal',
                                value: ['comp-num-456'],
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
  }
})

export default getData
