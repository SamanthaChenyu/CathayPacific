$(document).ready(function() {
  //from
  $('#attenion').click(function() {
      $('#attenion_one').show();
  });
  $('#attenion2').click(function() {
      $('#attenion_two').show();
  });
  $('.attenion_close').click(function() {
      $('#attenion_one').hide();
      $('#attenion_two').hide();
  });

  $("#quiz").click(function(){
        quiz();
        $(this).hide(500);
        $(".direction").hide(500);
        $(".define").hide(500);     
        if ($('#inq1').is(':visible')) {
            $('#inq2').hide();
            $('#inq3').hide();               
        }
        else if ($('#inq2').is(':visible')){
            $('#inq1').hide();
            $('#inq3').hide();
        }
        else if ($('#inq3').is(':visible')) {
            $('#inq1').hide();
            $('#inq2').hide();           
        }
   });

var result = [
    {
        "character": "",
        "img": "http://topic.cw.com.tw/event/2017cathaypacific/images/fb1200900.jpg",
        "imgFrom": "",
        "FBtitle": "從心開始 旅程起點好一點",
        "quote": "",
        "description": "殘念你答對0題，再挑戰一次吧！挑戰飛航冷知識大評比，就有機會抽中國泰航空懷舊版1:400飛機模型與輕便摺疊旅行袋！",
        "rename": "",
        "relink": ""
    },
    {
        "character": "",
        "img": "http://topic.cw.com.tw/event/2017cathaypacific/images/fb1200900.jpg",
        "imgFrom": "",
        "FBtitle": "從心開始 旅程起點好一點",
        "quote": "",
        "description": "恭喜你答對1題，驚險低空飛過喔！挑戰飛航冷知識大評比，就有機會抽中國泰航空懷舊版1:400飛機模型與輕便摺疊旅行袋！",
        "rename": "",
        "relink": ""
    },
    {
        "character": "",
        "img": "http://topic.cw.com.tw/event/2017cathaypacific/images/fb1200900.jpg",
        "imgFrom": "",
        "FBtitle": "從心開始 旅程起點好一點",
        "quote": "",
        "description": "恭喜你答對2題，真的是逆風高飛達人！挑戰飛航冷知識大評比，就有機會抽中國泰航空懷舊版1:400飛機模型與輕便摺疊旅行袋！",
        "rename": "",
        "relink": ""
    },
    {
        "character": "",
        "img": "http://topic.cw.com.tw/event/2017cathaypacific/images/fb1200900.jpg",
        "imgFrom": "",
        "FBtitle": "從心開始 旅程起點好一點",
        "quote": "",
        "description": "恭喜你答對3題，輕鬆抵達平流層！挑戰飛航冷知識大評比，就有機會抽中國泰航空懷舊版1:400飛機模型與輕便摺疊旅行袋！",
        "rename": "",
        "relink": ""
    },
    {
        "character": "",
        "img": "http://topic.cw.com.tw/event/2017cathaypacific/images/fb1200900.jpg",
        "imgFrom": "",
        "FBtitle": "從心開始 旅程起點好一點",
        "quote": "",
        "description": "恭喜你答對4題，94會飛94狂！挑戰飛航冷知識大評比，就有機會抽中國泰航空懷舊版1:400飛機模型與輕便摺疊旅行袋！",
        "rename": "",
        "relink": ""
    },
    {
        "character": "",
        "img": "http://topic.cw.com.tw/event/2017cathaypacific/images/fb1200900.jpg",
        "imgFrom": "",
        "FBtitle": "從心開始 旅程起點好一點",
        "quote": "",
        "description": "恭喜你答對5題，真的是航空達人！挑戰飛航冷知識大評比，就有機會抽中國泰航空懷舊版1:400飛機模型與輕便摺疊旅行袋！",
        "rename": "",
        "relink": ""
    }
]

var QuesResp = [ // 隨機...
  {
       "Question":"飛機需要在何時開啟落地燈?",
       "Image":["img/1-1.jpg", "img/1-2.jpg"],
       "Option":["高度低於1萬呎需要開啟落地燈", "高度在2萬呎"],
       "Correct":["高度低於1萬呎需要開啟落地燈"],
       "Description":["一般來說是進跑道後開啟，直到飛機高度超過1萬呎時關掉。"],

  },
  {
       "Question":"航空史上第一批空服員的職業為何?",
       "Image":["img/2-1.jpg", "img/2-2.jpg"],
       "Option":["護士", "廚師"],
       "Correct":["護士"],
       "Description":["1930年，25歲的註冊護士艾倫•丘奇在一架波音80A艙門口迎接客人。"],
  },
  {
       "Question":"哪種飛機機型讓低碳排減少25%耗油量?",
       "Image":["img/3-1.jpg", "img/3-2.jpg"],
       "Option":["A350", "波音747"],
       "Correct":["A350"],
       "Description": ["空中巴士A350能降低碳排放，較其他主流機型減少25%耗油量。不僅節省燃油，亦有助降低飛行中的噪音。國泰航空機隊已有13架A350投入服務。"],
  },
  {
       "Question":"為了將飛行時外部壓力平均分布到表面上，飛機的窗戶是何種形狀?",
       "Image":["img/4-1.jpg", "img/4-2.jpg"],
       "Option":["橢圓形", "長方形"],
       "Correct":["橢圓形"],
       "Description":["在均衡完美的圓柱狀空間內，壓力可以流暢地在物質中流動。如果窗戶是長方形的，對壓力流的干擾尤其大，且壓力可能集中在方形窗戶的四個拐角，到了一定的程度後，這個壓力最終可能讓窗戶碎裂。"],
  },
  {
       "Question":"2016年台灣最繁忙的航線為何?",
       "Image":["img/6-2.jpg", "img/6-1.jpg"],
       "Option":["大阪", "香港"],
       "Correct":["香港"],
       "Description":["2016年，往返台灣與香港每天平均117.27個架次"],
  },
  {
       "Question":"聯合國國際民航組織宣布下列何物因運送時可能會造成火警，而禁止托運?",
       "Image":["img/7-1.jpg", "img/7-2.jpg"],
       "Option":["一個打火機", "鋰電池"],
       "Correct":["鋰電池"],
       "Description":["鋰電池是否可攜帶登機取決於其配置及其瓦時 (Wh) 評級（就可充電型鋰離子／聚合物電池而言）或鋰容量 (LC)（就不可充電型鋰金屬電池而言）。若您的物品若未能符合規定將會被充公。"],
  },
  {
       "Question":"飛機窗戶上的小洞有何種功能?",
       "Image":["img/8-1.jpg", "img/8-2.jpg"],
       "Option":["調節氣壓，防霧排濕", "抗紫外線，降低溫度"],
       "Correct":["調節氣壓，防霧排濕"],
       "Description":["當飛機升空時，機內和機外的氣壓和氣溫會有急劇變化，這個小洞能夠調節內外玻璃的氣壓。而飛機窗外層和中層中間有一層空氣，小圓洞便能有排濕作用。"],
  },
  {
       "Question":"航空公司的嬰兒票是指幾歲的孩童?",
       "Image":["img/9-1.jpg", "img/9-2.jpg"],
       "Option":["未滿2歲的孩童", "2-12歲的孩童"],
       "Correct":["未滿2歲的孩童"],
       "Description":["2歲以下的寶寶，票價通常以大人票價的10%計，嬰兒票沒有座位，必須由爸媽抱著。但可要求安排嬰兒掛籃，但掛籃有體重與身長的限制。"],
  },
  {
       "Question":"飛機上的翼尖小翼有什麼作用?",
       "Image":["img/10-1.jpg", "img/10-2.jpg"],
       "Option":["改善飛機燃油效率", "維持飛行平衡"],
       "Correct":["改善飛機燃油效率"],
       "Description":["翼尖小翼（winglet或wingtip），又稱作翼梢小翼、翼尖帆或翼端帆。翼尖小翼可有效的改善飛機燃油效率進。"],
  },
  {
       "Question":"中華民國護照獲免（落地）簽證之國家（地區）有幾個?",
       "Image":["img/11-1.jpg", "img/11-2.jpg"],
       "Option":["119個", "101個"],
       "Correct":["119個"],
       "Description":["根據中華民國外交部的資料，2017年1月止，共有119個國家及地區給予中華民國護照免簽證待遇。"],
  },
  {
       "Question":"2016年來台觀光人次最多的國家是哪個?",
       "Image":["img/12-2.jpg", "img/12-1.jpg"],
       "Option":["南非", "中國"],
       "Correct":["中國"],
       "Description":["根據中華民國交通部統計2016年來台觀光最多的國家為中國大陸，總共為3,511,734人次"],
  },
  {
       "Question":"為何座位上的小桌板的設計是傾斜的?",
       "Image":["img/17-1.jpg", "img/17-2.jpg"],
       "Option":["保持平衡", "方便乘客調整坐姿"],
       "Correct":["保持平衡"],
       "Description":["客機在巡航狀態時會讓機頭稍稍抬起，保持2.5度-3度的傾角，達到飛行時的\'經濟速度\'，因此航空公司會把小桌板的前沿向下調低3度，在旅途中無須擔心杯中飲料溢出。"],
  },
  {
       "Question":"客機的油箱在哪裡?",
       "Image":["img/18-2.jpg", "img/18-1.jpg"],
       "Option":["在機腹與機翼中", "在機頭"],
       "Correct":["在機腹與機翼中"],
       "Description":["由於客機飛行時是屬於一個三軸的運動狀態，加上要載客、載貨，因此在考量載重平衡與有限的空間下，客機將油箱設置在機腹與機翼中。"],
  },
  {
       "Question":"飛機起飛的原理為何?",
       "Image":["img/19-1.jpg", "img/19-2.jpg"],
       "Option":["相對論原理", "白努利原理"],
       "Correct":["白努利原理"],
       "Description":["在飛機起飛的情況下，原理中的流體就是空氣，因為機翼上方為弧形（因此氣體壓力較小），所以流經機翼上方的速度較快，因此產生了向上的升力。"],
  },
  {
       "Question":"飛機機翼上的擾流板的功能為何?",
       "Image":["img/20-1.jpg", "img/20-2.jpg"],
       "Option":["起飛時提供大量升力", "飛行中提升下降率；著陸時協助減速"],
       "Correct":["飛行中提升下降率；著陸時協助減速"],
       "Description":["擾流板位於機翼上方，站立於機翼的擾流板能干擾通過機翼的氣流，破壞升力的同時，增加大量的阻力。飛行中，擾流板用來提升下降率；著陸時則能協助減速。"],
  },
  {
       "Question":"為什麼飛機起降時窗戶遮陽板需要打開?",
       "Image":["img/21-1.jpg", "img/21-2.jpg"],
       "Option":["通風透氣", "讓機內與機外人員觀察起降狀況"],
       "Correct":["讓機內與機外人員觀察起降狀況"],
       "Description":["起飛和下降時打開遮陽板，是為了能讓乘客與地勤人員觀察窗內外的狀態"],
  },
  {
       "Question":"飛機機翼上的燈有幾種顏色?",
       "Image":["img/22-1.jpg", "img/22-2.jpg"],
       "Option":["橙、黑、紫", "紅、綠、白"],
       "Correct":["紅、綠、白"],
       "Description":["機的航行燈除了兩邊機翼末端的紅燈(左)及綠燈(右)外，機尾上還裝有一盞白燈。當飛機在飛行時，必須打開航行燈，以警示其他附近航機。"],
  },
  {
       "Question":"國際民航組織的總部在哪個城市?",
       "Image":["img/23-1.jpg", "img/23-2.jpg"],
       "Option":["加拿大蒙特婁", "台灣"],
       "Correct":["加拿大蒙特婁"],
       "Description":["國際民航組織前身是根據1919年巴黎公約成立的空中航行國際委員會（ICAN），總部設置在加拿大蒙特婁。"],
  },
  {
       "Question":"飛機緩緩從高空中飛過，後面拖著一條長長的「白色尾巴」叫做什麼?",
       "Image":["img/24-2.jpg", "img/24-1.jpg"],
       "Option":["凝結尾", "噴射氣流"],
       "Correct":["凝結尾"],
       "Description":["「凝結尾」，亦叫水氣尾（Vapor trail），這種現象叫做「成雲現象」。凝結尾的產生，是由於飛機引擎所排出的廢氣裡，含有充份水氣與凝結核，在高空遇冷凝結後呈現液態水，就和雲相同。"],
  },
  {
       "Question":"全球最高的機場塔台在哪裡?",
       "Image":["img/25-1.jpg", "img/25-2.jpg"],
       "Option":["泰國曼谷蘇凡納布機場的塔台", "台灣桃園中正國際機場"],
       "Correct":["泰國曼谷蘇凡納布機場的塔台"],
       "Description":["其塔台建築高度為132.2公尺(434ft)，是目前全球最高的機場塔台。機場「塔台」是頒發飛行許可、地面管制及飛機起降的指揮中心。"],
  },
  {
       "Question":"飛機引擎上的白色螺旋線的作用為何?",
       "Image":["img/26-1.jpg", "img/26-2.jpg"],
       "Option":["警示作用", "美觀作用"],
       "Correct":["警示作用"],
       "Description":["讓地勤人員知道引擎在運轉中，因為地勤人員大多戴上聽力保護設備，在震耳欲聾的噪音中，無法輕易分辨出哪個引擎在運轉，哪個沒有，避免因太靠近被引擎吸入。"],
  },
  {
       "Question":"飛機為什麼能夠飛行?",
       "Image":["img/27-1.jpg", "img/27-2.jpg"],
       "Option":["因為升力、地心引力、推力、阻力", "因為原力"],
       "Correct":["因為升力、地心引力、推力、阻力"],
       "Description":["飛行中的飛機是四種力互相牽引的中心：升力、地心引力、推力及阻力。為了讓飛機以直線及平穩地飛行，四股力量之關係必定是推力=阻力和升力=重量。"],
  },
];


var maxQues = 3;
var QRpointers = [];





function randOrd() { return (Math.round(Math.random())-0.5); } // quick and dirty randomizer (not the best)

function quiz() {
      

  for (var i=0; i<QuesResp.length; i++) { QRpointers.push(i); }
  QRpointers.sort(randOrd);                                    

  var str = '';
  for (var Q=0; Q<maxQues; Q++) {
    str += "<div class='Question' id='inq" + (Q+1) + "'>";
    str += "<div class='inside'><p>" + 'Q' + (Q+1) + ' ' + QuesResp[QRpointers[Q]].Question + "</p>";
    str += "<ul class='select'>" +
           "<li class='choice'>" + "<img src='" + QuesResp[QRpointers[Q]].Image[0] + "'>" + "<p>" + QuesResp[QRpointers[Q]].Option[0] + "</p></li>" +
           "<li class='choice'>" + "<img src='" + QuesResp[QRpointers[Q]].Image[1] + "'>" + "<p>" + QuesResp[QRpointers[Q]].Option[1] + "</p></li></ul></div>";
    str += "<div class='description'>" + "<h5 class='right'>你答對了!</h5><h5 class='wrong'>你答錯了!</h5>" + QuesResp[QRpointers[Q]].Description + "</div>" +
           "<button id='nextbuttom' value='NEXT' class='nextbuttom nextquiz" + (Q+1) + "'> 下一題 </button></div>"; 
    str += "<div class='descriptionTittle corrent" + (Q+1) + "'>" +  QuesResp[QRpointers[Q]].Correct + "</div>";

  }

  document.getElementById('QuestionsResponses').innerHTML = str;


var QuesRespImportant = [ // 客戶...
  {
       "Question":"國泰航空的哪個貴賓室提供免費腳底按摩的服務?",
       "Image":["img/5-2.jpg", "img/5-1.jpg"],
       "Option": ["國泰航空香港<p style='margin-top:0px;'>「玉衡堂」頭等貴賓室</p>", "國泰航空香港<p style='margin-top:0px;'>「玉衡堂」商務貴賓室</p>"],
       "Correct":["國泰航空香港「玉衡堂」頭等貴賓室"],
       "Description":["國泰航空香港機場設有7個貴賓室，其中「玉衡堂」頭等貴賓室提供免費腳底按摩服務。"],

  },
  {
       "Question":"下列何者為國泰航空貴賓室的名稱?",
       "Image":["img/13-1.jpg", "img/13-2.jpg"],
       "Option":["寰宇堂貴賓室", "環亞機場貴賓室"],
       "Correct":["寰宇堂貴賓室"],
       "Description":["國泰航空香港機場擁有7間貴賓室：玉衡堂頭等貴賓室、玉衡堂商務貴賓室、寰宇堂頭等貴賓室、寰宇堂商務貴賓室、逸連堂、爾雅堂與賞心堂。"],
  },
  {
       "Question":"國泰航空首創讓乘客在35,000呎高空可享受瓶裝手工啤酒的滋味，是哪一款啤酒?",
       "Image":["img/14-1.jpg", "img/14-2.jpg"],
       "Option":["台灣啤酒", "Betsy Beer"],
       "Correct":["Betsy Beer"],
       "Description":["Betsy Beer是國泰航空與香港啤酒攜手合作創製的瓶裝手工啤酒。2017年3月，這款啤酒率先在英國航線上的頭等、商務客艙供旅客品嚐。年底前，將陸續在澳洲、歐洲、美國、加拿大及紐西蘭等航線上輪替供應。"],
  },
  {
       "Question":"哪間頭等艙貴賓室在2016年被Skytrax票選最佳頭等貴賓室？",
       "Image":["img/15-1.jpg", "img/15-2.jpg"],
       "Option":["國泰航空香港機場頭等貴賓室", "國泰航空桃園機場貴賓室"],
       "Correct":["國泰航空香港機場頭等貴賓室"],
       "Description":["國泰航空 香港機場頭等貴賓室在2016年被Skytrax票選為年度最佳頭等貴賓室。"],
  },
  {
       "Question":"國泰航空飛行常客計劃為何?",
       "Image":["img/16-1.jpg", "img/16-2.jpg"],
       "Option":["馬可孛羅會", "哥倫布會"],
       "Correct":["馬可孛羅會"],
       "Description":["馬可孛羅會是國泰航空及國泰港龍航空的飛行常客計劃，提供專屬的優越禮遇及服務，讓旅程稱心愜意。"],
  },
  {
       "Question":"哪家航空公司曾4度榮獲Skytrax最佳航空公司?",
       "Image":["img/28-1.jpg", "img/28-2.jpg"],
       "Option":["國泰航空公司", "國泰港龍航空公司"],
       "Correct":["國泰航空公司"],
       "Description":["國泰航空先後在2003年、2005年、2009年及2014年四度榮膺Skytrax「全球最佳航空公司」"],
  },
  {
       "Question":"國泰航空公司在香港機場設有幾個機場貴賓室?",
       "Image":["img/29-1.jpg", "img/29-2.jpg"],
       "Option":["7個", "1個"],
       "Correct":["7個"],
       "Description":["國泰航空香港機場貴賓室：玉衡堂頭等貴賓室、玉衡堂商務貴賓室、寰宇堂頭等貴賓室、寰宇堂商務貴賓室、逸連堂、爾雅堂與賞心堂。2016年榮膺Skytrax「最佳頭等貴賓室」。"],
  },
];



var maxQuesImportant = 2;
var QRpointersImportant = [];

function randOrd() { return (Math.round(Math.random())-0.5); } 

function quizImportant() {

  for (var i=0; i<QuesRespImportant.length; i++) { QRpointersImportant.push(i); }
  QRpointersImportant.sort(randOrd);                                    // better randomizers are available

  var str = '';
  for (var Q=0; Q<maxQuesImportant; Q++) {
    
    str += "<div class='Question' id='inq" + (Q+4) + "'>";
    str += "<div class='inside'><p>" + 'Q' + (Q+4) + ' ' + QuesRespImportant[QRpointersImportant[Q]].Question + "</p>";
    str += "<ul class='select'>" +
           "<li class='choice'>" + "<img src='" + QuesRespImportant[QRpointersImportant[Q]].Image[0] + "'>" + "<p>" + QuesRespImportant[QRpointersImportant[Q]].Option[0] + "</p></li>" +
           "<li class='choice'>" + "<img src='" + QuesRespImportant[QRpointersImportant[Q]].Image[1] + "'>" + "<p>" + QuesRespImportant[QRpointersImportant[Q]].Option[1] + "</p></li></ul></div>";
    str += "<div class='description'>" + "<h5 class='right'>你答對了!</h5><h5 class='wrong'>你答錯了!</h5>" + QuesRespImportant[QRpointersImportant[Q]].Description + "</div>" +
           "<button id='nextbuttom' class='nextbuttom nextquiz" + (Q+4) + "'> 下一題 </button></div>";
    str += "<div class='descriptionTittle corrent" + (Q+4) + "'>" +  QuesRespImportant[QRpointersImportant[Q]].Correct + "</div>";     
  }


  document.getElementById('q_test').innerHTML = str;

 $('.nextquiz5').text('結算成果');

       if ($('#inq4').is(':visible')) {
            $('#inq5').hide();              
        }
        else if ($('#inq5').is(':visible')) {
            $('#inq4').hide();              
        }

  choiceScore();


            $('.nextquiz4').click(function() {
              $('#inq5').show();
              $('.inside').show();
              $('.description').hide(); 
              $('#inq4').hide();
              $('.nextbuttom').hide();
            });
           $('.nextquiz5').click(function() {
              $('#inq5').hide(500)
              $('#inq4').hide();
              $('.description').hide();
               countScore(score);
            });


}



var a1 = 0;
var a2 = 0;
var a3 = 0;
var a4 = 0;
var a5 = 0;

var scorefinal = 0;

var score = 0;

var Ranking = 0;

var Question = [];

var q1 = "";


    choiceScore();
    //下一題

            $('.nextquiz1').click(function() {
              $('#inq2').show();
              $('.inside').show();
              $('.description').hide(); 
              $('#inq1').hide();
              $('.nextbuttom').hide();
            });

            $('.nextquiz2').click(function() {
              $('#inq3').show();
              $('.inside').show();
              $('.description').hide();  
              $('#inq2').hide();
              $('.nextbuttom').hide();
            });
            $('.nextquiz3').click(function() {
              quizImportant();
              $('#inq3').hide();
              $('.description').hide();
            });


    function choiceScore() {
        $(".choice").bind("click", function (event) {
            $('.description').fadeIn(1000);
            $('.nextbuttom').fadeIn(2000);
            $('.inside').hide();
            $(this).addClass("selected");
            $(this).siblings('.selected').removeClass('selected');

  var corrent1 = $('.corrent1').text();
  var corrent2 = $('.corrent2').text();
  var corrent3 = $('.corrent3').text();
  var corrent4 = $('.corrent4').text();
  var corrent5 = $('.corrent5').text();
  var answer = $(this).text();


switch (true) {
    case (answer == corrent1):
                    a1 = 20; 
                    q1++;     
     $('.right').show();
     $('.wrong').hide();               
        break;
    case (answer == corrent2):
                    a2 = 20; 
                    q1++;
     $('.right').show();
     $('.wrong').hide(); 
        break;
    case (answer == corrent3):
                    a3 = 20; 
                    q1++; 
     $('.right').show();
     $('.wrong').hide(); 
        break;
    case (answer == corrent4):
                    a4 = 20;
                    q1++;
     $('.right').show();
     $('.wrong').hide(); 
        break;
    case (answer == corrent5):
                    a5 = 20;
                    q1++;
     $('.right').show();
     $('.wrong').hide(); 
        break;
    default:
     $('.wrong').show();
     $('.right').hide();
        break;
}



             score = a1 + a2 + a3 + a4 + a5;

            if (q1 < 5) {
              QuestionLength = q1;
            } else {
              QuestionLength = 5;              
            }
           

//            console.log(answer);
            console.log(score);
            console.log(QuestionLength);


        });       
    }
}

    function countScore(score) {

        switch(true) {
            case (score == 0):
            Ranking = 0;
            $("#result").append("<div class='result-text'><div id='innerR' class='inner'>" +
               "<p>恭喜你!你答對了" + QuestionLength + "題</p><span class='spec'>" + result[Ranking]['character'] + "</span>" + result[Ranking]['description'] + "<div class='clear'></div></div>" +
               "<input type='button' class='reset' value='重來一次' ><input type='button' class='shared' value='分享好友，並參加抽獎' ></div><div class='ad'><img src='images/bn1.jpg' width='100%'></div>");
            $(".survey").show();            
        break;
            case ( score == 20):
            Ranking = 1;
            $("#result").append("<div class='result-text'><div id='innerR' class='inner'>" +
               "<p>恭喜你!你答對了" + QuestionLength + "題</p><span class='spec'>" + result[Ranking]['character'] + "</span>" + result[Ranking]['description'] + "<div class='clear'></div></div>" +
               "<input type='button' class='reset' value='重來一次' ><input type='button' class='shared' value='分享好友，並參加抽獎' ></div><div class='ad'><img src='images/bn1.jpg' width='100%'></div>");
            $(".survey").show();             
        break;
            case ( score == 40):
            Ranking = 2;
            $("#result").append("<div class='result-text'><div id='innerR' class='inner'>" +
               "<p>恭喜你!你答對了" + QuestionLength + "題</p><span class='spec'>" + result[Ranking]['character'] + "</span>" + result[Ranking]['description'] + "<div class='clear'></div></div>" +
               "<input type='button' class='reset' value='重來一次' ><input type='button' class='shared' value='分享好友，並參加抽獎' ></div><div class='ad'><img src='images/bn1.jpg' width='100%'></div>");
            $(".survey").show();             
        break;
            case ( score == 60):
            Ranking = 3;
            $("#result").append("<div class='result-text'><div id='innerR' class='inner'>" +
               "<p>恭喜你!你答對了" + QuestionLength + "題</p><span class='spec'>" + result[Ranking]['character'] + "</span>" + result[Ranking]['description'] + "<div class='clear'></div></div>" +
               "<input type='button' class='reset' value='重來一次' ><input type='button' class='shared' value='分享好友，並參加抽獎' ></div><div class='ad'><img src='images/bn1.jpg' width='100%'></div>");
            $(".survey").show();           
        break;
            case ( score == 80):
            Ranking = 4;
            $("#result").append("<div class='result-text'><div id='innerR' class='inner'>" +
               "<p>恭喜你!你答對了" + QuestionLength + "題</p><span class='spec'>" + result[Ranking]['character'] + "</span>" + result[Ranking]['description'] + "<div class='clear'></div></div>" +
               "<input type='button' class='reset' value='重來一次' ><input type='button' class='shared' value='分享好友，並參加抽獎' ></div><div class='ad'><img src='images/bn1.jpg' width='100%'></div>");
            $(".survey").show();            
        break;
            default:
            Ranking = 5;
            $("#result").append("<div class='result-text'><div id='innerR' class='inner'>" +
               "<p>恭喜你!你答對了" + QuestionLength + "題</p><span class='spec'>" + result[Ranking]['character'] + "</span>" + result[Ranking]['description'] + "<div class='clear'></div></div>" +
               "<input type='button' class='reset' value='重來一次' ><input type='button' class='shared' value='分享好友，並參加抽獎' ></div><div class='ad'><img src='images/bn1.jpg' width='100%'></div>");
            $(".survey").show();   
        break;
}

        $("input.shared").on("click", function () {
            postToFeed(Ranking);
            timedMsg();
            return false;
        });

        $("input.reset").on("click", function () {
            resetQuiz();
            return false;

        });
    }

    function timedMsg() {
      setTimeout(
        function () {
           $('#result').hide();
           $('#from').show();
         }, 3000);
    };

    function resetQuiz() {
        a1 = 0;
        a2 = 0;
        a3 = 0;
        a4 = 0;

        score = 0;
        Ranking = 0;
        Question = [];
        q1 = "";

        $(document).find("#result").empty();
        $(".choice").siblings('.selected').removeClass('selected');
        $('#quiz').fadeIn(200);
        $(".direction").fadeIn(200);
        $(".define").fadeIn(200);

    }


     window.fbAsyncInit = function () {
        FB.init({
            appId: '321932781501881',
            xfbml: true,
            version: 'v2.6'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function postToFeed(Ranking) {
        FB.ui({
            method: 'feed',
            link: 'http://topic.cw.com.tw/event/2017cathaypacific/index.html',
            picture: result[Ranking]['img'],
            name: result[Ranking]['FBtitle'],
            caption: '',
            hashtag: '#測達人指數抽精美好禮',
            description: result[Ranking]['description']
        }, function(response){});
    } 
  });

