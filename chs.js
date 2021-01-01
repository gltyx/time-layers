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
    'Space Compression boosts Time Compression (+1.5% each': '空间压缩使时间压缩的效果变得更好(每个可增加1.5%',
    'Time Compression is 3x cheaper': '时间压缩便宜3倍',
    'Each "space" or "time" makes compressors 2.25x cheaper': '每个“空间”或者“时间”都可使压缩器便宜2.25倍',
    'The upgrade above uses a better formula past 12 compressors': '在压缩器超过12个时，上方升级的公式获得加强',
    'The square root of time foam multiplies space foam': '空间泡沫乘以时间泡沫的平方根',
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
    'The logarithm of spacetime foam adds to Space Compressors % effect': '空间压缩器的%效果增加以下数值: 时空泡沫的常用对数',    
    'Gain 1e50x Spacetime': '时空获取量变为1e50倍',    
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
    'Multiply Joule gain by the amount of owned Row 2 upgrades': '将焦耳获取量乘以第2行升级的购买数量',
    'Unlock the next layer': '解锁下一个层级',
    'Gain 100% of Space Energy gained on reset per second': '每秒获得以下数值的空间能量: 重置时可获取量的100%',
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
    'Galaxy I': '星系 I',
    'Galaxy II': '星系 II',
    'Galaxy III': '星系 III',
    'Galaxy IV': '星系 IV',
    'The temporal and nucleosynthesis effects of space energy is disabled, and gain 1e50x less spacetime': '空间能量的时间加速和核合成上限提升效果暂时失效，时空获取量减少1e50倍',
    'Only your star types increase the compressor\'s effect with a squared effect. Space Energy no longer boosts Space Foam. Normal Energy is disabled. Cap Time Compressors to': '只有恒星数量可以加成压缩器的效果，且效果为原来的平方。空间能量不再加成空间泡沫。正常能量暂时失效。时间压缩器个数被限制为',
    'You can\'t gain any Space Energy nor Normal Energy, and their effects are disabled. Cap Time Compressors to 19, but double their overall speed': '您无法获得空间能量和正常能量，它们也暂时失去效果。时间压缩器个数被限制为 19，但全局速度翻倍',
    'Your space foam is capped to your normal energy, Time Compressors are 10x as expensive and capped to 18, but the second supernova upgrade works': '空间泡沫的上限被限制为正常能量的数值，时间压缩器价格变为10倍，且个数被限制为 18，但第二个超新星可以生效',
    '   TIP: If you need to restart your current stellar run for any reason, you can enter a galaxy and then quickly exit.': '提示: 如果您因为某些原因需要重新开始当前的恒星进程，您可以进入一个星系，然后立刻退出',
    //恒星层级结束

    //透视层级
    'Perspective Power': '透视能量',
    'Super Compressors': '超级压缩器',
    'Reset for a Perspective Point!': '重置以获得1点透视！',
    'This multiplies Space Energy gain by x^5, multiplies': '它将空间能量获取量乘以它的5次方，将时空泡沫数量',
    'spacetime foam by x, and adds directly to your Normal Energy Cap': '乘以它，并直接将正常能量上限增加相应数值',
    'Also, by unlocking this layer, you keep the first column of each compressor\'s upgrade.': '另外，解锁此层级以后，您可以保留每个压缩器的首列升级。',
    'Keep Triangular Numbered star milestones up to': '保留三角形数对应的恒星加成，最高为',
    'You can buy max star types': '您可以最大化购买恒星数量',
    'Autobuy nucleosynthesis and space energy, with no cost': '自动购买核合成和空间能量，且无须任何花费',
    'Keep all nucleosynthesis and normal energy upgrades': '保留所有核合成和正常能量的升级',
    'Keep all of the base upgrades': '保留所有基础升级',
    'Keep your best star types through Perspectives': '透视中保留最高的恒星数量',
    'You keep your galaxies': '保留所有星系',
    'Unlock Super-Compressors': '解锁超级压缩器',
    'Cost: 100 PPW': '花费: 100 透视能量',
    'Cost: 1,000 PPW': '花费: 1000 透视能量',
    'Cost: 100,000 PPW': '花费: 100000 透视能量',
    'Cost: 1e7 PPW': '花费: 1e7 透视能量',
    'Cost: 1e10 PPW': '花费: 1e10 透视能量',
    'Cost: 1e15 PPW': '花费: 1e15 透视能量',
    'Cost: 1e25 PPW': '花费: 1e25 透视能量',
    'Cost: 1e50 PPW': '花费: 1e50 透视能量',
    'Cost: 1e100 PPW': '花费: 1e100 透视能量',
    'If you made it and bought the 1e100 PPW upgrade, you\'re at the endgame. Try to reach 1e42 Normal Energy at this point until the next update comes out, because that is the requirement of the next layer!': '如果您购买了1e100透视能量的升级，那您暂时已经达到了本游戏的最后阶段。您可以尝试在下次升级之前先获得1e42的正常能量，因为那是下一层级的需求数量！',
    'Each one of these Super Compressors perform a perspective reset when bought!': '购买超级压缩器时将同时进行一次透视重置！',
    'Perform a Temporal Supercompress': '进行时间超级压缩',
    //透视层级结束

    //设置
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Ultimate Hard Reset': '彻底硬重置',
    'The game is autosaved every 10 seconds. Tip: By clicking a layer tab twice in the Stacked display will collapse that layer, revealing the entire set of layers. You can also change the layer display method to tabs, although this is uglier.': '此游戏每10秒自动保存一次。提示: 在堆叠方式下，双击一个层级将使它缩放到最小，以便您看清所有层级。您也可以将显示方式改为并列，但显示效果可能更糟糕。',
    'Join the Discord': '加入Discord频道',
    'Home': '官方网站',
    //设置结束

    //成就
    'Each row of achievements corresponds to a single Prestige Layer in the game': '每一行成就都对应了游戏的一个层级',
    'The last three achievement columns are full of rewards!': '最后三列成就可以提供加成！',
    'Tick Tock Aarex\'s Clock': 'Aarex的滴答时钟',
    'Where is the next update?': '下个升级在哪？',
    'On the seventh day, this achievement was created': '到第七日，此成就创生了',
    'Here\'s a free double meterstick': '免费的双倍米尺',
    'Computer Byte Master': '电脑字节大师',
    'SI units finally': '终于到公制单位了',
    'All of your upgrades belong to us': '你的升级归我们了',
    'NEIN NEIN NEIN': '九九九',
    'Four Minute Mile': '四分钟的迈数',
    'Two Hour Marathon': '两小时的马拉松',
    'Neutron Star': '中子星',
    'Larger than the Observable Universe': '比可观测宇宙还大',
    'Hevi-er than the Observable Universe': '比可观测宇宙还重',
    'A Supergiant Star': '超巨星',
    'Even more upgrades belong to us': '更多的升级都归我们了',
    'NEIN TIEN NEIN TIEN': '十九十九',
    'Shoot for the stars, you will fail anyways!': '望星怀志，止增笑耳',
    'Normies are taking over the world': '充满庸夫的世界',
    'You got past the big wall': '鱼跃龙门',
    'Double Galaxy Double Trouble': '双倍星系，双倍麻烦',
    'The good, the bad, and the ugly': '黄金三镖客',
    'Star goes boom boom': '恒星爆爆',
    'Notation, I no want no notation': '计数？要得要得',
    'Triple Nines for real': '真的是九九九',
    'A new perspective': '新的透视点',
    'You know that doesn\'t work': '明知故犯',
    'Where\'s the first two layers?': '前两个层级哪去了？',
    'This achievement is impossible to achieve': '[成就暂时无法获得]',
    'Star Super compressed into a black hole': '恒星超级压缩，成为黑洞',
    'The Star Cluster of Protostars': '原始恒星星团',
    'Twenty Nine of Three': '二十九，重复三次',
    'New Achievement: Tick Tock Aarex\'s Clock': '新成就: Aarex的滴答时钟',
    'New Achievement: Where is the next update?': '新成就: 下个升级在哪？',
    'New Achievement: On the seventh day, this achievement was created': '新成就: 到第七日，此成就创生了',
    'New Achievement: Here\'s a free double meterstick': '新成就: 免费的双倍米尺',
    'New Achievement: Computer Byte Master': '新成就: 电脑字节大师',
    'New Achievement: SI units finally': '新成就: 终于到公制单位了',
    'New Achievement: All of your upgrades belong to us': '新成就: 你的升级归我了',
    'New Achievement: NEIN NEIN NEIN': '新成就: 不不不',
    'New Achievement: Four Minute Mile': '新成就: 四分钟的迈数',
    'New Achievement: Two Hour Marathon': '新成就: 两小时的马拉松',
    'New Achievement: Neutron Star': '新成就: 中子星',
    'New Achievement: Larger than the Observable Universe': '新成就: 比可观测宇宙还大',
    'New Achievement: Hevi-er than the Observable Universe': '新成就: 比可观测宇宙还重',
    'New Achievement: A Supergiant Star': '新成就: 超巨星',
    'New Achievement: Even more upgrades belong to us': '新成就: 更多的升级都归我们了',
    'New Achievement: NEIN TIEN NEIN TIEN': '新成就: 十九十九',
    'New Achievement: Shoot for the stars, you will fail anyways!': '新成就: 望星怀志，止增笑耳',
    'New Achievement: Normies are taking over the world': '新成就: 充满庸夫的世界',
    'New Achievement: You got past the big wall': '新成就: 鱼跃龙门',
    'New Achievement: Double Galaxy Double Trouble': '新成就: 双倍星系，双倍麻烦',
    'New Achievement: The good, the bad, and the ugly': '新成就: 黄金三镖客',
    'New Achievement: Star goes boom boom': '新成就: 恒星爆爆',
    'New Achievement: Notation, I no want no notation': '新成就: 计数？要得要得',
    'New Achievement: Triple Nines for real': '新成就: 真的是九九九',
    'New Achievement: A new perspective': '新成就: 新的透视点',
    'New Achievement: You know that doesn\'t work': '新成就: 明知故犯',
    'New Achievement: Where\'s the first two layers?': '新成就: 前两个层级哪去了？',
    'New Achievement: Star Super compressed into a black hole': '新成就: 恒星超级压缩，成为黑洞',
    'New Achievement: The Star Cluster of Protostars': '新成就: 原始恒星星团',
    'New Achievement: Twenty Nine of Three': '新成就: 二十九，重复三次',
    //成就结束

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
    /^(.*)\{(.+)\}(.*)$/, //不抓取内容
    /^\s*您进行了(.*)$/, //不抓取内容
    /^\s*您每秒可获得(.*)$/, //不抓取内容
    /^转生以获得(.*)$/, //不抓取内容
    /^\s*每次空间压缩可将空间压缩为原来的(.*)$/, //不抓取内容
    /^此层级的时间流逝速度为现实时间的(.*)$/, //不抓取内容
    /^对此层级以上层级的加成倍率(.*)$/, //不抓取内容
    /^公式加强的升级还可以使空间能量乘以(.*)$/, //不抓取内容
    /^它还使对此层级以上层级的加成倍率及核合成上限变为原来的(.*)$/, //不抓取内容
    /^现实时间每秒等于本宇宙时间的(.*)$/, //不抓取内容
    /^(.*)个(.*)$/, //不抓取内容
    /^(.*)倍(.*)$/, //不抓取内容
    /^(.*)的(.*)$/, //不抓取内容
    /^(.+)分(.*)$/, //不抓取时间
    /^(.+)时(.+)分(.*)$/, //不抓取时间
    /^(.+)日(.+)时(.*)$/, //不抓取时间
    /^(.+)年(.+)日(.*)$/, //不抓取时间
    /^(.+)年(.*)$/, //不抓取时间
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-rt-z]{0,2}$/, //: 12.34K, x1.5
    /个免费时间压缩器$/, //不抓取内容
    /秒$/, //不抓取时间
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(.d+)Just make up for the space(\d+)$/, '纯举例用意'],
]);