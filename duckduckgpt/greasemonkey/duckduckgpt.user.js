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
// @version             2023.11.5.3
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
// @require             https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@3817f0a0163280b9bf3a32b96bbe6183555830ed/dist/chatgpt-2.3.15.min.js
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

                alert(`${ messages.alert_upToDate }!`, // title
                        `DuckDuckGPT (v${ currentVer }) ${ messages.alert_isUpToDate }!`) // msg
    }})}

    // Define MENU functions

    function getUserscriptManager() { try { return GM_info.scriptHandler } catch (error) { return 'other' }}

    function registerMenu() {
        const menuIDs = [] // to store registered commands for removal while preserving order
        const state = {
            symbol: ['✔️', '❌'], word: ['ON', 'OFF'],
            separator: getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': ' }

        // Add command to toggle proxy API mode
        const pamLabel = state.symbol[+!config.proxyAPIenabled]
                       + ' ' + messages.menuLabel_proxyAPImode + ' '
                       + state.separator + state.word[+!config.proxyAPIenabled]
        menuIDs.push(GM_registerMenuCommand(pamLabel, function() {
            saveSetting('proxyAPIenabled', !config.proxyAPIenabled)
            notify(messages.menuLabel_proxyAPImode + ' ' + state.word[+!config.proxyAPIenabled])
            for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() // refresh menu
            location.reload() // re-send query using new endpoint
        }))

        // Add command to toggle prefix mode
        const pmLabel = state.symbol[+!config.prefixEnabled] + ' '
                      + messages.menuLabel_require + ' "/" '
                      + messages.menuLabel_beforeQuery + ' '
                      + state.separator + state.word[+!config.prefixEnabled]
        menuIDs.push(GM_registerMenuCommand(pmLabel, function() {
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
        menuIDs.push(GM_registerMenuCommand(smLabel, function() {
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
        menuIDs.push(GM_registerMenuCommand(aboutLabel, async () => {

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
                                  'https://alternativeto.net/software/duckduckgpt/about/') }])
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
                else button.style.display = 'none' // hide Dismiss button
            }
        }))
    }

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

    async function getShowReply(convo, callback) {

        // Initialize attempt properties
        if (!getShowReply.triedEndpoints) getShowReply.triedEndpoints = []
        if (!getShowReply.attemptCnt) getShowReply.attemptCnt = 0

        // Get answer from ChatGPT
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
        ddgptDiv.innerHTML = '<p><span class="prefix">🤖  <a href="https://duckduckgpt.com" target="_blank" rel="noopener">DuckDuckGPT</a></span><span class="kudo-ai">by <a target="_blank" href="https://github.com/kudoai" rel="noopener">KudoAI</a></span><span class="balloon-tip"></span><pre></pre></p><div></div><section><form><div class="continue-chat"><textarea id="ddgpt-chatbar" rows="1" placeholder="Send reply..."></textarea></div></form></section>'
        ddgptDiv.querySelector('pre').textContent = answer

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

        // Init variables for listeners
        const form = ddgptDiv.querySelector('form'),
              chatbar = document.getElementById('ddgpt-chatbar'),
              { paddingTop, paddingBottom } = getComputedStyle(chatbar),
              vOffset = parseInt(paddingTop, 10) + parseInt(paddingBottom, 10)
        let prevLength = chatbar.value.length

        // Add listeners
        form.addEventListener('keydown', handleEnter)
        chatbar.addEventListener('input', autosizeChatbar)

        function handleEnter(event) {
            if (event.key === 'Enter' && !event.shiftKey && event.target.nodeName === 'TEXTAREA')
                handleSubmit(event)
        }

        function handleSubmit(event) {
            event.preventDefault()
            if (convo.length > 2) convo.splice(0, 2) // keep token usage maintainable
            const prevReplyTrimmed = ddgptDiv.querySelector('pre').textContent.substring(0, 250 - chatbar.value.length),
                  yourReply = `${ chatbar.value } (reply in ${ config.replyLanguage })`
            if (!config.proxyAPIenabled) {
                convo.push({ role: 'assistant', id: chatgpt.uuidv4(), content: { content_type: 'text', parts: [prevReplyTrimmed] } })
                convo.push({ role: 'user', id: chatgpt.uuidv4(), content: { content_type: 'text', parts: [yourReply] } })
            } else {
                convo.push({ role: 'assistant', content: prevReplyTrimmed })
                convo.push({ role: 'user', content: yourReply })
            } getShowReply(convo)

            // Remove listeners since they're re-added
            chatbar.removeEventListener('input', autosizeChatbar)
            chatbar.removeEventListener('keydown', handleEnter)

            // Show loading status
            const replySection = ddgptDiv.querySelector('section')
            replySection.classList.add('loading')
            replySection.innerHTML = ddgptAlerts.waitingResponse
        }

        function autosizeChatbar() {
            const newLength = chatbar.value.length
            if (newLength < prevLength) { // if deleting txt
                chatbar.style.height = 'auto' // ...auto-fit height
                if (parseInt(getComputedStyle(chatbar).height) < 35) { // if down to one line
                    chatbar.style.height = '1.55rem' } // ...reset to original height
            }
            chatbar.style.height = chatbar.scrollHeight - vOffset + 'px'
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
    loadSetting('proxyAPIenabled', 'prefixEnabled', 'replyLanguage', 'fatterSidebar', 'suffixEnabled')
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
    const ddgptStyle = document.createElement('style')
    ddgptStyle.innerText = (
        '.ddgpt-container { border-radius: 8px ; border: 1px solid #dadce0 ; padding: 16px 26px ; flex-basis: 0 ;'
            + 'flex-grow: 1 ; word-wrap: break-word ; white-space: pre-wrap ; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.06) ; '
            + ( isDarkMode() ? ' border: none ; background: #282828 } ' : ' } ' )
        + '.ddgpt-container p { margin: 0 ; ' + ( isDarkMode() ? 'color: #ccc } ' : ' } ' )
        + ( isDarkMode() ? '.ddgpt-container a { text-decoration: underline }' : '' ) // underline dark-mode links in alerts
        + '.ddgpt-container .prefix { font-size: 1.5rem ; font-weight: 700 }'
        + '.ddgpt-container .prefix > a { color: ' + ( isDarkMode() ? 'white' : 'inherit' ) + ' ; text-decoration: none }'
        + '.ddgpt-container .loading {'
            + 'color: #b6b8ba ; animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite ;'
            + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }'
        + '.ddgpt-container.sidebar-free { margin-left: 60px ; height: fit-content }'
        + '.ddgpt-container pre { font-size: 1.14rem ; white-space: pre-wrap ; min-width: 0 ; margin: 12px 0 0 0 ; line-height: 21px ; padding: 1.25em ; border-radius: 10px ; '
            + ( isDarkMode() ? 'background: #3a3a3a ; color: #f2f2f2 } ' : ' } ' )
        + '@keyframes pulse { 0%, to { opacity: 1 } 50% { opacity: .5 }}'
        + '.ddgpt-container section.loading {'
            + 'padding-left: 5px ;' // left-pad loading status when sending replies
            + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }'
        + '.chatgpt-feedback { margin: 2px 0 25px }'
        + '.balloon-tip { content: "" ; position: relative ; top: 5px ; right: 16.5em ; border: 7px solid transparent ;'
            + 'border-bottom-style: solid ; border-bottom-width: 1.19rem ; border-top: 0 ; border-bottom-color: '
            + ( isDarkMode() ? '#3a3a3a' : '#eaeaea' ) + ' } '
        + '.continue-chat > textarea {'
            + 'border: none ; border-radius: 12px 13px 12px 0 ; '
            + 'height: 1.55rem ; width: 97.6% ; max-height: 200px ;resize: none ; '
            + 'margin: 3px 0 15px 0 ; padding: 9px 0 5px 10px ; '
            + 'background: ' + ( isDarkMode() ? '#515151' : '#eeeeee70' ) + ' } '
        + '.kudo-ai { position: relative ; left: 6px ; color: #aaa } '
        + '.kudo-ai a, .kudo-ai a:visited { color: #aaa ; text-decoration: none } '
        + '.kudo-ai a:hover { color: ' + ( isDarkMode() ? 'white' : 'black' ) + ' ; text-decoration: none } '
        + '.katex-html { display: none } ' // hide unrendered math
        + ( isDarkMode() ? '.chatgpt-modal > div { background-color: black !important ; color: white }' : '' )
        + '.chatgpt-modal h2 { margin: 0 ; padding: 0 } ' // shrink margin/padding around update alert title
        + '.chatgpt-modal p { margin: -8px 0 -9px 4px ; font-size: 1.55rem } ' // position/size update alert msg
        + '.chatgpt-modal button { ' // chatgpt.alert() buttons
            + 'padding: 7px !important ; cursor: pointer ; border-radius: 0 !important ;'
            + 'font-size: 1rem ; text-transform: uppercase ; min-width: 121px ;'
            + 'border: 1px solid ' + ( isDarkMode() ? 'white' : 'black' ) + '!important ;'
            + ( isDarkMode() ? 'background: none ; color: white' : '') + '}'
        + '.modal-buttons { margin: 20px -5px -3px -12px !important }' // position modal buttons
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
