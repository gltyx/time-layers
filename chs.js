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

    //能量层级
    'Space Energy': '空间能量',
    'Automation': '自动化',
    'Normal Energy': '正常能量',
    'Supernova!': '超新星！',
    'Reach 1,000,000 Spacetime to prestige!': '达到1000000时空后就可以进行转生！',
    'Unlock Nucleosynthesis': '解锁核合成',
    'Keep all bought upgrades upon reset': '重置时保留所有已购买的升级',
    'Excess space energy boosts time and nucleosynthesis': '超出部分的空间能量使时间和核合成的效果变得更好',
    'Excess space energy boosts the third upgrade in each Row 1 set': '超出部分的空间能量使每项第1行的第三个升级效果变得更好',
    'Improve Space Energy Formula and unlock Automation': '空间能量公式加强并解锁自动化',
    'Nucleosynthesis is raised to the ^1.5 and is twice as fast': '核合成效果变为原来的1.5次方，且速度变为2倍',
    'The upgrade above is 3x as powerful': '上方升级的效果变为3倍',
    'The upgrade above is 2x as powerful': '上方升级的效果变为2倍',
    'The fourth Space Foam Upgrade is 10x better': '空间泡沫的第四个升级效果变为10倍',
    'Nucleosynthesis is raised to the ^2 and is twice as fast': '核合成效果变为原来的2次方，且速度变为2倍',
    'The upgrade above is 2x as powerful and unlock Normal Energy': '上方升级的效果变为2倍，并解锁正常能量',
    'Cost: 1 SE': '花费: 1 空间能量',
    'Cost: 5 SE': '花费: 5 空间能量',
    'Cost: 100 SE': '花费: 100 空间能量',
    'Cost: 1,000 SE': '花费: 1000 空间能量',
    'Cost: 1e5 SE': '花费: 1e5 空间能量',
    'Cost: 1e10 SE': '花费: 1e10 空间能量',
    'Cost: 1e15 SE': '花费: 1e15 空间能量',
    'Cost: 1e25 SE': '花费: 1e25 空间能量',
    'Cost: 1e50 SE': '花费: 1e50 空间能量',
    'Cost: 1e100 SE': '花费: 1e100 空间能量',
    'Cost: 1e200 SE': '花费: 1e200 空间能量',
    'Cost: 1e1000 SE': '花费: 1e1000 空间能量',
    'Exit Spaceless Early': '提前退出无界',
    'Remove Space Compressors to go Spaceless': '移除空间压缩器以进入无界',
    'Whenever you go Spaceless, your space compressors are disabled and spacetime is divided by': '进入无界后，空间压缩器被禁用，且时空除以',
    'Unlock Supernovas': '解锁超新星',
    'Excess normal energy boosts time': '超出部分的正常能量使时间的效果变得更好',
    'Excess normal energy boosts the third upgrade in each Row 2 set': '超出部分的正常能量使每项第2行的第三个升级效果变得更好',
    'Cost: 1e8 NE': '花费: 1e8 正常能量',
    'Cost: 5 NE': '花费: 5 正常能量',
    'Cost: 100 NE': '花费: 100 正常能量',
    'Cost: 1,000 NE': '花费: 1000 正常能量',
    'Blow them up for a temporary boost!': '让这些恒星爆发以获得临时加成！',
    'Spatial Launch': '空间发射',
    'Spacetime Boost': '时空加成',
    'Perspective Push': '透视推进',
    'Everything Else': '其余所有',
    'Your QoL achievement causes the star effect to be based on your best stars, meaning sacraficing stars will not hurt your stellar multiplier': '由于您获得了特定的成就，恒星的效果现在是基于最高的恒星数量，这意味着使恒星爆发不再降低恒星倍率',    
    'Spatial Compressor Autobuyer Maximum': '空间压缩器自动购买上限',
    'Spacetime Compressor Autobuyer Maximum': '时空压缩器自动购买上限',
    'Temporal Compressor Autobuyer Maximum': '时间压缩器自动购买上限',
    'Type in a number to set up a maximum of which these autobuyers are going to work up to': '输入自动购买的购买数量上限',
    'Set the number to 0 to disable the autobuyer. Set the number to -1 if you want to remove the autobuyer\'s limit': '输入0则该项自动购买失效。输入-1则不限制购买数量',
    //能量层级结束

    //恒星层级
    'Stellar Formation': '恒星阵列',
    'Stellarpedia': '恒星百科',
    'Unique Galaxies': '独特星系',
    'You\'re currently in a galaxy. Click to exit early.': '您在一个星系中。点击以提前退出。',
    'Reset for a new type of star!': '重置以获得新的恒星！',
    'Create galaxies under the certain conditions to earn them! These galaxies give a boost in different ways!': '在下方星系中满足对应的条件即可获得它们！星系给予各种不同的加成！',
    'Click here to exit your galaxy': '点击此处退出当前的星系',
    //恒星层级结束

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
    /秒$/, //不抓取时间
    /分$/, //不抓取时间
    /时$/, //不抓取时间
    /日$/, //不抓取时间
    /年$/, //不抓取时间
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(.+)s until \+(\d+) export Quark$/, '距离下次增加导出奖励：$2夸克还有$1秒'],
]);