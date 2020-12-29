"use strict"

const achieveData = [
  {
    unlockReq: () => game.highestReset>=0,
    achieve: [
      () => game.universeAge.gte(1),
      () => game.universeAge.gte(60*60*5),
      () => game.universeAge.gte(60*60*24*7),
      () => game.spaceFoam.gte(2),
      () => game.spaceFoam.gte(256)&&game.timeFoam.gte(65536)&&game.spacetime.gte(256**3),
      () => game.spaceFoam.gte(1e3),
      () => game.spaceEnergy.gte(3),
      () => game.tempComp.eq(9)&&game.spaceComp.eq(9)&&game.spacetimeComp.eq(9),
    ],
    name: [
      "Tick Tock Aarex's Clock",
      "Where is the next update?",
      "On the seventh day, this achievement was created",
      "Here's a free double meterstick",
      "Computer Byte Master",
      "SI units finally",
      "All of your upgrades belong to us",
      "NEIN NEIN NEIN",
    ],
    tooltip: [
      "宇宙年龄达到1秒",
      "宇宙年龄达到5小时",
      "宇宙年龄达到1周",
      "使空间泡沫的基础数值变为2倍",
      "拥有256米空间，65535秒时间，以及1677716米-秒时空",
      "到达1000米空间泡沫 奖励: 时空泡沫获取量变为10倍",
      "购买第1行的所有升级 奖励: 解锁第2行升级",
      "每种压缩器正好都为9个 奖励: 使空间压缩器的效果增加9%",
    ]
  },
  {
    unlockReq: () => game.highestReset>=0,
    achieve: [
      () => game.spaceFoam.gte(1609)&&game.nucleoTime.lt(240),
      () => game.spaceFoam.gte(42195)&&game.nucleoTime.lt(7200),
      () => game.spaceFoam.gte(20000)&&game.nucleoTime.lt(120),
      () => game.spaceFoam.gte(1e27),
      () => game.spaceEnergy.gte(4e69),
      () => getNucleoLength().gte(3e12),
      () => starMile(6),
      () => game.spacetimeComp.eq(19)&&game.tempComp.eq(19),
    ],
    name: [
      "Four Minute Mile",
      "Two Hour Marathon",
      "Neutron Star",
      "Larger than the Observable Universe",
      "Hevi-er than the Observable Universe",
      "A Supergiant Star",
      "Even more upgrades belong to us",
      "NEIN TIEN NEIN TIEN",
    ],
    tooltip: [
      "在核合成的4分钟以内拥有1609米空间",
      "在核合成的2小时以内拥有42195米空间",
      "在核合成开始之前就拥有20000米空间",
      "到达1e27米空间泡沫",
      "拥有4e69(好数字)焦耳空间能量",
      "氘核长度达到3e15毫米 奖励: 核合成还可以增加空间能量的获取量",
      "购买第2行的所有升级 奖励: 解锁第3行升级及核合成升级",
      "正好拥有19个时空压缩器和时间压缩器 奖励: 这两个压缩器的效果增加19%",
    ]
  },
  {
    unlockReq: () => game.highestReset>=0,
    achieve: [
      () => starMile(1),
      () => game.normalEnergy.gte(1),
      () => game.galaxies[0].gte(1),
      () => game.galaxies[0].gte(2)&&game.galaxies[1].gte(2),
      () => starMile(3),
      () => game.supernova[0].gte(1),
      () => game.spacetime.gte("e1000"),
      () => game.spaceComp.gte(999),
    ],
    name: [
      "Shoot for the stars, you will fail anyways!",
      "Normies are taking over the world",
      "You got past the big wall",
      "Double Galaxy Double Trouble",
      "The good, the bad, and the ugly",
      "Star goes boom boom",
      "Notation, I no want no notation",
      "Triple Nines for real",
    ],
    tooltip: [
      "拥有第1个恒星",
      "获得 1 正常能量",
      "获得1个星系",
      "在星系 I和星系 II中各获得2个星系",
      "拥有3个不同的恒星",
      "使恒星爆炸 奖励: 每次重置时使恒星数量回到最高值",
      "拥有1e1000个时空泡沫 奖励: 极小的数值以科学计数法来表示",
      "正好拥有999个空间压缩器 奖励: 时空压缩器便宜1e999倍",
    ]
  },
  {
    unlockReq: () => game.highestReset>=0,
    achieve: [
      () => game.perspectivePoint.gte(1),
      () => inGalChal(2)&&game.spacetime.gte(1e6)&&game.spaceless,
      () => inGalChal(3)&&game.spaceComp.eq(0)&&game.tempComp.eq(0)&&game.spacetimeComp.eq(0)&&game.spacetime.gte("6e666"),
      () => false,
      () => false,
      () => game.superComp.temp.gte(1),
      () => getNucleoLength().gte(1.2e18),
      () => game.starTypes.eq(29)&&game.spacetimeComp.eq(29)&&game.tempComp.eq(29)
    ],
    name: [
      "A new perspective",
      "You know that doesn't work",
      "Where's the first two layers?",
      "This achievement is impossible to achieve",
      "This achievement is impossible to achieve",
      "Star Super compressed into a black hole",
      "The Star Cluster of Protostars",
      "Twenty Nine of Three",
    ],
    tooltip: [
      "Gain a perspective point",
      "Reach enough spacetime for Normal Energy while being in Galaxy 2",
      "Reach 6e666 spacetime while in Galaxy 3 and without any compressors",
      "For now",
      "For now",
      "Have a Supercompressor REWARD: Keep perspective power on perspective resets",
      "Have 1.2e21 mm of deuterium nuclei REWARD: Add massive QoL changes to Supernovas and double Normal Energy gain.",
      "Have exactly 29 star types, spacetime, and temporal compressors REWARD: Stars are 29% more effective",
    ]
  }
]

let achieveRowCheck = 0

function checkAchieve() {
  achieveRowCheck = ((achieveRowCheck+1)%(game.highestReset+1))
  let currentRow = achieveData[achieveRowCheck]
  for (let i in currentRow.achieve) {
    let achieveID=achieveRowCheck*10+Number(i)+11
    if (!game.achievement.includes(achieveID)) {
      if (currentRow.achieve[i]()) {
        game.achievement.push(achieveID)
        $.notify("New Achievement: " + currentRow.name[i],"achieve")
      }
    }
  }
}