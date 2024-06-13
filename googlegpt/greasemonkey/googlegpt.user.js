// ==UserScript==
// @name                GoogleGPT 🤖
// @name:zh-CN          GoogleGPT 🤖
// @description         Adds AI answers to Google Search (powered by Google Gemma + GPT-4o!)
// @description:af      Voeg KI-antwoorde by Google Soek (aangedryf deur Google Gemma + GPT-4o!) toe
// @description:am      የAI መልስናወርቃለች እርስዎን Google ፍለጋ እርስዎን በተወሰኑ ገጽታዎች (ተከፋይ Google Gemma + GPT-4o!) ጨምሮ
// @description:ar      يضيف إجابات الذكاء الاصطناعي إلى بحث Google (مدعوم بواسطة Google Gemma + GPT-4o!)
// @description:az      Google Axtarışa AI cavabları əlavə edir (Google Gemma + GPT-4o ilə işləyir!)
// @description:be      Дадае адказы штучнага інтэлекту ў пошук Google (на базе Google Gemma + GPT-4o!)
// @description:bem     Yamfumano AI mafundo pa Google Search (eko wakuleta na Google Gemma + GPT-4o!)
// @description:bg      Добавя AI отговори към Google Търсене (осигурено от Google Gemma + GPT-4o!)
// @description:bn      Google অনুসন্ধানে AI উত্তর যোগ করে (Google Gemma + GPT-4o দ্বারা চালিত!)
// @description:bo      གི་དྲུག་བཏུས་བྱས་ཀྱི་འཕྲུལ་ཆས་དང་ (Google Gemma + GPT-4o!) སྤྱི་ཚོགས་བརྡ་འདེབས་བསྒྲགས་པ།
// @description:bs      Dodaje AI odgovore u Google pretragu (pokreće Google Gemma + GPT-4o!)
// @description:ca      Afegeix respostes d'IA a la Cerca de Google (amb la tecnologia de Google Gemma + GPT-4o!)
// @description:ceb     Nagdugang mga tubag sa AI sa Google Search (gipadagan sa Google Gemma + GPT-4o!)
// @description:cs      Přidává odpovědi AI do Vyhledávání Google (využívá technologii Google Gemma + GPT-4o!)
// @description:cy      Yn ychwanegu atebion AI i Google Search (wedi'u pweru gan Google Gemma + GPT-4o!)
// @description:da      Tilføjer AI-svar til Google Søgning (drevet af Google Gemma + GPT-4o!)
// @description:de      Fügt der Google-Suche KI-Antworten hinzu (unterstützt von Google Gemma + GPT-4o!)
// @description:dv      ގޫގުލް ސަރޗަށް އެއައި ޖަވާބުތައް އިތުރުކުރެއެވެ (ގޫގުލް ޖެމާ +ޖީޕީޓީ-4އޯ އިން ޕަވަރޑް!)
// @description:dz      གི་དྲུག་བཏུས་བྱས་ཀྱི་འཕྲུལ་ཆས་དང་ (Google Gemma + GPT-4o!) སྤྱི་ཚོགས་བརྡ་འདེབས་བསྒྲགས་པ།
// @description:el      Προσθέτει απαντήσεις AI στην Αναζήτηση Google (τροφοδοτείται από το Google Gemma + GPT-4o!)
// @description:eo      Aldonas AI-respondojn al Google Search (funkciigita de Google Gemma + GPT-4o!)
// @description:es      Agrega respuestas de IA a la Búsqueda de Google (¡con tecnología de Google Gemma + GPT-4o!)
// @description:et      Lisab AI vastused Google'i otsingusse (toiteallikaks Google Gemma + GPT-4o!)
// @description:eu      AI erantzunak gehitzen ditu Google Bilaketa-n (Google Gemma + GPT-4o-k bultzatuta!)
// @description:fa      پاسخهای هوش مصنوعی را به جستجوی Google اضافه میکند (با Google Gemma + GPT-4o!)
// @description:fi      Lisää AI-vastauksia Google-hakuun (Google Gemma + GPT-4o!)
// @description:fil     Nagdaragdag ng mga sagot sa AI sa Google Search (pinapatakbo ng Google Gemma + GPT-4o!)
// @description:fj      Vakatotolo kina na ivakatakilakila AI ki na Google Search (sa rawa ni tukuna e Google Gemma + GPT-4o!)
// @description:fo      Lætur AI svar til Google Leit (reka av Google Gemma + GPT-4o!)
// @description:fr      Ajoute des réponses IA à la recherche Google (propulsé par Google Gemma + GPT-4o!)
// @description:fr-CA   Ajoute des réponses IA à la recherche Google (propulsé par Google Gemma + GPT-4o!)
// @description:gd      A’ cur freagairtean AI ri Rannsachadh Ghoogle (le cumhachd bho Google Gemma + GPT-4o!)
// @description:gl      Engade respostas de intelixencia artificial á Busca de Google (con tecnoloxía Google Gemma + GPT-4o!)
// @description:gn      Ombojoapy AI ñembohovái Google Jeporeka-pe (omombaretéva Google Gemma + GPT-4o!)
// @description:gu      Google શોધમાં AI જવાબો ઉમેરે છે (Google Gemma + GPT-4o દ્વારા સંચાલિત!)
// @description:ha      Yana ƙara amsoshin AI ga Binciken Google (Google Gemma + GPT-4o ne ke ƙarfafa shi!)
// @description:haw     Hoʻohui i nā pane AI i ka Huli Google (hoʻohana ʻia e Google Gemma + GPT-4o!)
// @description:he      מוסיף תשובות בינה מלאכותית לחיפוש Google (מופעל על ידי Google Gemma + GPT-4o!)
// @description:hi      गूगल सर्च में AI उत्तर जोड़े गए (गूगल जेम्मा + GPT-4o द्वारा संचालित!)
// @description:hr      Dodaje AI odgovore u Google pretraživanje (pokreće Google Gemma + GPT-4o!)
// @description:ht      Ajoute repons AI nan Google Search (ki mache ak Google Gemma + GPT-4o!)
// @description:hu      AI-válaszokat ad a Google Kereséshez (a Google Gemma + GPT-4o által üzemeltetett!)
// @description:hy      Ավելացնում է AI-ի պատասխանները Google Search-ին (գործում է Google Gemma + GPT-4o!)
// @description:id      Menambahkan jawaban AI ke Google Penelusuran (didukung oleh Google Gemma + GPT-4o!)
// @description:ig      Na-agbakwụnye azịza AI na Ọchụchọ Google (Google Gemma + GPT-4o kwadoro!)
// @description:is      Bætir gervigreind svörum við Google leit (knúið af Google Gemma + GPT-4o!)
// @description:it      Aggiunge risposte AI alla Ricerca Google (con tecnologia Google Gemma + GPT-4o!)
// @description:ja      Google 検索に AI 回答を追加します (Google Gemma + GPT-4o を搭載)
// @description:jv      Nambahake jawaban AI menyang Google Search (powered by Google Gemma + GPT-4o!)
// @description:ka      ამატებს AI პასუხებს Google Search-ში (გამშვები Google Gemma + GPT-4o!)
// @description:kg      Kozala AI mpenza na Google Search (nasala malamu na Google Gemma + GPT-4o!)
// @description:kk      Google Search қызметіне AI жауаптарын қосады (Google Gemma + GPT-4o арқылы жұмыс істейді!)
// @description:kl      Google-imut imartaasut pingaaruteqaraluartoq (Google Gemma + GPT-4o!-imut pingaaruteqarlugu)
// @description:km      បន្ថែមចម្លើយ AI ទៅ Google Search (ដំណើរការដោយ Google Gemma + GPT-4o!)
// @description:kn      Google ಹುಡುಕಾಟಕ್ಕೆ AI ಉತ್ತರಗಳನ್ನು ಸೇರಿಸುತ್ತದೆ (Google Gemma + GPT-4o ನಿಂದ ನಡೆಸಲ್ಪಡುತ್ತಿದೆ!)
// @description:ko      Google 검색에 AI 답변 추가(Google Gemma + GPT-4o!)
// @description:kok     Google Search कडेन AI जापो जोडटा (Google Gemma + GPT-4o कडल्यान चालीत!)
// @description:kr      Yi AI jawo cikin Google Search (powered da Google Gemma + GPT-4o!)
// @description:ks      Google Search تەز ئی ئای وعدەی (Google Gemma + GPT-4o! دوہ ئی جوڑ دەچ )
// @description:ku      Bersivên AI-ê li Lêgerîna Google-ê zêde dike (ji hêla Google Gemma + GPT-4o ve hatî hêz kirin!)
// @description:ky      Google издөөдө AI жооптарды кошуп чыгарат (Google Gemma + GPT-4o! орденелген)
// @description:la      Addit AI responsa inquisitionis Google (potestas a Google Gemma + GPT-4o!)
// @description:lb      Füügt AI Äntwerten op Google Sich (ugedriwwen vu Google Gemma + GPT-4o!)
// @description:lg      Enkuba za Google Search (ezimbudde mu Google Gemma + GPT-4o!)
// @description:ln      Ebakisi biyano ya AI na Google Search (ezali na nguya ya Google Gemma + GPT-4o!)
// @description:lo      ເພີ່ມຄໍາຕອບ AI ໃສ່ Google Search (ຂັບເຄື່ອນໂດຍ Google Gemma + GPT-4o!)
// @description:lt      Prideda AI atsakymus į Google paiešką (parengiama naudojant Google Gemma + GPT-4o!)
// @description:lv      Pievieno AI atbildes Google meklēšanai (nodrošina Google Gemma + GPT-4o!)
// @description:mg      Manampy valiny AI amin'ny Fikarohana Google (navoakan'ny Google Gemma + GPT-4o!)
// @description:mh      Eo an Google Search AI (e ko ilo Google Gemma + GPT-4o!)
// @description:mi      Ka taapirihia nga whakautu AI ki te Rapu a Google (whakamanahia e Google Gemma + GPT-4o!)
// @description:mk      Додава одговори со вештачка интелигенција во Пребарување на Google (напојувано од Google Gemma + GPT-4o!)
// @description:ml      Google തിരയലിലേക്ക് AI ഉത്തരങ്ങൾ ചേർക്കുന്നു (Google Gemma + GPT-4o നൽകുന്നതാണ്!)
// @description:mn      Google Хайлтад хиймэл оюун ухааны хариултуудыг нэмдэг (Google Gemma + GPT-4o!)
// @description:mr      Google शोध मध्ये AI उत्तरे जोडते (Google Gemma + GPT-4o द्वारे समर्थित!)
// @description:ms      Menambahkan jawapan AI pada Carian Google (dikuasakan oleh Google Gemma + GPT-4o!)
// @description:mt      Iżżid it-tweġibiet tal-AI ma' Google Search (mħaddma minn Google Gemma + GPT-4o!)
// @description:my      Google Search သို့ AI အဖြေများကို ပေါင်းထည့်သည် (Google Gemma + GPT-4o!)
// @description:na      E AI naba Nauru Google Search (aimen Google Gemma + GPT-4o!)
// @description:nb      Legger til AI-svar til Google Søk (drevet av Google Gemma + GPT-4o!)
// @description:nd      Izixhumanisi zika AI ku-Google Search (kuthelekiswa ngu-Google Gemma + GPT-4o!)
// @description:ne      Google खोजमा AI जवाफहरू थप्छ (Google Gemma + GPT-4o द्वारा संचालित!)
// @description:ng      Okulonga AI pa Google Search (ombinga mbo Google Gemma + GPT-4o!)
// @description:nl      Voegt AI-antwoorden toe aan Google Zoeken (mogelijk gemaakt door Google Gemma + GPT-4o!)
// @description:nn      Legg til AI-svar i Google-søk (drivkraft frå Google Gemma + GPT-4o!)
// @description:no      Legger til AI-svar til Google Søk (drevet av Google Gemma + GPT-4o!)
// @description:nso     Bolela le marwala a AI ka Google Search (ka beke e be e fetolang Google Gemma + GPT-4o!)
// @description:ny      Imawonjezera mayankho a AI ku Google Search (yoyendetsedwa ndi Google Gemma + GPT-4o!)
// @description:oc      Ajuda de respostas d'IA a la Recèrca Google (impulsat per Google Gemma + GPT-4o!)
// @description:om      Deebii AI Google Search irratti dabalata (Google Gemma + GPT-4o tiin kan hojjetamu!)
// @description:or      ଗୁଗୁଲ୍ ସନ୍ଧାନରେ AI ଉତ୍ତର ଯୋଗ କରେ (ଗୁଗୁଲ୍ ଜେମା + GPT-4o ଦ୍ୱାରା ଚାଳିତ!)
// @description:pa      Google ਖੋਜ ਵਿੱਚ AI ਜਵਾਬ ਜੋੜਦਾ ਹੈ (Google Gemma + GPT-4o ਦੁਆਰਾ ਸੰਚਾਲਿਤ!)
// @description:pl      Dodaje odpowiedzi AI do wyszukiwarki Google (obsługiwane przez Google Gemma + GPT-4o!)
// @description:ps      AI جوابونه د Google Search کې اضافه کړې (پاښې کښې د Google Gemma + GPT-4o! پر ورکړل شوی)
// @description:pt      Adiciona respostas de IA à Pesquisa Google (desenvolvido por Google Gemma + GPT-4o!)
// @description:pt-BR   Adiciona respostas de IA à Pesquisa Google (desenvolvido por Google Gemma + GPT-4o!)
// @description:qu      AI kutichiykunata Google Maskanaman yapan (Google Gemma + GPT-4o kaqwan kallpachasqa!)
// @description:rm      Agionta las repartizions da l'IA a la Raisch da Google (alimentà da Google Gemma + GPT-4o!)
// @description:rn      Kujojora amatangazo ya AI muri Google Search (yibumosoje na Google Gemma + GPT-4o!)
// @description:ro      Adaugă răspunsuri AI la Căutarea Google (produs de Google Gemma + GPT-4o!)
// @description:ru      Добавляет ответы ИИ в поиск Google (на базе Google Gemma + GPT-4o!)
// @description:rw      Ongeraho ibisubizo bya AI kubushakashatsi bwa Google (bikoreshwa na Google Gemma + GPT-4o!)
// @description:sa      Google Search इत्यत्र AI उत्तराणि योजयति (Google Gemma + GPT-4o द्वारा संचालितम्!)
// @description:sat     Google Search ᱡᱟᱢᱟᱨᱤ AI ᱠᱷᱟᱹᱨᱩᱣᱟᱨ ᱨᱮᱰ Google Gemma + GPT-4o! (ᱡᱤ ᱠᱟᱹᱫᱽᱨᱟᱡᱟᱨ)
// @description:sc      Agiunta is rispostas de IA a sa Cèrca de Google (moteada dae Google Gemma + GPT-4o!)
// @description:sd      AI جوابن کي گوگل سرچ ۾ شامل ڪري ٿو (گوگل گيما + GPT-4o پاران طاقتور!)
// @description:se      Čuoŋománu AI vástidat Google Čoahkkimis (ráđđi Google Gemma + GPT-4o!)
// @description:sg      Ko tî Google Search (yî mazângâkâzâ aye Google Gemma + GPT-4o!)
// @description:si      Google සෙවීමට AI පිළිතුරු එක් කරයි (Google Gemma + GPT-4o මගින් බලගන්වයි!)
// @description:sk      Pridáva odpovede AI do Vyhľadávania Google (využíva Google Gemma + GPT-4o!)
// @description:sl      Iskanju Google doda odgovore AI (poganja Google Gemma + GPT-4o!)
// @description:sm      Fa'aopoopo tali AI ile Su'esu'ega Google (fa'aola e Google Gemma + GPT-4o!)
// @description:sn      Inowedzera mhinduro dzeAI kuGoogle Search (inofambiswa neGoogle Gemma + GPT-4o!)
// @description:so      Waxay ku daraa jawaabaha AI raadinta Google (waxaa ku shaqeeya Google Gemma + GPT-4o!)
// @description:sq      Shton përgjigjet e AI në Google Search (mundësuar nga Google Gemma + GPT-4o!)
// @description:sr      Додаје АИ одговоре у Гоогле претрагу (покреће Гоогле Гемма + ГПТ-4о!)
// @description:ss      Sicubungisa imiphumela ye-AI kwi-Google Search (ikhethe lihamba yi-Google Gemma + GPT-4o!)
// @description:st      E eketsa likarabo tsa AI ho Google Search (e tsamaisoang ke Google Gemma + GPT-4o!)
// @description:su      Nambahkeun jawaban AI kana Google Search (Powered by Google Gemma + GPT-4o!)
// @description:sv      Lägger till AI-svar till Google Sök (driven av Google Gemma + GPT-4o!)
// @description:sw      Huongeza majibu ya AI kwa Tafuta na Google (inayoendeshwa na Google Gemma + GPT-4o!)
// @description:ta      Google தேடலில் AI பதில்களைச் சேர்க்கிறது (Google Gemma + GPT-4o மூலம் இயக்கப்படுகிறது!)
// @description:te      Google శోధనకు AI సమాధానాలను జోడిస్తుంది (Google Gemma + GPT-4o ద్వారా ఆధారితం!)
// @description:tg      Ба Ҷустуҷӯи Google ҷавобҳои AI илова мекунад (аз ҷониби Google Gemma + GPT-4o!)
// @description:th      เพิ่มคำตอบ AI ให้กับ Google Search (ขับเคลื่อนโดย Google Gemma + GPT-4o!)
// @description:ti      ኣብ Google Search (ብ Google Gemma + GPT-4o ዝሰርሕ!) ናይ AI መልስታት ይውስኽ
// @description:tk      Google Gözlegine AI jogaplaryny goşýar (Google Gemma + GPT-4o bilen işleýär!)
// @description:tl      Idinagdag ang mga sagot ng AI sa Google Search (pinaandar ng Google Gemma + GPT-4o!)
// @description:tn      Go dirwa ditlhopho tsa AI mo Google Search (lebelotse ke Google Gemma + GPT-4o!)
// @description:to      Kuo hiki 'e he Fakamaau 'a e AI ki he Ngaahi fakafiefia 'o e Google (tokoni 'e he Google Gemma + GPT-4o!)
// @description:tr      Google Arama'ya yapay zeka yanıtları ekler (Google Gemma + GPT-4o tarafından desteklenir!)
// @description:ts      Ku engetela tinhlamulo ta AI eka Google Search (leyi fambiwaka hi Google Gemma + GPT-4o!)
// @description:tt      Google Search'ка AI җаваплары өсти (Google Gemma + GPT-4o белән эшләнгән!)
// @description:tw      Ɔde AI mmuae ka Google Search ho (a Google Gemma + GPT-4o na ɛma ahoɔden!)
// @description:ug      گۇگۇل ئىزدەشكە سۈنئىي ئەقىل جاۋابلىرىنى قوشىدۇ (Google Gemma + GPT-4o!)
// @description:uk      Додає відповіді штучного інтелекту до Пошуку Google (на основі Google Gemma + GPT-4o!)
// @description:ur      Google تلاش میں AI جوابات شامل کرتا ہے (Google Gemma + GPT-4o کے ذریعے تقویت یافتہ!)
// @description:uz      Google Qidiruvga AI javoblarini qo'shadi (Google Gemma + GPT-4o tomonidan quvvatlanadi!)
// @description:ve      Vhulangwa ha mavhuso a AI kha Google Search (vho tshiwanaho nga Google Gemma + GPT-4o!)
// @description:vi      Thêm câu trả lời AI vào Google Tìm kiếm (được cung cấp bởi Google Gemma + GPT-4o!)
// @description:vo      Jepolö AI smüds ob Google Zif (kaukipölö vedönöfik Google Gemma + GPT-4o!)
// @description:wa      Adjon des reponses d'IA a l'echetchinge Googel (mouvé pa Googel Gemma + GPT-4o!)
// @description:wo      Am nañu bëggeeku AI yu jàng ci Google Search (ñu wecc nit Google Gemma + GPT-4o!)
// @description:xh      Yongeza iimpendulo ze-AI kuPhendlo lukaGoogle (ixhaswe yiGoogle Gemma + GPT-4o!)
// @description:yi      מוסיף אַי ענטפֿערס צו Google זוך (פּאַוערד דורך Google Gemma + GPT-4o!)
// @description:yo      Ṣafikun awọn idahun AI si Wiwa Google (agbara nipasẹ Google Gemma + GPT-4o!)
// @description:za      Gwngh gvmjcoengh jaedzhaengz mav Mvaenz Googel (enghdaengz Gvmjcoengh Gemma + GPT-4o!)
// @description:zh      为 Google 搜索添加 AI 答案（由 Google Gemma + GPT-4o 提供支持！）
// @description:zh-CN   为 Google 搜索添加 AI 答案（由 Google Gemma + GPT-4o 提供支持！）
// @description:zh-HK   將 AI 答案新增至 Google 搜尋（由 Google Gemma + GPT-4o 提供支援！）
// @description:zh-SG   为 Google 搜索添加 AI 答案（由 Google Gemma + GPT-4o 提供支持！）
// @description:zh-TW   將 AI 答案新增至 Google 搜尋（由 Google Gemma + GPT-4o 提供支援！）
// @description:zu      Yengeza izimpendulo ze-AI ku-Google Search (inikwa amandla yi-Google Gemma + GPT-4o!)
// @author              KudoAI
// @namespace           https://kudoai.com
// @version             2024.6.12.9
// @license             MIT
// @icon                https://media.googlegpt.io/images/icons/googlegpt/black/icon48.png?8652a6e
// @icon64              https://media.googlegpt.io/images/icons/googlegpt/black/icon64.png?8652a6e
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          safari
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          waterfox
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @compatible          whale
// @compatible          kiwi
// @compatible          orion
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
// @connect             binjie.fun
// @connect             chatgpt.com
// @connect             gptforlove.com
// @connect             greasyfork.org
// @connect             jsdelivr.net
// @connect             mixerbox.com
// @connect             openai.com
// @connect             sogou.com
// @require             https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@2.9.3/dist/chatgpt.min.js#sha256-EDN+mCc+0Y4YVzJEoNikd4/rAIaJDLAdb+erWvupXTM=
// @require             https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js#sha256-dppVXeVTurw1ozOPNE3XqhYmDJPOosfbKQcHyQSE58w=
// @require             https://cdn.jsdelivr.net/npm/generate-ip@2.4.2/dist/generate-ip.min.js#sha256-PRvQIDVWK/a+aAqEFVQv7RePbRe/tX6tWQVM80rAe2M=
// @require             https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js#sha256-g3pvpbDHNrUrveKythkPMF2j/J7UFoHbUyFQcFe1yEY=
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js#sha256-n0UwfFeU7SR6DQlfOmLlLvIhWmeyMnIDp/2RmVmuedE=
// @require             https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js#sha256-e1fUJ6xicGd9r42DgN7SzHMzb5FJoWe44f4NbvZmBK4=
// @require             https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js#sha256-Ffq85bZYmLMrA/XtJen4kacprUwNbYdxEKd0SqhHqJQ=
// @resource hljsCSS    https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/dark.min.css#sha256-v0N76BFFkH0dCB8bUr4cHSVN8A/zCaOopMuSmJWV/5w=
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_deleteValue
// @grant               GM_cookie
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM_openInTab
// @grant               GM_getResourceText
// @grant               GM.xmlHttpRequest
// @noframes
// @downloadURL         https://update.greasyfork.org/scripts/478597/googlegpt.user.js
// @updateURL           https://update.greasyfork.org/scripts/478597/googlegpt.meta.js
// @homepageURL         https://www.googlegpt.io
// @supportURL          https://support.googlegpt.io
// ==/UserScript==

// NOTE: This script relies on the powerful chatgpt.js library @ https://chatgpt.js.org (c) 2023–2024 KudoAI & contributors under the MIT license
// ..and KaTeX, the fastest math typesetting library @ https://katex.org (c) 2013–2020 Khan Academy & contributors under the MIT license

(async () => {

    // Init CONFIG
    const config = {
        appName: 'GoogleGPT', appSymbol: '🤖', keyPrefix: 'googleGPT',
        appURL: 'https://www.googlegpt.io', gitHubURL: 'https://github.com/KudoAI/googlegpt',
        greasyForkURL: 'https://greasyfork.org/scripts/478597-googlegpt' }
    config.updateURL = config.greasyForkURL.replace('https://', 'https://update.')
        .replace(/(\d+)-?([a-zA-Z-]*)$/, (_, id, name) => `${ id }/${ !name ? 'script' : name }.meta.js`)
    config.supportURL = config.gitHubURL + '/issues/new'
    config.feedbackURL = config.gitHubURL + '/discussions/new/choose'
    config.assetHostURL = config.gitHubURL.replace('github.com', 'cdn.jsdelivr.net/gh') + '@698b652/'
    config.userLanguage = chatgpt.getUserLanguage()
    config.userLocale = window.location.hostname.endsWith('.com') ? 'us'
                      : window.location.hostname.split('.').pop()
    loadSetting('autoget', 'autoScroll', 'prefixEnabled', 'proxyAPIenabled', 'replyLanguage',
                'rqDisabled', 'scheme', 'stickySidebar', 'streamingDisabled', 'suffixEnabled', 'widerSidebar')
    if (!config.replyLanguage) saveSetting('replyLanguage', config.userLanguage) // init reply language if unset
    if (getUserscriptManager() != 'Tampermonkey') saveSetting('streamingDisabled', true) // disable streaming if not TM

    // Init API props
    const openAIendpoints = { auth: 'https://auth0.openai.com', session: 'https://chatgpt.com/api/auth/session' }
    const apis = {
        'AIchatOS': { expectedOrigin: 'https://chat18.aichatos.xyz',
            endpoint: 'https://api.binjie.fun/api/generateStream', method: 'POST', streamable: true, accumulatesText: false },
        'GPTforLove': { expectedOrigin: 'https://ai27.gptforlove.com',
            endpoint: 'https://api11.gptforlove.com/chat-process', method: 'POST', streamable: true, accumulatesText: true },
        'MixerBox AI': { expectedOrigin: 'https://chatai.mixerbox.com',
            endpoint: 'https://chatai.mixerbox.com/api/chat/stream', method: 'POST', streamable: true, accumulatesText: false },
        'OpenAI': { expectedOrigin: 'https://chatgpt.com',
            endpoint: 'https://api.openai.com/v1/chat/completions', method: 'POST', streamable: true }
    }
    const apiIDs = { gptForLove: { parentID: '' }, aiChatOS: { userID: '#/chat/' + Date.now() }}

    // Define SCRIPT functions

    function loadSetting(...keys) { keys.forEach(key => config[key] = GM_getValue(config.keyPrefix + '_' + key, false)) }
    function saveSetting(key, value) { GM_setValue(config.keyPrefix + '_' + key, value) ; config[key] = value }
    function safeWindowOpen(url) { window.open(url, '_blank', 'noopener') } // to prevent backdoor vulnerabilities
    function getUserscriptManager() { try { return GM_info.scriptHandler } catch (err) { return 'other' }}

    // Define MENU functions

    function registerMenu() {

        // Add command to toggle proxy API mode
        const pamLabel = state.symbol[+config.proxyAPIenabled] + ' '
                       + ( msgs.menuLabel_proxyAPImode || 'Proxy API Mode' ) + ' '
                       + state.separator + state.word[+config.proxyAPIenabled]
        menuIDs.push(GM_registerMenuCommand(pamLabel, toggleProxyMode))

        // Add command toggle streaming mode or alert unsupported
        const stmState = !config.proxyAPIenabled ? false : !config.streamingDisabled // show disabled state to OpenAI users
        const stmLabel = state.symbol[+stmState] + ' '
                       + ( msgs.mode_streaming || 'Streaming Mode' ) + ' '
                       + state.separator + state.word[+stmState]
        menuIDs.push(GM_registerMenuCommand(stmLabel, () => {
            if (getUserscriptManager() != 'Tampermonkey') // alert userscript manager unsupported, suggest Tampermonkey
                siteAlert(`${ msgs.mode_streaming || 'Streaming Mode' } ${ msgs.alert_unavailable || 'unavailable' }`,
                    `${ msgs.mode_streaming || 'Streaming Mode' } ${ msgs.lert_isOnlyAvailFor || 'is only available for' }`
                      + ' <a target="_blank" rel="noopener" href="https://tampermonkey.net">Tampermonkey</a>.'
                      + ` (${ msgs.alert_userscriptMgrNoStream ||
                                'Your userscript manager does not support returning stream responses' }.)`)
            else if (!config.proxyAPIenabled) { // alert OpenAI API unsupported, suggest Proxy Mode
                let msg = `${ msgs.mode_streaming || 'Streaming Mode' } `
                        + `${ msgs.alert_isCurrentlyOnlyAvailBy || 'is currently only available by' } `
                        + `${ msgs.alert_switchingOn || 'switching on' } ${ msgs.mode_proxy || 'Proxy Mode' }. `
                        + `(${ msgs.alert_openAIsupportSoon || 'Support for OpenAI API will be added shortly' }!)`
                const switchPhrase = msgs.alert_switchingOn || 'switching on'
                msg = msg.replace(switchPhrase, `<a href="#" class="proxyToggle">${switchPhrase}</a>`)
                siteAlert(`${ msgs.mode_streaming || 'Streaming Mode' } ${ msgs.alert_unavailable || 'unavailable' }`, msg)
                document.querySelector('.proxyToggle')?.addEventListener('click', () => {
                    document.querySelector('.modal-close-btn').click() ; toggleProxyMode() })
            } else { // functional toggle
                saveSetting('streamingDisabled', !config.streamingDisabled)
                notify(( msgs.mode_streaming || 'Streaming Mode' ) + ' ' + state.word[+!config.streamingDisabled])
                refreshMenu()
            }
        }))

        // Add command to toggle auto-get mode
        const agmLabel = state.symbol[+config.autoget] + ' '
                       + ( msgs.menuLabel_autoGetAnswers || 'Auto-Get Answers' ) + ' '
                       + state.separator + state.word[+config.autoget]
        menuIDs.push(GM_registerMenuCommand(agmLabel, () => {
            saveSetting('autoget', !config.autoget)
            notify(( msgs.menuLabel_autoGetAnswers || 'Auto-Get Answers' ) + ' ' + state.word[+config.autoget])
            refreshMenu()
        }))

        // Add command to toggle auto-scroll (when streaming)
        if (!isMobile) {
            const assLabel = state.symbol[+config.autoScroll] + ' '
                           + `${ msgs.mode_autoScroll || 'Auto-Scroll' } (${ msgs.menuLabel_whenStreaming || 'when streaming' })`
                           + state.separator + state.word[+config.autoScroll]
            menuIDs.push(GM_registerMenuCommand(assLabel, () => {
                saveSetting('autoScroll', !config.autoScroll)
                notify(( msgs.mode_autoScroll || 'Auto-Scroll' ) + ' ' + state.word[+config.autoScroll])
                refreshMenu()
            }))
        }

        // Add command to toggle showing related queries
        const rqLabel = state.symbol[+!config.rqDisabled] + ' '
                      + ( msgs.menuLabel_relatedQueries || 'Related Queries' ) + ' '
                      + state.separator + state.word[+!config.rqDisabled]
        menuIDs.push(GM_registerMenuCommand(rqLabel, () => {
            saveSetting('rqDisabled', !config.rqDisabled)
            const relatedQueriesDiv = appDiv.querySelector('.related-queries')
            if (relatedQueriesDiv) // update visibility based on latest setting
                relatedQueriesDiv.style.display = config.rqDisabled ? 'none' : 'flex'
            if (!config.rqDisabled && !relatedQueriesDiv) { // get related queries for 1st time
                const lastQuery = stripQueryAugments(msgChain)[msgChain.length - 1].content
                get.related(lastQuery).then(queries => show.related(queries))
                    .catch(err => { consoleErr(err.message) ; api.tryNew(get.related, get.related.api) })
            }
            updateTweaksStyle() // toggle <pre> max-height
            notify(( msgs.menuLabel_relatedQueries || 'Related Queries' ) + ' ' + state.word[+!config.rqDisabled])
            refreshMenu()
        }))

        // Add command to toggle prefix mode
        const pfmLabel = state.symbol[+config.prefixEnabled] + ' '
                      + ( msgs.menuLabel_require || 'Require' ) + ' "/" '
                      + ( msgs.menuLabel_beforeQuery || 'before query' ) + ' '
                      + state.separator + state.word[+config.prefixEnabled]
        menuIDs.push(GM_registerMenuCommand(pfmLabel, () => {
            saveSetting('prefixEnabled', !config.prefixEnabled)
            if (config.prefixEnabled && config.suffixEnabled) { // disable Suffix Mode if activating Prefix Mode
                saveSetting('suffixEnabled', !config.suffixEnabled) }
            notify(( msgs.mode_prefix || 'Prefix Mode' ) + ' ' + state.word[+config.prefixEnabled])
            refreshMenu()
        }))

        // Add command to toggle suffix mode
        const sfmLabel = state.symbol[+config.suffixEnabled] + ' '
                      + ( msgs.menuLabel_require || 'Require' ) + ' "?" '
                      + ( msgs.menuLabel_afterQuery || 'after query' ) + ' '
                      + state.separator + state.word[+config.suffixEnabled]
        menuIDs.push(GM_registerMenuCommand(sfmLabel, () => {
            saveSetting('suffixEnabled', !config.suffixEnabled)
            if (config.prefixEnabled && config.suffixEnabled) { // disable Prefix Mode if activating Suffix Mode
                saveSetting('prefixEnabled', !config.prefixEnabled) }
            notify(( msgs.mode_suffix || 'Suffix Mode' ) + ' ' + state.word[+config.suffixEnabled])
            refreshMenu()
        }))

        if (!isMobile) {

            // Add command to toggle wider sidebar
            const wsbLabel = state.symbol[+config.widerSidebar] + ' '
                           + ( msgs.menuLabel_widerSidebar || 'Wider Sidebar' )
                           + state.separator + state.word[+config.widerSidebar]
            menuIDs.push(GM_registerMenuCommand(wsbLabel, () => toggleSidebar('wider')))

            // Add command to toggle sticky sidebar
            const ssbLabel = state.symbol[+config.stickySidebar] + ' '
                           + ( msgs.menuLabel_stickySidebar || 'Sticky Sidebar' )
                           + state.separator + state.word[+config.stickySidebar]
            menuIDs.push(GM_registerMenuCommand(ssbLabel, () => toggleSidebar('sticky')))
        }

        // Add command to set reply language
        const rlLabel = '🌐 ' + ( msgs.menuLabel_replyLanguage || 'Reply Language' )
                      + state.separator + config.replyLanguage
        menuIDs.push(GM_registerMenuCommand(rlLabel, () => {
            while (true) {
                let replyLanguage = prompt(
                    ( msgs.prompt_updateReplyLang || 'Update reply language' ) + ':', config.replyLanguage)
                if (replyLanguage == null) break // user cancelled so do nothing
                else if (!/\d/.test(replyLanguage)) {
                    replyLanguage = ( // auto-case for menu/alert aesthetics
                        [2, 3].includes(replyLanguage.length) || replyLanguage.includes('-') ? replyLanguage.toUpperCase()
                          : replyLanguage.charAt(0).toUpperCase() + replyLanguage.slice(1).toLowerCase() )
                    saveSetting('replyLanguage', replyLanguage || config.userLanguage)
                    siteAlert(( msgs.alert_langUpdated || 'Language updated' ) + '!', // title
                        config.appName + ' ' + ( msgs.alert_willReplyIn || 'will reply in' ) + ' ' // msg
                            + ( replyLanguage || msgs.alert_yourSysLang || 'your system language' ) + '.',
                        '', '', 335)
                    refreshMenu() ; break
        }}}))

        // Add command to set color scheme
        const schemeLabel = ( config.scheme == 'light' ? '☀️' :
                              config.scheme == 'dark'  ? '🌘' : '🌗' ) + ' '
                          + ( msgs.menuLabel_colorScheme || 'Color Scheme' ) + state.separator
                          + ( config.scheme == 'light' ? msgs.scheme_light   || 'Light' :
                              config.scheme == 'dark'  ? msgs.scheme_dark    || 'Dark'
                                                       : msgs.menuLabel_auto || 'Auto' )
        menuIDs.push(GM_registerMenuCommand(schemeLabel, launchSchemeModal))

        // Add command to launch About modal
        const aboutLabel = '💡 ' + ( msgs.menuLabel_about || 'About' ) + ' ' + config.appName
        menuIDs.push(GM_registerMenuCommand(aboutLabel, launchAboutModal))
    }

    function refreshMenu() { for (const id of menuIDs) { GM_unregisterMenuCommand(id) } registerMenu() }

    function launchSchemeModal() {

        // Show modal
        const schemeModalID = siteAlert(`${
            config.appName } ${( msgs.menuLabel_colorScheme || 'Color Scheme' ).toLowerCase() }:`, '',
            [ // buttons
                function auto() { updateScheme('auto') },
                function light() { updateScheme('light') },
                function dark() { updateScheme('dark') }
        ])

        // Center button cluster
        const schemeModal = document.getElementById(schemeModalID)
        schemeModal.querySelector('.modal-buttons').style.justifyContent = 'center'

        // Re-format each button
        for (const btn of schemeModal.querySelectorAll('button')) {
            btn.classList = ( // emphasize active scheme
                config.scheme == btn.textContent.toLowerCase() || (btn.textContent == 'Auto' && !config.scheme)
                  ? 'primary-modal-btn' : '' )

            // Prepend emoji + localize labels
            if (/light/i.test(btn.textContent)) btn.textContent = (
                '☀️ ' + ( msgs.scheme_light   || 'Light' ))
            else if (/dark/i.test(btn.textContent)) btn.textContent = (
                '🌘 ' + ( msgs.scheme_dark    || 'Dark' ))
            else if (/auto/i.test(btn.textContent)) btn.textContent = (
                '🌗 ' + ( msgs.menuLabel_auto || 'Auto' ))

            else btn.style.display = 'none' // hide Dismiss button
        }

        function updateScheme(newScheme) {
            scheme = newScheme == 'auto' ? ( isDarkMode() ? 'dark' : 'light' ) : newScheme
            saveSetting('scheme', newScheme == 'auto' ? false : newScheme)
            updateAppLogoSrc() ; updateAppStyle() ; schemeNotify(newScheme) ; refreshMenu()
        }

        function schemeNotify(scheme) {
            notify(` ${ msgs.menuLabel_colorScheme || 'Color Scheme' }: `
                   + ( scheme == 'light' ? msgs.scheme_light   || 'Light' :
                       scheme == 'dark'  ? msgs.scheme_dark    || 'Dark'
                                         : msgs.menuLabel_auto || 'Auto' ).toUpperCase()
        )}
    }

    function launchAboutModal() {

        // Show alert
        const chatgptJSver = (/chatgpt-([\d.]+)\.min/.exec(GM_info.script.header) || [null, ''])[1]
        const aboutModalID = siteAlert(
            config.appName, // title
            '🏷️ ' + ( msgs.about_version || 'Version' ) + ': ' + GM_info.script.version + '\n'
                + '⚡ ' + ( msgs.about_poweredBy || 'Powered by' ) + ': '
                    + '<a href="https://chatgpt.js.org" target="_blank" rel="noopener">chatgpt.js</a>'
                    + ( chatgptJSver ? ( ' v' + chatgptJSver ) : '' ) + '\n'
                + '📜 ' + ( msgs.about_sourceCode || 'Source code' ) + ':\n   '
                    + `<a href="${ config.gitHubURL }" target="_blank" rel="nopener">`
                        + config.gitHubURL + '</a>',
            [ // buttons
                function checkForUpdates() { updateCheck() },
                function getSupport() { safeWindowOpen(config.supportURL) },
                function leaveAReview() { safeWindowOpen(
                    config.greasyForkURL + '/feedback#post-discussion') },
                function moreChatGPTapps() { safeWindowOpen('https://github.com/adamlui/chatgpt-apps') }
            ], '', 515) // About modal width

        // Resize + format buttons to include emoji + localized label + hide Dismiss button
        for (const btn of document.getElementById(aboutModalID).querySelectorAll('button')) {
            btn.style.height = '50px' // re-size to fit meaty text content
            if (/updates/i.test(btn.textContent)) btn.textContent = (
                '🚀 ' + ( msgs.buttonLabel_updateCheck || 'Check for Updates' ))
            else if (/support/i.test(btn.textContent)) btn.textContent = (
                '🧠 ' + ( msgs.buttonLabel_getSupport || 'Get Support' ))
            else if (/review/i.test(btn.textContent)) btn.textContent = (
                '⭐ ' + ( msgs.buttonLabel_leaveReview || 'Leave a Review' ))
            else if (/apps/i.test(btn.textContent)) btn.textContent = (
                '🤖 ' + ( msgs.buttonLabel_moreApps || 'More ChatGPT Apps' ))
            else btn.style.display = 'none' // hide Dismiss button
        }
    }

    function updateCheck() {

        // Fetch latest meta
        const currentVer = GM_info.script.version
        GM.xmlHttpRequest({
            method: 'GET', url: config.updateURL + '?t=' + Date.now(),
            headers: { 'Cache-Control': 'no-cache' },
            onload: resp => { const updateAlertWidth = 377

                // Compare versions
                const latestVer = /@version +(.*)/.exec(resp.responseText)[1]
                for (let i = 0 ; i < 4 ; i++) { // loop thru subver's
                    const currentSubVer = parseInt(currentVer.split('.')[i], 10) || 0,
                          latestSubVer = parseInt(latestVer.split('.')[i], 10) || 0
                    if (currentSubVer > latestSubVer) break // out of comparison since not outdated
                    else if (latestSubVer > currentSubVer) { // if outdated

                        // Alert to update
                        const updateModalID = siteAlert(( msgs.alert_updateAvail || 'Update available' ) + '! 🚀', // title
                            ( msgs.alert_newerVer || 'An update to' ) + ` ${ config.appName } `
                                + `(v${ latestVer }) ${ msgs.alert_isAvail || 'is available' }!  `
                                + '<a target="_blank" rel="noopener" style="font-size: 0.97rem" '
                                    + 'href="' + config.gitHubURL + '/commits/main/greasemonkey/'
                                    + config.updateURL.replace(/.*\/(.*)meta\.js/, '$1user.js') + '"'
                                    + `>${ msgs.link_viewChanges || 'View changes' }</a>`,
                            function update() { // button
                                GM_openInTab(config.updateURL.replace('meta.js', 'user.js') + '?t=' + Date.now(),
                                    { active: true, insert: true } // focus, make adjacent
                                ).onclose = () => location.reload() },
                            '', updateAlertWidth
                        )

                        // Localize button labels if needed
                        if (!config.userLanguage.startsWith('en')) {
                            const updateAlert = document.querySelector(`[id="${ updateModalID }"]`),
                                  updateBtns = updateAlert.querySelectorAll('button')
                            updateBtns[1].textContent = msgs.buttonLabel_update || 'Update'
                            updateBtns[0].textContent = msgs.buttonLabel_dismiss || 'Dismiss'
                        }

                        return
                }}

                // Alert to no update found, nav back
                siteAlert(( msgs.alert_upToDate || 'Up-to-date' ) + '!', // title
                    `${ config.appName } (v${ currentVer }) ${ msgs.alert_isUpToDate || 'is up-to-date' }!`, // msg
                        '', '', updateAlertWidth)
                launchAboutModal()
    }})}

    // Define FEEDBACK functions

    function notify(msg, position = '', notifDuration = '', shadow = '') {
        chatgpt.notify(`${ config.appSymbol } ${ msg }`, position, notifDuration,
            shadow || scheme == 'dark' ? '' : 'shadow' )
    }

    function siteAlert(title = '', msg = '', btns = '', checkbox = '', width = '') {
        return chatgpt.alert(`${ config.appSymbol } ${ title }`, msg, btns, checkbox, width )}

    function appAlert(...alerts) {
        alerts = alerts.flat() // flatten array args nested by spread operator
        while (appDiv.firstChild) appDiv.removeChild(appDiv.firstChild) // clear appDiv content
        const alertP = document.createElement('p')
        alertP.className = 'no-user-select' ; alertP.style.paddingBottom = '15px'

        alerts.forEach((alert, idx) => { // process each alert for display
            let msg = appAlerts[alert] || alert // use string verbatim if not found in appAlerts
            if (idx > 0) msg = ' ' + msg // left-pad 2nd+ alerts
            if (msg.includes(appAlerts.login)) deleteOpenAIcookies()
            if (msg.includes(appAlerts.waitingResponse)) alertP.classList.add('loading')
            const linkStyle = `style="color: ${ scheme == 'dark' ? 'white' : '#190cb0' }"`

            // Add login link to login msgs
            if (msg.includes('@'))
                msg += `<a target="_blank" rel="noopener" ${linkStyle} href="https://chatgpt.com">chatgpt.com</a>.`
                + ` (${ msgs.alert_ifIssuePersists || 'If issue persists' },`
                + ` ${( msgs.alert_try || 'Try' ).toLowerCase() }`
                + ` ${ msgs.alert_switchingOn || 'switching on' }`
                + ` ${ msgs.mode_proxy || 'Proxy Mode' })`

            // Hyperlink msgs.alert_switching<On|Off>
            const foundState = ['On', 'Off'].find(state =>
                msg.includes(msgs['alert_switching' + state]) || new RegExp(`\\b${state}\\b`, 'i').test(msg))
            if (foundState) { // hyperlink switch phrase for click listener to toggleProxyMode()
                const switchPhrase = msgs['alert_switching' + foundState] || 'switching ' + foundState.toLowerCase()
                msg = msg.replace(switchPhrase, `<a href="#" ${linkStyle} class="proxyToggle">${switchPhrase}</a>`)
            }

            // Create/fill/append msg span
            const msgSpan = document.createElement('span')
            msgSpan.innerHTML = msg ; alertP.append(msgSpan)

            // Activate toggle link if necessary
            msgSpan.querySelector('.proxyToggle')?.addEventListener('click', toggleProxyMode)
        })
        appDiv.append(alertP)
    }

    function consoleInfo(msg) { console.info(`${ config.appSymbol } ${ config.appName } » ${ msg }`) }
    function consoleErr(label, msg) { console.error(`${config.appSymbol} ${config.appName} » ${label}${ msg ? `: ${msg}` : '' }`)}

    // Define UI functions

    function isDarkMode() {

        // Dark theme status elem method
        const domDarkStatus = [...document.querySelectorAll('span')]
            .find(span => span.textContent == 'Dark theme') // dark theme status label
            ?.nextElementSibling.textContent // dark theme status
        if (domDarkStatus) return domDarkStatus == 'On' ? true : false

        // Vanilla logo method
        for (const img of document.getElementsByTagName('img'))
            if (img.alt == 'Google' && img.src.includes('light'))
                return true

        // Final fallback to matchMedia
        return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
    }

    function updateAppLogoSrc() {
        appLogoImg.src = `https://media.googlegpt.io/images/logos/googlegpt/${ scheme == 'dark' ? 'white' : 'black' }.png`
        appLogoImg.onerror = () => appLogoImg.style.display = 'none'
    }

    function updateAppStyle() {
        appStyle.innerText = (
            '.no-user-select { -webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }'
          + '.googlegpt {'
              + 'border-radius: 8px ; border: 1px solid #dadce0 ; height: fit-content ; flex-basis: 0 ;'
              + `padding: ${ isFirefox ? 20 : 22 }px 26px 6px 26px ;`
              + `width: ${ isMobile ? 'auto' : '319px' } ;` // hard-width to prevent Google's flex-wrap moving app to bottom
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
          + `.corner-btn:hover { ${ scheme == 'dark' ? 'fill: #aaa ; stroke: #aaa' : 'fill: black ; stroke: black' } ;`
              + 'transform: scale(1.185) ; transition: transform 0.05s ease }'
          + '.googlegpt .loading { padding-bottom: 15px ; color: #b6b8ba ; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite }'
          + '.googlegpt.sidebar-free { margin-left: 60px ; height: fit-content }'
          + '.standby-btn { width: 100% ; padding: 11px 0 ; cursor: pointer ; margin-top: 20px ;'
              + ( scheme == 'dark' ? 'color: #fff ; background: #000 ;' : '')
              + `border-radius: 4px ; border: 1px solid ${ scheme == 'dark' ? '#fff' : '#000' } ;`
              + 'transform: scale(1) ; transition: transform 0.1s ease }'
          + '.standby-btn:hover { border-radius: 6px ; transform: scale(1.025) ;'
              + `${ scheme == 'dark' ? 'background: white ; color: black' : 'background: black ; color: white' }}`
          + '.googlegpt > pre {'
              + `font-size: ${ isMobile ? '14px' : '1.15em' } ; white-space: pre-wrap ; min-width: 0 ; margin: 16px 0 0 0 ;`
              + `line-height: ${ isMobile ? 19 : 22 }px ; padding: 1.25em ; border-radius: 10px ; overflow: auto ;`
              + ( scheme == 'dark' ? 'background: #3a3a3a ; color: #f2f2f2 }' : 'background: #eaeaea }' )
          + '@keyframes pulse { 0%, to { opacity: 1 } 50% { opacity: .5 }}'
          + '.googlegpt section.loading { padding: 15px 0 14px 5px }' // left/top-pad loading status when sending replies
          + '.balloon-tip { content: "" ; position: relative ; border: 7px solid transparent ;'
              + 'border-bottom-style: solid ; border-bottom-width: 1.19rem ; border-top: 0 ; border-bottom-color:'
                  + ( scheme == 'dark' ? '#3a3a3a' : '#eaeaea' ) + '}'
          + '.continue-chat > textarea {'
              + `border: solid 1px ${ scheme == 'dark' ? '#aaa' : '#638ed4' } ; border-radius: 12px 13px 12px 0 ;`
              + 'height: 16px ; max-height: 200px ; resize: none ;'
              + 'margin: 13px 0 15px 0 ; padding: 13px 25px 13px 10px ;'
              + 'background: ' + ( scheme == 'dark' ? '#515151' : '#eeeeee70' ) + ' }'
          + ( scheme == 'dark' ? '.continue-chat > textarea { color: white } .continue-chat > textarea::placeholder { color: #aaa }' : '' )
          + '.related-queries { display: flex ; flex-wrap: wrap ; width: 100% ; margin-bottom: 19px }'
          + '.related-query {'
              + `margin: 5px 4px ${ scheme == 'dark' ? 5 : 2 }px 0 ; padding: 8px 12px 8px 13px ;`
              + `color: ${ scheme == 'dark' ? '#f2f2f2' : '#767676' } ; background: ${ scheme == 'dark' ? '#424242' : '#dadada12' } ;`
              + `border: 1px solid ${ scheme == 'dark' ? '#777' : '#e1e1e1' } ; font-size: ${ isMobile ? 1 : 0.81}em ; cursor: pointer ;`
              + 'border-radius: 0 13px 12px 13px ; width: fit-content ; flex: 0 0 auto ;'
              + `box-shadow: 1px 3px ${ scheme == 'dark' ? '11px -8px lightgray' : '8px -6px rgba(169, 169, 169, 0.75)' };`
              + 'transform: scale(1) ; transition: transform 0.1s ease !important }'
          + '.related-query:hover, .related-query:focus { transform: scale(1.025) !important ;'
              + `background: ${ scheme == 'dark' ? '#a2a2a270' : '#e5edff ; color: #000000a8 ; border-color: #a3c9ff' }}`
          + '.related-query svg { float: left ; margin: -0.09em 6px 0 0 ;' // related query icon
              + `color: ${ scheme == 'dark' ? '#aaa' : '#c1c1c1' }}`
          + '.fade-in { opacity: 0 ; transform: translateY(10px) ; transition: opacity 0.5s ease, transform 0.5s ease }'
          + '.fade-in.active { opacity: 1 ; transform: translateY(0) }'
          + '#send-btn { border: none ; float: right ; position: relative ; background: none ;'
              + `color: ${ scheme == 'dark' ? '#aaa' : 'lightgrey' } ; cursor: pointer }`
          + `#send-btn:hover { color: ${ scheme == 'dark' ? 'white' : '#638ed4' } }`
          + `.kudoai { font-size: ${ isMobile ? 0.85 : 0.75 }rem ; position: relative ; left: ${ isMobile ? 8 : 6 }px ; color: #aaa }`
          + '.kudoai a, .kudoai a:visited { color: #aaa ; text-decoration: none }'
          + '.kudoai a:hover { color:' + ( scheme == 'dark' ? 'white' : 'black' ) + '; text-decoration: none }'
          + ( // markdown styles
                '.googlegpt > pre h1 { font-size: 1.25em } .googlegpt > pre h2 { font-size: 1.1em }' // size headings
              + '.googlegpt > pre > p { margin-bottom: -1.25em }' // eliminate bottom gap
              + '.googlegpt > pre ol { padding-left: 1.58em }' // indent
              + '.googlegpt > pre ul { margin: -10px 0 -6px ; padding-left: 1.5em }' // reduce v-spacing, indent
              + '.googlegpt > pre li { margin: -10px 0 ; list-style: unset }' ) // reduce v-spacing, show left symbols
          + 'code.hljs { text-wrap: nowrap ; overflow-x: scroll }' // don't wrap highlighted code to be scrollable horizontally
          + '.katex-html { display: none }' // hide unrendered math
          + '.chatgpt-notify { padding: 13px 13px 13px 18px !important }' // pad notifications
          + '.chatgpt-modal > div { 17px 20px 24px 20px !important }' // increase alert padding
          + '.chatgpt-modal h2 { font-size: 1.65rem ; margin: 0 ; padding: 0 }' // shrink margin/padding around alert title + enlarge it
          + '.chatgpt-modal p { margin: 14px 0 -29px 4px ; font-size: 1.28em ; line-height: 1.57 }' // position/size alert msg
          + '.chatgpt-modal button {' // alert buttons
              + 'font-size: 0.84rem ; text-transform: uppercase ; min-width: 113px ;'
              + ( !isMobile ? 'padding: 5px !important ;' : '' )
              + 'cursor: pointer ; border-radius: 0 !important ; height: 39px ;'
              + 'border: 1px solid ' + ( scheme == 'dark' ? 'white' : 'black' ) + ' !important }'
          + `.modal-buttons { margin: 42px 4px ${ isMobile ? '2px 4px' : '-3px -4px' } !important }` // position alert buttons
          + ( scheme == 'dark' ? // darkmode alert styles
              ( '.chatgpt-modal > div, .chatgpt-modal button:not(.primary-modal-btn) {'
                  + 'background-color: black !important ; color: white }'
              + '.primary-modal-btn { background: white !important ; color: black !important }'
              + '.chatgpt-modal a { color: #00cfff !important }'
              + '.chatgpt-modal button:hover { background-color: #00cfff !important ; color: black !important }' ) : '' )
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
    }

    function updateTweaksStyle() {
        const isStandbyMode = document.querySelector('.standby-btn'),
              answerIsLoaded = document.querySelector('.corner-btn')

        // Update tweaks style based on settings (for tweaks init + show.reply() + toggleSidebar())
        tweaksStyle.innerText = ( config.widerSidebar ? wsbStyles : '' )
                              + ( config.stickySidebar && !isStandbyMode && answerIsLoaded ? ssbStyles : '' )

        // Update <pre> max-height in Sticky Sidebar mode based on RQ visibility (for get.reply()'s RQ show + menu RQ toggle)
        const answerPre = document.querySelector('.googlegpt > pre'),
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

    function updateTooltip(buttonType) { // text & position
        const cornerBtnTypes = ['about', 'speak', 'ssb', 'wsb'],
              [ctrAddend, spreadFactor] = document.querySelector('.standby-btn') ? [19, 15] : [10, 25],
              iniRoffset = spreadFactor * (buttonType == 'send' ? 1.65 : cornerBtnTypes.indexOf(buttonType) + 1) + ctrAddend

        // Update text
        tooltipDiv.innerText = (
            buttonType == 'about' ? msgs.menuLabel_about || 'About'
          : buttonType == 'speak' ? msgs.tooltip_playAnswer || 'Play answer'
          : buttonType == 'ssb' ? (( config.stickySidebar ? `${ msgs.prefix_exit || 'Exit' } ` :  '' )
                                   + ( msgs.menuLabel_stickySidebar || 'Sticky Sidebar' ))
          : buttonType == 'wsb' ? (( config.widerSidebar ? `${ msgs.prefix_exit || 'Exit' } ` :  '' )
                                   + ( msgs.menuLabel_widerSidebar || 'Wider Sidebar' ))
          : buttonType == 'send' ? msgs.tooltip_sendReply || 'Send reply' : '' )

        // Update position
        tooltipDiv.style.top = `${ buttonType != 'send' ? -13
          : tooltipDiv.eventYpos - appDiv.getBoundingClientRect().top - 36 }px`
        tooltipDiv.style.right = `${ iniRoffset - tooltipDiv.getBoundingClientRect().width / 2 }px`
    }

    function updateFooterContent() {
        get.json('https://cdn.jsdelivr.net/gh/KudoAI/ads-library/advertisers/index.json',
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
                    const campaignsURL = 'https://cdn.jsdelivr.net/gh/KudoAI/ads-library/advertisers/'
                                       + chosenAdvertiser + '/text/campaigns.json'
                    get.json(campaignsURL, (err, campaignsData) => { if (err) return

                        // Select random, active campaign
                        for (const [campaignName, campaign] of shuffle(applyBoosts(Object.entries(campaignsData)))) {
                            const campaignIsActive = campaign.active && (!campaign.endDate || currentDate <= campaign.endDate)
                            if (!campaignIsActive) continue // to next campaign since campaign inactive

                            // Select random active group
                            for (const [groupName, adGroup] of shuffle(applyBoosts(Object.entries(campaign.adGroups)))) {

                                // Skip disqualified groups
                                if (/^self$/i.test(groupName) && !re_appName.test(campaignName) // self-group for other apps
                                    || re_appName.test(campaignName) && !/^self$/i.test(groupName) // non-self group for this app
                                    || adGroup.active == false // group explicitly disabled
                                    || adGroup.targetBrowsers && // target browser(s) exist...
                                        !adGroup.targetBrowsers.some( // ...but doesn't match user's
                                            browser => new RegExp(browser, 'i').test(navigator.userAgent))
                                    || adGroup.targetLocations && ( // target locale(s) exist...
                                        !config.userLocale || !adGroup.targetLocations.some( // ...but user locale is missing or excluded
                                            loc => loc.includes(config.userLocale) || config.userLocale.includes(loc)))
                                ) continue // to next group

                                // Filter out inactive ads, pick random active one
                                const activeAds = adGroup.ads.filter(ad => ad.active != false)
                                if (activeAds.length == 0) continue // to next group since no ads active
                                const chosenAd = activeAds[Math.floor(chatgpt.randomFloat() * activeAds.length)] // random active one

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

        function shuffle(list) {
            let currentIdx = list.length, tempValue, randomIdx
            while (currentIdx != 0) { // elements remain to be shuffled
                randomIdx = Math.floor(chatgpt.randomFloat() * currentIdx) ; currentIdx -= 1
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

    function handleRQevent(event) { // for attachment/removal in `get.reply()` + `show.reply().handleSubmit()`
        const keys = [' ', 'Spacebar', 'Enter', 'Return'], keyCodes = [32, 13]
        if (keys.includes(event.key) || keyCodes.includes(event.keyCode) || event.type == 'click') {
            event.preventDefault() // prevent scroll on space taps

            // Remove divs/listeners
            const relatedQueriesDiv = document.querySelector('.related-queries')
            Array.from(relatedQueriesDiv.children).forEach(relatedQueryDiv => {
                ['click', 'keydown'].forEach(event => { relatedQueryDiv.removeEventListener(event, handleRQevent) })})
            relatedQueriesDiv.remove()

            // Send related query
            const chatbar = appDiv.querySelector('textarea')
            if (chatbar) {
                chatbar.value = event.target.textContent
                show.reply.submitSrc = 'click' // for show.reply() auto-focus
                chatbar.dispatchEvent(new KeyboardEvent('keydown', {
                    key: 'Enter', bubbles: true, cancelable: true }))
            }
    }}

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

    // Define TOGGLE functions

    function toggleProxyMode() {
        saveSetting('proxyAPIenabled', !config.proxyAPIenabled)
        notify(( msgs.menuLabel_proxyAPImode || 'Proxy API Mode' ) + ' ' + state.word[+config.proxyAPIenabled])
        refreshMenu() ; location.reload() // re-send query using new endpoint
    }

    function toggleSidebar(mode) {
        saveSetting(mode + 'Sidebar', !config[mode + 'Sidebar'])
        updateTweaksStyle()
        if (mode == 'wider' && document.querySelector('.corner-btn')) updateWSBsvg() ; else updateSSBsvg()
        notify(( msgs[`menuLabel_${ mode }Sidebar`] || mode.charAt(0).toUpperCase() + mode.slice(1) + ' Sidebar' )
            + ' ' + state.word[+config[mode + 'Sidebar']])
        refreshMenu()
    }

    function toggleTooltip(event) { // visibility
        tooltipDiv.eventYpos = event.currentTarget.getBoundingClientRect().top // for updateTooltip() y-pos calc
        updateTooltip(event.currentTarget.id.replace(/-btn$/, ''))
        tooltipDiv.style.opacity = event.type == 'mouseover' ? 1 : 0
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
            consoleInfo('OpenAI access token: ' + accessToken)
            if (!accessToken) {
                GM.xmlHttpRequest({ url: openAIendpoints.session, onload: resp => {
                    if (isBlockedbyCloudflare(resp.responseText)) {
                        appAlert('checkCloudflare') ; return }
                    try {
                        const newAccessToken = JSON.parse(resp.responseText).accessToken
                        GM_setValue(config.keyPrefix + '_openAItoken', newAccessToken)
                        resolve(newAccessToken)
                    } catch { appAlert('login') ; return }
                }})
            } else resolve(accessToken)
    })}

    function generateGPTforLoveKey() {
        let nn = Math.floor(new Date().getTime() / 1e3)
        const fD = e => {
            let t = CryptoJS.enc.Utf8.parse(e),
                o = CryptoJS.AES.encrypt(t, 'fjfsd我w4真3dd服iuhf了wf', {
                    mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7
            })
            return o.toString()
        }
        return fD(nn)
    }

    // Define API functions

    const api = {

        pick: function(caller) {
            const logPrefix = `get.${caller.name}() » `
            const untriedAPIs = Object.keys(apis).filter(api =>
                   api != ( caller == get.reply ? 'OpenAI' : '' ) // exclude OpenAI for get.reply() since Proxy Mode
                && !caller.triedAPIs.some(entry => Object.prototype.hasOwnProperty.call(entry, api)) // exclude tried APIs
                && (config.streamingDisabled || apis[api].streamable)) // exclude unstreamable APIs if config.streamingDisabled
            const chosenAPI = untriedAPIs[ // pick random array entry
                Math.floor(chatgpt.randomFloat() * untriedAPIs.length)]
            if (!chosenAPI) { consoleErr('No proxy APIs left untried') ; return null }

            // Log chosen API endpoint
            consoleInfo(logPrefix + 'Endpoint used: ' + apis[chosenAPI].endpoint)
            return chosenAPI
        },

        tryNew: function(caller, triedAPI, reason = 'err') {
            consoleErr(`Error using ${apis[triedAPI].endpoint} due to ${reason}`)
            if (caller.attemptCnt < Object.keys(apis).length -1) {
                consoleInfo('Trying another endpoint...')
                caller.triedAPIs.push({ [triedAPI]: reason }) ; caller.attemptCnt++
                caller(caller == get.reply ? msgChain : stripQueryAugments(msgChain)[msgChain.length - 1].content)
                    .then(result => { if (caller == get.related) show.related(result) ; else return })
            } else {
                consoleInfo('No remaining untried endpoints')
                if (caller == get.reply) appAlert('proxyNotWorking', 'suggestOpenAI')
            }
        },

        clearTimedOut: function(triedAPIs) { // to retry on new queries
            triedAPIs.splice(0, triedAPIs.length, // empty apiArray
                ...triedAPIs.filter(entry => Object.values(entry)[0] != 'timeout')) // replace w/ err'd APIs
        },

        createHeaders: function(api) {
            let headers = { 'Content-Type': 'application/json', 'X-Forwarded-For': ipv4.generate({ verbose: false })}
            if (api == 'OpenAI') headers.Authorization = 'Bearer ' + config.openAIkey
            headers.Referer = headers.Origin = apis[api].expectedOrigin || '' // prserve expected traffic src
            return headers
        },

        createPayload: function(api, msgs) {
            let payload = {}
            if (api == 'OpenAI')
                payload = { messages: msgs, model: 'gpt-3.5-turbo', max_tokens: 4000 }
            else if  (api == 'AIchatOS') {
                payload = {
                    prompt: msgs[msgs.length - 1].content,
                    withoutContext: false, userId: apiIDs.aiChatOS.userID, network: true
                }
            } else if (api == 'GPTforLove') {
                payload = {
                    prompt: msgs[msgs.length - 1].content,
                    secret: generateGPTforLoveKey(), top_p: 1, temperature: 0.8,
                    systemMessage: 'You are ChatGPT, the version is GPT-4o, a large language model trained by OpenAI. Follow the user\'s instructions carefully.'
                }
                if (apiIDs.gptForLove.parentID) payload.options = { parentMessageId: apiIDs.gptForLove.parentID }
            } else if (api == 'MixerBox AI')
                payload = { prompt: msgs, model: 'gpt-3.5-turbo' }
            return JSON.stringify(payload)
        }
    }

    // Define QUERY AUGMENT functions

    function augmentQuery(query) { return query + ` (reply in ${config.replyLanguage})` }

    function stripQueryAugments(msgChain) {
        const augmentCnt = augmentQuery.toString().match(/\+/g).length
        return msgChain.map(msg => { // stripped chain
            if (msg.role == 'user') {
                let content = msg.content
                const augments = content.match(/\s*\([^)]*\)\s*/g)
                if (augments) for (let i = 0 ; i < augmentCnt ; i++) // strip augments
                    content = content.replace(augments[augments.length - 1 - i], '')
                return { ...msg, content: content.trim() }
            } else return msg // agent's unstripped
        })
    }

    // Define GET functions

    const get = {

        reply: async function(msgChain) {

            // Init API attempt props
            get.reply.status = 'waiting'
            if (!get.reply.triedAPIs) get.reply.triedAPIs = []
            if (!get.reply.attemptCnt) get.reply.attemptCnt = 1

            // Pick API
            get.reply.api = config.proxyAPIenabled ? api.pick(get.reply) : 'OpenAI'
            if (!get.reply.api) { // no more proxy APIs left untried
                appAlert('proxyNotWorking', 'suggestOpenAI') ; return }

            if (!config.proxyAPIenabled) // init OpenAI key
                config.openAIkey = await Promise.race([getOpenAItoken(), new Promise(reject => setTimeout(reject, 3000))])
            else setTimeout(() => { // try diff API after 6-9s of no response
                if (config.proxyAPIenabled && get.reply.status != 'done' && !get.reply.sender)
                    api.tryNew(get.reply, get.reply.api, 'timeout') }, config.streamingDisabled ? 9000 : 6000)

            // Get/show answer from ChatGPT
            GM.xmlHttpRequest({
                method: apis[get.reply.api].method, url: apis[get.reply.api].endpoint,
                responseType: config.streamingDisabled || !config.proxyAPIenabled ? 'text' : 'stream',
                headers: api.createHeaders(get.reply.api), data: api.createPayload(get.reply.api, msgChain),
                onload: resp => dataProcess.text(get.reply.api, resp),
                onloadstart: resp => dataProcess.stream(get.reply.api, resp),
                onerror: err => { consoleErr(err.message)
                    if (!config.proxyAPIenabled) appAlert(!config.openAIkey ? 'login' : ['openAInotWorking', 'suggestProxy'])
                    else if (get.reply.status != 'done') api.tryNew(get.reply, get.reply.api)
                }
            })

            // Get/show related queries if enabled on 1st get.reply()
            if (!config.rqDisabled && get.reply.attemptCnt == 1) {
                const lastQuery = stripQueryAugments(msgChain)[msgChain.length - 1].content
                get.related(lastQuery).then(queries => show.related(queries))
                    .catch(err => { consoleErr(err.message) ; api.tryNew(get.related, get.related.api) })
            }

            updateFooterContent()
        },

        json: function(url, callback) { // for dynamic footer
            GM.xmlHttpRequest({ method: 'GET', url: url, onload: resp => {
                if (resp.status >= 200 && resp.status < 300) {
                    try { const data = JSON.parse(resp.responseText) ; callback(null, data) }
                    catch (err) { callback(err, null) }
                } else callback(new Error('Failed to load data: ' + resp.statusText), null)
            }})
        },

        related: function(query) {

            // Init API attempt props
            get.related.status = 'waiting'
            if (!get.related.triedAPIs) get.related.triedAPIs = []
            if (!get.related.attemptCnt) get.related.attemptCnt = 1

            // Pick API
            get.related.api = api.pick(get.related)
            if (!get.related.api) return // no more proxy APIs left untried

            setTimeout(() => { // try diff API after 6s of no response
                if (get.related.status != 'done')
                    api.tryNew(get.related, get.related.api, 'timeout') }, 6000)

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
                   + ` Reply in ${config.replyLanguage}`
                GM.xmlHttpRequest({
                    method: apis[get.related.api].method, url: apis[get.related.api].endpoint,
                    responseType: 'text', headers: api.createHeaders(get.related.api),
                    data: api.createPayload(get.related.api, [{ role: 'user', content: rqPrompt }]),
                    onload: event => {
                        let str_relatedQueries = ''
                        if (get.related.api == 'OpenAI') {
                            try { str_relatedQueries = JSON.parse(event.response).choices[0].message.content }
                            catch (err) { consoleErr(err) ; reject(err) }
                        } else if (get.related.api == 'AIchatOS' && !/很抱歉地|系统公告/.test(event.responseText)) {
                            try {
                                const text = event.responseText, chunkSize = 1024
                                let currentIdx = 0
                                while (currentIdx < text.length) {
                                    const chunk = text.substring(currentIdx, currentIdx + chunkSize)
                                    currentIdx += chunkSize ; str_relatedQueries += chunk
                                }
                            } catch (err) { consoleErr(err) ; reject(err) }
                        } else if (get.related.api == 'GPTforLove') {
                            try {
                                let chunks = event.responseText.trim().split('\n')
                                str_relatedQueries = JSON.parse(chunks[chunks.length - 1]).text
                            } catch (err) { consoleErr(err) ; reject(err) }
                        } else if (get.related.api == 'MixerBox AI') {
                            try {
                                const extractedData = Array.from(event.responseText.matchAll(/data:(.*)/g), match => match[1]
                                    .replace(/\[SPACE\]/g, ' ').replace(/\[NEWLINE\]/g, '\n'))
                                    .filter(match => !/(?:message_(?:start|end)|done)/.test(match))
                                str_relatedQueries = extractedData.join('')
                            } catch (err) { consoleErr(err) ; reject(err) }
                        }
                        const arr_relatedQueries = (str_relatedQueries.match(/\d+\.\s*(.*?)(?=\n|$)/g) || [])
                            .slice(0, 5) // limit to 1st 5
                            .map(match => match.replace(/^\d+\.\s*/, '')) // strip numbering
                        get.related.status = 'done'
                        get.related.attemptCnt = null ; api.clearTimedOut(get.related.triedAPIs)
                        resolve(arr_relatedQueries)
                    },
                    onerror: err => { consoleErr(err) ; reject(err) }
            })})
        }
    }

    // Define PROCESS functions

    const dataProcess = {

        text: function(activeAPI, resp) {
            if (!config.streamingDisabled && config.proxyAPIenabled || get.reply.status == 'done')
                return
            if (resp.status != 200) {
                consoleErr('Response status', resp.status)
                consoleErr('Response text', resp.responseText)
                if (config.proxyAPIenabled && get.reply.status != 'done')
                    api.tryNew(get.reply, activeAPI)
                else if (resp.status == 401 && !config.proxyAPIenabled) {
                    GM_deleteValue(config.keyPrefix + '_openAItoken') ; appAlert('login') }
                else if (resp.status == 403)
                    appAlert(config.proxyAPIenabled ? ['proxyNotWorking', 'suggestOpenAI'] : 'checkCloudflare')
                else if (resp.status == 429)
                    appAlert(['tooManyRequests', config.proxyAPIenabled ? 'suggestOpenAI' : 'suggestProxy'])
                else // uncommon status
                    appAlert(`${ config.proxyAPIenabled ? 'proxyN' : 'openAIn' }otWorking`,
                             `suggest${ config.proxyAPIenabled ? 'OpenAI' : 'Proxy' }`)
            } else if (activeAPI == 'OpenAI') {
                if (resp.response) {
                    try {
                        show.reply(JSON.parse(resp.response).choices[0].message.content, footerContent)
                    } catch (err) {
                        consoleInfo('Response: ' + resp.response)
                        consoleErr(appAlerts.parseFailed, err)
                        appAlert('openAInotWorking, suggestProxy')
                    }
                } else { consoleInfo('Response: ' + resp.responseText) ; appAlert('openAInotWorking, suggestProxy') }
            } else if (activeAPI == 'AIchatOS') {
                if (resp.responseText && !/很抱歉地|系统公告/.test(resp.responseText)) {
                    try {
                        const text = resp.responseText, chunkSize = 1024
                        let answer = '', currentIdx = 0
                        while (currentIdx < text.length) {
                            const chunk = text.substring(currentIdx, currentIdx + chunkSize)
                            currentIdx += chunkSize ; answer += chunk
                        }
                        show.reply(answer, footerContent)
                        get.reply.status = 'done' ; api.clearTimedOut(get.reply.triedAPIs) ; get.reply.attemptCnt = null
                    } catch (err) { // use different endpoint or suggest OpenAI
                        consoleInfo('Response: ' + resp.responseText)
                        consoleErr(appAlerts.parseFailed, err)
                        if (get.reply.status != 'done') api.tryNew(get.reply, activeAPI)
                    }
                } else { consoleInfo('Response: ' + resp.responseText) ; if (get.reply.status != 'done') api.tryNew(get.reply, activeAPI) }
            } else if (activeAPI == 'GPTforLove') {
                if (resp.responseText && !resp.responseText.includes('Fail')) {
                    try {
                        let chunks = resp.responseText.trim().split('\n'),
                            lastObj = JSON.parse(chunks[chunks.length - 1])
                        if (lastObj.id) apiIDs.gptForLove.parentID = lastObj.id
                        show.reply(lastObj.text, footerContent)
                        get.reply.status = 'done' ; api.clearTimedOut(get.reply.triedAPIs) ; get.reply.attemptCnt = null
                    } catch (err) { // use different endpoint or suggest OpenAI
                        consoleInfo('Response: ' + resp.responseText)
                        consoleErr(appAlerts.parseFailed, err)
                        if (get.reply.status != 'done') api.tryNew(get.reply, activeAPI)
                    }
                } else { consoleInfo('Response: ' + resp.responseText) ; if (get.reply.status != 'done') api.tryNew(get.reply, activeAPI) }
            } else if (activeAPI == 'MixerBox AI') {
                if (resp.responseText) {
                    try {
                        const extractedData = Array.from(resp.responseText.matchAll(/data:(.*)/g), match => match[1]
                            .replace(/\[SPACE\]/g, ' ').replace(/\[NEWLINE\]/g, '\n'))
                            .filter(match => !/(?:message_(?:start|end)|done)/.test(match))
                        show.reply(extractedData.join(''), footerContent)
                        get.reply.status = 'done' ; api.clearTimedOut(get.reply.triedAPIs) ; get.reply.attemptCnt = null
                    } catch (err) { // use different endpoint or suggest OpenAI
                        consoleInfo('Response: ' + resp.responseText)
                        consoleErr(appAlerts.parseFailed, err)
                        if (get.reply.status != 'done') api.tryNew(get.reply, activeAPI)
                    }
                } else { consoleInfo('Response: ' + resp.responseText) ; if (get.reply.status != 'done') api.tryNew(get.reply, activeAPI) }
            }
        },

        stream: function(activeAPI, stream) {
            if (config.streamingDisabled || !config.proxyAPIenabled) return
            const reader = stream.response.getReader() ; let accumulatedChunks = ''
            reader.read().then(processStreamText).catch(err => consoleErr('Error processing stream', err.message))
            function processStreamText({ done, value }) {
                if (done) {
                    get.reply.status = 'done' ; get.reply.sender = null
                    api.clearTimedOut(get.reply.triedAPIs) ; get.reply.attemptCnt = null
                    return
                }
                let chunk = new TextDecoder('utf8').decode(new Uint8Array(value))
                if (activeAPI == 'MixerBox AI') { // pre-process chunks
                    const extractedChunks = Array.from(chunk.matchAll(/data:(.*)/g), match => match[1]
                        .replace(/\[SPACE\]/g, ' ').replace(/\[NEWLINE\]/g, '\n'))
                        .filter(match => !/(?:message_(?:start|end)|done)/.test(match))
                    chunk = extractedChunks.join('')
                }
                accumulatedChunks = apis[activeAPI].accumulatesText ? chunk : accumulatedChunks + chunk
                if (/['"]?status['"]?:\s*['"]Fail['"]/.test(accumulatedChunks)) { // GPTforLove fail
                    consoleErr('Response', accumulatedChunks)
                    if (get.reply.status != 'done' && !get.reply.sender) api.tryNew(get.reply, activeAPI)
                    return
                }
                try { // to show stream text
                    let textToShow
                    if (activeAPI == 'GPTforLove') { // extract parentID + latest chunk text
                        const jsonLines = accumulatedChunks.split('\n'),
                              nowResult = JSON.parse(jsonLines[jsonLines.length - 1])
                        if (nowResult.id) apiIDs.gptForLove.parentID = nowResult.id // for contextual replies
                        textToShow = nowResult.text
                    } else textToShow = accumulatedChunks
                    if (textToShow && get.reply.status != 'done') { // text ready, app waiting or sending
                        if (!get.reply.sender) get.reply.sender = activeAPI // app is waiting, become sender
                        if (get.reply.sender == activeAPI) show.reply(textToShow, footerContent)
                    }
                } catch (err) { consoleErr('Error showing stream', err.message) }
                return reader.read().then(({ done, value }) => {
                    if (get.reply.sender == activeAPI) // am designated sender, recurse
                        processStreamText({ done, value })
                }).catch(err => consoleErr('Error reading stream', err.message))
            }
        }
    }

    // Define SHOW functions

    const show = {

        reply: function(answer) {

            // Build answer interface up to reply section if missing
            if (!appDiv.querySelector('pre')) {
                while (appDiv.firstChild) appDiv.removeChild(appDiv.firstChild) // clear app content

                // Create/append app prefix span + title anchor
                const appPrefixSpan = document.createElement('span')
                appPrefixSpan.innerText = '🤖 ' ; appPrefixSpan.className = 'no-user-select'
                appPrefixSpan.style.fontSize = isMobile ? '1.7rem' : '1.1rem'
                const appTitleAnchor = createAnchor(config.appURL, (() => {
                    if (appLogoImg.loaded) { // size/pos/return app logo img
                        appLogoImg.width = isMobile ? 197 : isFirefox ? 127 : 125
                        appLogoImg.style.cssText = (
                            appLogoImg.loaded ? `position: relative ; top: ${ isMobile ? 4 : isFirefox ? 3 : 2 }px`
                                              + ( isMobile ? '; margin-left: 1px' : '' ) : '' )
                        return appLogoImg
                    } else { // create/fill/size/return app name span
                        const appNameSpan = document.createElement('span')
                        appNameSpan.innerText = config.appName
                        appNameSpan.style.fontSize = isMobile ? '1.7rem' : '1.1rem'
                        return appNameSpan
                    }
                })())
                appTitleAnchor.classList.add('app-name', 'no-user-select')
                appDiv.append(appPrefixSpan, appTitleAnchor)

                // Create/append 'by KudoAI'
                if (!isMobile) {
                    const kudoAIspan = document.createElement('span')
                    kudoAIspan.classList.add('kudoai', 'no-user-select') ; kudoAIspan.textContent = 'by '
                    const kudoAIlink = createAnchor('https://www.kudoai.com', 'KudoAI')
                    kudoAIspan.append(kudoAIlink) ; appDiv.append(kudoAIspan)
                }

                // Create/append about button
                const aboutSpan = document.createElement('span'),
                      aboutSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                      aboutSVGpath = document.createElementNS('http://www.w3.org/2000/svg','path')
                aboutSpan.id = 'about-btn' // for toggleTooltip()
                aboutSpan.className = 'corner-btn' ; aboutSpan.style.marginTop = `${ isMobile ? 0.25 : -0.15 }rem`
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
                    speakSpan.className = 'corner-btn' ; speakSpan.style.margin = `${ isMobile ? '0.11rem 10px' : '-0.29rem 5px' } 0 0`
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
                    wsbSpan.className = 'corner-btn' ; wsbSpan.style.margin = '-0.1rem 9px 0 0'
                    wsbSpan.append(wsbSVG) ; appDiv.append(wsbSpan) ; updateWSBsvg()
                }

                // Add tooltips
                if (!isMobile) appDiv.append(tooltipDiv)

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
                          payload = { text: appDiv.querySelector('pre').textContent, curTime: Date.now(),
                                      spokenDialect: replyDialect.code, rate: replyDialect.rate.toString() },
                          key = CryptoJS.enc.Utf8.parse('76350b1840ff9832eb6244ac6d444366'),
                          iv = CryptoJS.enc.Utf8.parse(atob('AAAAAAAAAAAAAAAAAAAAAA==') || '76350b1840ff9832eb6244ac6d444366')
                    const securePayload = CryptoJS.AES.encrypt(JSON.stringify(payload), key, {
                        iv: iv, mode: CryptoJS.mode.CBC, pad: CryptoJS.pad.Pkcs7 }).toString()
                    GM.xmlHttpRequest({ // audio from Sogou TTS
                        url: 'https://fanyi.sogou.com/openapi/external/getWebTTS?S-AppId=102356845&S-Param='
                            + encodeURIComponent(securePayload),
                        method: 'GET', responseType: 'arraybuffer',
                        onload: async resp => {
                            if (resp.status != 200) chatgpt.speak(answer, { voice: 2, pitch: 1, speed: 1.5 })
                            else {
                                const audioContext = new (window.AudioContext || window.webkitAudioContext)()
                                audioContext.decodeAudioData(resp.response, buffer => {
                                    const audioSrc = audioContext.createBufferSource()
                                    audioSrc.buffer = buffer
                                    audioSrc.connect(audioContext.destination) // connect source to speakers
                                    audioSrc.start(0) // play audio
                        })}}
                    })
                })
                ssbSVG?.addEventListener('click', () => toggleSidebar('sticky'))
                wsbSVG?.addEventListener('click', () => toggleSidebar('wider'))
                if (!isMobile) // add hover listeners for tooltips
                    [aboutSpan, speakSpan, ssbSpan, wsbSpan].forEach(span => { if (span)
                        ['mouseover', 'mouseout'].forEach(event => span.addEventListener(event, toggleTooltip)) })

                // Show standby state if prefix/suffix mode on
                if (answer == 'standby') {
                    const standbyBtn = document.createElement('button')
                    standbyBtn.className = 'standby-btn'
                    standbyBtn.textContent = msgs.buttonLabel_sendQueryToGPT || 'Send search query to GPT'
                    appDiv.append(standbyBtn)
                    standbyBtn.addEventListener('click', () => {
                        appAlert('waitingResponse')
                        msgChain.push({ role: 'user', content: augmentQuery(new URL(location.href).searchParams.get('q')) })
                        show.reply.submitSrc = 'click' // for show.reply() auto-focus
                        get.reply(msgChain)
                    })

                // Otherwise create/append answer bubble
                } else {
                    const balloonTipSpan = document.createElement('span')
                    var answerPre = document.createElement('pre')
                    balloonTipSpan.className = 'balloon-tip'
                    balloonTipSpan.style.cssText = ( // pos it
                        `top: ${ isMobile ? 0.2303 : isFirefox ? 0.45 : 0.219 }em ;`
                      + `right: ${ isMobile ? 11.2 : (
                                  isFirefox ? ( 14.65 - ( appLogoImg.loaded ? 0 : 2.13 ))
                                            : ( 7.25 -  ( appLogoImg.loaded ? 0 : ( hasSidebar ? 1.25 : 1.29 ))))}em`
                    )
                    appDiv.append(balloonTipSpan) ; appDiv.append(answerPre)
                }
            }

            // Build reply section if missing
            if (!appDiv.querySelector('#app-chatbar')) {

                // Init/clear reply section content/classes
                const replySection = appDiv.querySelector('section') || document.createElement('section')
                while (replySection.firstChild) replySection.removeChild(replySection.firstChild)
                replySection.classList.remove('loading', 'no-user-select')

                // Create/append section elems
                const replyForm = document.createElement('form'),
                      continueChatDiv = document.createElement('div'),
                      chatTextarea = document.createElement('textarea')
                continueChatDiv.className = 'continue-chat'
                chatTextarea.id = 'app-chatbar' ; chatTextarea.rows = '1'
                chatTextarea.placeholder = ( answer == 'standby' ? msgs.placeholder_askSomethingElse || 'Ask something else'
                                                                 : msgs.tooltip_sendReply || 'Send reply' ) + '...'
                chatTextarea.style.width = hasSidebar ? '88.8%' : '89.5%'
                continueChatDiv.append(chatTextarea)
                replyForm.append(continueChatDiv) ; replySection.append(replyForm)
                appDiv.insertBefore(replySection, appDiv.querySelector('footer'))

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

                // Init/fill/append footer
                const appFooter = appDiv.querySelector('footer') || document.createElement('footer')
                appFooter.append(footerContent)
                if (!appDiv.querySelector('footer')) appDiv.append(appFooter)

                // Add reply section listeners
                replyForm.addEventListener('keydown', handleEnter)
                replyForm.addEventListener('submit', handleSubmit)
                chatTextarea.addEventListener('input', autosizeChatbar)
                if (!isMobile) // add hover listeners for tooltips
                    ['mouseover', 'mouseout'].forEach(event => sendButton.addEventListener(event, toggleTooltip))

                // Scroll to top on mobile if user interacted
                if (isMobile && show.reply.submitSrc) {
                    document.body.scrollTop = 0 // Safari
                    document.documentElement.scrollTop = 0 // Chromium/FF/IE
                }
            }

            // Render/show answer if query sent
            if (answer != 'standby') {
                const answerPre = appDiv.querySelector('pre')
                answerPre.innerHTML = marked.parse(answer) // render markdown
                hljs.highlightAll() // highlight code

                // Typeset math
                answerPre.querySelectorAll('code').forEach(codeBlock => { // add linebreaks after semicolons
                    codeBlock.innerHTML = codeBlock.innerHTML.replace(/;\s*/g, ';<br>') })
                const elemsToRenderMathIn = [answerPre, ...answerPre.querySelectorAll('*')]
                elemsToRenderMathIn.forEach(elem => {
                    renderMathInElement(elem, { // typeset math
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
                })})

                if (config.stickySidebar) updateTweaksStyle() // to reset answerPre height

                // Auto-scroll if active
                if (config.autoScroll && !isMobile && config.proxyAPIenabled && !config.streamingDisabled) {
                    if (config.stickySidebar) answerPre.scrollTop = answerPre.scrollHeight
                    else window.scrollBy({ top: appDiv.querySelector('#app-chatbar').getBoundingClientRect().bottom - window.innerHeight +13 })
                }
            }

            // Focus chatbar conditionally
            if (!isMobile // exclude mobile devices to not auto-popup OSD keyboard
                && ( appDiv.offsetHeight < window.innerHeight - appDiv.getBoundingClientRect().top ) // app fully above fold
            ) appDiv.querySelector('#app-chatbar').focus()
            show.reply.submitSrc = 'none'

            function handleEnter(event) {
                if (event.key == 'Enter' || event.keyCode == 13) {
                    if (event.ctrlKey) { // add newline
                        const chatTextarea = appDiv.querySelector('#app-chatbar'),
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
                const chatTextarea = appDiv.querySelector('#app-chatbar')
                if (msgChain.length > 2) msgChain.splice(0, 2) // keep token usage maintainable
                msgChain = stripQueryAugments(msgChain)
                const prevReplyTrimmed = appDiv.querySelector('pre')?.textContent.substring(0, 250 - chatTextarea.value.length) || ''
                msgChain.push({ role: 'assistant', content: prevReplyTrimmed })
                msgChain.push({ role: 'user', content: augmentQuery(chatTextarea.value) })
                get.reply(msgChain)

                // Remove re-added reply section listeners
                const replyForm = appDiv.querySelector('form')
                replyForm.removeEventListener('keydown', handleEnter)
                replyForm.removeEventListener('submit', handleSubmit)
                chatTextarea.removeEventListener('input', autosizeChatbar)

                // Remove related queries
                try {
                    const relatedQueriesDiv = document.querySelector('.related-queries')
                    Array.from(relatedQueriesDiv.children).forEach(child => {
                        ['click', 'keydown'].forEach(event => child.removeEventListener(event, handleRQevent)) })
                    relatedQueriesDiv.remove()
                } catch (err) {}

                // Remove 'Send reply' tooltip from send btn clicks
                if (!isMobile) tooltipDiv.style.opacity = 0

                // Clear footer
                const appFooter = appDiv.querySelector('footer')
                while (appFooter.firstChild) appFooter.removeChild(appFooter.firstChild)

                // Show loading status
                const replySection = appDiv.querySelector('section')
                replySection.classList.add('loading', 'no-user-select')
                replySection.innerText = appAlerts.waitingResponse
            }

            // Autosize chatbar function
            const chatTextarea = appDiv.querySelector('#app-chatbar'),
                  { paddingTop, paddingBottom } = getComputedStyle(chatTextarea),
                  vOffset = parseInt(paddingTop, 10) + parseInt(paddingBottom, 10)
            let prevLength = chatTextarea.value.length
            function autosizeChatbar() {
                const newLength = chatTextarea.value.length
                if (newLength < prevLength) { // if deleting txt
                    chatTextarea.style.height = 'auto' // ...auto-fit height
                    if (parseInt(getComputedStyle(chatTextarea).height, 10) < 35) { // if down to one line
                        chatTextarea.style.height = '16px' } // ...reset to original height
                }
                const unpaddedHeight = chatTextarea.scrollHeight - vOffset
                chatTextarea.style.height = `${ unpaddedHeight > 29 ? unpaddedHeight : 16 }px`
                prevLength = newLength
            }
        },

        related: function(queries) {
            if (!show.related.greenlit) { // wait for get.reply() to finish showing answer
                show.related.statusChecker = setInterval(() => {
                    if (get.reply.status != 'waiting') {
                        show.related.greenlit = true
                        show.related(queries)
                        clearInterval(show.related.statusChecker)
                }}, 500, queries)
            } else { // show queries from latest statusChecker call
                show.related.greenlit = false
                if (queries && !appDiv.querySelector('.related-queries')) {

                    // Create/classify/append parent div
                    const relatedQueriesDiv = document.createElement('div') ; relatedQueriesDiv.className = 'related-queries'
                    appDiv.append(relatedQueriesDiv)

                    // Fill each child div, add attributes + icon + listener
                    queries.forEach((query, idx) => {
                        const relatedQueryDiv = document.createElement('div'),
                              relatedQuerySVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                              relatedQuerySVGpath = document.createElementNS('http://www.w3.org/2000/svg','path')

                        // Add attributes
                        relatedQueryDiv.title = msgs.tooltip_sendRelatedQuery || 'Send related query'
                        relatedQueryDiv.classList.add('related-query', 'fade-in', 'no-user-select')
                        relatedQueryDiv.setAttribute('tabindex', 0)
                        relatedQueryDiv.textContent = query

                        // Create icon
                        for (const [attr, value] of [
                            ['viewBox', '0 0 24 24'], ['width', 18], ['height', 18], ['fill', 'currentColor']
                        ]) relatedQuerySVG.setAttribute(attr, value)
                        relatedQuerySVGpath.setAttribute('d',
                            'M16 10H6.83L9 7.83l1.41-1.41L9 5l-6 6 6 6 1.41-1.41L9 14.17 6.83 12H16c1.65 0 3 1.35 3 3v4h2v-4c0-2.76-2.24-5-5-5z')
                        relatedQuerySVG.style.transform = 'rotate(180deg)' // flip arrow upside down

                        // Assemble/insert elems
                        relatedQuerySVG.append(relatedQuerySVGpath) ; relatedQueryDiv.prepend(relatedQuerySVG)
                        relatedQueriesDiv.append(relatedQueryDiv)

                        // Add fade + listeners
                        setTimeout(() => {
                            relatedQueryDiv.classList.add('active')
                            for (const event of ['click', 'keydown']) relatedQueryDiv.addEventListener(event, handleRQevent)
                        }, idx * 100)
                    })

                    updateTweaksStyle() // to shorten <pre> max-height
        }}}
    }

    // Run MAIN routine

    // Define MESSAGES
    let msgs = {}
    const msgsLoaded = new Promise(resolve => {
        const msgHostDir = config.assetHostURL + 'greasemonkey/_locales/',
              msgLocaleDir = ( config.userLanguage ? config.userLanguage.replace('-', '_') : 'en' ) + '/'
        let msgHref = msgHostDir + msgLocaleDir + 'messages.json', msgXHRtries = 0
        GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
        function onLoad(resp) {
            try { // to return localized messages.json
                const msgs = JSON.parse(resp.responseText), flatMsgs = {}
                for (const key in msgs)  // remove need to ref nested keys
                    if (typeof msgs[key] == 'object' && 'message' in msgs[key])
                        flatMsgs[key] = msgs[key].message
                resolve(flatMsgs)
            } catch (err) { // if bad response
                msgXHRtries++ ; if (msgXHRtries == 3) return resolve({}) // try up to 3X (original/region-stripped/EN) only
                msgHref = config.userLanguage.includes('-') && msgXHRtries == 1 ? // if regional lang on 1st try...
                    msgHref.replace(/([^_]*)_[^/]*(\/.*)/, '$1$2') // ...strip region before retrying
                        : ( msgHostDir + 'en/messages.json' ) // else use default English messages
                GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
            }
        }
    }) ; if (!config.userLanguage.startsWith('en')) try { msgs = await msgsLoaded; } catch (err) {}

    // Init MENU objs
    const menuIDs = [] // to store registered cmds for removal while preserving order
    const state = {
        symbol: ['❌', '✔️'],
        word: [(msgs.state_off || 'Off').toUpperCase(), (msgs.state_on || 'On').toUpperCase()],
        separator: getUserscriptManager() == 'Tampermonkey' ? ' — ' : ': '
    }

    // Init UI flags
    await Promise.race([ // dark theme label loaded or 0.5s passed
        new Promise(resolve => {
            (function checkDarkThemeLabel() {
                [...document.querySelectorAll('span')].find(span => span.textContent == 'Dark theme')
                    ? resolve(true) : setTimeout(checkDarkThemeLabel, 200)
            })()
        }), new Promise(resolve => setTimeout(resolve, 500))
    ])
    let scheme = config.scheme || ( isDarkMode() ? 'dark' : 'light' )
    const isFirefox = chatgpt.browser.isFirefox(),
          isMobile = chatgpt.browser.isMobile(),
          hasSidebar = !!document.querySelector('[class*="kp-"]')

    // Pre-load LOGO
    const appLogoImg = document.createElement('img') ; updateAppLogoSrc()
    appLogoImg.onload = () => appLogoImg.loaded = true // for app header tweaks in show.reply() + .balloon-tip pos in updateAppStyle()

    registerMenu() // create browser toolbar menu

    if (window.location.search.includes('&udm=2')) return // exit if on Google Images

    // Init ALERTS
    const appAlerts = {
        waitingResponse:  `${ msgs.alert_waitingResponse || 'Waiting for ChatGPT response' }...`,
        login:            `${ msgs.alert_login || 'Please login' } @ `,
        checkCloudflare:  `${ msgs.alert_checkCloudflare || 'Please pass Cloudflare security check' } @ `,
        tooManyRequests:  `${ msgs.alert_tooManyRequests || 'API is flooded with too many requests' }.`,
        parseFailed:      `${ msgs.alert_parseFailed || 'Failed to parse response JSON' }.`,
        proxyNotWorking:  `${ msgs.mode_proxy || 'Proxy Mode' } ${ msgs.alert_notWorking || 'is not working' }.`,
        openAInotWorking: `OpenAI API ${ msgs.alert_notWorking || 'is not working' }.`,
        suggestProxy:     `${ msgs.alert_try || 'Try' } ${ msgs.alert_switchingOn || 'switching on' } ${ msgs.mode_proxy || 'Proxy Mode' }`,
        suggestOpenAI:    `${ msgs.alert_try || 'Try' } ${ msgs.alert_switchingOff || 'switching off' } ${ msgs.mode_proxy || 'Proxy Mode' }`
    }

    // Stylize APP elems
    const appStyle =  document.createElement('style') ; updateAppStyle()
    const hljsStyle = document.createElement('style') ; hljsStyle.innerText = GM_getResourceText('hljsCSS')
    document.head.append(appStyle, hljsStyle)

    // Stylize SITE elems
    const tweaksStyle = document.createElement('style'),
          wsbStyles = '#center_col, #center_col div { max-width: 506px !important }' // shrink center column
                    + '.googlegpt { width: 465px }' // expand GoogleGPT when in limiting Google host container
                    + '.googlegpt ~ div { width: 540px !important }' // expand side snippets
                    + `#app-chatbar { width: ${ hasSidebar ? 91.3 : 91.8 }% !important }`,
          ssbStyles = '.googlegpt { position: sticky ; top: 87px }'
                    + '.googlegpt ~ * { display: none }' // hide sidebar contents
    updateTweaksStyle() ; document.head.append(tweaksStyle)

    // Create/stylize TOOLTIPs
    if (!isMobile) {
        var tooltipDiv = document.createElement('div') ; tooltipDiv.classList.add('btn-tooltip', 'no-user-select')
        const tooltipStyle = document.createElement('style')
        tooltipStyle.innerText = '.btn-tooltip {'
            + 'background-color: rgba(0, 0, 0, 0.64) ; padding: 6px ; border-radius: 6px ; border: 1px solid #d9d9e3 ;' // bubble style
            + 'font-size: 0.75rem ; color: white ;' // font style
            + 'position: absolute ;' // for updateTooltip() calcs
            + 'box-shadow: 3px 5px 16px 0px rgb(0 0 0 / 21%) ;' // drop shadow
            + 'opacity: 0 ; transition: opacity 0.1s ; height: fit-content ; z-index: 9999 }' // visibility
        document.head.append(tooltipStyle)
    }

    // Create/classify GOOGLEGPT container
    const appDiv = document.createElement('div')
    appDiv.classList.add('googlegpt', 'fade-in')

    // APPEND to Google
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
    let footerContent = createAnchor(config.feedbackURL, msgs.link_shareFeedback || 'Share feedback')

    // Show STANDBY mode or get/show ANSWER
    let msgChain = [{ role: 'user', content: augmentQuery(new URL(location.href).searchParams.get('q')) }]
    if (!config.autoget
        || config.prefixEnabled && !/.*q=%2F/.test(document.location) // prefix required but not present
        || config.suffixEnabled && !/.*q=.*(?:%3F|？|%EF%BC%9F)(?:&|$)/.test(document.location)) { // suffix required but not present
            show.reply('standby', footerContent)
            if (!config.rqDisabled) {
                const lastQuery = stripQueryAugments(msgChain)[msgChain.length - 1].content
                get.related(lastQuery).then(queries => show.related(queries))
                    .catch(err => { consoleErr(err.message) ; api.tryNew(get.related, get.related.api) })
            }
    } else { appAlert('waitingResponse') ; get.reply(msgChain) }

})()
