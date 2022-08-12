interface ILoremProps {
  max: number
  min?: number
  usePunctuation?: boolean
  useSimplified?: boolean
  extend?: string
  exclude?: string
}

const MIN_PUNCTUATION_LENGTH = 2
const MAX_PUNCTUATION_LENGTH = 20

const TRADITIONAL_CHINESE =
  '的一是在不了有和人這中大為上個國我以要他時來用們生到作地於出就分對成會可主發年動同工也能下過子說産種面而方後多定行學法所民得經十三之進著等部度家電力裏如水化高自二理起小物現實加量都兩體制機當使點從業本去把性好應開它合還因由其些然前外天政四日那社義事平形相全表間樣與關各重新線內數正心反你明看原又麼利比或但質氣第向道命此變條只沒結解問意建月公無系軍很情者最立代想已通並提直題黨程展五果料象員革位入常文總次品式活設及管特件長求老頭基資邊流路級少圖山統接知較長將組見計別她手角期根論運農指幾九區強放決西被乾做必戰先回則任取據處隊南給色光門即保治北造百規熱領七海地口東導器壓志世金增爭濟階油思術極交受聯什認六共權收證改清己美再采轉更單風切打白教速花帶安場身車例真務具萬每目至達走積示議聲報鬥完類八離華名確才科張信馬節話米整空元況今集溫傳土許步群廣石記需段研界拉林律叫且究觀越織裝影算低持音衆書布複容兒須際商非驗連斷深難近礦千周委素技備半辦青省列習響約支般史感勞便團往酸曆市克何除消構府稱太准精值號率族維劃選標寫存候毛親快效斯院查江型眼王按格養易置派層片始卻專狀育廠京識適屬圓包火住調滿縣局照參紅細引聽該鐵價嚴首底液官德調隨病蘇失爾死講配女黃推顯談罪神藝呢席含企望密批營項防舉球英氧勢告李台落木幫輪破亞師圍注遠字材排供河態封另施減樹溶怎止案言士均武固葉魚波視僅費緊愛左章早朝害續輕服試食充兵源判護司足某練差致板田降黑犯負擊範繼興似余堅曲輸修的故城夫夠送笑船占右財吃富春職覺漢畫功巴跟雖雜飛檢吸助升陽互初創抗考投壞策古徑換未跑留鋼曾端責站簡述錢副盡帝射草沖承獨令限阿宣環雙請超微讓控州良軸找否紀益依優頂礎載倒房突坐粉敵略客袁冷勝絕析塊劑測絲協重訴念陳仍羅鹽友洋錯苦夜刑移頻逐靠混母短皮終聚汽村雲哪既距衛停烈央察燒迅行境若印洲刻括激孔搞甚室待核校散侵吧甲遊久菜味舊模湖貨損預阻毫普穩乙媽植息擴銀語揮酒守拿序紙醫缺雨嗎針劉啊急唱誤訓願審附獲茶鮮糧斤孩脫硫肥善龍演父漸血歡械掌歌沙著剛攻謂盾討晚粒亂燃矛乎殺藥甯魯貴鍾煤讀班伯香介迫句豐培握蘭擔弦蛋沈假穿執答樂誰順煙縮征臉喜松腳困異免背星福買染井概慢怕磁倍祖皇促靜補評翻肉踐尼衣寬揚棉希傷操垂秋宜氫套筆督振架亮末憲慶編牛觸映雷銷詩座居抓裂胞呼娘景威綠晶厚盟衡雞孫延危膠還屋鄉臨陸顧掉呀燈歲措束耐劇玉趙跳哥季課凱胡額款紹卷齊偉蒸殖永宗苗川妒岩弱零楊奏沿露杆探滑鎮飯濃航懷趕'

const SIMPLIFIED_CHINESE =
  '沉假穿执答乐谁顺烟缩征脸喜松脚困异免背星福买染井概慢怕磁倍祖皇促静补评翻肉践尼衣宽扬棉希伤操垂秋宜氢套笔督振架亮末宪庆编牛触映雷销诗座居抓裂胞呼娘景威绿晶厚盟衡鸡孙延危胶还屋乡临陆顾掉呀灯岁措束耐剧玉赵跳哥季课凯胡额款绍卷齐伟蒸殖永宗苗川妒岩弱零杨奏沿露杆探滑镇饭浓航怀赶的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较长将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海地口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严首底液官德调随病苏失尔死讲配女黄推显谈罪神艺呢席含企望密批营项防举球英氧势告李台落木帮轮破亚师围注远字材排供河态封另施减树溶怎止案言士均武固叶鱼波视仅费紧爱左章早朝害续轻服试食充兵源判护司足某练差致板田降黑犯负击范继兴似余坚曲输修的故城夫够送笑船占右财吃富春职觉汉画功巴跟虽杂飞检吸助升阳互初创抗考投坏策古径换未跑留钢曾端责站简述钱副尽帝射草冲承独令限阿宣环双请超微让控州良轴找否纪益依优顶础载倒房突坐粉敌略客袁冷胜绝析块剂测丝协重诉念陈仍罗盐友洋错苦夜刑移频逐靠混母短皮终聚汽村云哪既距卫停烈央察烧迅行境若印洲刻括激孔搞甚室待核校散侵吧甲游久菜味旧模湖货损预阻毫普稳乙妈植息扩银语挥酒守拿序纸医缺雨吗针刘啊急唱误训愿审附获茶鲜粮斤孩脱硫肥善龙演父渐血欢械掌歌沙着刚攻谓盾讨晚粒乱燃矛乎杀药宁鲁贵钟煤读班伯香介迫句丰培握兰担弦蛋'

const lorem = ({
  max,
  min = 1,
  extend,
  exclude,
  usePunctuation = false,
  useSimplified = false
}: ILoremProps): string => {
  if (min > max) throw new Error('min number cannot greater than max number')
  if (min < 1) throw new Error('min number cannot less than 1')

  let wordSet = useSimplified ? SIMPLIFIED_CHINESE : TRADITIONAL_CHINESE
  let words = extend ? wordSet + extend : wordSet

  if (exclude) {
    words = words
      .split('')
      .filter((str) => {
        return exclude.indexOf(str) === -1
      })
      .join('')
  }

  const str = []

  const minPuncLength = MIN_PUNCTUATION_LENGTH

  const maxPuncLength = MAX_PUNCTUATION_LENGTH

  let wordLength = Math.floor(Math.random() * (max - min + 1)) + min

  let chosenWordIndex: number

  let puncCounter = 0

  let lengthToNextPunc = Math.floor(
    Math.random() * (maxPuncLength - minPuncLength) + 1
  )

  let i = 0

  if (usePunctuation && wordLength > 1) wordLength -= 1

  while (i < wordLength) {
    chosenWordIndex = Math.floor(Math.random() * words.length)
    if (
      usePunctuation &&
      i !== wordLength - 1 && // avoid comma next to period
      i > 0 && // avoid only have comma
      puncCounter === lengthToNextPunc && // reach comma words
      str[i - 1] !== '，' // prevent continuous comma
    ) {
      str.push('，')
      lengthToNextPunc =
        maxPuncLength -
        Math.floor(Math.random() * (maxPuncLength - minPuncLength))

      puncCounter = 1
    } else {
      str.push(words.charAt(chosenWordIndex))
    }

    puncCounter++
    i++
  }

  if (usePunctuation && max > 1) str[str.length - 1] += '。'

  return str.join('')
}

export default lorem
