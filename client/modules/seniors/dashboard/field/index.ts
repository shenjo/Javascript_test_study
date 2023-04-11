const data = [
  {
    'name': '_widget_1566541681583',
    'text': '订单编号',
    'lineWidth': 12,
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'sn',
    'visible': true
  },
  {
    'name': '_widget_1504855929239',
    'text': '制单人',
    'lineWidth': 12,
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'user',
    'visible': true
  },
  {
    'name': '_widget_1504854132055',
    'text': '下单日期',
    'lineWidth': 12,
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'datetime',
    'format': 'yyyy-MM-dd',
    'visible': true,
    'rely': null
  },
  {
    'name': '_widget_1566449794137',
    'text': '客户信息',
    'lineWidth': 12,
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'linkfield',
    'visible': true,
    'linkForm': '5d5e5341cbad03070200c798',
    'linkFields': [
      {
        'name': '_widget_1504237153819',
        'text': '客户名称',
        'type': 'text'
      }
    ],
    'linkFilter': [],
    'refAppId': null,
    'allowAdd': true,
    'showDataLabel': false
  },
  {
    'name': '_widget_1408683394137',
    'text': '客户信息-主键',
    'lineWidth': 12,
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'text',
    'visible': false
  },
  {
    'name': '_widget_1504855929117',
    'text': '联系人',
    'lineWidth': 12,
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'text',
    'visible': true,
    'rely': {
      'widgets': [
        '_widget_1408683394137'
      ],
      'ref': {
        'formId': '5d5e5341cbad03070200c798',
        'field': '_widget_1504237153819'
      },
      'data': {
        'formId': '5d5e5341cbad03070200c798',
        'field': '_widget_1504237153846'
      },
      'filter': {
        'cond': [
          {
            'mode': 'depend',
            'field': '_widget_1504237153819',
            'type': 'text',
            'method': 'eq',
            'depend': {
              'field': '_widget_1408683394137'
            },
            'entryId': '5d5e5341cbad03070200c798'
          }
        ],
        'rel': 'and'
      }
    }
  },
  {
    'name': '_widget_1504854132042',
    'text': '联系电话',
    'lineWidth': 12,
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'text',
    'regex': '^((\\(\\d{2,3}\\))|(\\d{3}\\-))?1\\d{10}$',
    'visible': true,
    'regexType': 'mobile',
    'rely': {
      'widgets': [
        '_widget_1408683394137'
      ],
      'ref': {
        'formId': '5d5e5341cbad03070200c798',
        'field': '_widget_1504237153819'
      },
      'data': {
        'formId': '5d5e5341cbad03070200c798',
        'field': '_widget_1504237153859'
      },
      'filter': {
        'cond': [
          {
            'mode': 'depend',
            'field': '_widget_1504237153819',
            'type': 'text',
            'method': 'eq',
            'depend': {
              'field': '_widget_1408683394137'
            },
            'entryId': '5d5e5341cbad03070200c798'
          }
        ],
        'rel': 'and'
      }
    }
  },
  {
    'name': '_widget_1504855928760',
    'text': '发货地址',
    'lineWidth': 12,
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'address',
    'needDetail': true,
    'visible': true,
    'rely': {
      'widgets': [
        '_widget_1408683394137'
      ],
      'ref': {
        'formId': '5d5e5341cbad03070200c798',
        'field': '_widget_1504237153819'
      },
      'data': {
        'formId': '5d5e5341cbad03070200c798',
        'field': '_widget_1504237153832'
      },
      'filter': {
        'cond': [
          {
            'mode': 'depend',
            'field': '_widget_1504237153819',
            'type': 'text',
            'method': 'eq',
            'depend': {
              'field': '_widget_1408683394137'
            },
            'entryId': '5d5e5341cbad03070200c798'
          }
        ],
        'rel': 'and'
      }
    }
  },
  {
    'name': '_widget_1504854132443',
    'text': '订单明细',
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'subform',
    'items': [
      {
        'name': '_widget_1566976937263',
        'text': '关联数据',
        'id': '5d5e535132b989071ad102a0',
        'form': '5d5e535132b989071ad102a0',
        'type': 'linkfield',
        'visible': true,
        'linkForm': '5d5e53470a82ce034e0a8cf9',
        'linkFields': [
          {
            'name': '_widget_1566442726282',
            'text': '产品图片',
            'type': 'image'
          },
          {
            'name': '_widget_1504861446461',
            'text': '产品名称',
            'type': 'text'
          },
          {
            'name': '_widget_1504861446537',
            'text': '型号规格',
            'type': 'text'
          },
          {
            'name': '_widget_1504861446563',
            'text': '单位',
            'type': 'combo'
          }
        ],
        'linkFilter': [],
        'refAppId': null,
        'showDataLabel': false
      },
      {
        'name': '_widget_1409210537263',
        'text': '关联数据-主键',
        'id': '5d5e535132b989071ad102a0',
        'form': '5d5e535132b989071ad102a0',
        'type': 'text',
        'visible': false
      },
      {
        'name': '_widget_1566976937682',
        'text': '单价',
        'id': '5d5e535132b989071ad102a0',
        'form': '5d5e535132b989071ad102a0',
        'type': 'number',
        'visible': true
      },
      {
        'name': '_widget_1504855928911',
        'text': '数量',
        'id': '5d5e535132b989071ad102a0',
        'form': '5d5e535132b989071ad102a0',
        'type': 'number',
        'visible': true,
        'displayMode': 'number',
        'precision': 0,
        'thousandsSeparator': false
      },
      {
        'name': '_widget_1504855928943',
        'text': '金额',
        'id': '5d5e535132b989071ad102a0',
        'form': '5d5e535132b989071ad102a0',
        'type': 'number',
        'visible': true,
        'rely': {
          'widgets': [
            '_widget_1504854132443._widget_1504855928911',
            '_widget_1504854132443._widget_1566976937682'
          ],
          'formula': {
            'type': 'formula',
            'text': '公式',
            'formula': '$_widget_1504854132443._widget_1504855928911#*$_widget_1504854132443._widget_1566976937682#'
          }
        },
        'displayMode': 'number',
        'precision': 0,
        'thousandsSeparator': false
      }
    ],
    'lineWidth': 12,
    'visible': true
  },
  {
    'name': '_widget_1504855929151',
    'text': '订单总额',
    'lineWidth': 12,
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'number',
    'visible': true,
    'rely': {
      'widgets': [
        '_widget_1504854132443._widget_1504855928943'
      ],
      'formula': {
        'type': 'formula',
        'text': '公式',
        'formula': 'SUM($_widget_1504854132443._widget_1504855928943#)'
      }
    }
  },
  {
    'name': '_widget_1504860127112',
    'text': '预付金',
    'lineWidth': 12,
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'number',
    'visible': true
  },
  {
    'name': '_widget_1504855929162',
    'text': '待付款',
    'lineWidth': 12,
    'id': '5d5e535132b989071ad102a0',
    'form': '5d5e535132b989071ad102a0',
    'type': 'number',
    'visible': true,
    'rely': {
      'widgets': [
        '_widget_1504855929151',
        '_widget_1504860127112'
      ],
      'formula': {
        'type': 'formula',
        'text': '公式',
        'formula': '$_widget_1504855929151#-$_widget_1504860127112#'
      }
    }
  },
  {
    'name': 'creator',
    'type': 'user',
    'form': '5d5e535132b989071ad102a0',
    'text': '提交人'
  },
  {
    'name': 'createTime',
    'type': 'datetime',
    'form': '5d5e535132b989071ad102a0',
    'format': 'yyyy-MM-dd HH:mm:ss',
    'text': '提交时间'
  },
  {
    'name': 'updateTime',
    'type': 'datetime',
    'form': '5d5e535132b989071ad102a0',
    'format': 'yyyy-MM-dd HH:mm:ss',
    'text': '更新时间'
  }
];

const field: Record<string, any> = data.reduce((result: any, current) => {
  result[current.text] = current.name;
  return result;
}, {});
export default field;
