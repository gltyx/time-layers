const stellarpedia = [
  [
    "保留第1行升级及第1个空间能量升级",
    "保留第2列的第1个升级及第2个空间能量升级",
    "保留第3个空间能量升级",
    "保留第2列的第2个升级及第4个空间能量升级",
    "保留第5个空间能量升级",
    "保留第2列的第3个升级及第6个空间能量升级",
    "保留第7个空间能量升级",
    "保留第8个空间能量升级",
  ],
  [
    "保留第9个空间能量升级",
    "保留第10个空间能量升级",
    "保留第11个空间能量升级",
    "保留第12个空间能量升级",
    "",
    "",
    "解锁星系",
    "如果你同时在无界和星系1中，则使所有时空的减少系数变为原来的平方根",
  ],
  [
    "",
    "",
    "",
    "解锁星系 II",
    "",
    "",
    "",
    "解锁星系 III",
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "解锁星系 IV",
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Unlock Galaxy V - Not Implemented",
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Unlock Galaxy VI - Not Implemented",
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Unlock Galaxy VII - Not Implemented",
  ]
]

function toRoman(x) {
  let counter = Math.min(x,80)
  let running = ""
  if (counter>=50) {
    counter -= 50
    running += "L"
  }
  if (counter>=40) {
    counter -= 40
    running += "XL"
  }
  if (counter>=10) {
    counter -= 10
    running += "X"
  }
  if (counter>=10) {
    counter -= 10
    running += "X"
  }
  if (counter>=10) {
    counter -= 10
    running += "X"
  }
  running += ["","I","II","III","IV","V","VI","VII","VIII","IX"][counter]
  return running
}