var canvas = document.getElementById('Matrix');
var context = canvas.getContext('2d')
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
var katakana = '$€¥¢£₽₨₩฿₺₮₱₭₴₦৲৳૱௹﷼₹₲₪₡₫៛₵₢₸₤₳₥₠₣₰₧₯₶₷azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBNAAAAAZZZ$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//////////////////////////////////§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§eeeeeeeeeeeeeZZZZZZZZZZZEEEEEEEEERRRRRRRTTTTTTTTYYYYYYUUUUUIIIIIIIOOOOOOOPPPPPPPMMMMMLLLKKKKKKJJJJJJHHHHHGGGFFFFFDDDDDDSSSSSQQQQQQQNNNNBBBVVVVVCCCCCCCCCCCXXXXXXXXWWWWWWWWWWWWWWWWww'
var latin = '一二三四五六七八九十百千万父友母女男人子日月火水木金土語年午前後時間毎何上下左右西南北外名高小中大長半分学校生山川白天雨電気車国円話聞食読来書書見行出出入会青赤明秋空開悪朝字足味新兄姉歩有安医集本休先今東東工工不不元元文文止止世世市市光光死死発発仕仕代代以以肉肉低低住住体体作作使使夜夜便便借借病病働働験験写写帰帰冬冬弱弱寒寒切切力力勉勉色色区区兄兄台台民民合合同同別別図図事事京京味味所所知知品品屋屋員員堂堂答答歌歌去去地地赤赤待待教教場場声声売売夕夕太太犬犬妹妹姉姉始始好好魚魚字字室室家家広広度度引引弟弟心心急急悪悪持持鳥鳥動動方治治船船殺殺組組池池泥泥沈沈磨磨釣釣密'
var nums = '01$23456789$sudo$sudoАА́А̀А̂А̄ӒБВГҐДЂЃЕЕ́ЀЕ̄Е̂ЁЄЄ́ЖЗЗ́ЅИІІ́ЇЇ́ꙆИ́ЍИ̂ӢЙЈКЛЉМНЊОО́О̀О̂ŌӦПРСС́ТЋЌУУ́У̀У̂ӮЎӰФХЦЧЏШЩꙎЪЪ̀ЫЫ́ЬѢЭЭ́ЮЮ́Ю̀ЯЯ́Я̀ӐА̊А̃Ӓ̄ӔӘӘ́Ә̃ӚВ̌ԜГ̑Г̇Г̣Г̌Г̂Г̆Г̈ҔҒӺҒ̌ӶД́Д̌Д̈Д̣Д̆ӖЕ̃Ё̄Є̈ҖӜӁЖ̣ҘӞЗ̌З̣З̆ԐԐ̈ӠӢИ̃ӤҊҚӃҠҞҜК̣ԚЛ́ӅԮԒЛ̈ӍᵸН́ӉҢԨӇҤО̆О̃Ӧ̄ӨӨ̄Ө́Ө̆ӪԤҦП̈Р̌ҎС̌ҪС̣С̱Т́Т̈Т̌Т̇Т̣ҬУ̃ӲУ̊Ӱ̄ҰҮҮ́Х̣Х̱Х̮Х̑Х̌ҲӼӾҺԦЦ̌Ц̈ҴҶҶ̣ӴӋҸЧ̇Ч̣ҼҾШ̈Ш̣ꚜЫ̆Ы̄ӸꚝҌҨЭ̆Э̄Э̇ӬӬ́Ӭ̄Ю̆Ю̈Ю̈́Ю̄Я̆Я̄Я̈Я̈́ӀА̨Б̀Б̣Б̱В̀Г̀Г̧Г̄Г̓Г̆Ҕ̀Ҕ̆ԀД̓Д̀Д̨ԂꚀꙢЕ̇Е̨Ж̑ꙂꙄЏ̆ꚄꚄ̆ꙀЗ̀З̑ԄԆꚈԪꚂꚔІ̂І̣І̨Ј̵Ј̃ꙈК̓К̀К̆Ӄ̆К̑К̇К̈К̄ԞК̂Л̀ԠꙤԈЛ̑Л̇ԔМ̀М̃ꙦН̀Н̄Н̧Н̃ԊԢН̡ѺꙨꙪꙬꙮꚘꚚП̓П̀П́П̧П̑ҀԚ̆Р́Р̀Р̃ԖС̀С̈ԌҪ̓Т̓Т̀ԎТ̑ꚊТ̧ꚌꚌ̆ѸꙊУ̇У̨Ф̑Ф̓Х́Х̀Х̆Х̇Х̧Х̓ѠꙌѼѾꙠЦ̀Ц́Ц̓ꚎꚎ̆ꚐЧ́Ч̀Ч̑Ч̓ԬꚒꚆꚆ̆Ҽ̆Ш̆Ш̑Щ̆ꚖꚖꙐЫ̂Ы̃Ѣ́Ѣ̈Ѣ̆ꙒЭ̨Э̂ꙔЮ̂ꙖЯ̂Я̨ԘѤѦꙘѪꙚѨꙜѬѮѰѲѴѶꙞ'
var alphabet=katakana+latin+nums;

if (window.innerHeight>window.innerWidth){
    var fontSize=window.innerHeight/40;
}else{
    var fontSize=window.innerWidth/40;
}


var columns=canvas.width/fontSize;

var rainDrops=[];

for (let x=0; x< columns; x++){
    rainDrops[x]=1;
}

var draw = () =>{
    
    context.fillStyle='rgba(0,0,0,0.05)'
    context.fillRect(0,0,canvas.width,canvas.height);
    context.fillStyle = 'rgb(5,125,0)';
    context.font = fontSize + 'px monospace';


    for(let i=0; i<rainDrops.length; i++)
        {
            
            var text = alphabet.charAt(Math.floor(Math.random()*alphabet.length));
            context.fillText(text,i*fontSize,rainDrops[i]*fontSize)
            if(rainDrops[i]*fontSize>canvas.height && Math.random()>0.95 || Math.random()>0.995){
                context.fillStyle = 'rgb(255,0,0)';
                context.fillText(text,i*fontSize,rainDrops[i]*fontSize)
                context.fillStyle = 'rgb(5,155,0)';
                rainDrops[i]=0;
                
            }
            rainDrops[i]++;
        }
};


setInterval(draw,30);