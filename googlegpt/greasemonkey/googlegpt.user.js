// ==UserScript==
// @name                GoogleGPT 🤖
// @name:zh-CN          GoogleGPT 🤖
// @name:zh-TW          GoogleGPT 🤖
// @description         Adds ChatGPT answers to Google Search sidebar
// @description:af      Voeg ChatGPT-antwoorde by Google Soek kantbalk by
// @description:am      የChatGPT መልስናወርቃለች እርስዎን በGoogle የተወሰኑ ገጽታዎችን ይጨምሩ
// @description:ar      يضيف إجابات ChatGPT إلى شريط البحث الجانبي في Google
// @description:az      ChatGPT cavablarını Google Axtarış yan panelinə əlavə edir
// @description:be      Дадае адказы ChatGPT да бакавой баковай панэлі Google Search
// @description:bem     Aziya ChatGPT ndalama ku Google sidebar
// @description:bg      Добавя ChatGPT отговори към страничната лента на Google Search
// @description:bn      Google সাইডবারে ChatGPT উত্তর যোগ করে
// @description:bo      ChatGPT ལེ་བས་ཚད་བདག་སྐྱེད་དེ་བཟུམ་སྒྲིག་ནང་ Google གནས་པ་བརྗོད་པ།
// @description:bs      Dodaje odgovore ChatGPT-a na bočnu traku Google pretrage
// @description:ca      Afegeix respostes de ChatGPT a la barra lateral de Google Search
// @description:ceb     Nagdugang sa mga tubag sa ChatGPT sa sidebar sa Google Search
// @description:ckb     وەرگرتنی ڕاستەوخۆیی ChatGPT بۆ پەنجەرەی لاتی لە Google
// @description:cs      Přidává odpovědi od ChatGPT do bočního panelu Google Search
// @description:cy      Ychwanega Atebion ChatGPT i'r bar ochr Google Chwilio
// @description:da      Tilføjer ChatGPT-svar til Google Søg-sidelinjen
// @description:de      Fügt ChatGPT-Antworten zur Google-Seitenleiste hinzu
// @description:dv      ChatGPT އައިކްސޭޓުގެ ޖަވާބުގެ Google ސައިޓުގައި ފޯރުވާރައުގެ ޑައުން
// @description:dz      ChatGPT དང་ Google འབྱུང་ཆུང་ལེ་བས་འཐུས་པ་ལགས་སྤྱོད་སྒྲིག་པ་བརྟགས་བཞུགས།
// @description:el      Προσθέτει απαντήσεις ChatGPT στην πλαϊνή γραμμή αναζήτησης του Google
// @description:eo      Aldonas ChatGPT-respondojn al la flanka breto de Google Serĉo
// @description:es      Agrega respuestas de ChatGPT a la barra lateral de Google
// @description:et      Lisab ChatGPT vastused Google otsingu küljepaneelile
// @description:eu      Gehitu ChatGPT erantzunak Google bilaketako aldeko alderakoan
// @description:fa      ChatGPT به پاسخهای Google جستجو نوار کناری اضافه میکند
// @description:fi      Lisää ChatGPT-vastaukset Googleen
// @description:fil     Nagdaragdag ng mga sagot ng ChatGPT sa sidebar ng Google Search
// @description:fj      Vakarautaka na vosa vakatotolo ni ChatGPT ki na yasa ni liga ni Google
// @description:fo      Leggur ChatGPT-svar til Google Leita síðustriku
// @description:fr      Ajoute les réponses ChatGPT à la barre latérale Google
// @description:fr-CA   Ajoute les réponses ChatGPT à la barre latérale Google
// @description:ga      Cuireann freagraí ChatGPT le taobhliosta Google Cuardach
// @description:gd      Cuir freagairtean ChatGPT ris an taobh-siostam Google Lorg
// @description:gl      Engade as respostas de ChatGPT á barra lateral de procura de Google
// @description:gn      Oñemohẽ ChatGPT ñemohendu Google Ñepyrũ
// @description:gu      Google સાઇડબારમાં ChatGPT જવાબો ઉમેરે છે
// @description:ha      Zaya sauyaƙa daga ChatGPT zuwa bidiyo na bidiyon Google
// @description:haw     Hoʻohui aku i nā hōʻike a ChatGPT i ka papa aoʻao hema o ka ʻimi ʻana iā Google
// @description:he      הוספת תשובות ChatGPT לסרגל הצד של Google חיפוש
// @description:hi      Google साइडबार में ChatGPT उत्तर जोड़ता है
// @description:hr      Dodaje odgovore aplikacije ChatGPT bočnoj traci pretraživanja Google
// @description:ht      Ajoute repons ChatGPT nan barre laterale Rechèch Google a
// @description:hu      A ChatGPT válaszokat ad a Google Keresés oldalsávjához
// @description:hy      Ավելացնում է ChatGPT պատասխանները Google որոնումի կողմից
// @description:id      Menambahkan jawaban ChatGPT ke sidebar Google Search
// @description:ig      Tinye obere ChatGPT na-aga n'etiti ozi akụkụ Google Search
// @description:is      Bætir við ChatGPT svarum við hliðina á Google leitarstiku
// @description:it      Aggiunge le risposte ChatGPT alla barra laterale di Google
// @description:iu      ᐊᑎᒪᐃᓐᓂᐊᕐᓂᖅ ChatGPT ᐅᖃᐅᓯᒻᓂᒃ Google ᑎᑎᕋᖅ
// @description:ja      ChatGPT の回答を Google サイドバーに追加します
// @description:jv      Nambaki jawaban ChatGPT menyang sidebar Google Search
// @description:ka      დაამატებს ChatGPT პასუხებს Google ძიების გვერდის გვერდზე
// @description:kg      Kweyisa mawu a ChatGPT kuna sebukulu Google Search
// @description:kk      ChatGPT жауаптарын Google іздеу жолағына қосады
// @description:km      បន្ថែមការឆ្លើយនៃ ChatGPT ទៅជាន់ប្រែក្រវូកស្វែករក Google។
// @description:kn      Google ಹೆಸರಿನಲ್ಲಿ ChatGPT ಉತ್ತರಗಳನ್ನು ಸೇರಿಸಲಾಗುತ್ತದೆ
// @description:ko      Google 사이드바에 ChatGPT 답변 추가
// @description:kok     Google शोधन बारकिटेलो वर ChatGPT उत्तर जातो
// @description:ku      Li ser karkera lêgerîna Google ChatGPT parve dike
// @description:ky      ChatGPT жауаптарын Google издөө жолундо кошотот
// @description:la      Adiungit responsiones ChatGPT ad lateralem mensam quaerendi Google
// @description:lb      Setzt ChatGPT Äntwerten op Google Sichfenster bäi
// @description:lo      ເພີ່ມຄໍາຕອບ ChatGPT ໄປສະແດງໄວ້ໃນແບບຂອງ Google Vükos
// @description:lt      Prideda ChatGPT atsakymus į „Google“ paieškos šoninį juostos rėmelį
// @description:lv      Pievieno ChatGPT atbildes Google meklēšanas sānjoslā
// @description:mg      Mampiditra valiny avy amin'ny ChatGPT ao amin'ny laharana tenim-paharetan'ny Google
// @description:mi      Whakapau kōrero mai te ChatGPT ki te whītiki o Google Search
// @description:mk      Додавање на ChatGPT одговори во страничната лента на Google пребарување
// @description:ml      Google സോളിൽ ChatGPT ഉത്തരങ്ങൾ ചേർക്കുന്നു
// @description:mn      ChatGPT хариултуудыг Google хайлтын хажуу талд нэмнэ
// @description:mr      गूगलवर ChatGPT प्रतिसाद जोडला जातो
// @description:ms      Menambah jawapan ChatGPT ke sidebar Carian Google
// @description:mt      Iżżid ir-risposti tal-ChatGPT lill-sidebar tat-Tikketta Google
// @description:my      Google ရှိ ChatGPT အဖြေကိုထည့်သွင်းရန်
// @description:na      Ongerenga mei a ChatGPT i le tofiga o Google Suʻesuʻega
// @description:nb      Legger til ChatGPT-svar i Google Søk sidefelt
// @description:nd      Ithunyelwe izithuthi za ChatGPT kuqukethwe kwesibhakabhaka seGoogle Search
// @description:ne      Google खोजको साइडबारमा ChatGPT उत्तरहरू थप्दै
// @description:ng      Ongeza mafandikio ya ChatGPT ku tepu ya Google Search
// @description:nl      Voegt ChatGPT-antwoorden toe aan de zijkant van Google Zoeken
// @description:nn      Legg til ChatGPT-svar i Google Søk sidefelt
// @description:no      Legger til ChatGPT-svar i Google Søk sidefelt
// @description:nso     E ngata re tswetše diphetho tša ChatGPT go setšhabeng sa Google Search
// @description:ny      Ndadzivula mawu a ChatGPT ku sesele ya Google Search
// @description:oc      Apond las responsas de ChatGPT a la barra laterala de Google Search
// @description:om      Fayyadamnu Google Ayyaanni ChatGPT tiwwiiqaa garaa garaatti argachuu dandeenyu
// @description:or      ଗୁଗଲ ଖୋଜର ସାଇଡବାରରେ ChatGPT ଉତ୍ତର ଯୋଡ଼ାଯାଇଛି
// @description:pa      ਗੂਗਲ ਖੋਜ ਦੇ ਸਾਈਡਬਾਰ 'ਚ ChatGPT ਉੱਤਰ ਸ਼ਾਮਲ ਕੀਤੇ ਗਏ ਨੇ
// @description:pl      Dodaje odpowiedzi ChatGPT w pasku bocznym Google
// @description:ps      د ګوګل لټون کې ChatGPT جوابونه اضافه کوي
// @description:pt      Adiciona respostas do ChatGPT à barra lateral do Google Search
// @description:pt-BR   Adiciona respostas do ChatGPT à barra lateral do Google Search
// @description:qu      ChatGPT munankunapuraqmi Google ñawpa pachapi yanapaq
// @description:rm      Agiunta las respostas da ChatGPT a la barra laterala da Google Search
// @description:rn      Abaririza amajwi nka ChatGPT ku rubuga rw'ikibazo cya Google
// @description:ro      Adaugă răspunsurile ChatGPT în bara laterală Google Căutare
// @description:ru      Добавляет ответы ChatGPT на боковую панель Google
// @description:rw      Byongeyeza amajwi yo mubu sideba ya Google ChatGPT
// @description:sa      गूगल यान्त्रिके अभिन्नधीयो मार्गेण चाटगिपटिं उत्तरम्
// @description:sat     Googleᱥ ᱵᱟᱨᱦᱟᱨᱚᱛ ᱠᱟᱹᱞᱤᱞᱟ ChatGPT ᱨᱮᱞᱟ ᱦᱚᱱᱮᱡ
// @description:sc      Aghedda is responsas de ChatGPT a sa barra de cerca de Google
// @description:sd      گوگل سرچ ۾ ChatGPT جو جوابون اضافو ڪيل آهي
// @description:se      Loahpa ChatGPT-vástádusat Google Gaskkaside
// @description:sg      Tisa na tîsânga lusângo lu ChatGPT kuna ntsâdi ya Google
// @description:si      Google සෙවුමේ ChatGPT පිළිතුරු එකතු කරයි
// @description:sk      Pridáva odpovede ChatGPT do bočnej lišty vyhľadávania Google
// @description:sl      Dodaja odgovore ChatGPT v stransko vrstico iskanja Google
// @description:sm      Faʻaalia atonu a le ChatGPT i le taavale lautele o le Google Suʻesuʻega
// @description:sn      Kupurikira maitiro eChatGPT kuve kuwandisa wevhu raGoogle Search
// @description:so      Ku darin xogta ChatGPT ee gooshi Google Search
// @description:sq      Shton përgjigje ChatGPT në anëbardhën e kërkimit Google
// @description:sr      Додаје одговоре ЧатГПТ-а у траку за претрагу Google
// @description:ss      Faka amavulandlela aseChatGPT e sidebarenge sikaGoogle Seaching
// @description:st      Kgetha ChatGPT ho litlhopho tsa Google Thetsa
// @description:su      Nambihan jawaban ChatGPT ka sisi kiri Google
// @description:sv      Lägger till ChatGPT-svar i Google-sökraden
// @description:sw      Inaongeza majibu ya ChatGPT kwenye ubao wa upande wa Google
// @description:ta      கூகிள் தேடலின் பக்கத்தில் ChatGPT பதில்களைச் சேர்க்கின்றது
// @description:te      గూగుల్ శోధన పట్టిక పై ChatGPT సమాధానాలను జోడిస్తుంది
// @description:tg      Зиёд кардани ҷавобҳои ChatGPT ба тарафи сатҳи ҷустуҷӯ Google
// @description:th      เพิ่มคําตอบจาก ChatGPT ในแถบด้านข้างของการค้นหา Google
// @description:ti      ኣብ Google ስልጠና ኣብ ChatGPT ምልክትን ኣማራጺ
// @description:tk      Google gecikmäge ChatGPT jogaby goşýar
// @description:tl      Nagdadagdag ng mga sagot ng ChatGPT sa sidebar ng Google Search
// @description:tn      Viseza izisho zika ChatGPT kwekhoni leGoogle Search
// @description:to      Tānaki e ngaue kihe sipa tali fakapotopoto 'o e Google ngaue 'o e ChatGPT
// @description:tr      ChatGPT yanıtlarını Google Arama kenar çubuğuna ekler
// @description:ts      Vuyisa mati na ChatGPT hi xiphemu leGoogle Search
// @description:tt      Google Эзләү үтекле ChatGPT катнаштыру
// @description:tw      Hwɛ ChatGPT adefoɔ dodoɔ Google hwee
// @description:ug      Google ئىزدەشتە ChatGPT جاۋابلىرىنى قوشۇش
// @description:uk      Додає відповіді ChatGPT у бічний панелі пошуку Google
// @description:ur      گوگل تلاش کی طرف ChatGPT کے جوابات شامل کرتا ہے
// @description:uz      Google qidiruviga ChatGPT javoblari qo'shadi
// @description:ve      Vhohodzi vha ChatGPT kha vhavhili ya Google Fambisa
// @description:vi      Thêm câu trả lời của ChatGPT vào thanh bên Google Search
// @description:vo      Läükon datans ChatGPT ad pät binon Google Vükos
// @description:wa      Ådd doveses di Dj ChatGPT a l' cohteye di Dj Google
// @description:wo      Ndax duggëwul ChatGPT du bind ak wertali Google
// @description:xh      Nika izicelo zika ChatGPT ezinkunzi ngesandla samazwi eGoogle Search
// @description:yi      צוגעפיגט אַנטוואָרטן פון טשאַטגפּט אין גוגל זוכן זייַטבאַר
// @description:yo      Fi awọn iwe itumọ ChatGPT si abala iwoye Google
// @description:za      Ngozv yi ChatGPT nv nqgozv ya Google Search
// @description:zh      将 ChatGPT 答案添加到 Google 侧边栏 （无需注册！）
// @description:zh-CN   将 ChatGPT 答案添加到 Google 侧边栏 （无需注册！）
// @description:zh-HK   將 ChatGPT 答案添加到 Google 側邊欄 （無需註冊！）
// @description:zh-SG   将 ChatGPT 答案添加到 Google 侧边栏 （无需注册！）
// @description:zh-TW   將 ChatGPT 答案添加到 Google 側邊欄 （無需註冊！）
// @description:zu      Faka amaphawu ase-ChatGPT kuvaliwe i-Google Search
// @author              KudoAI
// @namespace           https://kudoai.com
// @version             2024.3.25
// @license             MIT
// @icon                https://media.googlegpt.io/images/icons/googlegpt/black/icon48.png
// @icon64              https://media.googlegpt.io/images/icons/googlegpt/black/icon64.png
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          waterfox
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @compatible          whale
// @compatible          kiwi
// @match               *://*.google.com/search*
// @match               *://*.google.ad/search*
// @match               *://*.google.ae/search*
// @match               *://*.google.com.af/search*
// @match               *://*.google.com.ag/search*
// @match               *://*.google.com.ai/search*
// @match               *://*.google.al/search*
// @match               *://*.google.am/search*
// @match               *://*.google.co.ao/search*
// @match               *://*.google.com.ar/search*
// @match               *://*.google.as/search*
// @match               *://*.google.at/search*
// @match               *://*.google.com.au/search*
// @match               *://*.google.az/search*
// @match               *://*.google.ba/search*
// @match               *://*.google.com.bd/search*
// @match               *://*.google.be/search*
// @match               *://*.google.bf/search*
// @match               *://*.google.bg/search*
// @match               *://*.google.com.bh/search*
// @match               *://*.google.bi/search*
// @match               *://*.google.bj/search*
// @match               *://*.google.com.bn/search*
// @match               *://*.google.com.bo/search*
// @match               *://*.google.com.br/search*
// @match               *://*.google.bs/search*
// @match               *://*.google.bt/search*
// @match               *://*.google.co.bw/search*
// @match               *://*.google.by/search*
// @match               *://*.google.com.bz/search*
// @match               *://*.google.ca/search*
// @match               *://*.google.cd/search*
// @match               *://*.google.cf/search*
// @match               *://*.google.cg/search*
// @match               *://*.google.ch/search*
// @match               *://*.google.ci/search*
// @match               *://*.google.co.ck/search*
// @match               *://*.google.cl/search*
// @match               *://*.google.cm/search*
// @match               *://*.google.cn/search*
// @match               *://*.google.com.co/search*
// @match               *://*.google.co.cr/search*
// @match               *://*.google.com.cu/search*
// @match               *://*.google.cv/search*
// @match               *://*.google.com.cy/search*
// @match               *://*.google.cz/search*
// @match               *://*.google.de/search*
// @match               *://*.google.dj/search*
// @match               *://*.google.dk/search*
// @match               *://*.google.dm/search*
// @match               *://*.google.com.do/search*
// @match               *://*.google.dz/search*
// @match               *://*.google.com.ec/search*
// @match               *://*.google.ee/search*
// @match               *://*.google.com.eg/search*
// @match               *://*.google.es/search*
// @match               *://*.google.com.et/search*
// @match               *://*.google.fi/search*
// @match               *://*.google.com.fj/search*
// @match               *://*.google.fm/search*
// @match               *://*.google.fr/search*
// @match               *://*.google.ga/search*
// @match               *://*.google.ge/search*
// @match               *://*.google.gg/search*
// @match               *://*.google.com.gh/search*
// @match               *://*.google.com.gi/search*
// @match               *://*.google.gl/search*
// @match               *://*.google.gm/search*
// @match               *://*.google.gr/search*
// @match               *://*.google.com.gt/search*
// @match               *://*.google.gy/search*
// @match               *://*.google.com.hk/search*
// @match               *://*.google.hn/search*
// @match               *://*.google.hr/search*
// @match               *://*.google.ht/search*
// @match               *://*.google.hu/search*
// @match               *://*.google.co.id/search*
// @match               *://*.google.ie/search*
// @match               *://*.google.co.il/search*
// @match               *://*.google.im/search*
// @match               *://*.google.co.in/search*
// @match               *://*.google.iq/search*
// @match               *://*.google.is/search*
// @match               *://*.google.it/search*
// @match               *://*.google.je/search*
// @match               *://*.google.com.jm/search*
// @match               *://*.google.jo/search*
// @match               *://*.google.co.jp/search*
// @match               *://*.google.co.ke/search*
// @match               *://*.google.com.kh/search*
// @match               *://*.google.ki/search*
// @match               *://*.google.kg/search*
// @match               *://*.google.co.kr/search*
// @match               *://*.google.com.kw/search*
// @match               *://*.google.kz/search*
// @match               *://*.google.la/search*
// @match               *://*.google.com.lb/search*
// @match               *://*.google.li/search*
// @match               *://*.google.lk/search*
// @match               *://*.google.co.ls/search*
// @match               *://*.google.lt/search*
// @match               *://*.google.lu/search*
// @match               *://*.google.lv/search*
// @match               *://*.google.com.ly/search*
// @match               *://*.google.co.ma/search*
// @match               *://*.google.md/search*
// @match               *://*.google.me/search*
// @match               *://*.google.mg/search*
// @match               *://*.google.mk/search*
// @match               *://*.google.ml/search*
// @match               *://*.google.com.mm/search*
// @match               *://*.google.mn/search*
// @match               *://*.google.ms/search*
// @match               *://*.google.com.mt/search*
// @match               *://*.google.mu/search*
// @match               *://*.google.mv/search*
// @match               *://*.google.mw/search*
// @match               *://*.google.com.mx/search*
// @match               *://*.google.com.my/search*
// @match               *://*.google.co.mz/search*
// @match               *://*.google.com.na/search*
// @match               *://*.google.com.ng/search*
// @match               *://*.google.com.ni/search*
// @match               *://*.google.ne/search*
// @match               *://*.google.nl/search*
// @match               *://*.google.no/search*
// @match               *://*.google.com.np/search*
// @match               *://*.google.nr/search*
// @match               *://*.google.nu/search*
// @match               *://*.google.co.nz/search*
// @match               *://*.google.com.om/search*
// @match               *://*.google.com.pa/search*
// @match               *://*.google.com.pe/search*
// @match               *://*.google.com.pg/search*
// @match               *://*.google.com.ph/search*
// @match               *://*.google.com.pk/search*
// @match               *://*.google.pl/search*
// @match               *://*.google.pn/search*
// @match               *://*.google.com.pr/search*
// @match               *://*.google.ps/search*
// @match               *://*.google.pt/search*
// @match               *://*.google.com.py/search*
// @match               *://*.google.com.qa/search*
// @match               *://*.google.ro/search*
// @match               *://*.google.ru/search*
// @match               *://*.google.rw/search*
// @match               *://*.google.com.sa/search*
// @match               *://*.google.com.sb/search*
// @match               *://*.google.sc/search*
// @match               *://*.google.se/search*
// @match               *://*.google.com.sg/search*
// @match               *://*.google.sh/search*
// @match               *://*.google.si/search*
// @match               *://*.google.sk/search*
// @match               *://*.google.com.sl/search*
// @match               *://*.google.sn/search*
// @match               *://*.google.so/search*
// @match               *://*.google.sm/search*
// @match               *://*.google.sr/search*
// @match               *://*.google.st/search*
// @match               *://*.google.com.sv/search*
// @match               *://*.google.td/search*
// @match               *://*.google.tg/search*
// @match               *://*.google.co.th/search*
// @match               *://*.google.com.tj/search*
// @match               *://*.google.tl/search*
// @match               *://*.google.tm/search*
// @match               *://*.google.tn/search*
// @match               *://*.google.to/search*
// @match               *://*.google.com.tr/search*
// @match               *://*.google.tt/search*
// @match               *://*.google.com.tw/search*
// @match               *://*.google.co.tz/search*
// @match               *://*.google.com.ua/search*
// @match               *://*.google.co.ug/search*
// @match               *://*.google.co.uk/search*
// @match               *://*.google.com.uy/search*
// @match               *://*.google.co.uz/search*
// @match               *://*.google.com.vc/search*
// @match               *://*.google.co.ve/search*
// @match               *://*.google.vg/search*
// @match               *://*.google.co.vi/search*
// @match               *://*.google.com.vn/search*
// @match               *://*.google.vu/search*
// @match               *://*.google.ws/search*
// @match               *://*.google.rs/search*
// @match               *://*.google.co.za/search*
// @match               *://*.google.co.zm/search*
// @match               *://*.google.co.zw/search*
// @match               *://*.google.cat/search*
// @include             https://auth0.openai.com
// @connect             raw.githubusercontent.com
// @connect             greasyfork.org
// @connect             chat.openai.com
// @connect             api.openai.com
// @connect             fanyi.sogou.com
// @connect             api.aigcfun.com
// @require             https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@2.6.7/dist/chatgpt.min.js#sha256-oruJBZa8MW6uOIGUHt0FV2lQYS/ErCKYP+Ve9sPoASo=
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js#sha256-n0UwfFeU7SR6DQlfOmLlLvIhWmeyMnIDp/2RmVmuedE=
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/contrib/auto-render.min.js#sha256-nLjaz8CGwpZsnsS6VPSi3EO3y+KzPOwaJ0PYhsf7R6c=
// @require             https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js#sha256-jjsBF/TfS+RSwLavW48KCs+dSt4j0I1V1+MSryIHd2I=
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_deleteValue
// @grant               GM_cookie
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM_openInTab
// @grant               GM.xmlHttpRequest
// @downloadURL         https://update.greasyfork.org/scripts/478597/googlegpt.user.js
// @updateURL           https://update.greasyfork.org/scripts/478597/googlegpt.meta.js
// @homepageURL         https://www.googlegpt.io
// @supportURL          https://github.googlegpt.io/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023–2024 KudoAI & contributors under the MIT license
// ..and KaTeX, the fastest math typesetting library @ https://katex.org (c) 2013–2020 Khan Academy & contributors under the MIT license

(async () => {

    // Define SCRIPT functions

    function loadSetting(...keys) { keys.forEach(key => config[key] = GM_getValue(config.keyPrefix + '_' + key, false)) }
    function saveSetting(key, value) { GM_setValue(config.keyPrefix + '_' + key, value) ; config[key] = value }
    function safeWindowOpen(url) { window.open(url, '_blank', 'noopener') } // to prevent backdoor vulnerabilities
    function getUserscriptManager() { try { return GM_info.scriptHandler } catch (err) { return 'other' }}

    // Define MENU functions

    function registerMenu() {

        // Add command to toggle proxy API mode
        const pamLabel = state.symbol[+!config.proxyAPIenabled] + ' '
                       + ( messages.menuLabel_proxyAPImode || 'Proxy API Mode' ) + ' '
                       + state.separator + state.word[+!config.proxyAPIenabled]
        menuIDs.push(GM_registerMenuCommand(pamLabel, () => {
            saveSetting('proxyAPIenabled', !config.proxyAPIenabled)
            notify(( messages.menuLabel_proxyAPImode || 'Proxy API Mode' ) + ' ' + state.word[+!config.proxyAPIenabled])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
            location.reload() // re-send query using new endpoint
        }))

        // Add command to toggle auto-get mode
        const agmLabel = state.symbol[+config.autoGetDisabled] + ' '
                       + ( messages.menuLabel_autoGetAnswers || 'Auto-Get Answers' ) + ' '
                       + state.separator + state.word[+config.autoGetDisabled]
        menuIDs.push(GM_registerMenuCommand(agmLabel, () => {
            saveSetting('autoGetDisabled', !config.autoGetDisabled)
            notify(( messages.menuLabel_autoGetAnswers || 'Auto-Get Answers' ) + ' ' + state.word[+config.autoGetDisabled])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to toggle showing related queries
        const rqLabel = state.symbol[+config.rqDisabled] + ' '
                      + ( messages.menuLabel_relatedQueries || 'Related Queries' ) + ' '
                      + state.separator + state.word[+config.rqDisabled]
        menuIDs.push(GM_registerMenuCommand(rqLabel, () => {
            saveSetting('rqDisabled', !config.rqDisabled)
            try { // to update visibility based on latest setting
                const relatedQueriesDiv = document.querySelector('.related-queries')
                relatedQueriesDiv.style.display = config.rqDisabled ? 'none' : 'flex'
            } catch (err) {}
            updateTweaksStyle() // toggle <pre> max-height
            notify(( messages.menuLabel_relatedQueries || 'Related Queries' ) + ' '
                + state.word[+config.rqDisabled])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to toggle prefix mode
        const pmLabel = state.symbol[+!config.prefixEnabled] + ' '
                      + ( messages.menuLabel_require || 'Require' ) + ' "/" '
                      + ( messages.menuLabel_beforeQuery || 'before query' ) + ' '
                      + state.separator + state.word[+!config.prefixEnabled]
        menuIDs.push(GM_registerMenuCommand(pmLabel, () => {
            saveSetting('prefixEnabled', !config.prefixEnabled)
            if (config.prefixEnabled && config.suffixEnabled) { // disable Suffix Mode if activating Prefix Mode
                saveSetting('suffixEnabled', !config.suffixEnabled) }
            notify(( messages.mode_prefix || 'Prefix Mode' ) + ' ' + state.word[+!config.prefixEnabled])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to toggle suffix mode
        const smLabel = state.symbol[+!config.suffixEnabled] + ' '
                      + ( messages.menuLabel_require || 'Require' ) + ' "?" '
                      + ( messages.menuLabel_afterQuery || 'after query' ) + ' '
                      + state.separator + state.word[+!config.suffixEnabled]
        menuIDs.push(GM_registerMenuCommand(smLabel, () => {
            saveSetting('suffixEnabled', !config.suffixEnabled)
            if (config.prefixEnabled && config.suffixEnabled) { // disable Prefix Mode if activating Suffix Mode
                saveSetting('prefixEnabled', !config.prefixEnabled) }
            notify(( messages.mode_suffix || 'Suffix Mode' ) + ' ' + state.word[+!config.suffixEnabled])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        if (!isMobile) {

            // Add command to toggle wider sidebar
            const wsbLabel = state.symbol[+!config.widerSidebar] + ' '
                           + ( messages.menuLabel_widerSidebar || 'Wider Sidebar' )
                           + state.separator + state.word[+!config.widerSidebar]
            menuIDs.push(GM_registerMenuCommand(wsbLabel, () => toggleSidebar('wider')))

            // Add command to toggle sticky sidebar
            const ssbLabel = state.symbol[+!config.stickySidebar] + ' '
                           + ( messages.menuLabel_stickySidebar || 'Sticky Sidebar' )
                           + state.separator + state.word[+!config.stickySidebar]
            menuIDs.push(GM_registerMenuCommand(ssbLabel, () => toggleSidebar('sticky')))
        }

        // Add command to set reply language
        const rlLabel = '🌐 ' + ( messages.menuLabel_replyLanguage || 'Reply Language' )
                      + state.separator + config.replyLanguage
        menuIDs.push(GM_registerMenuCommand(rlLabel, () => {
            while (true) {
                let replyLanguage = prompt(
                    ( messages.prompt_updateReplyLang || 'Update reply language' ) + ':', config.replyLanguage)
                if (replyLanguage === null) break // user cancelled so do nothing
                else if (!/\d/.test(replyLanguage)) {
                    replyLanguage = ( // auto-case for menu/alert aesthetics
                        [2, 3].includes(replyLanguage.length) || replyLanguage.includes('-') ? replyLanguage.toUpperCase()
                          : replyLanguage.charAt(0).toUpperCase() + replyLanguage.slice(1).toLowerCase() )
                    saveSetting('replyLanguage', replyLanguage || config.userLanguage)
                    alert(( messages.alert_langUpdated || 'Language updated' ) + '!', // title
                        config.appName + ' ' + ( messages.alert_willReplyIn || 'will reply in' ) + ' ' // msg
                            + ( replyLanguage || messages.alert_yourSysLang || 'your system language' ) + '.',
                        '', '', 335)
                    for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
                    break
        }}}))

        // Add command to launch About modal
        const aboutLabel = '💡 ' + ( messages.menuLabel_about || 'About' ) + ' ' + config.appName
        menuIDs.push(GM_registerMenuCommand(aboutLabel, launchAboutModal))
    }

    function launchAboutModal() {

        // Show alert
        const chatgptJSver = (/chatgpt-([\d.]+)\.min/.exec(GM_info.script.header) || [null, ''])[1]
        const aboutAlertID = alert(
            config.appName, // title
            '🏷️ ' + ( messages.about_version || 'Version' ) + ': ' + GM_info.script.version + '\n'
                + '⚡ ' + ( messages.about_poweredBy || 'Powered by' ) + ': '
                    + '<a href="https://chatgpt.js.org" target="_blank" rel="noopener">chatgpt.js</a>'
                    + ( chatgptJSver ? ( ' v' + chatgptJSver ) : '' ) + '\n'
                + '📜 ' + ( messages.about_sourceCode || 'Source code' ) + ':\n   '
                    + `<a href="${ config.gitHubURL }" target="_blank" rel="nopener">`
                        + config.gitHubURL + '</a>',
            [ // buttons
                function checkForUpdates() { updateCheck() },
                function getSupport() { safeWindowOpen(config.supportURL) },
                function leaveAReview() { safeWindowOpen(
                    config.greasyForkURL + '/feedback#post-discussion') },
                function moreChatGPTapps() { safeWindowOpen('https://github.com/adamlui/chatgpt-apps') }
            ], '', 515) // About modal width

        // Re-format buttons to include emoji + localized label + hide Dismiss button
        for (const button of document.getElementById(aboutAlertID).querySelectorAll('button')) {
            if (/updates/i.test(button.textContent)) button.textContent = (
                '🚀 ' + ( messages.buttonLabel_updateCheck || 'Check for Updates' ))
            else if (/support/i.test(button.textContent)) button.textContent = (
                '🧠 ' + ( messages.buttonLabel_getSupport || 'Get Support' ))
            else if (/review/i.test(button.textContent)) button.textContent = (
                '⭐ ' + ( messages.buttonLabel_leaveReview || 'Leave a Review' ))
            else if (/apps/i.test(button.textContent)) button.textContent = (
                '🤖 ' + ( messages.buttonLabel_moreApps || 'More ChatGPT Apps' ))
            else button.style.display = 'none' // hide Dismiss button
        }
    }

    function updateCheck() {

        // Fetch latest meta
        const currentVer = GM_info.script.version
        GM.xmlHttpRequest({
            method: 'GET', url: config.updateURL + '?t=' + Date.now(),
            headers: { 'Cache-Control': 'no-cache' },
            onload: response => { const updateAlertWidth = 377

                // Compare versions
                const latestVer = /@version +(.*)/.exec(response.responseText)[1]
                for (let i = 0 ; i < 4 ; i++) { // loop thru subver's
                    const currentSubVer = parseInt(currentVer.split('.')[i], 10) || 0,
                          latestSubVer = parseInt(latestVer.split('.')[i], 10) || 0
                    if (currentSubVer > latestSubVer) break // out of comparison since not outdated
                    else if (latestSubVer > currentSubVer) { // if outdated

                        // Alert to update
                        const updateAlertID = alert(( messages.alert_updateAvail || 'Update available' ) + '! 🚀', // title
                            ( messages.alert_newerVer || 'An update to' ) + ` ${ config.appName } `
                                + `(v${ latestVer }) ${ messages.alert_isAvail || 'is available' }!  `
                                + '<a target="_blank" rel="noopener" style="font-size: 0.97rem" '
                                    + 'href="' + config.gitHubURL + '/commits/main/greasemonkey/'
                                    + config.updateURL.replace(/.*\/(.*)meta\.js/, '$1user.js') + '" '
                                    + `>${ messages.link_viewChanges || 'View changes' }</a>`,
                            function update() { // button
                                GM_openInTab(config.updateURL.replace('meta.js', 'user.js') + '?t=' + Date.now(),
                                    { active: true, insert: true } // focus, make adjacent
                                ).onclose = () => location.reload() },
                            '', updateAlertWidth
                        )

                        // Localize button labels if needed
                        if (!config.userLanguage.startsWith('en')) {
                            const updateAlert = document.querySelector(`[id="${ updateAlertID }"]`),
                                  updateBtns = updateAlert.querySelectorAll('button')
                            updateBtns[1].textContent = messages.buttonLabel_update || 'Update'
                            updateBtns[0].textContent = messages.buttonLabel_dismiss || 'Dismiss'
                        }

                        return
                }}

                // Alert to no update found, nav back
                alert(( messages.alert_upToDate || 'Up-to-date' ) + '!', // title
                    `${ config.appName } (v${ currentVer }) ${ messages.alert_isUpToDate || 'is up-to-date' }!`, // msg
                        '', '', updateAlertWidth)
                launchAboutModal()
    }})}

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration,
            shadow || scheme == 'dark' ? '' : 'shadow' )
    }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    function appAlert(msg) {
        msg = appAlerts[msg] || msg
        if (msg.includes('login')) deleteOpenAIcookies()
        while (appDiv.firstChild) { appDiv.removeChild(appDiv.firstChild) }
        const alertP = document.createElement('p') ; alertP.textContent = msg
        alertP.className = 'no-user-select' ; alertP.style.paddingBottom = '15px'
        if (/waiting|loading/i.test(msg)) alertP.classList.add('loading')
        if (msg.includes('@')) { // needs login link, add it
            alertP.append(createAnchor('https://chat.openai.com', 'chat.openai.com'),
                ' (', messages.alert_ifIssuePersists || 'If issue persists, try activating Proxy Mode', ')')
        }
        appDiv.append(alertP)
    }

    function appInfo(msg) { console.info(`${ config.appSymbol } ${ config.appName } >> ${ msg }`) }
    function appError(msg) { console.error(`${ config.appSymbol } ${ config.appName } >> ERROR: ${ msg }`) }

    // Define UI functions

    function isDarkMode() { return !!document.querySelector('[data-darkmode="true"]') }

    function toggleSidebar(mode) {
        saveSetting(mode + 'Sidebar', !config[mode + 'Sidebar'])
        updateTweaksStyle()
        if (mode == 'wider' && document.querySelector('.corner-btn')) updateWSBsvg() ; else updateSSBsvg()
        notify(( messages[`menuLabel_${ mode }Sidebar`] || mode.charAt(0).toUpperCase() + mode.slice(1) + ' Sidebar' )
            + ' ' + state.word[+!config[mode + 'Sidebar']])
        for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
    }

    function updateTweaksStyle() {
        const isStandbyMode = document.querySelector('.standby-btn'),
              answerIsLoaded = document.querySelector('.corner-btn')

        // Update tweaks style based on settings (for tweaks init + appShow() + toggleSidebar())
        tweaksStyle.innerText = ( config.widerSidebar ? wsbStyles : '' )
                              + ( config.stickySidebar && !isStandbyMode && answerIsLoaded ? ssbStyles : '' )

        // Update <pre> max-height in Sticky Sidebar mode based on RQ visibility (for getShowReply()'s RQ show + menu RQ toggle)
        const answerPre = document.querySelector('.googlegpt pre'),
              relatedQueries = document.querySelector('.related-queries'),
              shorterPreHeight = window.innerHeight - relatedQueries?.offsetHeight - 328,
              longerPreHeight = window.innerHeight - 309
        if (answerPre) answerPre.style.maxHeight = !config.stickySidebar ? 'none' : (
            relatedQueries?.offsetHeight > 0 ? `${ shorterPreHeight }px` : `${ longerPreHeight }px` )
    }

    function updateWSBsvg() {

        // Init span/SVG/paths
        const wsbSpan = appDiv.querySelector('#wsb-btn'),
              wsbSVG = wsbSpan.querySelector('svg')
        const wsbONpaths = [
            createSVGpath({ fill: '', 'fill-rule': 'evenodd',
                d: 'm26,13 0,10 -16,0 0,-10 z m-14,2 12,0 0,6 -12,0 0,-6 z' }) ]
        const wsbOFFpaths = [
            createSVGpath({ fill: '', 'fill-rule': 'evenodd',
                d: 'm28,11 0,14 -20,0 0,-14 z m-18,2 16,0 0,10 -16,0 0,-10 z' }) ]

        // Set SVG attributes
        for (const [attr, value] of [['width', 18], ['height', 18], ['viewBox', '8 8 20 20']])
            wsbSVG.setAttribute(attr, value)

        // Update SVG elements
        while (wsbSVG.firstChild) { wsbSVG.removeChild(wsbSVG.firstChild) }
        const wsbSVGpaths = config.widerSidebar ? wsbONpaths : wsbOFFpaths
        wsbSVGpaths.forEach(path => wsbSVG.append(path))
        if (!wsbSpan.contains(wsbSVG)) wsbSpan.append(wsbSVG)
    }

    function updateSSBsvg() {

        // Init span/SVG/paths
        const ssbSpan = appDiv.querySelector('#ssb-btn'),
              ssbSVG = ssbSpan.querySelector('svg')
        const ssbONpaths = [
            createSVGpath({
                d: 'M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z' }) ]
        const ssbOFFpaths = [
            createSVGpath({
                d: 'M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z' }) ]

        // Set SVG attributes
        for (const [attr, value] of [['width', 16], ['height', 16], ['viewBox', '0 0 16 16']])
            ssbSVG.setAttribute(attr, value)

        // Update SVG elements
        while (ssbSVG.firstChild) { ssbSVG.removeChild(ssbSVG.firstChild) }
        const ssbSVGpaths = config.stickySidebar ? ssbONpaths : ssbOFFpaths
        ssbSVGpaths.forEach(path => ssbSVG.append(path))
        if (!ssbSpan.contains(ssbSVG)) ssbSpan.append(ssbSVG)
    }

    function updateFooterContent() {
        fetchJSON('https://raw.githubusercontent.com/KudoAI/ads-library/main/advertisers/index.json',
            (err, advertisersData) => { if (err) return

                // Init vars
                let chosenAdvertiser, adSelected
                const re_appName = new RegExp(config.appName.toLowerCase(), 'i')
                const currentDate = (() => { // in YYYYMMDD format
                    const today = new Date(), year = today.getFullYear(),
                          month = String(today.getMonth() + 1).padStart(2, '0'),
                          day = String(today.getDate()).padStart(2, '0')
                    return year + month + day
                })()

                // Select random, active advertiser
                for (const [advertiser, details] of shuffle(applyBoosts(Object.entries(advertisersData))))
                    if (details.campaigns.text) { chosenAdvertiser = advertiser ; break }

                // Fetch a random, active creative
                if (chosenAdvertiser) {
                    const campaignsURL = 'https://raw.githubusercontent.com/KudoAI/ads-library/main/advertisers/'
                                       + chosenAdvertiser + '/text/campaigns.json'
                    fetchJSON(campaignsURL, (err, campaignsData) => { if (err) return

                        // Select random, active campaign
                        for (const [campaignName, campaign] of shuffle(applyBoosts(Object.entries(campaignsData)))) {
                            const campaignIsActive = campaign.active && (!campaign.endDate || currentDate <= campaign.endDate)
                            if (!campaignIsActive) continue // to next campaign since campaign inactive

                            // Select random active group
                            for (const [groupName, adGroup] of shuffle(applyBoosts(Object.entries(campaign.adGroups)))) {

                                // Skip disqualified groups
                                if (/^self$/i.test(groupName) && !re_appName.test(campaignName) // self-group for other apps
                                    || re_appName.test(campaignName) && !/^self$/i.test(groupName) // non-self group for this app
                                    || adGroup.active === false // group explicitly disabled
                                    || adGroup.targetBrowsers && // target browser(s) exist...
                                        !adGroup.targetBrowsers.some( // ...but doesn't match user's
                                            browser => new RegExp(browser, 'i').test(navigator.userAgent))
                                    || adGroup.targetLocations && ( // target locale(s) exist...
                                        !config.userLocale || !adGroup.targetLocations.some( // ...but user locale is missing or excluded
                                            loc => loc.includes(config.userLocale) || config.userLocale.includes(loc)))
                                ) continue // to next group

                                // Filter out inactive ads, pick random active one
                                const activeAds = adGroup.ads.filter(ad => ad.active !== false)
                                if (activeAds.length === 0) continue // to next group since no ads active
                                const chosenAd = activeAds[Math.floor(Math.random() * activeAds.length)] // random active one

                                // Build destination URL
                                let destinationURL = chosenAd.destinationURL || adGroup.destinationURL
                                    || campaign.destinationURL || ''
                                if (destinationURL.includes('http')) { // insert UTM tags
                                    const [baseURL, queryString] = destinationURL.split('?'),
                                          queryParams = new URLSearchParams(queryString || '')
                                    queryParams.set('utm_source', config.appName.toLowerCase())
                                    queryParams.set('utm_content', 'app_footer_link')
                                    destinationURL = baseURL + '?' + queryParams.toString()
                                }

                                // Update footer content
                                const newFooterContent = destinationURL ? createAnchor(destinationURL)
                                                                        : document.createElement('span')
                                footerContent.replaceWith(newFooterContent) ; footerContent = newFooterContent
                                footerContent.textContent = chosenAd.text
                                footerContent.setAttribute('title', chosenAd.tooltip || '')
                                adSelected = true ; break
                            }
                            if (adSelected) break // out of campaign loop after ad selection
        }})}})

        function fetchJSON(url, callback) {
            GM.xmlHttpRequest({ method: 'GET', url: url, onload: response => {
                if (response.status >= 200 && response.status < 300) {
                    try { const data = JSON.parse(response.responseText) ; callback(null, data) }
                    catch (err) { callback(err, null) }
                } else callback(new Error('Failed to load data: ' + response.statusText), null)
        }})}

        function shuffle(list) {
            let currentIdx = list.length, tempValue, randomIdx
            while (currentIdx !== 0) { // elements remain to be shuffled
                randomIdx = Math.floor(Math.random() * currentIdx) ; currentIdx -= 1
                tempValue = list[currentIdx] ; list[currentIdx] = list[randomIdx] ; list[randomIdx] = tempValue
            }
            return list
        }

        function applyBoosts(list) {
            let boostedList = [...list],
                boostedListLength = boostedList.length - 1 // for applying multiple boosts
            list.forEach(([name, data]) => { // check for boosts
                if (data.boost) { // boost flagged entry's selection probability
                    const boostPercent = parseInt(data.boost, 10) / 100,
                          entriesNeeded = Math.ceil(boostedListLength / (1 - boostPercent)) // total entries needed
                                        * boostPercent - 1 // reduced to boosted entries needed
                    for (let i = 0 ; i < entriesNeeded ; i++) boostedList.push([name, data]) // saturate list
                    boostedListLength += entriesNeeded // update for subsequent calculations
            }})
            return boostedList
        }
    }

    // Define FACTORY functions

    function createSVGpath(attrs) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        for (const attr in attrs) path.setAttributeNS(null, attr, attrs[attr])
        return path
    }

    function createAnchor(linkHref, displayContent) {
        const anchor = document.createElement('a'),
              anchorAttrs = [['href', linkHref], ['target', '_blank'], ['rel', 'noopener']]
        anchorAttrs.forEach(([attr, value]) => anchor.setAttribute(attr, value))
        if (displayContent) anchor.append(displayContent)
        return anchor
    }

    // Define TOOLTIP functions

    function toggleTooltip(event) { // visibility
        tooltipDiv.eventYpos = event.currentTarget.getBoundingClientRect().top // for updateTooltip() y-pos calc
        updateTooltip(event.currentTarget.id.replace(/-btn$/, ''))
        tooltipDiv.style.opacity = event.type == 'mouseover' ? 0.8 : 0
    }

    function updateTooltip(buttonType) { // text & position
        const cornerBtnTypes = ['about', 'speak', 'ssb', 'wsb'],
              [ctrAddend, spreadFactor] = document.querySelector('.standby-btn') ? [19, 15] : [10, 25],
              iniRoffset = spreadFactor * (buttonType == 'send' ? 1.65 : cornerBtnTypes.indexOf(buttonType) + 1) + ctrAddend

        // Update text
        tooltipDiv.innerText = (
            buttonType == 'about' ? messages.menuLabel_about || 'About'
          : buttonType == 'speak' ? messages.tooltip_playAnswer || 'Play answer'
          : buttonType == 'ssb' ? (( config.stickySidebar ? `${ messages.prefix_exit || 'Exit' } ` :  '' )
                                   + messages.menuLabel_stickySidebar || 'Sticky Sidebar' )
          : buttonType == 'wsb' ? (( config.widerSidebar ? `${ messages.prefix_exit || 'Exit' } ` :  '' )
                                   + messages.menuLabel_widerSidebar || 'Wider Sidebar' )
          : buttonType == 'send' ? messages.tooltip_sendReply || 'Send reply' : '' )

        // Update position
        tooltipDiv.style.top = `${ buttonType != 'send' ? -8
          : tooltipDiv.eventYpos - appDiv.getBoundingClientRect().top - 31 }px`
        tooltipDiv.style.right = `${ iniRoffset - tooltipDiv.getBoundingClientRect().width / 2 }px`
    }

    // Define SESSION functions

    function isBlockedbyCloudflare(resp) {
        try {
            const html = new DOMParser().parseFromString(resp, 'text/html'),
                  title = html.querySelector('title')
            return title.innerText == 'Just a moment...'
        } catch (err) { return false }
    }

    function deleteOpenAIcookies() {
        if (getUserscriptManager() != 'Tampermonkey') return
        GM_cookie.list({ url: openAIendpoints.auth }, (cookies, error) => {
            if (!error) { for (const cookie of cookies) {
                GM_cookie.delete({ url: openAIendpoints.auth, name: cookie.name })
    }}})}

    function getOpenAItoken() {
        return new Promise(resolve => {
            const accessToken = GM_getValue(config.keyPrefix + '_openAItoken')
            appInfo('OpenAI access token: ' + accessToken)
            if (!accessToken) {
                GM.xmlHttpRequest({ url: openAIendpoints.session, onload: response => {
                    if (isBlockedbyCloudflare(response.responseText)) {
                        appAlert('checkCloudflare') ; return }
                    try {
                        const newAccessToken = JSON.parse(response.responseText).accessToken
                        GM_setValue(config.keyPrefix + '_openAItoken', newAccessToken)
                        resolve(newAccessToken)
                    } catch { appAlert('login') ; return }
                }})
            } else resolve(accessToken)
    })}

    function getAIGCFkey() {
        return new Promise(resolve => {
            const publicKey = GM_getValue(config.keyPrefix + '_aigcfKey')
            if (!publicKey) {
                GM.xmlHttpRequest({ method: 'GET', url: 'https://api.aigcfun.com/fc/key',
                    headers: {
                        'Content-Type': 'application/json',
                        'Referer': 'https://aigcfun.com/',
                        'X-Forwarded-For': chatgpt.generateRandomIP() },
                    onload: response => {
                        const newPublicKey = JSON.parse(response.responseText).data
                        if (!newPublicKey) { appError('Failed to get AIGCFun public key') ; return }
                        GM_setValue(config.keyPrefix + '_aigcfKey', newPublicKey)
                        console.info('AIGCFun public key set: ' + newPublicKey)
                        resolve(newPublicKey)
                    },
                    onerror: resolve('')
            })
            } else resolve(publicKey)
    })}

    async function refreshAIGCFendpoint() {
        GM_setValue(config.keyPrefix + '_aigcfKey', false) // clear GM key
        // Determine index of AIGCF in endpoint map
        let aigcfMapIndex = -1
        for (let i = 0 ; i < proxyEndpoints.length ; i++) {
            const endpoint = proxyEndpoints[i]
            if (endpoint.some(item => item.includes('aigcfun'))) {
                aigcfMapIndex = i ; break
        }}
        // Update AIGCF endpoint w/ fresh key (using fresh IP)
        proxyEndpoints[aigcfMapIndex][0] = (
            'https://api.aigcfun.com/api/v1/text?key=' + await getAIGCFkey())
    }

    // Define ANSWER functions

    let endpoint, accessKey, model
    async function pickAPI() {
        if (config.proxyAPIenabled) { // randomize proxy API
            const untriedEndpoints = proxyEndpoints.filter(
                entry => !getShowReply.triedEndpoints?.includes(entry[0]))
            const entry = untriedEndpoints[Math.floor(chatgpt.randomFloat() * untriedEndpoints.length)]
            endpoint = entry[0] ; accessKey = entry[1] ; model = entry[2]
        } else { // use OpenAI API
            endpoint = openAIendpoints.chat
            const timeoutPromise = new Promise((resolve, reject) =>
                setTimeout(() => reject(new Error('Timeout occurred')), 3000))
            accessKey = await Promise.race([getOpenAItoken(), timeoutPromise])
            if (!accessKey) { appAlert('login') ; return }
            model = 'gpt-3.5-turbo'
        }
    }

    function createHeaders(api) {
        let headers = { 'Content-Type': 'application/json' }
        if (api.includes('openai.com')) headers.Authorization = 'Bearer ' + accessKey
        return headers
    }

    function createPayload(api, msgs) {
        const payload = { messages: msgs, model: model }
        if (api.includes('openai.com')) payload.max_tokens = 4000
        return JSON.stringify(payload)
    }

    function getRelatedQueries(query) {
        return new Promise((resolve, reject) => {
            const rqPrompt = 'Show a numbered list of queries related to this one:\n\n' + query
                           + '\n\nMake sure to suggest a variety that can even greatly deviate from the original topic.'
                           + ' For example, if the original query asked about someone\'s wife,'
                               + ' a good related query could involve a different relative and using their name.'
                           + ' Another example, if the query asked about a game/movie/show,'
                               + ' good related queries could involve pertinent characters.'
                           + ' Another example, if the original query asked how to learn JavaScript,'
                               + ' good related queries could ask why/when/where instead, even replacing JS w/ other languages.'
                           + ' But the key is variety. Do not be repetitive.'
                               + ' You must entice user to want to ask one of your related queries.'
            GM.xmlHttpRequest({
                method: 'POST', url: endpoint, responseType: 'text', headers: createHeaders(endpoint),
                data: createPayload(endpoint, [{ role: 'user', content: rqPrompt }]),
                onload: event => {
                    let str_relatedQueries = ''
                    if (!config.proxyAPIenabled && event.response) {
                        try { // to parse txt response from OpenAI API
                            str_relatedQueries = JSON.parse(event.response).choices[0].message.content
                        } catch (err) { appError(err) ; reject(err) }
                    } else if (config.proxyAPIenabled && event.responseText) {
                        try { // to parse txt response from proxy API
                            str_relatedQueries = JSON.parse(event.responseText).choices[0].message.content
                        } catch (err) { appError(err) ; reject(err) }
                    }
                    const arr_relatedQueries = (str_relatedQueries.match(/\d+\.\s*(.*?)(?=\n|$)/g) || [])
                        .slice(0, 5) // limit to 1st 5
                        .map(match => match.replace(/^\d+\.\s*/, '')) // strip numbering
                    resolve(arr_relatedQueries)
                },
                onerror: err => { appError(err) ; reject(err) }
            })
    })}

    function rqEventHandler(event) { // for attachment/removal in `getShowReply()` + `appShow().handleSubmit()`
        if ([' ', 'Enter'].includes(event.key) || event.type == 'click') {
            event.preventDefault() // prevent scroll on space taps

            // Remove divs/listeners
            const relatedQueriesDiv = document.querySelector('.related-queries')
            Array.from(relatedQueriesDiv.children).forEach(relatedQueryDiv => {
                relatedQueryDiv.removeEventListener('click', rqEventHandler)
                relatedQueryDiv.removeEventListener('keydown', rqEventHandler)
            })
            relatedQueriesDiv.remove()

            // Send related query
            const chatbar = appDiv.querySelector('textarea')
            if (chatbar) {
                chatbar.value = event.target.textContent
                chatbar.dispatchEvent(new KeyboardEvent('keydown', {
                    key: 'Enter', bubbles: true, cancelable: true }))
    }}}

    async function getShowReply(convo, callback) {

        // Initialize attempt properties
        if (!getShowReply.triedEndpoints) getShowReply.triedEndpoints = []
        if (!getShowReply.attemptCnt) getShowReply.attemptCnt = 0

        // Get/show answer from ChatGPT
        await pickAPI()
        GM.xmlHttpRequest({
            method: 'POST', url: endpoint, headers: createHeaders(endpoint),
            responseType: 'text', data: createPayload(endpoint, convo), onload: onLoad(),
            onerror: err => {
                appError(err)
                if (!config.proxyAPIenabled) appAlert(!accessKey ? 'login' : 'suggestProxy')
                else { // if proxy mode
                    if (getShowReply.attemptCnt < proxyEndpoints.length) retryDiffHost()
                    else appAlert('suggestOpenAI')
            }}
        })

        // Get/show related queries
        if (!config.rqDisabled) {
            const lastQuery = convo[convo.length - 1]
            getRelatedQueries(lastQuery.content).then(relatedQueries => {
                if (relatedQueries && appDiv.querySelector('textarea')) {

                    // Create/classify/append parent div
                    const relatedQueriesDiv = document.createElement('div')
                    relatedQueriesDiv.className = 'related-queries'
                    appDiv.append(relatedQueriesDiv)

                    // Fill each child div, add attributes + icon + listener
                    relatedQueries.forEach((relatedQuery, index) => {
                        const relatedQueryDiv = document.createElement('div'),
                              relatedQuerySVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                              relatedQuerySVGpath = document.createElementNS('http://www.w3.org/2000/svg','path')

                        // Add attributes
                        relatedQueryDiv.title = messages.tooltip_sendRelatedQuery || 'Send related query'
                        relatedQueryDiv.classList.add('related-query', 'fade-in', 'no-user-select')
                        relatedQueryDiv.setAttribute('tabindex', 0)
                        relatedQueryDiv.textContent = relatedQuery

                        // Create icon
                        for (const [attr, value] of [
                            ['viewBox', '0 0 24 24'], ['width', 18], ['height', 18], ['fill', 'currentColor']
                        ]) relatedQuerySVG.setAttribute(attr, value)
                        relatedQuerySVGpath.setAttribute('d',
                            'M16 10H6.83L9 7.83l1.41-1.41L9 5l-6 6 6 6 1.41-1.41L9 14.17 6.83 12H16c1.65 0 3 1.35 3 3v4h2v-4c0-2.76-2.24-5-5-5z')
                        relatedQuerySVG.style.transform = 'rotate(180deg)' // flip arrow upside down

                        // Assemble/insert elements
                        relatedQuerySVG.append(relatedQuerySVGpath) ; relatedQueryDiv.prepend(relatedQuerySVG)
                        relatedQueriesDiv.append(relatedQueryDiv)

                        // Add fade + listeners
                        setTimeout(() => {
                            relatedQueryDiv.classList.add('active')
                            relatedQueryDiv.addEventListener('click', rqEventHandler)
                            relatedQueryDiv.addEventListener('keydown', rqEventHandler)
                        }, index * 100)
                    })

                    updateTweaksStyle() // to shorten <pre> max-height
        }})}

        updateFooterContent()

        function retryDiffHost() {
            appError(`Error calling ${ endpoint }. Trying another endpoint...`)
            getShowReply.triedEndpoints.push(endpoint) // store current proxy to not retry
            getShowReply.attemptCnt++
            getShowReply(convo, callback)
        }

        function onLoad() { // process text
            return async event => {
                if (event.status !== 200) {
                    appError('Event status: ' + event.status)
                    appError('Event response: ' + event.responseText)
                    if (config.proxyAPIenabled && getShowReply.attemptCnt < proxyEndpoints.length)
                        retryDiffHost()
                    else if (event.status === 401 && !config.proxyAPIenabled) {
                        GM_deleteValue(config.keyPrefix + '_openAItoken') ; appAlert('login') }
                    else if (event.status === 403)
                        appAlert(config.proxyAPIenabled ? 'suggestOpenAI' : 'checkCloudflare')
                    else if (event.status === 429) appAlert('tooManyRequests')
                    else appAlert(config.proxyAPIenabled ? 'suggestOpenAI' : 'suggestProxy')
                } else if (endpoint.includes('openai')) {
                    if (event.response) {
                        try { // to parse txt response from OpenAI endpoint
                            appShow(JSON.parse(event.response).choices[0].message.content, footerContent)
                        } catch (err) {
                            appError(appAlerts.parseFailed + ': ' + err)
                            appError('Response: ' + event.response)
                            appAlert('suggestProxy')
                        }
                    }
                } else if (endpoint.includes('aigcf')) {
                    if (event.responseText) {
                        try { // to parse txt response from AIGCF endpoint
                            const answer = JSON.parse(event.responseText).choices[0].message.content
                            appShow(answer, footerContent) ; getShowReply.triedEndpoints = [] ; getShowReply.attemptCnt = 0
                        } catch (err) {
                            appInfo('Response: ' + event.responseText)
                            if (event.responseText.includes('非常抱歉，根据我们的产品规则，无法为你提供该问题的回答'))
                                appAlert(messages.alert_censored || 'Sorry, according to our product rules, '
                                    + 'we cannot provide you with an answer to this question, please try other questions')
                            else if (event.responseText.includes('维护'))
                                appAlert(( messages.alert_maintenance || 'AI system under maintenance' ) + '. '
                                    + ( messages.alert_suggestOpenAI || 'Try switching off Proxy Mode in toolbar' ))
                            else if (event.responseText.includes('finish_reason')) { // if other AIGCF error encountered
                                await refreshAIGCFendpoint() ; getShowReply(convo, callback) // re-fetch related queries w/ fresh IP
                            } else { // use different endpoint or suggest OpenAI
                                appError(appAlerts.parseFailed + ': ' + err)
                                if (getShowReply.attemptCnt < proxyEndpoints.length) retryDiffHost()
                                else appAlert('suggestOpenAI')
        }}}}}}
    }

    function appShow(answer, footerContent) {
        while (appDiv.firstChild) // clear all children
            appDiv.removeChild(appDiv.firstChild)

        // Create/append '🤖 GoogleGPT'
        const appPrefixSpan = document.createElement('span'),
              appLogoAnchor = createAnchor(config.appURL, appLogoImg)
        appPrefixSpan.innerText = '🤖 '
        appPrefixSpan.className = 'no-user-select' ; appPrefixSpan.style.fontSize = isMobile ? '1.7rem' : '1.1rem'     
        appLogoAnchor.classList.add('app-name', 'no-user-select')
        appLogoImg.width = isMobile ? 197 : isFirefox ? 127 : 125
        appLogoImg.style.cssText = appLogoImg.loaded ? `position: relative ; top: ${ isMobile ? 4 : isFirefox ? 3 : 2 }px`
                                                             + ( isMobile ? '; margin-left: 1px' : '' )
                                                         : 'margin-left: 2px' // pos alt if shown
        appDiv.append(appPrefixSpan, appLogoAnchor)

        // Create/append 'by KudoAI'
        const kudoAIspan = document.createElement('span')
        kudoAIspan.classList.add('kudo-ai', 'no-user-select') ; kudoAIspan.textContent = 'by '
        const kudoAIlink = createAnchor('https://www.kudoai.com', 'KudoAI')
        kudoAIspan.append(kudoAIlink) ; appDiv.append(kudoAIspan)

        // Create/append about button
        const aboutSpan = document.createElement('span'),
              aboutSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
              aboutSVGpath = document.createElementNS('http://www.w3.org/2000/svg','path')
        aboutSpan.id = 'about-btn' // for toggleTooltip()
        aboutSpan.className = 'corner-btn' ; aboutSpan.style.marginTop = '-0.15rem'
        const aboutSVGattrs = [['width', 17], ['height', 17], ['viewBox', '0 0 56.693 56.693']]
        aboutSVGattrs.forEach(([attr, value]) => aboutSVG.setAttribute(attr, value))
        aboutSVGpath.setAttribute('d',
            'M28.765,4.774c-13.562,0-24.594,11.031-24.594,24.594c0,13.561,11.031,24.594,24.594,24.594  c13.561,0,24.594-11.033,24.594-24.594C53.358,15.805,42.325,4.774,28.765,4.774z M31.765,42.913c0,0.699-0.302,1.334-0.896,1.885  c-0.587,0.545-1.373,0.82-2.337,0.82c-0.993,0-1.812-0.273-2.431-0.814c-0.634-0.551-0.954-1.188-0.954-1.891v-1.209  c0-0.703,0.322-1.34,0.954-1.891c0.619-0.539,1.438-0.812,2.431-0.812c0.964,0,1.75,0.277,2.337,0.82  c0.594,0.551,0.896,1.186,0.896,1.883V42.913z M38.427,24.799c-0.389,0.762-0.886,1.432-1.478,1.994  c-0.581,0.549-1.215,1.044-1.887,1.473c-0.643,0.408-1.248,0.852-1.798,1.315c-0.539,0.455-0.99,0.963-1.343,1.512  c-0.336,0.523-0.507,1.178-0.507,1.943v0.76c0,0.504-0.247,1.031-0.735,1.572c-0.494,0.545-1.155,0.838-1.961,0.871l-0.167,0.004  c-0.818,0-1.484-0.234-1.98-0.699c-0.532-0.496-0.801-1.055-0.801-1.658c0-1.41,0.196-2.611,0.584-3.572  c0.385-0.953,0.86-1.78,1.416-2.459c0.554-0.678,1.178-1.27,1.854-1.762c0.646-0.467,1.242-0.93,1.773-1.371  c0.513-0.428,0.954-0.885,1.312-1.354c0.328-0.435,0.489-0.962,0.489-1.608c0-1.066-0.289-1.83-0.887-2.334  c-0.604-0.512-1.442-0.771-2.487-0.771c-0.696,0-1.294,0.043-1.776,0.129c-0.471,0.083-0.905,0.223-1.294,0.417  c-0.384,0.19-0.745,0.456-1.075,0.786c-0.346,0.346-0.71,0.783-1.084,1.301c-0.336,0.473-0.835,0.83-1.48,1.062  c-0.662,0.239-1.397,0.175-2.164-0.192c-0.689-0.344-1.11-0.793-1.254-1.338c-0.135-0.5-0.135-1.025-0.002-1.557  c0.098-0.453,0.369-1.012,0.83-1.695c0.451-0.67,1.094-1.321,1.912-1.938c0.814-0.614,1.847-1.151,3.064-1.593  c1.227-0.443,2.695-0.668,4.367-0.668c1.648,0,3.078,0.249,4.248,0.742c1.176,0.496,2.137,1.157,2.854,1.967  c0.715,0.809,1.242,1.738,1.568,2.762c0.322,1.014,0.486,2.072,0.486,3.146C39.024,23.075,38.823,24.024,38.427,24.799z')
        aboutSVGpath.setAttribute('stroke', 'none')
        aboutSVG.append(aboutSVGpath) ; aboutSpan.append(aboutSVG) ; appDiv.append(aboutSpan)

        // Create/append speak button
        if (answer != 'standby') {
            var speakSpan = document.createElement('span'),
                speakSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            speakSpan.id = 'speak-btn' // for toggleTooltip()
            speakSpan.className = 'corner-btn' ; speakSpan.style.margin = '-0.29rem 5px 0 0'
            const speakSVGattrs = [['width', 22], ['height', 22], ['viewBox', '0 0 32 32']]
            speakSVGattrs.forEach(([attr, value]) => speakSVG.setAttributeNS(null, attr, value))
            const speakSVGpaths = [
                createSVGpath({ stroke: '', 'stroke-width': '2px', fill: 'none',
                    d: 'M24.5,26c2.881,-2.652 4.5,-6.249 4.5,-10c0,-3.751 -1.619,-7.348 -4.5,-10' }),
                createSVGpath({ stroke: '', 'stroke-width': '2px', fill: 'none',
                    d: 'M22,20.847c1.281,-1.306 2,-3.077 2,-4.924c0,-1.846 -0.719,-3.617 -2,-4.923' }),
                createSVGpath({ stroke: 'none', fill: '',
                    d: 'M9.957,10.88c-0.605,0.625 -1.415,0.98 -2.262,0.991c-4.695,0.022 -4.695,0.322 -4.695,4.129c0,3.806 0,4.105 4.695,4.129c0.846,0.011 1.656,0.366 2.261,0.991c1.045,1.078 2.766,2.856 4.245,4.384c0.474,0.49 1.18,0.631 1.791,0.36c0.611,-0.272 1.008,-0.904 1.008,-1.604c0,-4.585 0,-11.936 0,-16.52c0,-0.7 -0.397,-1.332 -1.008,-1.604c-0.611,-0.271 -1.317,-0.13 -1.791,0.36c-1.479,1.528 -3.2,3.306 -4.244,4.384Z' })
            ]
            speakSVGpaths.forEach(path => speakSVG.append(path))
            speakSpan.append(speakSVG) ; appDiv.append(speakSpan)
        }

        if (!isMobile) {

            // Create/append Sticky Sidebar button
            var ssbSpan = document.createElement('span'),
                ssbSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            ssbSpan.id = 'ssb-btn' // for updateSSBsvg() + toggleTooltip()
            ssbSpan.className = 'corner-btn' ; ssbSpan.style.margin = '-0.05rem 6px 0 0'
            ssbSpan.append(ssbSVG) ; appDiv.append(ssbSpan) ; updateSSBsvg()

            // Create/append Wider Sidebar button
            var wsbSpan = document.createElement('span'),
                wsbSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            wsbSpan.id = 'wsb-btn' // for updateSSBsvg() + toggleTooltip()
            wsbSpan.className = 'corner-btn' ; wsbSpan.style.margin = '-0.08rem 9px 0 0'
            wsbSpan.append(wsbSVG) ; appDiv.append(wsbSpan) ; updateWSBsvg()
        }

        // Add tooltips
        appDiv.append(tooltipDiv)

        // Add corner button listeners
        aboutSVG.addEventListener('click', launchAboutModal)
        speakSVG?.addEventListener('click', () => {
            const dialectMap = [
                { code: 'en', regex: /^(eng(lish)?|en(-\w\w)?)$/i, rate: 2 },
                { code: 'ar', regex: /^(ara?(bic)?|اللغة العربية)$/i, rate: 1.5 },
                { code: 'cs', regex: /^(cze(ch)?|[cč]e[sš].*|cs)$/i, rate: 1.4 },
                { code: 'da', regex: /^dan?(ish|sk)?$/i, rate: 1.3 },
                { code: 'de', regex: /^(german|deu?(tsch)?)$/i, rate: 1.5 },
                { code: 'es', regex: /^(spa(nish)?|espa.*|es(-\w\w)?)$/i, rate: 1.5 },
                { code: 'fi', regex: /^(fin?(nish)?|suom.*)$/i, rate: 1.4 },
                { code: 'fr', regex: /^fr/i, rate: 1.2 },
                { code: 'hu', regex: /^(hun?(garian)?|magyar)$/i, rate: 1.5 },
                { code: 'it', regex: /^ita?(lian[ao]?)?$/i, rate: 1.4 },
                { code: 'ja', regex: /^(ja?pa?n(ese)?|日本語|ja)$/i, rate: 1.5 },
                { code: 'nl', regex: /^(dut(ch)?|flemish|nederlandse?|vlaamse?|nld?)$/i, rate: 1.3 },
                { code: 'pl', regex: /^po?l(ish|ski)?$/i, rate: 1.4 },
                { code: 'pt', regex: /^(por(tugu[eê]se?)?|pt(-\w\w)?)$/i, rate: 1.5 },
                { code: 'ru', regex: /^(rus?(sian)?|русский)$/i, rate: 1.3 },
                { code: 'sv', regex: /^(swe?(dish)?|sv(enska)?)$/i, rate: 1.4 },
                { code: 'tr', regex: /^t[uü]?r(k.*)?$/i, rate: 1.6 },
                { code: 'vi', regex: /^vi[eệ]?t?(namese)?$/i, rate: 1.5 },
                { code: 'zh-CHS', regex: /^(chi(nese)?|zh|中[国國])/i, rate: 2 }
            ]
            const replyDialect = dialectMap.find(entry => entry.regex.test(config.replyLanguage)) || dialectMap[0],
                  payload = { text: answer, curTime: Date.now(), spokenDialect: replyDialect.code, rate: replyDialect.rate.toString() },
                  key = CryptoJS.enc.Utf8.parse('76350b1840ff9832eb6244ac6d444366'),
                  iv = CryptoJS.enc.Utf8.parse(atob('AAAAAAAAAAAAAAAAAAAAAA==') || '76350b1840ff9832eb6244ac6d444366')
            const securePayload = CryptoJS.AES.encrypt(JSON.stringify(payload), key, {
                iv: iv, mode: CryptoJS.mode.CBC, pad: CryptoJS.pad.Pkcs7 }).toString()
            GM.xmlHttpRequest({ // audio from Sogou TTS
                url: 'https://fanyi.sogou.com/openapi/external/getWebTTS?S-AppId=102356845&S-Param='
                    + encodeURIComponent(securePayload),
                method: 'GET', responseType: 'arraybuffer',
                onload: async response => {
                    if (response.status !== 200) chatgpt.speak(answer, { voice: 2, pitch: 1, speed: 1.5 })
                    else {
                        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
                        audioContext.decodeAudioData(response.response, buffer => {
                            const audioSrc = audioContext.createBufferSource()
                            audioSrc.buffer = buffer
                            audioSrc.connect(audioContext.destination) // connect source to speakers
                            audioSrc.start(0) // play audio
                })}}
            })
        })
        ssbSVG?.addEventListener('click', () => toggleSidebar('sticky'))
        wsbSVG?.addEventListener('click', () => toggleSidebar('wider'))
        const buttonSpans = [aboutSpan, speakSpan, ssbSpan, wsbSpan]
        buttonSpans.forEach(span => { if (span) { // add hover listeners for tooltips
            span.addEventListener('mouseover', toggleTooltip)
            span.addEventListener('mouseout', toggleTooltip)
        }})

        // Show standby state if prefix/suffix mode on
        if (answer == 'standby') {
            const standbyBtn = document.createElement('button')
            standbyBtn.className = 'standby-btn'
            standbyBtn.textContent = messages.buttonLabel_sendQueryToGPT || 'Send search query to GPT'
            appDiv.append(standbyBtn)
            standbyBtn.addEventListener('click', () => {
                appAlert('waitingResponse')
                const query = `${ new URL(location.href).searchParams.get('q') } (reply in ${ config.replyLanguage })`
                convo.push({ role: 'user', content: query })
                getShowReply(convo)
            })

        // Otherwise create/append ChatGPT response
        } else {
            const balloonTipSpan = document.createElement('span')
            var answerPre = document.createElement('pre')
            balloonTipSpan.className = 'balloon-tip'
            balloonTipSpan.style.right = isMobile ? '10.94em' : isFirefox ? '14.65em' : '7.25em'
            balloonTipSpan.style.top = (
                isFirefox ? ( hasSidebar ? '7px' : '5px' )
                                            : ( hasSidebar ? '4px' : '2px' ))
            answerPre.textContent = answer
            appDiv.append(balloonTipSpan) ; appDiv.append(answerPre)
        }

        updateTweaksStyle() // in case sticky mode on

        // Create/append reply section/elements
        const replySection = document.createElement('section'),
              replyForm = document.createElement('form'),
              continueChatDiv = document.createElement('div'),
              chatTextarea = document.createElement('textarea')
        continueChatDiv.className = 'continue-chat'
        chatTextarea.id = 'app-chatbar' ; chatTextarea.rows = '1'
        chatTextarea.placeholder = ( answer == 'standby' ? messages.placeholder_askSomethingElse || 'Ask something else'
                                                         : messages.tooltip_sendReply || 'Send reply' ) + '...'
        chatTextarea.style.width = hasSidebar ? '88.8%' : '89.5%'
        continueChatDiv.append(chatTextarea)
        replyForm.append(continueChatDiv) ; replySection.append(replyForm)
        appDiv.append(replySection)

        // Create/append send button
        const sendButton = document.createElement('button'),
              sendSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
              sendSVGpath = createSVGpath({ stroke: '', 'stroke-width': '2', linecap: 'round',
                  'stroke-linejoin': 'round', d: 'M7 11L12 6L17 11M12 18V7' })
        sendButton.id = 'send-btn'
        sendButton.style.right = isFirefox ? '8px' : '5px'
        sendButton.style.bottom = `${( isFirefox ? 46 : 49 ) + ( hasSidebar ? 3 : 0 )}px`
        for (const [attr, value] of [
            ['viewBox', '4 2 16 16'], ['fill', 'none'], ['width', 16], ['height', 16],
            ['stroke', 'currentColor'], ['stroke-width', '2'], ['stroke-linecap', 'round'], ['stroke-linejoin', 'round']
        ]) sendSVG.setAttribute(attr, value)
        sendSVG.append(sendSVGpath) ; sendButton.append(sendSVG) ; continueChatDiv.append(sendButton)

        // Create/classify/fill/append footer
        const appFooter = document.createElement('footer')
        appFooter.append(footerContent) ; appDiv.append(appFooter)

        // Render math
        if (answer != 'standby') {
            renderMathInElement(answerPre, { // eslint-disable-line no-undef
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false },
                    { left: '\\(', right: '\\)', display: false },
                    { left: '\\[', right: '\\]', display: true },
                    { left: '\\begin{equation}', right: '\\end{equation}', display: true },
                    { left: '\\begin{align}', right: '\\end{align}', display: true },
                    { left: '\\begin{alignat}', right: '\\end{alignat}', display: true },
                    { left: '\\begin{gather}', right: '\\end{gather}', display: true },
                    { left: '\\begin{CD}', right: '\\end{CD}', display: true },
                    { left: '\\[', right: '\\]', display: true }
                ],
                throwOnError: false
        })}

        // Add reply section listeners
        replyForm.addEventListener('keydown', handleEnter)
        replyForm.addEventListener('submit', handleSubmit)
        chatTextarea.addEventListener('input', autosizeChatbar)
        sendButton.addEventListener('mouseover', toggleTooltip)
        sendButton.addEventListener('mouseout', toggleTooltip)

        function handleEnter(event) {
            if (event.key == 'Enter') {
                if (event.ctrlKey) { // add newline
                    const chatTextarea = document.querySelector('#app-chatbar'),
                          caretPos = chatTextarea.selectionStart,
                          textBefore = chatTextarea.value.substring(0, caretPos),
                          textAfter = chatTextarea.value.substring(caretPos)
                    chatTextarea.value = textBefore + '\n' + textAfter // add newline
                    chatTextarea.selectionStart = chatTextarea.selectionEnd = caretPos + 1 // preserve caret pos
                    autosizeChatbar()
                } else if (!event.shiftKey) handleSubmit(event)
        }}

        function handleSubmit(event) {
            event.preventDefault()
            if (convo.length > 2) convo.splice(0, 2) // keep token usage maintainable
            const prevReplyTrimmed = appDiv.querySelector('pre')?.textContent.substring(0, 250 - chatTextarea.value.length) || '',
                  yourReply = `${ chatTextarea.value } (reply in ${ config.replyLanguage })`
            convo.push({ role: 'assistant', content: prevReplyTrimmed })
            convo.push({ role: 'user', content: yourReply })
            getShowReply(convo)

            // Remove re-added reply section listeners
            replyForm.removeEventListener('keydown', handleEnter)
            replyForm.removeEventListener('submit', handleSubmit)
            chatTextarea.removeEventListener('input', autosizeChatbar)

            // Remove related queries
            try {
                const relatedQueriesDiv = document.querySelector('.related-queries')
                Array.from(relatedQueriesDiv.children).forEach(relatedQueryDiv => {
                    relatedQueryDiv.removeEventListener('click', rqEventHandler)
                    relatedQueryDiv.removeEventListener('keydown', rqEventHandler)
                })
                relatedQueriesDiv.remove()
            } catch (err) {}

            // Clear footer
            while (appFooter.firstChild) // clear all children
                appFooter.removeChild(appFooter.firstChild)

            // Show loading status
            replySection.classList.add('loading', 'no-user-select')
            replySection.innerText = appAlerts.waitingResponse
        }

        // Autosize chatbar function
        const { paddingTop, paddingBottom } = getComputedStyle(chatTextarea),
              vOffset = parseInt(paddingTop, 10) + parseInt(paddingBottom, 10)
        let prevLength = chatTextarea.value.length
        function autosizeChatbar() {
            const newLength = chatTextarea.value.length
            if (newLength < prevLength) { // if deleting txt
                chatTextarea.style.height = 'auto' // ...auto-fit height
                if (parseInt(getComputedStyle(chatTextarea).height) < 35) { // if down to one line
                    chatTextarea.style.height = '1.55rem' } // ...reset to original height
            }
            const unpaddedHeight = chatTextarea.scrollHeight - vOffset
            chatTextarea.style.height = unpaddedHeight > 35 ? unpaddedHeight + 'px' : '1.55rem'
            prevLength = newLength
        }
    }

    // Run MAIN routine

    // Init config/convo/menu
    const config = {
        appName: 'GoogleGPT', appSymbol: '🤖', keyPrefix: 'googleGPT',
        appURL: 'https://www.googlegpt.io', gitHubURL: 'https://github.com/KudoAI/googlegpt',
        greasyForkURL: 'https://greasyfork.org/scripts/478597-googlegpt',
        userLanguage: chatgpt.getUserLanguage() }
    config.updateURL = config.greasyForkURL.replace('https://', 'https://update.')
        .replace(/(\d+)-?([a-zA-Z-]*)$/, (_, id, name) => `${ id }/${ !name ? 'script' : name }.meta.js`)
    config.supportURL = config.gitHubURL + '/issues/new'
    config.feedbackURL = config.gitHubURL + '/discussions/new/choose'
    config.assetHostURL = config.gitHubURL.replace('github.com', 'raw.githubusercontent.com') + '/main/'
    config.userLocale = window.location.hostname.endsWith('.com') ? 'us'
                      : window.location.hostname.split('.').pop()
    loadSetting('autoGetDisabled', 'prefixEnabled', 'proxyAPIenabled', 'replyLanguage',
                'rqDisabled', 'stickySidebar', 'suffixEnabled', 'widerSidebar')
    if (!config.replyLanguage) saveSetting('replyLanguage', config.userLanguage) // init reply language if unset
    const convo = [], // to store queries + answers for contextual replies
          menuIDs = [] // to store registered commands for removal while preserving order
    const state = {
        symbol: ['✔️', '❌'], word: ['ON', 'OFF'],
        separator: getUserscriptManager() == 'Tampermonkey' ? ' — ' : ': ' }

    // Init UI flags
    const scheme = isDarkMode() ? 'dark' : 'light',
          isChromium = chatgpt.browser.isChromium(),
          isFirefox = chatgpt.browser.isFirefox(),
          isMobile = chatgpt.browser.isMobile(),
          hasSidebar = document.querySelector('[class*="kp-"]')

    // Pre-load logo
    const appLogoImg = document.createElement('img')
    appLogoImg.src = `${ config.assetHostURL }/media/images/logos/googlegpt/${ scheme == 'dark' ? 'white' : 'black' }.png`
    appLogoImg.alt = config.appName
    appLogoImg.onload = () => appLogoImg.loaded = true // for img/alt pos in `appShow()`

    // Define messages
    const msgsLoaded = new Promise(resolve => {
        const msgHostDir = config.assetHostURL + 'greasemonkey/_locales/',
              msgLocaleDir = ( config.userLanguage ? config.userLanguage.replace('-', '_') : 'en' ) + '/'
        let msgHref = msgHostDir + msgLocaleDir + 'messages.json', msgXHRtries = 0
        GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
        function onLoad(response) {
            try { // to return localized messages.json
                const messages = new Proxy(JSON.parse(response.responseText), {
                    get(target, prop) { // remove need to ref nested keys
                        if (typeof target[prop] == 'object' && target[prop] !== null && 'message' in target[prop]) {
                            return target[prop].message
                }}}) ; resolve(messages)
            } catch (err) { // if 404
                msgXHRtries++ ; if (msgXHRtries === 3) return // try up to 3X (original/region-stripped/EN) only
                msgHref = config.userLanguage.includes('-') && msgXHRtries === 1 ? // if regional lang on 1st try...
                    msgHref.replace(/([^_]*)_[^/]*(\/.*)/, '$1$2') // ...strip region before retrying
                        : ( msgHostDir + 'en/messages.json' ) // else use default English messages
                GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
            }
        }
    }) ; const messages = await msgsLoaded

    registerMenu()

    // Init endpoints
    const openAIendpoints = {
        session: 'https://chat.openai.com/api/auth/session',
        auth: 'https://auth0.openai.com',
        chat: 'https://api.openai.com/v1/chat/completions' }
    const proxyEndpoints = [[ 'https://api.aigcfun.com/api/v1/text?key=' + await getAIGCFkey(), '', 'gpt-3.5-turbo' ]]

    // Init alerts
    const appAlerts = {
        waitingResponse: ( messages.alert_waitingResponse || 'Waiting for ChatGPT response' ) + '...',
        login: ( messages.alert_login || 'Please login' ) + ' @ ',
        tooManyRequests: ( messages.alert_tooManyRequests || 'ChatGPT is flooded with too many requests' ) + '. '
            + ( config.proxyAPIenabled ? ( messages.alert_suggestOpenAI || 'Try switching off Proxy Mode in toolbar' )
                                       : ( messages.alert_suggestProxy || 'Try switching on Proxy Mode in toolbar' )),
        parseFailed: ( messages.alert_parseFailed || 'Failed to parse response JSON' ) + '. '
            + ( config.proxyAPIenabled ? ( messages.alert_suggestOpenAI || 'Try switching off Proxy Mode in toolbar' )
                                       : ( messages.alert_suggestProxy || 'Try switching on Proxy Mode in toolbar' )),
        checkCloudflare: ( messages.alert_checkCloudflare || 'Please pass Cloudflare security check' ) + ' @ ',
        suggestProxy: ( messages.alert_openAInotWorking || 'OpenAI API is not working' ) + '. '
            + ( messages.alert_suggestProxy || 'Try switching on Proxy Mode in toolbar' ),
        suggestOpenAI: ( messages.alert_proxyNotWorking || 'Proxy API is not working' ) + '. '
            + ( messages.alert_suggestOpenAI || 'Try switching off Proxy Mode in toolbar' )
    }

    // Stylize elements
    const appStyle = document.createElement('style')
    appStyle.innerText = (
          '.no-user-select { -webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }'
        + '.googlegpt {'
            + 'border-radius: 8px ; border: 1px solid #dadce0 ; height: fit-content ; flex-basis: 0 ;'
            + `padding: ${ isChromium ? 22 : 20 }px 26px 6px 26px ;`
            + ( isMobile ? 'margin: 8px 0 8px' : 'margin-bottom: 30px' ) + ';' // add vertical margins
            + 'flex-grow: 1 ; word-wrap: break-word ; white-space: pre-wrap ; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.06) ;'
            + ( scheme == 'dark' ? ' border: none ; background: #282828' : ' background: white' ) + '}'
        + '.googlegpt:hover { box-shadow: 0 1px 6px rgba(0, 0, 0, 0.14) }'
        + '.googlegpt p { margin: 0 ;' + ( scheme == 'dark' ? 'color: #ccc }' : '}' )
        + '.app-name { font-size: 1.35rem ; font-weight: 700 ; text-decoration: none !important ;'
            + `color: ${ scheme == 'dark' ? 'white' : 'black' } !important }`
        + ( scheme == 'dark' ? '.googlegpt a { text-decoration: underline }' : '' ) // underline dark-mode links in alerts
        + '.corner-btn { float: right ; cursor: pointer ; position: relative ; top: 6px ;'
            + ( scheme == 'dark' ? 'fill: white ; stroke: white;' : 'fill: #adadad ; stroke: #adadad' ) + '}'
        + `.corner-btn:hover { ${ scheme == 'dark' ? 'fill: #aaa ; stroke: #aaa' : 'fill: black ; stroke: black' }}`
        + '.googlegpt .loading { padding-bottom: 15px ; color: #b6b8ba ; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite }'
        + '.googlegpt.sidebar-free { margin-left: 60px ; height: fit-content }'
        + '.standby-btn { width: 100% ; padding: 11px 0 ; cursor: pointer ; margin-top: 20px ;'
            + ( scheme == 'dark' ? 'color: #fff ; background: #000 ;' : '')
            + `border-radius: 4px ; border: 1px solid ${ scheme == 'dark' ? '#fff' : '#000' } ;`
            + 'transition: transform 0.1s ease !important ; transform: scale(1) }'
        + '.standby-btn:hover { border-radius: 6px ; transform: scale(1.025) ;'
            + `${ scheme == 'dark' ? 'background: white ; color: black' : 'background: black ; color: white' }}`
        + '.googlegpt pre {'
            + 'font-size: 1.14rem ; white-space: pre-wrap ; min-width: 0 ; margin: 16px 0 0 0 ;'
            + ' line-height: 22px ; padding: 1.25em ; border-radius: 10px ; overflow: auto ;'
            + ( scheme == 'dark' ? 'background: #3a3a3a ; color: #f2f2f2 }' : 'background: #eaeaea }' )
        + '@keyframes pulse { 0%, to { opacity: 1 } 50% { opacity: .5 }}'
        + '.googlegpt section.loading { padding: 15px 0 14px 5px }' // left/top-pad loading status when sending replies
        + '.balloon-tip { content: "" ; position: relative ; border: 7px solid transparent ;'
            + 'border-bottom-style: solid ; border-bottom-width: 1.19rem ; border-top: 0 ; border-bottom-color:'
                + ( scheme == 'dark' ? '#3a3a3a' : '#eaeaea' ) + ' }'
        + '.continue-chat > textarea {'
            + `border: solid 1px ${ scheme == 'dark' ? '#aaa' : '#638ed4' } ; border-radius: 12px 13px 12px 0 ;`
            + 'height: 1.55rem ; max-height: 200px ; resize: none ;'
            + 'margin: 13px 0 15px 0 ; padding: 13px 25px 2px 10px ;'
            + 'background: ' + ( scheme == 'dark' ? '#515151' : '#eeeeee70' ) + ' }'
        + ( scheme == 'dark' ? '.continue-chat > textarea { color: white } .continue-chat > textarea::placeholder { color: #aaa }' : '' )
        + '.related-queries { display: flex ; flex-wrap: wrap ; width: 100% ; margin-bottom: 19px }'
        + '.related-query {'
            + `margin: 5px 4px ${ scheme == 'dark' ? 5 : 2 }px 0 ; padding: 8px 12px 8px 13px ;`
            + `color: ${ scheme == 'dark' ? '#f2f2f2' : '#767676' } ; background: ${ scheme == 'dark' ? '#424242' : '#dadada12' } ;`
            + `border: 1px solid ${ scheme == 'dark' ? '#777' : '#e1e1e1' } ; font-size: 0.9em ; cursor: pointer ;`
            + 'border-radius: 0 13px 12px 13px ; width: fit-content ; flex: 0 0 auto ;'
            + `box-shadow: 1px 3px ${ scheme == 'dark' ? '11px -8px lightgray' : '8px -6px rgba(169, 169, 169, 0.75)' };`
            + 'transition: transform 0.1s ease !important ; transform: scale(1) }'
        + '.related-query:hover, .related-query:focus { transform: scale(1.025) !important ;'
            + `background: ${ scheme == 'dark' ? '#a2a2a270' : '#e5edff ; color: #000000a8 ; border-color: #a3c9ff' }}`
        + '.related-query svg { float: left ; margin: -0.09em 6px 0 0 ;' // related query icon
            + `color: ${ scheme == 'dark' ? '#aaa' : '#c1c1c1' }}`
        + '.fade-in { opacity: 0 ; transform: translateY(10px) ; transition: opacity 0.5s ease, transform 0.5s ease }'
        + '.fade-in.active { opacity: 1 ; transform: translateY(0) }'
        + '#send-btn { border: none ; float: right ; position: relative ; background: none ;'
            + `color: ${ scheme == 'dark' ? '#aaa' : 'lightgrey' } ; cursor: pointer }`
        + `#send-btn:hover { color: ${ scheme == 'dark' ? 'white' : '#638ed4' } }`
        + `.kudo-ai { font-size: ${ isMobile ? 0.85 : 0.75 }rem ; position: relative ; left: ${ isMobile ? 8 : 6 }px ; color: #aaa }`
        + '.kudo-ai a, .kudo-ai a:visited { color: #aaa ; text-decoration: none }'
        + '.kudo-ai a:hover { color:' + ( scheme == 'dark' ? 'white' : 'black' ) + '; text-decoration: none }'
        + '.katex-html { display: none }' // hide unrendered math
        + '.chatgpt-modal > div { 17px 20px 24px 20px !important }' // increase alert padding
        + '.chatgpt-modal h2 { font-size: 1.65rem ; margin: 0 ; padding: 0 }' // shrink margin/padding around alert title + enlarge it
        + '.chatgpt-modal p { margin: 0 0 -9px 4px ; font-size: 1.2rem ; line-height: 1.45 }' // position/size alert msg
        + '.chatgpt-modal button {' // alert buttons
            + 'font-size: 0.84rem ; text-transform: uppercase ; min-width: 113px ;'
            + ( !isMobile ? 'padding: 5px !important ;' : '' )
            + 'cursor: pointer ; border-radius: 0 !important ;'
            + 'border: 1px solid ' + ( scheme == 'dark' ? 'white' : 'black' ) + ' !important }'
        + `.modal-buttons { margin: 28px 4px ${ isMobile ? '2px 4px' : '-3px -4px' } !important }` // position alert buttons
        + ( scheme == 'dark' ? // darkmode alert styles
            ( '.chatgpt-modal > div, .chatgpt-modal button:not(.primary-modal-btn) {'
                + 'background-color: black !important ; color: white }'
            + '.primary-modal-btn { background: white !important ; color: black !important }'
            + '.chatgpt-modal a { color: #00cfff !important }' ) : '' )
        + '.googlegpt footer {'
            + 'position: relative ; right: -33px ; text-align: right ; font-size: 0.75rem ; line-height: 1.43em ;'
            + `margin: ${ isFirefox ? 1 : -2 }px -32px 12px }`
        + '.googlegpt footer * { color: #aaa ; text-decoration: none }'
        + `.googlegpt footer a:hover { color: ${ scheme == 'dark' ? 'white' : 'black' }}`
        + ( // stylize scrollbars in Chromium/Safari
              '.googlegpt *::-webkit-scrollbar { width: 7px }'
            + '.googlegpt *::-webkit-scrollbar-thumb { background: #cdcdcd }'
            + '.googlegpt *::-webkit-scrollbar-thumb:hover { background: #a6a6a6 }'
            + '.googlegpt *::-webkit-scrollbar-track { background: none }' )
        + '.googlegpt * { scrollbar-width: thin }' // make scrollbars thin in Firefox
    )
    document.head.append(appStyle)

    // Create Google style tweaks
    const tweaksStyle = document.createElement('style'),
          wsbStyles = '#center_col, #center_col div { max-width: 560px !important }' // shrink center column
                    + '.googlegpt { width: 25.65rem }' // expand GoogleGPT when in limiting Google host container
                    + '.googlegpt ~ div { width: 464px }' // expand side snippets
                    + `#app-chatbar { width: ${ hasSidebar ? 91.3 : 91.8 }% !important }`,
          ssbStyles = '.googlegpt { position: sticky ; top: 71px }'
                    + '.googlegpt ~ * { display: none }' // hide sidebar contents
    updateTweaksStyle() ; document.head.append(tweaksStyle)

    // Create/stylize tooltip div
    const tooltipDiv = document.createElement('div'),
          tooltipStyle = document.createElement('style')
    tooltipDiv.classList.add('button-tooltip', 'no-user-select')
    tooltipStyle.innerText = '.button-tooltip {'
        + 'background: black ; padding: 5px ; border-radius: 6px ; border: 1px solid #d9d9e3 ;' // bubble style
        + 'font-size: 0.7rem ; color: white ;' // font style
        + 'position: absolute ;' // for updateTooltip() calcs
        + 'opacity: 0 ; transition: opacity 0.1s ; height: fit-content ; z-index: 9999 }' // visibility
    document.head.append(tooltipStyle)

    // Create/classify GoogleGPT container
    const appDiv = document.createElement('div')
    appDiv.classList.add('googlegpt', 'fade-in')

    // Append to Google
    const centerCol = document.querySelector('#center_col')
    const hostContainer = isMobile ? centerCol
        : document.querySelector('#rhs') // sidebar container if side snippets exist
        || (() => { // create new one if no side snippets exist
               const newHostContainer = document.createElement('div')
               newHostContainer.style.display = 'contents'
               centerCol.style.paddingRight = '65px'
               centerCol.insertAdjacentElement('afterend', newHostContainer)
               return newHostContainer
           })()
    hostContainer.prepend(appDiv)
    setTimeout(() => appDiv.classList.add('active'), 100) // fade in

    // Init footer CTA to share feedback
    let footerContent = createAnchor(config.feedbackURL, messages.link_shareFeedback || 'Share feedback')

    // Show standby mode or get/show answer
    if (config.autoGetDisabled
        || config.prefixEnabled && !/.*q=%2F/.test(document.location) // prefix required but not present
        || config.suffixEnabled && !/.*q=.*%3F(&|$)/.test(document.location) // suffix required but not present
    ) { updateFooterContent() ; appShow('standby', footerContent) }
    else {
        appAlert('waitingResponse')
        const query = `${ new URL(location.href).searchParams.get('q') } (reply in ${ config.replyLanguage })`
        convo.push({ role: 'user', content: query })
        getShowReply(convo)
    }

})()
