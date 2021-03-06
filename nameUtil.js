/**
 * Created by hfwu on 20/2/17.
 */
'use strict';


module.exports = (function () {
    function getName(gender, month, day){
        // gender: 0：男、1：女
        gender = parseInt(gender);
        var firstNames = [
            ["长", "栓", "狗", "来", "大", "守", "傻", "福", "龟", "二", "胖", "臭"],
            ["长", "小", "阿", "来", "大", "守", "傻", "福", "美", "二", "胖", "臭"]
        ];
        var secondNames = [
            ["牛", "羊", "剩", "猴", "球", "坑", "根", "岁", "娃", "毛", "歪", "狮", "英", "鼠", "肥", "狗", "虎", "猫", "鸟",
                "腚", "村", "蛋", "军", "木", "马", "熊", "财", "头", "胖", "发"],
            ["芳", "妮", "乔", "娣", "茶", "坑", "兔", "岁", "娃", "夕", "雯", "姑", "英", "妹", "肥", "霞", "娇", "花", "凤",
                "腚", "村", "玲", "妞", "木", "翠", "爱", "宝", "云", "胖", "发"]
        ];
        console.log("Method getName called: gender = " + gender + " month=" + month + " day=" + day);
        return firstNames[gender][month] + secondNames[gender][day];
    }

    function getImg(name){
        var dic = {"牛": "niu.jpeg", "羊":"yang.jpg", "狗":"gou.jpg", "猴":"hou.jpg", "球":"qiu.jpg", "狮":"shi.jpg",
            "花":"hua.jpg", "鸟":"niao.jpeg", "马":"ma.jpeg", "兔":"tu.jpg", "鼠":"shu.jpg", "熊":"xiong.jpeg",
            "姑": "gu.jpeg", "娃":"wa.jpeg", "妞": "niuniu.jpeg", "虎": "hu.jpg", "芳":"fang.jpg", "宝":"bao.jpeg",
            "霞":"xia.jpg"};
        var img_list = ["0.jpg", "1.jpeg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpeg", "9.jpg",
            "10.jpeg", "11.jpg"];

        var img = dic[name[0]];
        if(! img){
            console.log("Can not find:" + name[0]);
            img = dic[name[1]];
            if(! img){
                console.log("Can not find:" + name[1]);
                img = img_list[Math.floor(Math.random()*12)];
                console.log("Finally get img:  " + img);
            } else {
                console.log("Get img from second name:" + name[1]);
            }
        } else {
            console.log("Get img from first name:" + name[0]);
        }
        return "img/" + img;
    }

    function getDes(year) {
        var description =["属鼠的人最擅长是难为自己。不想对方难过，只好让自己难过。总是认为自己有超乎寻常的承受力，把自己想得太坚强，而把别人想得太脆弱。对方提的任何过分的要求，属鼠的人统统照单全收、精心尽力，绝对不会有半个不字。他们不知道，到最后受伤的其实是自己，只是不知道如何去表现。",
            "属牛的人真的很为别人着想，打心底的为别人着想，决不是做表面工作的那种，是用心去关心他人，很在乎自己说的话会对别人的影响，尤其是自己一直看重的人，如果会对对方造成负担，属牛的人宁愿自己默默地承受一切。属牛的人是十二生肖中对人最诚实、最心软地一个生肖，也是相当孤独的一个生肖。",
            "属虎的人性格活泼开朗，爱自由，有梦醒的生肖，最害怕唠叨，是一个绝对要拥有自己的个人空间的生肖。生肖虎属于一个很有正义感，对周围的不公会抱有不忿的心，是个爱好和平的人。不过属虎的人是个比较随意，很不修边幅，做起事来就一定会丢三漏四的。有点懵懂，有点庸碌，所以很难看到属虎的人认真有魅力的一面。",
            "属兔的人通常感性重过理性，比较偏执，比较极端，要么不爱，要么爱到骨子里；属兔有时通情达理，有时歇斯底里，冷静下来又很心软；属兔一旦动了感情，拿的起，放不下；属兔外表冷，内心其实很热，很温暖，真的成了知心朋友或恋人，这辈子，很忠诚。",
            "属龙的人在争抢东西方面总是最弱的。属于自己的东西总是被人抢走还一副无所谓的样子，总给人留下懦弱无用形象。其实不是他没有能力去争抢，只是属龙的人明白一个道理，真正属于自己的东西是不用去争去抢。这不是优点，是缺点，只是属龙的人一种与生俱来的性格。",
            "属蛇的人处事冷静、沉着、内敛、稳重；容不得别人的背叛，对背叛自己的人绝不原谅，对敌人下手狠毒，冷血至及。 面具下：多疑、没安全感。他们用情至深，在爱上一个人之后是绝对不会轻言放弃的。但他们只会默默的爱着，悲情暗恋者的典范；内心其实非常的脆弱，非常敏感。",
            "属马的人喜欢和没有心机的人交朋友，就是那种为朋友两肋插刀的那种，一旦成了朋友，他就把你归为自己人，在他的控制范围内了，那样有时候会给那些人带来困饶，因为觉得他太粘，感觉不太对味!其实他心理明白付出不一定有回报，但是，作为生肖马来说，宁愿别人负我，我也决不负人。",
            "属羊的人容易耳根软，容易有愧疚感。被普通的朋友缠多几句后，便会觉得不好意思、愧疚，如果不是什么大事往往会答应要求。但是面对熟悉的朋友会任性，如果不喜欢去做，即使是小事一件，虽然仍心存愧疚，也能轻易地说不。如果属羊的人对你说不，你应该高兴，因为他觉得你可以信任。",
            "属猴的人给旁人的感觉就是爱情精力过盛，要不然大家为何总看见属猴的人总和N个异性暧昧不清?其实能做到“博爱”所需要的战斗力不是一般生肖能达到的，像属猴这样的“二班”生肖也不多。属猴的孩纸们是讨人喜的，他们是博学家，懂得很不少，不管在什么场合，他们大都可以侃侃而谈，让人无法忽视他们的存在。",
            "属鸡的人都真性情，爱恨分明，总是口是心非。如果吵架，没有多想，一定下一句话说的比对方更狠，更没有退路，然后不知道得意个什么。要命的自尊，喜欢简简单单就好，不喜欢世俗，一根筋想问题。开心时候什么都能丢一边，不开心时候一句话也不愿意说。",
            "属狗的人笑得越灿烂的时候，越是他们最脆弱的时候，其实他们并不是想伪装什么，只是不想让身边的朋友亲人担心，不想暴露出自己的脆弱，不想看到别人同情的眼神。他们需要的不是同情，而是一个温暖的怀抱，一个能担当的臂膀，一个当她们遇到困难时鼓励的话语，这样就够了！",
            "属猪的人不擅表达，如果你能感觉他对你三分的喜爱，事实上会有五分；如果你能感觉到五分，事实上会有七分。属猪的人是不会坦白的，会淡化感情的表达，会压抑自己的情绪。属猪的人只会对别人宽容，却不会对自己宽容。对自己要求挺严格的，经常和自己过不去，别问理由，他自己也不知道。"];
        return description[(year - 1900) % 12];
    }
    
    function getZodiac(year) {
        var zodiacs = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
        return zodiacs[(year - 1900) % 12];
    }

    function test() {
        var year = 1989;
        alert(getDes(year));
    }

    function getClientIp(req) {
        return req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
    };

    return {
        getName: getName,
        getImg: getImg,
        getDes: getDes,
        getZodiac: getZodiac,
        getClientIp: getClientIp
    };
})();
