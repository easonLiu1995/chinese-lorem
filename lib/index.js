"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MIN_PUNCTUATION_LENGTH = 2;
var BASE_PUNCTUATION_LENGTH = 5;
var MAX_PUNCTUATION_LENGTH = 20;
var BASE_PARAGRAPH_LENGTH = 10;
var WORDS = '的一是在不了有和人這中大為上個國我以要他時來用們生到作地於出就分對成會可主發年動同工也能下過子說産種面而方後多定行學法所民得經十三之進著等部度家電力裏如水化高自二理起小物現實加量都兩體制機當使點從業本去把性好應開它合還因由其些然前外天政四日那社義事平形相全表間樣與關各重新線內數正心反你明看原又麼利比或但質氣第向道命此變條只沒結解問意建月公無系軍很情者最立代想已通並提直題黨程展五果料象員革位入常文總次品式活設及管特件長求老頭基資邊流路級少圖山統接知較長將組見計別她手角期根論運農指幾九區強放決西被乾做必戰先回則任取據處隊南給色光門即保治北造百規熱領七海地口東導器壓志世金增爭濟階油思術極交受聯什認六共權收證改清己美再采轉更單風切打白教速花帶安場身車例真務具萬每目至達走積示議聲報鬥完類八離華名確才科張信馬節話米整空元況今集溫傳土許步群廣石記需段研界拉林律叫且究觀越織裝影算低持音衆書布複容兒須際商非驗連斷深難近礦千周委素技備半辦青省列習響約支般史感勞便團往酸曆市克何除消構府稱太准精值號率族維劃選標寫存候毛親快效斯院查江型眼王按格養易置派層片始卻專狀育廠京識適屬圓包火住調滿縣局照參紅細引聽該鐵價嚴首底液官德調隨病蘇失爾死講配女黃推顯談罪神藝呢席含企望密批營項防舉球英氧勢告李台落木幫輪破亞師圍注遠字材排供河態封另施減樹溶怎止案言士均武固葉魚波視僅費緊愛左章早朝害續輕服試食充兵源判護司足某練差致板田降黑犯負擊範繼興似余堅曲輸修的故城夫夠送笑船占右財吃富春職覺漢畫功巴跟雖雜飛檢吸助升陽互初創抗考投壞策古徑換未跑留鋼曾端責站簡述錢副盡帝射草沖承獨令限阿宣環雙請超微讓控州良軸找否紀益依優頂礎載倒房突坐粉敵略客袁冷勝絕析塊劑測絲協重訴念陳仍羅鹽友洋錯苦夜刑移頻逐靠混母短皮終聚汽村雲哪既距衛停烈央察燒迅行境若印洲刻括激孔搞甚室待核校散侵吧甲遊久菜味舊模湖貨損預阻毫普穩乙媽植息擴銀語揮酒守拿序紙醫缺雨嗎針劉啊急唱誤訓願審附獲茶鮮糧斤孩脫硫肥善龍演父漸血歡械掌歌沙著剛攻謂盾討晚粒亂燃矛乎殺藥甯魯貴鍾煤讀班伯香介迫句豐培握蘭擔弦蛋沈假穿執答樂誰順煙縮征臉喜松腳困異免背星福買染井概慢怕磁倍祖皇促靜補評翻肉踐尼衣寬揚棉希傷操垂秋宜氫套筆督振架亮末憲慶編牛觸映雷銷詩座居抓裂胞呼娘景威綠晶厚盟衡雞孫延危膠還屋鄉臨陸顧掉呀燈歲措束耐劇玉趙跳哥季課凱胡額款紹卷齊偉蒸殖永宗苗川妒岩弱零楊奏沿露杆探滑鎮飯濃航懷趕';
var lorem = function (_a) {
    var max = _a.max, _b = _a.min, min = _b === void 0 ? 1 : _b, extend = _a.extend, usePunctuation = _a.usePunctuation;
    if (min > max)
        throw new Error('min number cannot greater than max number');
    if (min < 1)
        throw new Error('min number cannot less than 1');
    var words = extend ? WORDS + extend : WORDS;
    var str = [];
    var minPuncLength = MIN_PUNCTUATION_LENGTH;
    var maxPuncLength = MAX_PUNCTUATION_LENGTH;
    var wordLength = Math.floor(Math.random() * (max - min + 1)) + min;
    var chosenWordIndex;
    var puncCounter = 0;
    var lengthToNextPunc = Math.floor(Math.random() * (maxPuncLength - minPuncLength) + 1);
    var i = 0;
    if (usePunctuation && wordLength > 1)
        wordLength -= 1;
    while (i < wordLength) {
        chosenWordIndex = Math.floor(Math.random() * words.length);
        if (usePunctuation &&
            i !== wordLength - 1 && // avoid comma next to period
            i > 0 && // avoid only have comma
            puncCounter === lengthToNextPunc && // reach comma words
            str[i - 1] !== '，' // prevent continuous comma
        ) {
            str.push('，');
            lengthToNextPunc =
                maxPuncLength -
                    Math.floor(Math.random() * (maxPuncLength - minPuncLength));
            puncCounter = 1;
        }
        else {
            str.push(words.charAt(chosenWordIndex));
        }
        puncCounter++;
        i++;
    }
    if (usePunctuation && max > 1)
        str[str.length - 1] += '。';
    return str.join('');
};
exports.default = lorem;
