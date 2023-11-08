// ==UserScript==
// @name                DuckDuckGPT 🤖
// @description         Adds ChatGPT answers to DuckDuckGo sidebar (powered by GPT-4!)
// @description:af      Voeg ChatGPT-antwoorde by DuckDuckGo-kantbalk by (aangedryf deur GPT-4!)
// @description:am      የChatGPT መልስናወርቃለች እርስዎን በDuckDuckGo የተወሰኑ ገጽታዎችን (ተግባር በGPT-4!) ይጨምሩ
// @description:ar      يضيف إجابات ChatGPT إلى شريط البحث الجانبي في DuckDuckGo (مدعوم بواسطة GPT-4!)
// @description:az      ChatGPT cavablarını DuckDuckGo Axtarış yan panelinə əlavə edir (GPT-4 ilə gücləndirilmiş!)
// @description:be      Дадае адказы ChatGPT да бакавой баковай панэлі DuckDuckGo Search (падтрымліваецца GPT-4!)
// @description:bem     Aziya ChatGPT ndalama ku DuckDuckGo sidebar (muma GPT-4!)
// @description:bg      Добавя ChatGPT отговори към страничната лента на DuckDuckGo Search (задвижван от GPT-4!)
// @description:bn      DuckDuckGo সাইডবারে ChatGPT উত্তর যোগ করে (পাওয়ারডে GPT-4 দ্বারা!)
// @description:bo      ChatGPT ལེ་བས་ཚད་བདག་སྐྱེད་དེ་བཟུམ་སྒྲིག་ནང་ DuckDuckGo གནས་པ་བརྗོད་པ། (GPT-4བྱ་བ་བརྒྱུད་པ་!)
// @description:bs      Dodaje odgovore ChatGPT-a na bočnu traku DuckDuckGo pretrage (pokreće GPT-4!)
// @description:ca      Afegeix respostes de ChatGPT a la barra lateral de DuckDuckGo Search (amb tecnologia GPT-4!)
// @description:ceb     Nagdugang sa mga tubag sa ChatGPT sa sidebar sa DuckDuckGo Search (gamit ang GPT-4!)
// @description:ckb     وەرگرتنی ڕاستەوخۆیی ChatGPT بۆ پەنجەرەی لاتی لە DuckDuckGo (بە پشتگیرییی GPT-4!)
// @description:cs      Přidává odpovědi od ChatGPT do bočního panelu DuckDuckGo Search (poháněno GPT-4!)
// @description:cy      Ychwanega Atebion ChatGPT i'r bar ochr DuckDuckGo Search (a gryfhawyd gan GPT-4!)
// @description:da      Tilføjer ChatGPT-svar til DuckDuckGo Search-sidelinjen (drevet af GPT-4!)
// @description:de      Fügt ChatGPT-Antworten zur DuckDuckGo-Seitenleiste hinzu (unterstützt von GPT-4!)
// @description:dv      ChatGPT އައިކްސޭޓުގެ ޖަވާބުގެ DuckDuckGo ސައިޓުގައި ފޯރުވާރައުގެ ޑައުން (އެކައުންއައި ވަކި GPT-4!)
// @description:dz      ChatGPT དང་ DuckDuckGo འབྱུང་ཆུང་ལེ་བས་འཐུས་པ་ལགས་སྤྱོད་སྒྲིག་པ་བརྟགས་བཞུགས། (GPT-4་གི་སྒྲིག་དང་!)
// @description:el      Προσθέτει απαντήσεις ChatGPT στην πλαϊνή γραμμή αναζήτησης του DuckDuckGo (με την υποστήριξη του GPT-4!)
// @description:eo      Aldonas ChatGPT-respondojn al la flanka breto de DuckDuckGo Serĉo (funkciigita de GPT-4!)
// @description:es      Agrega respuestas de ChatGPT a la barra lateral de DuckDuckGo (¡con tecnología de GPT-4!)
// @description:et      Lisab ChatGPT vastused DuckDuckGo Search küljepaneelile (toetatud GPT-4 poolt!)
// @description:eu      Gehitu ChatGPT erantzunak DuckDuckGo Search aldeko alderakoan (GPT-4ren aurrerapenean oinarrituta!)
// @description:fa      ChatGPT به پاسخ‌های DuckDuckGo Search نوار کناری اضافه می‌کند (با پشتیبانی GPT-4!)
// @description:fi      Lisää ChatGPT-vastaukset DuckDuckGo-hakupalkkiin (GPT-4:n tuella!)
// @description:fil     Nagdaragdag ng mga sagot ng ChatGPT sa sidebar ng DuckDuckGo Search (suportado ng GPT-4!)
// @description:fj      Vakarautaka na vosa vakatotolo ni ChatGPT ki na yasa ni liga ni DuckDuckGo (sa dodonu e GPT-4!)
// @description:fo      Leggur ChatGPT-svar til DuckDuckGo Leita síðustriku (við GPT-4!)
// @description:fr      Ajoute les réponses ChatGPT à la barre latérale DuckDuckGo (propulsé par GPT-4!)
// @description:fr-CA   Ajoute les réponses ChatGPT à la barre latérale DuckDuckGo (propulsé par GPT-4!)
// @description:ga      Cuireann freagraí ChatGPT le taobhliosta Cuardach DuckDuckGo (dírithe ag GPT-4!)
// @description:gd      Cuir freagairtean ChatGPT ris an taobh-siostam Lorg DuckDuckGo (le taca GPT-4!)
// @description:gl      Engade as respostas de ChatGPT á barra lateral de procura de DuckDuckGo (con tecnoloxía GPT-4!)
// @description:gn      Oñemohẽ ChatGPT ñemohendu DuckDuckGo Search (MBOGUE GPT-4 rembiasakue!)
// @description:gu      DuckDuckGo સાઇડબારમાં ChatGPT જવાબો ઉમેરે છે (GPT-4 દ્વારા સમર્થિત!)
// @description:ha      Zaya sauyaƙa daga ChatGPT zuwa bidiyo na bidiyon DuckDuckGo (mai bincike ta GPT-4!)
// @description:haw     Hoʻohui aku i nā hōʻike a ChatGPT i ka papa aoʻao hema o ka ʻimi ʻana iā DuckDuckGo (e hōʻoikaika ana e GPT-4!)
// @description:he      הוספת תשובות ChatGPT לסרגל הצד של DuckDuckGo Search (מופעל על ידי GPT-4!)
// @description:hi      DuckDuckGo साइडबार में ChatGPT उत्तर जोड़ता है (GPT-4 द्वारा समर्थित!)
// @description:hr      Dodaje odgovore aplikacije ChatGPT bočnoj traci pretraživanja DuckDuckGo (pokreće GPT-4!)
// @description:ht      Ajoute repons ChatGPT nan barre laterale Rechèch DuckDuckGo a (dise GPT-4!)
// @description:hu      A ChatGPT válaszokat ad a DuckDuckGo Keresés oldalsávjához (GPT-4 által hajtva!)
// @description:hy      Ավելացնում է ChatGPT պատասխանները DuckDuckGo որոնումի կողմից (աջակցումով GPT-4!)
// @description:id      Menambahkan jawaban ChatGPT ke sidebar DuckDuckGo Search (digerakkan oleh GPT-4!)
// @description:ig      Tinye obere ChatGPT na-aga n'etiti ozi akụkụ DuckDuckGo Search (na-ezute GPT-4!)
// @description:is      Bætir við ChatGPT svarum við hliðina á DuckDuckGo leitarstiku (mjög GPT-4!)
// @description:it      Aggiunge le risposte ChatGPT alla barra laterale di DuckDuckGo (basata su GPT-4!)
// @description:iu      ᐊᑎᒪᐃᓐᓂᐊᕐᓂᖅ ChatGPT ᐅᖃᐅᓯᒻᓂᒃ DuckDuckGo ᑎᑎᕋᖅ (GPT-4 ᑕᒪᒃᓴᐃᓂᖅ!)
// @description:ja      ChatGPT の回答を DuckDuckGo サイドバーに追加します (GPT-4 を搭載!)
// @description:jv      Nambaki jawaban ChatGPT menyang sidebar DuckDuckGo Search (didandani dening GPT-4!)
// @description:ka      დაამატებს ChatGPT პასუხებს DuckDuckGo ძიების გვერდის გვერდზე (GPT-4-ის მხარდაჭერით!)
// @description:kg      Kweyisa mawu a ChatGPT kuna sebukulu DuckDuckGo Search (ekupesana na GPT-4!)
// @description:kk      ChatGPT жауаптарын DuckDuckGo іздеу жолағына қосады (GPT-4 жетіспенді!)
// @description:km      បន្ថែមការឆ្លើយនៃ ChatGPT ទៅជាន់ប្រែក្រវូកស្វែករក DuckDuckGo (រកជំនុំដោយ GPT-4)។
// @description:kn      DuckDuckGo ಹೆಸರಿನಲ್ಲಿ ChatGPT ಉತ್ತರಗಳನ್ನು ಸೇರಿಸಲಾಗುತ್ತದೆ (ಜಿಪಿಟಿ-4 ಆಗಿದೆ!)
// @description:ko      DuckDuckGo 사이드바에 ChatGPT 답변 추가 (GPT-4 기반!)
// @description:kok     DuckDuckGo शोधन बारकिटेलो वर ChatGPT उत्तर जातो (GPT-4 द्वारे समर्थित!)
// @description:ku      Li ser karkera lêgerîna DuckDuckGo ChatGPT parve dike (bi karê GPT-4 anîn!)
// @description:ky      ChatGPT жауаптарын DuckDuckGo издөө жолундо кошотот (GPT-4 жардамы менен!)
// @description:la      Adiungit responsiones ChatGPT ad lateralem mensam quaerendi DuckDuckGo (GPT-4 motore!)
// @description:lb      Setzt ChatGPT Äntwerten op DuckDuckGo Sichfenster bäi (gedriwwt vum GPT-4!)
// @description:lo      ເພີ່ມຄຳຕອບ ChatGPT ໄປສະແດງໄວ້ໃນແບບຂອງ DuckDuckGo Search (ໂດຍ GPT-4!)
// @description:lt      Prideda ChatGPT atsakymus į šoninį juostos paieškos rėmelį „DuckDuckGo“ (naudojant „GPT-4“!)
// @description:lv      Pievieno ChatGPT atbildes DuckDuckGo meklēšanas sānjoslā (darbināts ar GPT-4!)
// @description:mg      Mampiditra valiny avy amin'ny ChatGPT ao amin'ny laharana tenim-paharetan'ny DuckDuckGo (amin'ny alalan'ny GPT-4!)
// @description:mi      Whakapau kōrero mai te ChatGPT ki te whītiki o DuckDuckGo Search (e whakahauhau ana e GPT-4!)
// @description:mk      Додавање на ChatGPT одговори во страничната лента на DuckDuckGo пребарување (поддржувано од GPT-4!)
// @description:ml      DuckDuckGo സോളിൽ ChatGPT ഉത്തരങ്ങൾ ചേർക്കുന്നു (GPT-4 പ്രചാരിക്കുന്നു!)
// @description:mn      ChatGPT хариултуудыг DuckDuckGo хайлтын хажуу талд нэмнэ (GPT-4 дэмжилттэй!)
// @description:mr      डब्ल्यूडब्ल्यूडब्ल्यूवर ChatGPT प्रतिसाद जोडला जातो (जीपीटी-4 द्वारे समर्थित!)
// @description:ms      Menambah jawapan ChatGPT ke sidebar Carian DuckDuckGo (dikuasakan oleh GPT-4!)
// @description:mt      Iżżid ir-risposti tal-ChatGPT lill-sidebar tat-Tikketta DuckDuckGo (ppowrat bl-GPT-4!)
// @description:my      DuckDuckGo ရှိ ChatGPT အဖြေကိုထည့်သွင်းရန် (GPT-4 ဖြင့်အထောက်အပံ့အဆုံး!)
// @description:na      Ongerenga mei a ChatGPT i le tofiga o DuckDuckGo Suʻesuʻega (faʻatasi e GPT-4!)
// @description:nb      Legger til ChatGPT-svar i DuckDuckGo Søk sidefelt (drevet av GPT-4!)
// @description:nd      Ithunyelwe izithuthi za ChatGPT kuqukethwe kwesibhakabhaka seDuckDuckGo Search (edlalwa ngu GPT-4!)
// @description:ne      DuckDuckGo खोजको साइडबारमा ChatGPT उत्तरहरू थप्दै (GPT-4 द्वारा समर्थित!)
// @description:ng      Ongeza mafandikio ya ChatGPT ku tepu ya DuckDuckGo Search (mbitsiwa na GPT-4!)
// @description:nl      Voegt ChatGPT-antwoorden toe aan de zijkant van DuckDuckGo Zoeken (aangedreven door GPT-4!)
// @description:nn      Legg til ChatGPT-svar i DuckDuckGo Søk sidefelt (drivne av GPT-4!)
// @description:no      Legger til ChatGPT-svar i DuckDuckGo Søk sidefelt (drevet av GPT-4!)
// @description:nso     E ngata re tswetše diphetho tša ChatGPT go setšhabeng sa DuckDuckGo Search (ka ditshehetsweng ke GPT-4!)
// @description:ny      Ndadzivula mawu a ChatGPT ku sesele ya DuckDuckGo Search (yosungiridwa ndi GPT-4!)
// @description:oc      Apond las responsas de ChatGPT a la barra laterala de DuckDuckGo Search (alimentat per GPT-4 !)
// @description:om      Fayyadamnu DuukDuukGo Ayyaanni ChatGPT tiwwiiqaa garaa garaatti argachuu dandeenyu (gadi dhiiraa GPT-4!)
// @description:or      ଡକଡକଗୋ ଖୋଜର ସାଇଡବାରରେ ChatGPT ଉତ୍ତର ଯୋଡ଼ାଯାଇଛି (GPT-4 ଦ୍ବାରା ପ୍ରାଧାନ!)
// @description:pa      ਡਕਡਕਗੋ ਖੋਜ ਦੇ ਸਾਈਡਬਾਰ 'ਚ ChatGPT ਉੱਤਰ ਸ਼ਾਮਲ ਕੀਤੇ ਗਏ ਨੇ (GPT-4 ਦੀ ਮੂਲ ਤੋਂ ਚਲਾਇਆ ਗਿਆ!)
// @description:pl      Dodaje odpowiedzi ChatGPT w pasku bocznym DuckDuckGo (obsługiwane przez GPT-4!)
// @description:ps      د ډک ډک ګو لټون کې ChatGPT جوابونه اضافه کوي (د GPT-4 سره په انجن کې کار پلورل شوی!)
// @description:pt      Adiciona respostas do ChatGPT à barra lateral do DuckDuckGo Search (com suporte da GPT-4!)
// @description:pt-BR   Adiciona respostas do ChatGPT à barra lateral do DuckDuckGo Search (com suporte da GPT-4!)
// @description:qu      ChatGPT munankunapuraqmi DuckDuckGo ñawpa pachapi yanapaq (GPT-4 yachachiqkuna)
// @description:rm      Agiunta las respostas da ChatGPT a la barra laterala da DuckDuckGo Search (sustegnì da GPT-4!)
// @description:rn      Abaririza amajwi nka ChatGPT ku rubuga rw'ikibazo cya DuckDuckGo (yashinzwe na GPT-4!)
// @description:ro      Adaugă răspunsurile ChatGPT în bara laterală DuckDuckGo Căutare (susținut de GPT-4!)
// @description:ru      Добавляет ответы ChatGPT на боковую панель DuckDuckGo (на базе GPT-4!)
// @description:rw      Byongeyeza amajwi yo mubu sideba ya DuckDuckGo ChatGPT (yashinzwe na GPT-4!)
// @description:sa      डकडकगो यान्त्रिके अभिन्नधीयो मार्गेण चाटगिपटिं उत्तरम् (गीपीटी-४ प्रेरितः)!
// @description:sat     DuckDuckGoᱥ ᱵᱟᱨᱦᱟᱨᱚᱛ ᱠᱟᱹᱞᱤᱞᱟ ChatGPT ᱨᱮᱞᱟ ᱦᱚᱱᱮᱡ (GPT-4 ᱚᱛᱷᱟ ᱠᱚᱢᱵᱚᱨᱟᱺᱡ!)
// @description:sc      Aghedda is responsas de ChatGPT a sa barra de cerca de DuckDuckGo (adantzadu dae GPT-4!)
// @description:sd      ڊڪ ڊڪ گو سرچ ۾ ChatGPT جو جوابون اضافو ڪيل آهي (GPT-4 کي طاقت ورجڻ وارو!)
// @description:se      Loahpa ChatGPT-vástádusat DuckDuckGo Gaskkaside (doaimmasaš GPT-4!)
// @description:sg      Tisa na tîsânga lusângo lu ChatGPT kuna ntsâdi ya DuckDuckGo (sa tebelî GPT-4!)
// @description:si      DuckDuckGo සෙවුමේ ChatGPT පිළිතුරු එකතු කරයි (GPT-4 වෙත සහාය කළා!)
// @description:sk      Pridáva odpovede ChatGPT do bočnej lišty vyhľadávania DuckDuckGo (pomocou GPT-4!)
// @description:sl      Dodaja odgovore ChatGPT v stransko vrstico iskanja DuckDuckGo (podprto s strani GPT-4!)
// @description:sm      Faʻaalia atonu a le ChatGPT i le taavale lautele o le DuckDuckGo Suʻesuʻega (faʻatasi i le GPT-4!)
// @description:sn      Kupurikira maitiro eChatGPT kuve kuwandisa wevhu raDuckDuckGo Search (akakosha neGPT-4!)
// @description:so      Ku darin xogta ChatGPT ee gooshi DuckDuckGo Search (lagu taageerayo GPT-4!)
// @description:sq      Shton përgjigje ChatGPT në anëbardhën e kërkimit DuckDuckGo (e mbështetur nga GPT-4!)
// @description:sr      Додаје одговоре ЧатГПТ-а у траку за претрагу DuckDuckGo (подржано од стране ГПТ-4!)
// @description:ss      Faka amavulandlela aseChatGPT e sidebarenge sikaDuckDuckGo Seaching (okusekelwa ngu GPT-4!)
// @description:st      Kgetha ChatGPT ho litlhopho tsa DuckDuckGo Thetsa (ho hlolehileng ka GPT-4!)
// @description:su      Nambihan jawaban ChatGPT ka sisi kiri DuckDuckGo (diyandaké pikeun GPT-4!)
// @description:sv      Lägger till ChatGPT-svar i DuckDuckGo-sökraden (drivs av GPT-4!)
// @description:sw      Inaongeza majibu ya ChatGPT kwenye ubao wa upande wa DuckDuckGo (inaendeshwa na GPT-4!)
// @description:ta      டக் டக் கோ தேடலின் பக்கத்தில் ChatGPT பதில்களைச் சேர்க்கின்றது (GPT-4 ஆன்லான்!)
// @description:te      డక్‌డక్‌గో శోధన పట్టిక పై ChatGPT సమాధానాలను జోడిస్తుంది (GPT-4 ద్వారా మొత్తంగా!)
// @description:tg      Зиёд кардани ҷавобҳои ChatGPT ба тарафи сатҳи ҷустуҷӯ DuckDuckGo (асосшавӣ ба GPT-4!)
// @description:th      เพิ่มคำตอบจาก ChatGPT ในแถบด้านข้างของการค้นหา DuckDuckGo (รองรับโดย GPT-4!)
// @description:ti      ኣብ DuckDuckGo ስልጠና ኣብ ChatGPT ምልክትን ኣማራጺ (በተመስረበ በተን GPT-4!)
// @description:tk      DuckDuckGo gecikmäge ChatGPT jogaby goşýar (GPT-4 bilen!)
// @description:tl      Nagdadagdag ng mga sagot ng ChatGPT sa sidebar ng DuckDuckGo Search (suportado ng GPT-4!)
// @description:tn      Viseza izisho zika ChatGPT kwekhoni leDuckDuckGo Search (kukhombisa ngokweGPT-4!)
// @description:to      Tānaki e ngaue kihe sipa tali fakapotopoto 'o e DuckDuckGo ngaue 'o e ChatGPT (tokotaha 'e GPT-4!)
// @description:tr      ChatGPT yanıtlarını DuckDuckGo Arama kenar çubuğuna ekler (GPT-4 tarafından desteklenir!)
// @description:ts      Vuyisa mati na ChatGPT hi xiphemu leDuckDuckGo Search (hosiwa hi GPT-4!)
// @description:tt      DuckDuckGo Эзләү үтекле ChatGPT катнаштыру (GPT-4 итегезеккән!)
// @description:tw      Hwɛ ChatGPT adefoɔ dodoɔ DuckDuckGo hwee (ka ho asasaa GPT-4!)
// @description:ug      DuckDuckGo ئىزدەشتە ChatGPT جاۋابلىرىنى قوشۇش (GPT-4 دىن قوللايدۇ!)
// @description:uk      Додає відповіді ChatGPT у бічний панелі пошуку DuckDuckGo (підтримується GPT-4!)
// @description:ur      ڈک ڈک گو تلاش کی طرف ChatGPT کے جوابات شامل کرتا ہے (جیپی ٹی-4 کی مدد سے!)
// @description:uz      DuckDuckGo qidiruviga ChatGPT javoblari qo'shadi (GPT-4 tomonidan qo'llab-quvvatlanadi!)
// @description:ve      Vhohodzi vha ChatGPT kha vhavhili ya DuckDuckGo Fambisa (vha sungulwa na GPT-4!)
// @description:vi      Thêm câu trả lời của ChatGPT vào thanh bên DuckDuckGo Search (được hỗ trợ bởi GPT-4!)
// @description:vo      Läükon datans ChatGPT ad pät binon DuckDuckGo Vükos (nükonoson dö GPT-4!)
// @description:wa      Ådd doveses di Dj DuckDuckGo a l' cohteye di Dj ChatGPT (rèhnutî pa GPT-4 !)
// @description:wo      Ndax duggëwul ChatGPT du bind ak wertali DuckDuckGo (naataanal ku GPT-4!)
// @description:xh      Nika izicelo zika ChatGPT ezinkunzi ngesandla samazwi eDuckDuckGo Search (zakhiwo ngu GPT-4!)
// @description:yi      צוגעפיגט אַנטוואָרטן פון טשאַטגפּט אין דאַקדאַקגאָ זוךן זייַט (געפּט-4 געשטיצט!)
// @description:yo      Fi awọn iwe itumọ ChatGPT si abala iwoye DuckDuckGo (ṣiṣe ni GPT-4!)
// @description:za      Ngozv yi ChatGPT nv nqgozv ya DuckDuckGo Search (dqvliuzgozv ngel GPT-4!)
// @description:zh      将 ChatGPT 答案添加到 DuckDuckGo 侧边栏 (由 GPT-4 提供支持!)
// @description:zh-CN   将 ChatGPT 答案添加到 DuckDuckGo 侧边栏 (由 GPT-4 提供支持!)
// @description:zh-HK   將 ChatGPT 答案添加到 DuckDuckGo 側邊欄 (由 GPT-4 提供支持!)
// @description:zh-SG   将 ChatGPT 答案添加到 DuckDuckGo 侧边栏 (由 GPT-4 提供支持!)
// @description:zh-HK   將 ChatGPT 答案添加到 DuckDuckGo 側邊欄 (由 GPT-4 提供支持!)
// @description:zu      Faka amaphawu ase-ChatGPT kuvaliwe i-DuckDuckGo Search (okwesikhashana ngu-GPT-4!)
// @author              KudoAI
// @namespace           https://kudoai.com
// @version             2023.11.8.5
// @license             MIT
// @icon                https://media.ddgpt.com/images/ddgpt-icon48.png
// @icon64              https://media.ddgpt.com/images/ddgpt-icon64.png
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
// @match               *://duckduckgo.com/?*
// @include             https://auth0.openai.com
// @connect             raw.githubusercontent.com
// @connect             greasyfork.org
// @connect             chat.openai.com
// @connect             api.aigcfun.com
// @require             https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@34477ee6cda0369652d1588e4132dba6d6f6112f/dist/chatgpt-2.3.16.min.js
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.js
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/contrib/auto-render.min.js
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_deleteValue
// @grant               GM_cookie
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM_openInTab
// @grant               GM.xmlHttpRequest
// @downloadURL         https://greasyfork.org/scripts/459849/code/duckduckgpt.user.js
// @updateURL           https://greasyfork.org/scripts/459849/code/duckduckgpt.meta.js
// @homepageURL         https://www.duckduckgpt.com
// @supportURL          https://github.duckduckgpt.com/issues
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023 KudoAI & contributors under the MIT license
// ...and KaTeX, the fastest math typesetting library @ https://katex.org (c) 2013–2020 Khan Academy & contributors under the MIT license

(async () => {

    // Define SCRIPT functions

    function loadSetting(...keys) { keys.forEach(key => { config[key] = GM_getValue(config.prefix + '_' + key, false) })}
    function saveSetting(key, value) { GM_setValue(config.prefix + '_' + key, value) ; config[key] = value }
    function safeWindowOpen(url) { window.open(url, '_blank', 'noopener') } // to prevent backdoor vulnerabilities
    function getUserscriptManager() { try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    // Define MENU functions

    function registerMenu() {
        const menuIDs = [] // to store registered commands for removal while preserving order
        const state = {
            symbol: ['✔️', '❌'], word: ['ON', 'OFF'],
            separator: getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': ' }

        // Add command to toggle proxy API mode
        const pamLabel = state.symbol[+!config.proxyAPIenabled]
                       + ' ' + messages.menuLabel_proxyAPImode + ' '
                       + state.separator + state.word[+!config.proxyAPIenabled]
        menuIDs.push(GM_registerMenuCommand(pamLabel, () => {
            saveSetting('proxyAPIenabled', !config.proxyAPIenabled)
            notify(messages.menuLabel_proxyAPImode + ' ' + state.word[+!config.proxyAPIenabled])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
            location.reload() // re-send query using new endpoint
        }))

        // Add command to toggle showing related queries
        const rqLabel = state.symbol[+config.relatedQueriesDisabled] + ' '
                      + messages.menuLabel_relatedQueries + ' '
                      + state.separator + state.word[+config.relatedQueriesDisabled]
        menuIDs.push(GM_registerMenuCommand(rqLabel, () => {
            saveSetting('relatedQueriesDisabled', !config.relatedQueriesDisabled)
            try { // to update visibility based on latest setting
                const relatedQueriesDiv = document.querySelector('.related-queries')
                relatedQueriesDiv.style.display = config.relatedQueriesDisabled ? 'none' : 'flex'
            } catch (err) {}
            notify(messages.menuLabel_relatedQueries + ' ' + state.word[+config.relatedQueriesDisabled])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to toggle prefix mode
        const pmLabel = state.symbol[+!config.prefixEnabled] + ' '
                      + messages.menuLabel_require + ' "/" '
                      + messages.menuLabel_beforeQuery + ' '
                      + state.separator + state.word[+!config.prefixEnabled]
        menuIDs.push(GM_registerMenuCommand(pmLabel, () => {
            saveSetting('prefixEnabled', !config.prefixEnabled)
            if (config.prefixEnabled && config.suffixEnabled) { // disable Suffix Mode if activating Prefix Mode
                saveSetting('suffixEnabled', !config.suffixEnabled) }
            notify(messages.mode_prefix + ' ' + state.word[+!config.prefixEnabled])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
            if (!config.prefixEnabled) location.reload() // re-send query if newly disabled
        }))

        // Add command to toggle suffix mode
        const smLabel = state.symbol[+!config.suffixEnabled] + ' '
                      + messages.menuLabel_require + ' "?" '
                      + messages.menuLabel_afterQuery + ' '
                      + state.separator + state.word[+!config.suffixEnabled]
        menuIDs.push(GM_registerMenuCommand(smLabel, () => {
            saveSetting('suffixEnabled', !config.suffixEnabled)
            if (config.prefixEnabled && config.suffixEnabled) { // disable Prefix Mode if activating Suffix Mode
                saveSetting('prefixEnabled', !config.prefixEnabled) }
            notify(messages.mode_suffix + ' ' + state.word[+!config.suffixEnabled])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
            if (!config.suffixEnabled) location.reload() // re-send query if newly disabled
        }))

        // Add command to toggle fatter sidebar
        const fsbLabel = ( config.fatterSidebar ? '🔛' : '↔️' ) + ' '
                       + messages.menuLabel_fatterSidebar
                       + state.separator + state.word[+!config.fatterSidebar]
        menuIDs.push(GM_registerMenuCommand(fsbLabel, () => {
            saveSetting('fatterSidebar', !config.fatterSidebar)
            updateTweaksStyle()
            if (!config.notifHidden)
                notify(messages.menuLabel_fatterSidebar + ' ' + state.word[+!config.fatterSidebar])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
        }))

        // Add command to set reply language
        const rlLabel = '🌐 ' + messages.menuLabel_replyLanguage
                      + state.separator + config.replyLanguage
        menuIDs.push(GM_registerMenuCommand(rlLabel, () => {
            while (true) {
                const replyLanguage = prompt(
                    messages.prompt_updateReplyLang + ':', config.replyLanguage)
                if (replyLanguage === null) break // user cancelled so do nothing
                else if (!/\d/.test(replyLanguage)) {
                    saveSetting('replyLanguage', replyLanguage || config.userLanguage)
                    alert(messages.alert_langUpdated + '!', // title
                        'DuckDuckGPT ' + messages.alert_willReplyIn + ' ' // msg
                            + ( replyLanguage || messages.alert_yourSysLang ) + '.',
                         '', '', 330) // width
                    for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
                    break
        }}}))

        // Add command to launch About modal
        const aboutLabel = '💡 ' + messages.menuLabel_about + ' DuckDuckGPT'
        menuIDs.push(GM_registerMenuCommand(aboutLabel, launchAboutModal))
    }

    function launchAboutModal() {

        // Show alert
        const chatgptJSver = (/chatgpt-([\d.]+)\.min/.exec(GM_info.script.header) || [null, ''])[1]
        const aboutAlertID = alert(
            'DuckDuckGPT', // title
            '🏷️ ' + messages.about_version + ': ' + GM_info.script.version + '\n'
                + '⚡ ' + messages.about_poweredBy + ': '
                    + '<a href="https://chatgpt.js.org" target="_blank" rel="noopener">chatgpt.js</a>'
                    + ( chatgptJSver ? ( ' v' + chatgptJSver ) : '' ) + '\n'
                + '📜 ' + messages.about_sourceCode + ':\n '
                    + `<a href="${ config.gitHubURL }" target="_blank" rel="nopener">`
                        + config.gitHubURL + '</a>',
            [ // buttons
                function checkForUpdates() { updateCheck() },
                function getSupport() { safeWindowOpen(config.supportURL) },
                function leaveAReview() {
                    const reviewAlertID = chatgpt.alert(messages.alert_choosePlatform + ':', '',
                        [ function greasyFork() { safeWindowOpen(
                              config.greasyForkURL + '/feedback#post-discussion') },
                          function productHunt() { safeWindowOpen(
                              'https://www.producthunt.com/products/duckduckgpt/reviews/new') },
                          function futurepedia() { safeWindowOpen(
                              'https://www.futurepedia.io/tool/duckduckgpt#duckduckgpt-review') },
                          function alternativeTo() { safeWindowOpen(
                              'https://alternativeto.net/software/duckduckgpt/about/') }
                        ], '', 523) // Review modal width
                    const reviewButtons = document.getElementById(reviewAlertID).querySelectorAll('button')
                    reviewButtons[0].style.display = 'none' // hide Dismiss button
                    reviewButtons[1].textContent = ( // remove spaces from AlternativeTo label
                        reviewButtons[1].textContent.replace(/\s/g, '')) },
                function moreChatGPTapps() { safeWindowOpen('https://github.com/adamlui/chatgpt-apps') }
            ], '', 527) // About modal width

        // Re-format buttons to include emojis + re-case + hide 'Dismiss'
        for (const button of document.getElementById(aboutAlertID).querySelectorAll('button')) {
            if (/updates/i.test(button.textContent))
                button.textContent = '🚀 ' + messages.buttonLabel_updateCheck
            else if (/support/i.test(button.textContent))
                button.textContent = '🧠 ' + messages.buttonLabel_getSupport
            else if (/review/i.test(button.textContent))
                button.textContent = '⭐ ' + messages.buttonLabel_leaveReview
            else if (/apps/i.test(button.textContent))
                button.textContent = '🤖 ' + messages.buttonLabel_moreApps
            else button.style.display = 'none' // hide dismiss button
        }
    }

    function updateCheck() {

        // Fetch latest meta
        const currentVer = GM_info.script.version
        GM.xmlHttpRequest({
            method: 'GET', url: config.updateURL + '?t=' + Date.now(),
            headers: { 'Cache-Control': 'no-cache' },
            onload: response => {

                // Compare versions
                const latestVer = /@version +(.*)/.exec(response.responseText)[1]
                for (let i = 0 ; i < 4 ; i++) { // loop thru subver's
                    const currentSubVer = parseInt(currentVer.split('.')[i], 10) || 0,
                          latestSubVer = parseInt(latestVer.split('.')[i], 10) || 0
                    if (currentSubVer > latestSubVer) break // out of comparison since not outdated
                    else if (latestSubVer > currentSubVer) { // if outdated

                        // Alert to update
                        const updateAlertID = alert(messages.alert_updateAvail + '! 🚀', // title
                            messages.alert_newerVer + ' DuckDuckGPT v' + latestVer + ' '
                                + messages.alert_isAvail + '!   '
                                + '<a target="_blank" rel="noopener" style="font-size: 0.7rem" '
                                    + 'href="' + config.gitHubURL + '/commits/main/greasemonkey/'
                                    + config.updateURL.replace(/.*\/(.*)meta\.js/, '$1user.js') + '" '
                                    + '>' + messages.link_viewChanges + '</a>',
                            function update() { // button
                                GM_openInTab(config.updateURL.replace('meta.js', 'user.js') + '?t=' + Date.now(),
                                    { active: true, insert: true } // focus, make adjacent
                                ).onclose = () => location.reload() },
                            '', 409 // width
                        )

                        // Localize button labels if needed
                        if (!config.userLanguage.startsWith('en')) {
                            const updateAlert = document.querySelector(`[id="${ updateAlertID }"]`),
                                  updateButtons = updateAlert.querySelectorAll('button')
                            updateButtons[1].textContent = messages.buttonLabel_update
                            updateButtons[0].textContent = messages.buttonLabel_dismiss
                        }

                        return
                }}

                // Alert to no update, nav back
                alert(`${ messages.alert_upToDate }!`, // title
                        `DuckDuckGPT (v${ currentVer }) ${ messages.alert_isUpToDate }!`) // msg
                launchAboutModal()
    }})}

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration,
            shadow || ( isDarkMode() ? '' : 'shadow'))
    }

    function alert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    const ddgptConsole = {
        info: function(msg) { console.info(config.appSymbol + ' DuckDuckGPT >> ' + msg) },
        error: function(msg) { console.error(config.appSymbol + ' DuckDuckGPT >> ERROR: ' + msg) }
    }

    function ddgptAlert(msg) {
        if (msg.includes('login')) deleteOpenAIcookies()
        ddgptDiv.innerHTML = (
            /waiting|loading/i.test(msg) ? // if alert involves loading, add class
                '<p class="loading">' : '<p>') + ddgptAlerts[msg]
            + (ddgptAlerts[msg].includes('@') ? // if msg needs login link, add it
                '<a href="https://chat.openai.com" target="_blank" rel="noopener">chat.openai.com</a> '
                    + '(' + messages.alert_ifIssuePersists + ')</p>' : '</p>')
    }

    // Define DDG UI functions

    function isChromium() { return navigator.userAgent.includes('Chrome') }
    function isCenteredMode() { return document.querySelector('html').classList.toString().includes('center') }

    function isDarkMode() {
        return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
            || document.documentElement.classList.toString().includes('dark')
    }

    // Define SESSION functions

    function isBlockedbyCloudflare(resp) {
        try {
            const html = new DOMParser().parseFromString(resp, 'text/html'),
                  title = html.querySelector('title')
            return title.innerText === messages.alert_justAmoment + '...'
        } catch (error) { return false }
    }

    function deleteOpenAIcookies() {
        if (getUserscriptManager() !== 'Tampermonkey') return
        GM_cookie.list({ url: openAIendpoints.auth }, (cookies, error) => {
            if (!error) { for (const cookie of cookies) {
                GM_cookie.delete({ url: openAIendpoints.auth, name: cookie.name })
    }}})}

    function getOpenAItoken() {
        return new Promise(resolve => {
            const accessToken = GM_getValue(config.prefix + '_openAItoken')
            ddgptConsole.info('OpenAI access token: ' + accessToken)
            if (!accessToken) {
                GM.xmlHttpRequest({ url: openAIendpoints.session, onload: response => {
                    if (isBlockedbyCloudflare(response.responseText)) {
                        ddgptAlert('checkCloudflare') ; return }
                    try {
                        const newAccessToken = JSON.parse(response.responseText).accessToken
                        GM_setValue(config.prefix + '_openAItoken', newAccessToken)
                        resolve(newAccessToken)
                    } catch { ddgptAlert('login') ; return }
                }})
            } else resolve(accessToken)
    })}

    function getAIGCFkey() {
        return new Promise(resolve => {
            const publicKey = GM_getValue(config.prefix + '_aigcfKey')
            if (!publicKey) {
                GM.xmlHttpRequest({ method: 'GET', url: 'https://api.aigcfun.com/fc/key',
                    headers: {
                        'Content-Type': 'application/json',
                        'Referer': 'https://aigcfun.com/',
                        'X-Forwarded-For': chatgpt.generateRandomIP() },
                    onload: response => {
                        const newPublicKey = JSON.parse(response.responseText).data
                        if (!newPublicKey) { ddgptConsole.error('Failed to get AIGCFun public key') ; return }
                        GM_setValue(config.prefix + '_aigcfKey', newPublicKey)
                        console.info('AIGCFun public key set: ' + newPublicKey)
                        resolve(newPublicKey)
                }})
            } else resolve(publicKey)
    })}

    async function refreshAIGCFendpoint() {
        GM_setValue(config.prefix + '_aigcfKey', false) // clear GM key

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
            const untriedEndpoints = proxyEndpoints.filter(entry => {
                return !getShowReply.triedEndpoints?.includes(entry[0]) })
            const entry = untriedEndpoints[Math.floor(chatgpt.randomFloat() * untriedEndpoints.length)]
            endpoint = entry[0] ; accessKey = entry[1] ; model = entry[2]
        } else { // use OpenAI API
            endpoint = openAIendpoints.chat
            const timeoutPromise = new Promise((resolve, reject) => {
                setTimeout(() => { reject(new Error('Timeout occurred')) }, 3000) })
            accessKey = await Promise.race([getOpenAItoken(), timeoutPromise])
            if (!accessKey) { ddgptAlert('login') ; return }
            model = 'text-davinci-002-render'
        }
    }

    function createPayload(msgs) {
        return JSON.stringify(config.proxyAPIenabled
            ? { messages: msgs, model: model }
            : { action: 'next', messages: msgs, model: model,
                parent_message_id: chatgpt.uuidv4(), max_tokens: 4000 })
    }

    function getRelatedQueries(query) {
        return new Promise((resolve, reject) => {
            const relatedQueriesQuery = 'Show a numbered list of queries related to this one:\n\n' + query
            GM.xmlHttpRequest({
                method: 'POST', url: endpoint, responseType: 'text',
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + accessKey },
                data: createPayload([
                    config.proxyAPIenabled ? { role: 'user', content: relatedQueriesQuery }
                                           : { role: 'user', id: chatgpt.uuidv4(),
                                               content: { content_type: 'text', parts: [relatedQueriesQuery] }}]),
                onload: event => {
                    let str_relatedQueries = ''
                    if (!config.proxyAPIenabled && event.response) {
                        try { // to parse txt response from OpenAI API
                            const responseParts = event.response.split('\n\n'),
                                  finalResponse = JSON.parse(responseParts[responseParts.length - 4].slice(6))
                            str_relatedQueries = finalResponse.message.content.parts[0]
                        } catch (err) { ddgptConsole.error(err) ; reject(err) }
                    } else if (config.proxyAPIenabled && event.responseText) {
                        try { // to parse txt response from proxy API
                            str_relatedQueries = JSON.parse(event.responseText).choices[0].message.content
                        } catch (err) { ddgptConsole.error(err) ; reject(err) }
                    }
                    const arr_relatedQueries = (str_relatedQueries.match(/\d+\.\s*(.*?)(?=\n|$)/g) || [])
                        .slice(0, 5) // limit to 1st 5
                        .map(match => match.replace(/^\d+\.\s*/, '')) // strip numbering
                    resolve(arr_relatedQueries)
                },
                onerror: err => { ddgptConsole.error(err) ; reject(err) }
            })
    })}

    function rqEventHandler(event) { // for attachment/removal in `getShowReply()` + `ddgptShow(answer).handleSubmit()`
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
            const chatbar = ddgptDiv.querySelector('textarea')
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
            method: 'POST', url: endpoint,
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + accessKey },
            responseType: responseType(), data: createPayload(convo), onloadstart: onLoadStart(), onload: onLoad(),
            onerror: err => {
                ddgptConsole.error(err)
                if (!config.proxyAPIenabled) ddgptAlert(!accessKey ? 'login' : 'suggestProxy')
                else { // if proxy mode
                    if (getShowReply.attemptCnt < proxyEndpoints.length) retryDiffHost()
                    else ddgptAlert('suggestOpenAI')
            }}
        })

        // Get/show related queries
        if (!config.relatedQueriesDisabled) {
            getRelatedQueries(convo[convo.length - 1].content).then(relatedQueries => {
                if (relatedQueries && ddgptDiv.querySelector('textarea')) {

                    // Create/classify/append parent div
                    const relatedQueriesDiv = document.createElement('div')
                    relatedQueriesDiv.className = 'related-queries'
                    ddgptDiv.appendChild(relatedQueriesDiv)

                    // Fill each child div, add fade + tabindex + listener
                    relatedQueries.forEach((relatedQuery, index) => {
                        const relatedQueryDiv = document.createElement('div')
                        relatedQueryDiv.title = messages.tooltip_sendRelatedQuery
                        relatedQueryDiv.className = 'related-query fade-in'
                        relatedQueryDiv.setAttribute('tabindex', 0)
                        relatedQueryDiv.textContent = relatedQuery
                        relatedQueriesDiv.appendChild(relatedQueryDiv)
                        setTimeout(() => {
                            relatedQueryDiv.classList.add('active')
                            relatedQueryDiv.addEventListener('click', rqEventHandler)
                            relatedQueryDiv.addEventListener('keydown', rqEventHandler)
                        }, index * 100)
                    })
        }})}

        function responseType() {
            return (!config.proxyAPIenabled && getUserscriptManager() === 'Tampermonkey') ? 'stream' : 'text' }

        function retryDiffHost() {
            ddgptConsole.error(`Error calling ${ endpoint }. Trying another endpoint...`)
            getShowReply.triedEndpoints.push(endpoint) // store current proxy to not retry
            getShowReply.attemptCnt++
            getShowReply(convo, callback)
        }

        function onLoadStart() { // process streams for unproxied TM users
            ddgptConsole.info('Endpoint used: ' + endpoint)
            if (!config.proxyAPIenabled && getUserscriptManager() === 'Tampermonkey') {
                return stream => {
                    const reader = stream.response.getReader()
                    reader.read().then(function processText({ done, value }) {
                        if (done) return
                        let responseItem = String.fromCharCode(...Array.from(value))
                        if (responseItem.includes('unusual activity')) { ddgptAlert('suggestProxy') ; return }
                        const items = responseItem.split('\n\n')
                        if (items.length > 2) {
                            const lastItem = items.slice(-3, -2)[0]
                            if (lastItem.startsWith('data: [DONE]')) responseItem = items.slice(-4, -3)[0]
                            else responseItem = lastItem
                        }
                        if (responseItem.startsWith('data: {')) {
                            const answer = JSON.parse(responseItem.slice(6)).message.content.parts[0]
                            ddgptShow(answer)
                        } else if (responseItem.startsWith('data: [DONE]')) return
                        return reader.read().then(processText)
        })}}}

        function onLoad() {
            return async event => {
                if (event.status !== 200) {
                    ddgptConsole.error('Event status: ' + event.status)
                    ddgptConsole.error('Event response: ' + event.responseText)
                    if (config.proxyAPIenabled && getShowReply.attemptCnt < proxyEndpoints.length)
                        retryDiffHost()
                    else if (event.status === 401 && !config.proxyAPIenabled) {
                        GM_deleteValue(config.prefix + '_openAItoken') ; ddgptAlert('login') }
                    else if (event.status === 403)
                        ddgptAlert(config.proxyAPIenabled ? 'suggestOpenAI' : 'checkCloudflare')
                    else if (event.status === 429) ddgptAlert('tooManyRequests')
                    else ddgptAlert(config.proxyAPIenabled ? 'suggestOpenAI' : 'suggestProxy')
                } else if (!config.proxyAPIenabled && getUserscriptManager() !== 'Tampermonkey') {
                    if (event.response) {
                        try { // to parse txt response from OpenAI endpoint for non-TM users
                            const responseParts = event.response.split('\n\n'),
                                  finalResponse = JSON.parse(responseParts[responseParts.length - 4].slice(6)),
                                  answer = finalResponse.message.content.parts[0]
                            ddgptShow(answer)
                        } catch (err) {
                            ddgptConsole.error(ddgptAlerts.parseFailed + ': ' + err)
                            ddgptConsole.error('Response: ' + event.response)
                            ddgptAlert('suggestProxy')
                        }
                    }
                } else if (config.proxyAPIenabled) {
                    if (event.responseText) {
                        try { // to parse txt response from proxy endpoints
                            const answer = JSON.parse(event.responseText).choices[0].message.content
                            ddgptShow(answer) ; getShowReply.triedEndpoints = [] ; getShowReply.attemptCnt = 0
                        } catch (err) {
                            ddgptConsole.info('Response: ' + event.responseText)
                            if (event.responseText.includes('非常抱歉，根据我们的产品规则，无法为你提供该问题的回答'))
                                ddgptShow(messages.alert_censored)
                            else if (event.responseText.includes('维护'))
                                ddgptShow(messages.alert_maintenance + '. ' + messages.alert_suggestOpenAI)
                            else if (event.responseText.includes('finish_reason')) { // if other AIGCF error encountered
                                await refreshAIGCFendpoint() ; getShowReply(convo, callback) // re-fetch related queries w/ fresh IP

                            } else { // use different endpoint or suggest OpenAI
                                ddgptConsole.error(ddgptAlerts.parseFailed + ': ' + err)
                                if (getShowReply.attemptCnt < proxyEndpoints.length) retryDiffHost()
                                else ddgptAlert('suggestOpenAI')
                            }
                        }
        }}}}
    }

    function ddgptShow(answer) {
        while (ddgptDiv.firstChild) // clear all children
            ddgptDiv.removeChild(ddgptDiv.firstChild)
        const fillColor = isDarkMode() ? 'white' : 'black'

        // Create/append '🤖 DuckDuckGPT'
        const appNameSpan = document.createElement('span')
        appNameSpan.className = 'app-name' ; appNameSpan.innerText = '🤖  '
        const ddgptLink = document.createElement('a')
        ddgptLink.href = 'https://www.duckduckgpt.com'
        ddgptLink.target = '_blank' ; ddgptLink.rel = 'noopener'
        ddgptLink.textContent = 'DuckDuckGPT'
        appNameSpan.appendChild(ddgptLink) ; ddgptDiv.appendChild(appNameSpan)

        // Create/append 'by KudoAI'
        const kudoAIspan = document.createElement('span')
        kudoAIspan.className = 'kudo-ai' ; kudoAIspan.textContent = 'by '
        const kudoAIlink = document.createElement('a')
        kudoAIlink.href = 'https://www.kudoai.com'
        kudoAIlink.target = '_blank' ; kudoAIlink.rel = 'noopener'
        kudoAIlink.textContent = 'KudoAI'
        kudoAIspan.appendChild(kudoAIlink) ; ddgptDiv.appendChild(kudoAIspan)

        // Create/append about button
        const aboutSpan = document.createElement('span'),
              aboutSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
              aboutSVGpath = document.createElementNS('http://www.w3.org/2000/svg','path')
        aboutSpan.className = 'about-btn' ; aboutSpan.title = messages.menuLabel_about
        aboutSVG.setAttribute('width', '17') ; aboutSVG.setAttribute('viewBox', '0 0 56.693 56.693')
        aboutSVGpath.setAttribute('d',
            'M28.765,4.774c-13.562,0-24.594,11.031-24.594,24.594c0,13.561,11.031,24.594,24.594,24.594  c13.561,0,24.594-11.033,24.594-24.594C53.358,15.805,42.325,4.774,28.765,4.774z M31.765,42.913c0,0.699-0.302,1.334-0.896,1.885  c-0.587,0.545-1.373,0.82-2.337,0.82c-0.993,0-1.812-0.273-2.431-0.814c-0.634-0.551-0.954-1.188-0.954-1.891v-1.209  c0-0.703,0.322-1.34,0.954-1.891c0.619-0.539,1.438-0.812,2.431-0.812c0.964,0,1.75,0.277,2.337,0.82  c0.594,0.551,0.896,1.186,0.896,1.883V42.913z M38.427,24.799c-0.389,0.762-0.886,1.432-1.478,1.994  c-0.581,0.549-1.215,1.044-1.887,1.473c-0.643,0.408-1.248,0.852-1.798,1.315c-0.539,0.455-0.99,0.963-1.343,1.512  c-0.336,0.523-0.507,1.178-0.507,1.943v0.76c0,0.504-0.247,1.031-0.735,1.572c-0.494,0.545-1.155,0.838-1.961,0.871l-0.167,0.004  c-0.818,0-1.484-0.234-1.98-0.699c-0.532-0.496-0.801-1.055-0.801-1.658c0-1.41,0.196-2.611,0.584-3.572  c0.385-0.953,0.86-1.78,1.416-2.459c0.554-0.678,1.178-1.27,1.854-1.762c0.646-0.467,1.242-0.93,1.773-1.371  c0.513-0.428,0.954-0.885,1.312-1.354c0.328-0.435,0.489-0.962,0.489-1.608c0-1.066-0.289-1.83-0.887-2.334  c-0.604-0.512-1.442-0.771-2.487-0.771c-0.696,0-1.294,0.043-1.776,0.129c-0.471,0.083-0.905,0.223-1.294,0.417  c-0.384,0.19-0.745,0.456-1.075,0.786c-0.346,0.346-0.71,0.783-1.084,1.301c-0.336,0.473-0.835,0.83-1.48,1.062  c-0.662,0.239-1.397,0.175-2.164-0.192c-0.689-0.344-1.11-0.793-1.254-1.338c-0.135-0.5-0.135-1.025-0.002-1.557  c0.098-0.453,0.369-1.012,0.83-1.695c0.451-0.67,1.094-1.321,1.912-1.938c0.814-0.614,1.847-1.151,3.064-1.593  c1.227-0.443,2.695-0.668,4.367-0.668c1.648,0,3.078,0.249,4.248,0.742c1.176,0.496,2.137,1.157,2.854,1.967  c0.715,0.809,1.242,1.738,1.568,2.762c0.322,1.014,0.486,2.072,0.486,3.146C39.024,23.075,38.823,24.024,38.427,24.799z')
        aboutSVGpath.setAttribute('fill', fillColor)
        aboutSVG.appendChild(aboutSVGpath) ; aboutSpan.appendChild(aboutSVG) ; ddgptDiv.appendChild(aboutSpan)

        // Create/append speak button
        const speakSpan = document.createElement('span'),
              speakSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        speakSpan.className = 'speak-btn' ; speakSpan.title = messages.tooltip_playAnswer
        speakSpan.style.margin = '-0.085em 14px 0px' // fine-tune position
        speakSVG.setAttributeNS(null, 'width', '22') ; speakSVG.setAttributeNS(null, 'viewBox', '0 0 32 32')
        const speakSVGpaths = [
            { d: 'M24.5,26c2.881,-2.652 4.5,-6.249 4.5,-10c0,-3.751 -1.619,-7.348 -4.5,-10', stroke: fillColor, strokeWidth: '2px' },
            { d: 'M22,20.847c1.281,-1.306 2,-3.077 2,-4.924c0,-1.846 -0.719,-3.617 -2,-4.923', stroke: fillColor, strokeWidth: '2px' },
            { d: 'M9.957,10.88c-0.605,0.625 -1.415,0.98 -2.262,0.991c-4.695,0.022 -4.695,0.322 -4.695,4.129c0,3.806 0,4.105 4.695,4.129c0.846,0.011 1.656,0.366 2.261,0.991c1.045,1.078 2.766,2.856 4.245,4.384c0.474,0.49 1.18,0.631 1.791,0.36c0.611,-0.272 1.008,-0.904 1.008,-1.604c0,-4.585 0,-11.936 0,-16.52c0,-0.7 -0.397,-1.332 -1.008,-1.604c-0.611,-0.271 -1.317,-0.13 -1.791,0.36c-1.479,1.528 -3.2,3.306 -4.244,4.384Z',
              fill: fillColor }
        ]
        speakSVGpaths.forEach(pathData => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
            path.setAttributeNS(null, 'd', pathData.d)
            path.setAttributeNS(null, 'stroke', pathData.stroke || 'none')
            path.setAttributeNS(null, 'stroke-width', pathData.strokeWidth || 'none')
            path.setAttributeNS(null, 'fill', pathData.fill || 'none')
            speakSVG.appendChild(path)
        })
        speakSpan.appendChild(speakSVG) ; ddgptDiv.appendChild(speakSpan)

        // Create/append ChatGPT response
        const balloonTip = document.createElement('span'),
              pre = document.createElement('pre')
        balloonTip.className = 'balloon-tip' ; pre.textContent = answer
        ddgptDiv.appendChild(balloonTip) ; ddgptDiv.appendChild(pre)

        // Create/append reply section/elements
        const replySection = document.createElement('section'),
              form = document.createElement('form'),
              continueChatDiv = document.createElement('div'),
              chatTextarea = document.createElement('textarea')
        continueChatDiv.className = 'continue-chat'
        chatTextarea.id = 'ddgpt-chatbar' ; chatTextarea.rows = '1'
        chatTextarea.placeholder = messages.tooltip_sendReply + '...'
        continueChatDiv.appendChild(chatTextarea)
        form.appendChild(continueChatDiv) ; replySection.appendChild(form)
        ddgptDiv.appendChild(replySection)

        // Create/append send button
        const sendButton = document.createElement('button'),
              sendSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
              sendSVGline = document.createElementNS('http://www.w3.org/2000/svg', 'line'),
              sendSVGpolygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')
        sendButton.className = 'send-button' ; sendButton.title = messages.tooltip_sendReply
        sendSVG.setAttribute('viewBox', '0 0 24 24') ; sendSVG.setAttribute('fill', 'none')
        sendSVG.setAttribute('stroke', 'currentColor') ; sendSVG.setAttribute('stroke-width', '2')
        sendSVG.setAttribute('stroke-linecap', 'round') ; sendSVG.setAttribute('stroke-linejoin', 'round')
        sendSVG.setAttribute('height', '1em') ; sendSVG.setAttribute('width', '1em')
        sendSVGline.setAttribute('x1', '22') ; sendSVGline.setAttribute('y1', '2')
        sendSVGline.setAttribute('x2', '11') ; sendSVGline.setAttribute('y2', '13')
        sendSVGpolygon.setAttribute('points', '22 2 15 22 11 13 2 9 22 2')
        sendSVG.appendChild(sendSVGline) ; sendSVG.appendChild(sendSVGpolygon)
        sendButton.appendChild(sendSVG) ; continueChatDiv.appendChild(sendButton)

        // Render math
        renderMathInElement(ddgptDiv.querySelector('pre'), { // eslint-disable-line no-undef
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true},
                {left: '\\begin{equation}', right: '\\end{equation}', display: true},
                {left: '\\begin{align}', right: '\\end{align}', display: true},
                {left: '\\begin{alignat}', right: '\\end{alignat}', display: true},
                {left: '\\begin{gather}', right: '\\end{gather}', display: true},
                {left: '\\begin{CD}', right: '\\end{CD}', display: true},
                {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError: false
        })

        // Add listeners
        speakSVG.addEventListener('click', () => {
            chatgpt.speak(answer, { voice: 2, pitch: 1, speed: 1.5 })})
        aboutSVG.addEventListener('click', launchAboutModal)
        form.addEventListener('keydown', handleEnter)
        form.addEventListener('submit', handleSubmit)
        chatTextarea.addEventListener('input', autosizeChatbar)

        function handleEnter(event) {
            if (event.key === 'Enter' && !event.shiftKey && event.target.nodeName === 'TEXTAREA')
                handleSubmit(event)
        }

        function handleSubmit(event) {
            event.preventDefault()
            if (convo.length > 2) convo.splice(0, 2) // keep token usage maintainable
            const prevReplyTrimmed = ddgptDiv.querySelector('pre').textContent.substring(0, 250 - chatTextarea.value.length),
                  yourReply = `${ chatTextarea.value } (reply in ${ config.replyLanguage })`
            if (!config.proxyAPIenabled) {
                convo.push({ role: 'assistant', id: chatgpt.uuidv4(), content: { content_type: 'text', parts: [prevReplyTrimmed] } })
                convo.push({ role: 'user', id: chatgpt.uuidv4(), content: { content_type: 'text', parts: [yourReply] } })
            } else {
                convo.push({ role: 'assistant', content: prevReplyTrimmed })
                convo.push({ role: 'user', content: yourReply })
            } getShowReply(convo)

            // Remove re-added listeners
            form.removeEventListener('keydown', handleEnter)
            form.removeEventListener('submit', handleSubmit)
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

            // Show loading status
            const replySection = ddgptDiv.querySelector('section')
            replySection.classList.add('loading')
            replySection.innerHTML = ddgptAlerts.waitingResponse
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
            chatTextarea.style.height = chatTextarea.scrollHeight - vOffset + 'px'
            prevLength = newLength
        }
    }

    async function loadDDGPT() {
        ddgptAlert('waitingResponse')
        const hostContainer = document.querySelector(isCenteredMode() ? '[data-area*="mainline"]' : '[class*="sidebar"]')
        hostContainer.prepend(ddgptDiv, ddgptFooter)
        const query = `${ new URL(location.href).searchParams.get('q') } (reply in ${ config.replyLanguage })`
        convo.push(
            config.proxyAPIenabled ? { role: 'user', content: query }
                                   : { role: 'user', id: chatgpt.uuidv4(),
                                       content: { content_type: 'text', parts: [query] }})
        getShowReply(convo)
    }

    // Define SYNC function

    function updateTweaksStyle() {
        tweaksStyle.innerText = config.fatterSidebar ? fsbStyle : (
            'section[data-area="sidebar"] { flex-basis: 448px ; max-width: 448px } '
          + 'section[data-area="mainline"] { flex-basis: 672px ; max-width: 672px } ')
    }

    // Run MAIN routine

    // Init config/convo/menu
    const config = {
        prefix: 'ddgpt', appSymbol: '🤖', userLanguage: chatgpt.getUserLanguage(),
        gitHubURL: 'https://github.com/kudoai/duckduckgpt',
        greasyForkURL: 'https://greasyfork.org/scripts/459849-duckduckgpt' }
    config.updateURL = config.greasyForkURL + '/code/duckduckgpt.meta.js'
    config.supportURL = config.gitHubURL + '/issues/new'
    config.assetHostURL = config.gitHubURL.replace('github.com', 'raw.githubusercontent.com') + '/main/'
    loadSetting('proxyAPIenabled', 'relatedQueriesDisabled', 'prefixEnabled', 'replyLanguage', 'fatterSidebar', 'suffixEnabled')
    if (!config.replyLanguage) saveSetting('replyLanguage', config.userLanguage) // init reply language if unset
    const convo = []

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
                        if (typeof target[prop] === 'object' && target[prop] !== null && 'message' in target[prop]) {
                            return target[prop].message
                }}}) ; resolve(messages)
            } catch (error) { // if 404
                msgXHRtries++ ; if (msgXHRtries == 3) return // try up to 3X (original/region-stripped/EN) only
                msgHref = config.userLanguage.includes('-') && msgXHRtries == 1 ? // if regional lang on 1st try...
                    msgHref.replace(/(.*)_.*(\/.*)/, '$1$2') // ...strip region before retrying
                        : ( msgHostDir + 'en/messages.json' ) // else use default English messages
                GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
            }
        }
    }) ; const messages = await msgsLoaded

    registerMenu()

    // Exit if prefix/suffix required but not present
    if (( config.prefixEnabled && !/.*q=%2F/.test(document.location) ) || // if prefix required but not present
        ( config.suffixEnabled && !/.*q=.*%3F(&|$)/.test(document.location) )) { // or suffix required but not present
            console.log('ddgpt quittin') ; return }

    // Init endpoints
    const openAIendpoints = {
        session: 'https://chat.openai.com/api/auth/session',
        auth: 'https://auth0.openai.com',
        chat: 'https://chat.openai.com/backend-api/conversation' }
    const proxyEndpoints = [[ 'https://api.aigcfun.com/api/v1/text?key=' + await getAIGCFkey(), '', 'gpt-3.5-turbo' ]]

    // Init alerts
    const ddgptAlerts = {
        waitingResponse: messages.alert_waitingResponse + '...',
        login: messages.alert_login + ' @ ',
        tooManyRequests: messages.alert_tooManyRequests + '. '
            + messages['alert_suggest' + ( config.proxyAPIenabled ? 'OpenAI' : 'Proxy' )],
        parseFailed: messages.alert_parseFailed + '. '
            + messages['alert_suggest' + ( config.proxyAPIenabled ? 'OpenAI' : 'Proxy' )],
        checkCloudflare: messages.alert_checkCloudflare + ' @ ',
        suggestProxy: messages.alert_openAInotWorking + '. ' + messages.alert_suggestProxy,
        suggestOpenAI: messages.alert_proxyNotWorking + '. ' + messages.alert_suggestOpenAI
    }

    // Create DDG style tweaks
    const tweaksStyle = document.createElement('style'),
          fsbStyle = 'section[data-area="sidebar"], section[data-area="mainline"] '
                       + '{ flex-basis: 560px !important ; max-width: 560px !important }'
    updateTweaksStyle() ; document.head.appendChild(tweaksStyle)

    // Stylize elements
    const ddgptStyle = document.createElement('style'),
          scheme = isDarkMode() ? 'dark' : 'light'
    ddgptStyle.innerText = (
        '.ddgpt-container { border-radius: 8px ; border: 1px solid #dadce0 ; padding: 17px 26px 16px ; flex-basis: 0 ;'
            + 'flex-grow: 1 ; word-wrap: break-word ; white-space: pre-wrap ; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.06) ; '
            + ( scheme == 'dark' ? ' border: none ; background: #282828 } ' : ' } ' )
        + '.ddgpt-container p { margin: 0 ; ' + ( scheme == 'dark' ? 'color: #ccc } ' : ' } ' )
        + ( scheme == 'dark' ? '.ddgpt-container a { text-decoration: underline }' : '' ) // underline dark-mode links in alerts
        + '.app-name { font-size: 1.5rem ; font-weight: 700 }'
        + '.app-name a { color: ' + ( scheme == 'dark' ? 'white' : 'inherit' ) + ' ; text-decoration: none }'
        + '.about-btn, .speak-btn { float: right ; cursor: pointer ; position: relative ; top: 4px }'
        + '.ddgpt-container .loading {'
            + 'color: #b6b8ba ; animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite ;'
            + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }'
        + '.ddgpt-container.sidebar-free { margin-left: 60px ; height: fit-content }'
        + '.ddgpt-container pre {'
            + 'font-size: 1.14rem ; white-space: pre-wrap ; margin: .85rem 0 7px 0 ; padding: 1.25em ;'
            + 'border-radius: 10px ; line-height: 21px ; min-width: 0 ;'
            + ( scheme == 'dark' ? 'background: #3a3a3a ; color: #f2f2f2' : '' ) + '}'
        + '@keyframes pulse { 0%, to { opacity: 1 } 50% { opacity: .5 }}'
        + '.ddgpt-container section.loading {'
            + 'padding-left: 5px ;' // left-pad loading status when sending replies
            + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }'
        + '.chatgpt-feedback { margin: 2px 0 25px }'
        + '.balloon-tip { content: "" ; position: relative ; border: 7px solid transparent ;'
            + ( isChromium() ? 'top: 2px ; right: 8.25em ;' : 'top: 0.19em ; right: 16.5em ;' )
            + 'border-bottom-style: solid ; border-bottom-width: 1.19rem ; border-top: 0 ; border-bottom-color: '
            + ( scheme == 'dark' ? '#3a3a3a' : '#eaeaea' ) + ' } '
        + '.continue-chat > textarea {'
            + `border: solid 1px ${ scheme == 'dark' ? '#aaa' : '#638ed4' } ; border-radius: 12px 13px 12px 0 ;`
            + 'height: 1.55rem ; width: 94.6% ; max-height: 200px ;resize: none ; '
            + `margin: 3px 0 15px 0 ; padding: ${ isChromium() ? 11 : 9 }px 10px ${ isChromium() ? 3 : 5 }px 10px ;`
            + 'background: ' + ( scheme == 'dark' ? '#515151' : '#eeeeee70' ) + ' } '
        + '.related-queries {'
            + 'display: flex ; flex-wrap: wrap ; width: 100% ; position: relative ;'
            + ( isChromium() ? 'top: -25px ; margin: -7px 0 -15px' : 'top: -20px ; margin: -3px 0 -10px') + '}'
        + '.related-query {'
            + `margin: 4px 4px ${ scheme == 'dark' ? 7 : 2 }px 0 ; padding: 6px 7px 6px 13px ;`
            + `color: ${ scheme == 'dark' ? '#f2f2f2' : '#767676' } ;`
            + `background: ${ scheme == 'dark' ? '#424242' : '#dadada12' } ;`
            + `border: 1px solid ${ scheme == 'dark' ? '#777' : '#e1e1e1' } ; font-size: 0.98em ; cursor: pointer ;`
            + 'border-radius: 0 13px 12px 13px ; width: fit-content ; flex: 0 0 auto ;'
            + `box-shadow: 1px 3px ${ scheme == 'dark' ? '11px -8px lightgray' : '8px -6px rgba(169,169,169,0.75)' } ;`
            + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }'
        + '.related-query:hover {'
            + `background: #${ scheme == 'dark' ? 'a2a2a270' : 'a2a2a240 ; color: #000000a8' } ; `
            + 'cursor: url("data:image/svg+xml;base64,'
                + ( scheme == 'dark' ? 'PHN2ZyBzdHJva2U9ImxpZ2h0Z3JleSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9ImgtNCB3LTQgbXItMSIgaGVpZ2h0PSIxZW0iIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmUgeDE9IjIyIiB5MT0iMiIgeDI9IjExIiB5Mj0iMTMiPjwvbGluZT48cG9seWdvbiBwb2ludHM9IjIyIDIgMTUgMjIgMTEgMTMgMiA5IDIyIDIiPjwvcG9seWdvbj48L3N2Zz4=' : 'PHN2ZyBzdHJva2U9IiM2MzhlZDQiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJoLTQgdy00IG1yLTEiIGhlaWdodD0iMWVtIiB3aWR0aD0iMWVtIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIyMiIgeTE9IjIiIHgyPSIxMSIgeTI9IjEzIj48L2xpbmU+PHBvbHlnb24gcG9pbnRzPSIyMiAyIDE1IDIyIDExIDEzIDIgOSAyMiAyIj48L3BvbHlnb24+PC9zdmc+')
                + '"), auto }'
        + '.fade-in { opacity: 0 ; transform: translateY(20px) ; transition: opacity 0.5s ease, transform 0.5s ease }'
        + '.fade-in.active { opacity: 1 ; transform: translateY(0) }'
        + '.send-button { border: none ; float: right ;'
            + `position: relative ; bottom: ${ isChromium() ? 49 : 44 }px ; right: ${ isChromium() ? 6 : 8 }px ;`
            + `background: none ; color: ${ scheme == 'dark' ? '#aaa' : 'lightgrey' } ; cursor: pointer }`
        + `.send-button:hover { color: ${ scheme == 'dark' ? 'white' : '#638ed4' } }`
        + '.kudo-ai { position: relative ; left: 6px ; color: #aaa } '
        + '.kudo-ai a, .kudo-ai a:visited { color: #aaa ; text-decoration: none } '
        + '.kudo-ai a:hover { color: ' + ( scheme == 'dark' ? 'white' : 'black' ) + ' ; text-decoration: none } '
        + '.katex-html { display: none } ' // hide unrendered math
        + ( scheme == 'dark' ? '.chatgpt-modal > div { background-color: black !important ; color: white }' : '' )
        + '.chatgpt-modal > div { padding: 20px 25px 24px 25px !important }' // increase alert padding
        + '.chatgpt-modal h2 { margin: 0 ; padding: 0 }' // shrink margin/padding around alert titles
        + '.chatgpt-modal p { margin: -8px 0 -9px 4px ; font-size: 1.55rem }' // position/size update alert msg
        + '.chatgpt-modal button {' // alert buttons
            + 'padding: 7px !important ; cursor: pointer ; border-radius: 0 !important ;'
            + 'font-size: 1rem ; text-transform: uppercase ; min-width: 121px ;'
            + 'border: 1px solid ' + ( scheme == 'dark' ? 'white' : 'black' ) + '!important ;'
            + ( scheme == 'dark' ? 'background: none ; color: white' : '') + '}'
        + '.modal-buttons { margin: 20px -5px -3px -15px !important }' // position alert buttons
    )
    document.head.appendChild(ddgptStyle) // append style to <head>

    // Create DDGPT container & add class
    const ddgptDiv = document.createElement('div') // create container div
    ddgptDiv.className = 'ddgpt-container'

    // Create feedback footer & add classes/HTML
    const ddgptFooter = document.createElement('div')
    ddgptFooter.className = 'feedback-prompt chatgpt-feedback'
    ddgptFooter.innerHTML = '<a href="https://github.ddgpt.com/discussions/new/choose"'
        + ' class="feedback-prompt__link" target="_blank" rel="noopener">' + messages.link_shareFeedback +'</a>'

    // Activate promo campaign if active
    GM.xmlHttpRequest({
        method: 'GET', url: config.assetHostURL + 'ads/live/creative.html',
        onload: response => { if (response.status == 200) {

            // Create campaign div & add class/style/HTML
            const pcDiv = document.createElement('div')
            pcDiv.className = 'ddgpt-container'
            pcDiv.style.display = 'flex'
            pcDiv.innerHTML = response.responseText

            // Create feedback footer & add classes/HTML
            const pcFooter = document.createElement('div')
            pcFooter.className = 'feedback-prompt chatgpt-feedback'
            pcFooter.innerHTML = '<a href="https://github.ddgpt.com/discussions/new/choose" class="feedback-prompt__link" target="_blank" rel="noopener">' + messages.link_shareFeedback +'</a>'

            // Inject in sidebar
            ddgptFooter.insertAdjacentElement('afterend', pcDiv)
            pcDiv.insertAdjacentElement('afterend', pcFooter)
    }}})

    loadDDGPT()

})()
