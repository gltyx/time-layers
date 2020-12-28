/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //标点处理
    '.': '。',
    //标点处理结束

    //主界面等
    'Layers': '层级',
    'Options': '选项',
    'Achieve': '成就',
    'Physical Layer': '物理层级',
    'Energy Layer': '能量层级',
    'Stellar Layer': '恒星层级',
    'Perspective Layer': '透视层级',
    //主界面等结束

    //物理层级
    'Spacetime': '时空',
    'Nucleosynthesis': '核合成',
    '  Space Foam is a timeless quantity': '空间泡沫不受时间影响',
    'Perform a Spatial Compression': '进行空间压缩',
    'Unlock Spacetime Foam': '解锁时空泡沫',
    'Space Compression boost Time Compression (+1.5% each': '空间压缩使时间压缩的效果变得更好(每个可增加1.5%',
    'Time Compression is 3x cheaper': '时间压缩便宜3倍',
    'Each "space" or "time" makes compressors 2.25x cheaper': '每个“空间”或者“时间”都可使压缩器便宜2.25倍',
    'The upgrade above uses a better formula past 12 compressors': '在压缩器超过12个时，上方升级的公式获得加强',
    'Square root of time foam multiplies space foam': '空间泡沫乘以时间泡沫的平方根',
    'Space Compressors boost themselves (+3% each': '空间压缩器使自身的效果变得更好(每个可增加3%',
    'Raise the "better formula" multiplier to your free spatial compressors': '使公式加强的倍率变为免费空间压缩器的数量',
    'Cost: 2 space': '花费: 2 空间',
    'Cost: 1.25 space': '花费: 1.25 空间',
    'Cost: 1.5 space': '花费: 1.5 空间',
    'Cost: 10 compressors': '花费: 10 压缩器',
    'Cost: 15 compressors': '花费: 15 压缩器',
    'Cost: 45 compressors': '花费: 45 压缩器',
    'Cost: 240 compressors': '花费: 240 压缩器',
    'Cost: 600 compressors': '花费: 600 压缩器',
    'Perform a Spacetime Compression': '进行时空压缩',
    'Unlock the next layer (Scroll Down': '解锁下一个层级(需要向下滚动',
    'Spacetime compressors boost themselves (+1.5% each': '时空压缩器使自身的效果变得更好(每个可增加1.5%',
    'Space Compression is 3x cheaper': '空间压缩便宜3倍',
    'Joule directly multiplies Space Gain': '空间获取量直接乘以焦耳数',    
    'Double the upgrade above this': '上方升级的效果变为2倍',    
    'Logarithm of spacetime foam adds to Space Compressors % effect': '空间压缩器的%效果增加以下数值: 时空泡沫的常用对数',    
    'Gain 1e50x Spacetime': '时空获取数量变为1e50倍',    
    'The upgrade above is 1.5x better': '上方升级的效果变为1.5倍',
    'Cost: 2e6 spacetime': '花费: 2e6 时空',
    'Cost: 20,000 spacetime': '花费: 20000 时空',
    'Cost: Out of Stock': '花费: 缺货',
    'Cost: 11 compressors': '花费: 11 压缩器',
    'Cost: 14 compressors': '花费: 14 压缩器',
    'Cost: 16 compressors': '花费: 16 压缩器',
    'Cost: 1e1050 spacetime': '花费: 1e1050 时空',
    'Cost: 1e10500 spacetime': '花费: 1e10500 时空',
    'Perform a Temporal Compression': '进行时间压缩',
    'Unlock Space Foam': '解锁空间泡沫',
    'Time Compression boost Space Compression (+1.5% each': '时间压缩使空间压缩的效果变得更好(每个可增加1.5%',
    'Double the previous upgrade & spacetime gain': '使之前升级的效果和时空获取量变为2倍',
    'Multiply Joule gain by your amount of row 2 upgrades': '将焦耳获取量乘以第2行升级的购买数量',
    'Unlock the next layer': '解锁下一个层级',
    'Gain 100% of Space Energy gained on reset per second': '每秒获得以下数值的空间能量: 重置时可获取数量的100%',
    'A single Time Compressor boosts Nucleosynthesis': '有一个时间压缩器可使核合成效果变得更好',
    'Cost: 200 time': '花费: 200 时间',
    'Cost: 500 time': '花费: 500 时间',
    'Cost: 5,000 time': '花费: 5000 时间',
    'Cost: 20 compressors': '花费: 20 压缩器',
    'This adds to your base Space Foam to make it longer': '它可以增加空间泡沫的长度',
    'Cost: 9e15 mm': '花费: 9e15 毫米',
    'Cost: 6e17 mm': '花费: 6e17 毫米',
    '7 spacetime compressors': '7个时空压缩器',
    'Square Galaxy I effect if not in any galaxy or spaceless': '不在星系中也不无界时，星系 I的效果变为原来的平方',
    'Cost: 1e20 mm': '花费: 1e20 毫米',
    'Cost: 1e25 mm': '花费: 1e25 毫米',
    //物理层级结束


    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "\n ": "",
    "\n  ": "",
    "\n   ": "",
    "\n    ": "",
    "\n     ": "",
    "\n      ": "",
    "\n       ": "",
    "\n        ": "",
    "\n         ": "",
    "\n          ": "",
    "\n           ": "",
    "\n            ": "",
    "\n             ": "",
    "\n              ": "",
    "\n               ": "",
    "\n                ": "",
    "\n                 ": "",
    "\n                  ": "",
    "\n                   ": "",
    "\n                    ": "",
    "\n                     ": "",
    "\n                      ": "",
    "\n                       ": "",
    "\n                        ": "",
    "\n                         ": "",
    "\n                          ": "",
    "           \n            ": "",
    "            \n            ": "",
    "  ": "",
    "   ": "",
    "    ": "",
    "     ": "",
    "      ": "",
    "       ": "",
    "        ": "",
    "         ": "",
    "          ": "",
    "           ": "",
    "            ": "",
    "             ": "",
    "              ": "",
    "               ": "",
    "                ": "",
    "                 ": "",
    "                  ": "",
    "                   ": "",
    "                    ": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    ")": ")",
    "%": "%",
    "\n": "",
    "\n ": "",
    "\n  ": "",
    "\n   ": "",
    "\n    ": "",
    "\n     ": "",
    "\n      ": "",
    "\n       ": "",
    "\n        ": "",
    "\n         ": "",
    "\n          ": "",
    "\n           ": "",
    "\n            ": "",
    "\n             ": "",
    "\n              ": "",
    "\n               ": "",
    "\n                ": "",
    "\n                 ": "",
    "\n                  ": "",
    "\n                   ": "",
    "\n                    ": "",
    "\n                     ": "",
    "\n                      ": "",
    "\n                       ": "",
    "\n                        ": "",
    "\n                         ": "",
    "\n                          ": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*\-?$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\s*[A-Za-z]\s*$/, //带单字母的纯空格
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-rt-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(.+)s until \+(\d+) export Quark$/, '距离下次增加导出奖励：$2夸克还有$1秒'],
]);