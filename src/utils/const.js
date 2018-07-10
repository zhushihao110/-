export const HAD = {
  0: 'h', // 胜
  1: 'a', // 负
  2: 'd', // 平
  h: 0,
  a: 1,
  d: 2
}

export const HHAD = {
  0: 'h', // 胜
  1: 'a', // 负
  2: 'd', // 平
  h: 0,
  a: 1,
  d: 2
}

export const PLAY_TYPE = {
  JCGJ: 'jcgj',
  JCGY: 'jcgy',
  HAD: 'had',
  HHAD: 'hhad',
  CRS: 'crs',
  TTG: 'ttg'
}

export const BET_CONTENT = {
  jcgj: '世界杯最终冠军',
  jcgy: '世界杯冠亚军',
  had: '胜平负',
  hhad: '让球胜平负',
  crs: '90分钟两队的比分',
  ttg: '90分钟两队的总进球个数',
  string: '普通串关'
}

export const BET_CONTENT_ABBR = {
  jcgj: '世界杯最终冠军',
  jcgy: '世界杯冠亚军',
  had: '胜平负',
  hhad: '让球胜平负',
  crs: '比分',
  ttg: '总进球',
  string: '普通串关'
}

export const BET_OPTION = {
  had: {
    h: '主胜',
    a: '客胜',
    d: '平',
    0: '主胜', // 胜
    1: '客胜', // 负
    2: '平' // 平
  },
  hhad: {
    h: '主胜',
    a: '客胜',
    d: '平',
    0: '主胜', // 胜
    1: '客胜', // 负
    2: '平' // 平
  },
  crs: {
    '-1-h': '胜其他',
    '-1-a': '负其他',
    '-1-d': '平其他',
    '0000': '0:0',
    '0001': '0:1',
    '0002': '0:2',
    '0003': '0:3',
    '0004': '0:4',
    '0005': '0:5',
    '0100': '1:0',
    '0101': '1:1',
    '0102': '1:2',
    '0103': '1:3',
    '0104': '1:4',
    '0105': '1:5',
    '0200': '2:0',
    '0201': '2:1',
    '0202': '2:2',
    '0203': '2:3',
    '0204': '2:4',
    '0205': '2:5',
    '0300': '3:0',
    '0301': '3:1',
    '0302': '3:2',
    '0303': '3:3',
    '0400': '4:0',
    '0401': '4:1',
    '0402': '4:2',
    '0500': '5:0',
    '0501': '5:1',
    '0502': '5:2'
  },
  ttg: {
    s0: 0,
    s1: 1,
    s2: 2,
    s3: 3,
    s4: 4,
    s5: 5,
    s6: 6,
    s7: '7+'
  }
}

export const FINAL_FILTER = [
  {
    key: 'all',
    value: '所有'
  },
  {
    key: '德国',
    value: '德国'
  },
  {
    key: '巴西',
    value: '巴西'
  },
  {
    key: '阿根廷',
    value: '阿根廷'
  },
  {
    key: '法国',
    value: '法国'
  },
  {
    key: '西班牙',
    value: '西班牙'
  },
  {
    key: '英格兰',
    value: '英格兰'
  },
  {
    key: '葡萄牙',
    value: '葡萄牙'
  },
  {
    key: '比利时',
    value: '比利时'
  },
  {
    key: '俄罗斯',
    value: '俄罗斯'
  },
  {
    key: '乌拉圭',
    value: '乌拉圭'
  },
  {
    key: '哥伦比亚',
    value: '哥伦比亚'
  },
  {
    key: '克罗地亚',
    value: '克罗地亚'
  }
]

export const MSG = {
  LOAD_FAIL: '页面加载失败',
  NO_DATA: '暂无数据'
}

export const USER_TYPE = {
  BLUE_DIAMOND: '2',
  NORMAL: '1'
}

export const MONEY_TYPE = {
  BLUE_DIAMOND: 2,
  COIN: 1
}
