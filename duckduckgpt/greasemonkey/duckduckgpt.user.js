// ==UserScript==
// @name                DuckDuckGPT 🤖
// @description         Adds AI answers to DuckDuckGo. Ask from any site. Powered by GPT-4o!
// @description:af      Voeg KI-antwoorde by DuckDuckGo. Vra vanaf enige webwerf. Aangedryf deur GPT-4o!
// @description:am      የAI መልስናወርቃለች እርስዎን DuckDuckGo ፍለጋ፣ የእያንዳንዱ ድረ-ገጽን ጥያቄ በመጠቀም ያለበት፣ GPT-4o ተከታታይ!
// @description:ar      يضيف إجابات الذكاء الاصطناعي إلى DuckDuckGo. اسأل من أي موقع. مدعوم بواسطة GPT-4o!
// @description:az      DuckDuckGo-a AI cavabları əlavə edir. Hər hansı bir səhifədən sual edin. GPT-4o ilə işləyir!
// @description:be      Дадае адказы штучнага інтэлекту ў DuckDuckGo. Запытвайце з любога сайта. Аб'яднана з GPT-4o!
// @description:bem     Yamfumano AI mafundo pa DuckDuckGo. Uliza kumayi malo awebusayiti. Eko wakuleta na GPT-4o!
// @description:bg      Добавя AI отговори към DuckDuckGo. Питайте от всяко сайт. Осигурено от GPT-4o!
// @description:bn      DuckDuckGo তে AI উত্তর যোগ করে। যেকোনো সাইট থেকে জিজ্ঞাসা করুন। GPT-4o দ্বারা চালিত!
// @description:bo      DuckDuckGo ནི་ AI དྲུག་བཏུས་བྱས་ཀྱི་འཕྲུལ་ཆས་གསར་ཤོག། གསང་ལས་སྙན་ཞུ་བཞག་པའི་གློ་དོན་འགྱོ་སྡེ། GPT-4o གི་བྱུང་བའི་ལས་རིགས་འཕྲིན་ལས་ཕབ།
// @description:bs      Dodaje AI odgovore u DuckDuckGo pretragu. Pitajte sa bilo kog sajta. Pokreće GPT-4o!
// @description:ca      Afegeix respostes d'IA a DuckDuckGo. Pregunta des de qualsevol lloc web. Amb la tecnologia de GPT-4o!
// @description:ceb     Nagdugang mga tubag sa AI sa DuckDuckGo Search. Pangutana gikan sa bisan unsang site. Gipadagan sa GPT-4o!
// @description:cs      Přidává odpovědi AI do vyhledávání DuckDuckGo. Zeptejte se z libovolného webu. Poháněno GPT-4o!
// @description:cy      Ychwanegu atebion AI i Ddarganfod DuckDuckGo. Gofynnwch o unrhyw safle. Pwerwyd gan GPT-4o!
// @description:da      Tilføjer AI-svar til DuckDuckGo. Spørg fra enhver side. Drevet af GPT-4o!
// @description:de      Fügt KI-Antworten zu DuckDuckGo hinzu. Fragen Sie von jeder Website aus. Angetrieben von GPT-4o!
// @description:el      Προσθέτει απαντήσεις AI στο DuckDuckGo. Κάντε ερωτήσεις από οποιαδήποτε ιστοσελίδα. Τροφοδοτείται από GPT-4o!
// @description:en      Adds AI answers to DuckDuckGo. Ask from any site. Powered by GPT-4o!
// @description:eo      Aldonas AI-respondojn al DuckDuckGo. Demandu de iu ajn retejo. Energio de GPT-4o!
// @description:es      Agrega respuestas de IA a DuckDuckGo. Haz preguntas desde cualquier sitio. ¡Potenciado por GPT-4o!
// @description:et      Lisab DuckDuckGo'le AI-vastuseid. Küsige mis tahes saidilt. Töötab GPT-4o abil!
// @description:eu      Gaiak AI erantzunak gehitu DuckDuckGo-ri. Nahi duzun edozein webguneetatik galdetu. GPT-4o-k gidatuta!
// @description:fa      پاسخهای هوش مصنوعی را به DuckDuckGo اضافه میکند. از هر سایتی بپرسید. توسط GPT-4o پشتیبانی میشود!
// @description:fi      Lisää tekoälyn vastauksia DuckDuckGo:hun. Kysy mistä tahansa sivulta. Toimii GPT-4o:n avulla!
// @description:fil     Nagdudugtong ng mga sagot ng AI sa DuckDuckGo. Magtanong mula sa anumang site. Hinihikayat ng GPT-4o!
// @description:fj      Vakarautaka na vosa vakatotolo ni AI ki na yasa ni DuckDuckGo. Taroga mai na yasa e dua na vanua. Vakarautaki e na GPT-4o!
// @description:fo      Leggur AI svar til DuckDuckGo. Spyr frá hvørjum síðu. Virkar við GPT-4o!
// @description:fr      Ajoute des réponses IA à DuckDuckGo. Demandez à partir de n'importe quel site. Alimenté par GPT-4o!
// @description:fr-CA   Ajoute des réponses IA à DuckDuckGo. Demandez à partir de n'importe quel site. Alimenté par GPT-4o!
// @description:ga      Cuireann sé freagraí AI le DuckDuckGo. Fiafraigh ó aon suíomh. Tá sé cumraithe ag GPT-4o!
// @description:gd      Cuiridh e freagairtean AI ri DuckDuckGo. Fiosrachadh bho gach làrach. Air a chumasachadh le GPT-4o!
// @description:gl      Engade respostas de IA á barra lateral de procura de DuckDuckGo. Pregunta desde calquera sitio. Alimentado por GPT-4o!
// @description:gn      Oñemohẽ Guyra'ihoãi Tupãsy AI rire DuckDuckGo Search. Pehendu mba'éichapa peteĩ ne'ẽrõ. Mboguero ko'ãiva GPT-4o!
// @description:gu      DuckDuckGo પર AI જવાબો ઉમેરે છે. કોઈપણ સાઇટથી પૂછો. GPT-4o પર ચાલે છે!
// @description:ha      Zaya sauyaƙa daga AI zuwa bidiyo na bidiyon DuckDuckGo. Tambaya daga irin yayan saitoci. Yana yin GPT-4o!
// @description:haw     Hoʻohui aku i nā hōʻike a ka ʻikeʻike ʻana i ka papa aoʻao o ka ʻimi ʻana iā DuckDuckGo. Kāhea mai ma nā kahua like ʻole. Hōʻoikaika ʻia e GPT-4o!
// @description:he      מוסיף תשובות המופעלות על ידי AI לסרגל הצד של DuckDuckGo Search. שאל מכל אתר. מופעל על ידי GPT-4o!
// @description:hi      DuckDuckGo पर AI उत्तर जोड़ता है। किसी भी साइट से पूछें। GPT-4o के द्वारा संचालित!
// @description:hr      Dodaje odgovore AI na bočnoj traci pretraživanja DuckDuckGo. Pitajte s bilo kojeg mjesta. Pokreće GPT-4o!
// @description:ht      Ajoute repons IA nan barre laterale Rechèch DuckDuckGo a. Mandem soti nan nenpòt kote. Difize pa GPT-4o!
// @description:hu      AI válaszokat ad a DuckDuckGo Keresés oldalsávjához. Kérdezzen bárhonnan. GPT-4o által hajtva!
// @description:hy      Ավելացնում է AI պատասխաններ DuckDuckGo Search-ի կողմից: Հարցերը կարող եք կատարել ցանկացած կայքից: Գործում է GPT-4o!
// @description:ia      Addi responsas de AI al barra lateral de cerca de DuckDuckGo. Interroga ex ulle sito. Functiona per GPT-4o!
// @description:id      Menambahkan jawaban AI ke sidebar pencarian DuckDuckGo. Tanya dari situs mana pun. Didukung oleh GPT-4o!
// @description:ig      Tinye ndebanye AI na ohere na-atọ ọnụ ahụ na DuckDuckGo. Weere ma ozi site n'anya. Nwere ike ina-emume GPT-4o!
// @description:is      Bætir við AI svar við leitarstikuna DuckDuckGo. Spyrji frá hverju síðu. Keyrir á GPT-4o!
// @description:it      Aggiunge risposte IA alla barra laterale di ricerca di DuckDuckGo. Chiedi da qualsiasi sito. Alimentato da GPT-4o!
// @description:ja      DuckDuckGoの検索バーサイドバーにAIの回答を追加します。どのサイトからでも質問してください。GPT-4oで駆動しています！
// @description:jv      Nambahaké jawaban AI dhisik sampingan DuckDuckGo. Tanya saka piranti kanthi apapun. Didukung déning GPT-4o!
// @description:ka      დაამატებს AI პასუხებს DuckDuckGo ძებნის ზღვასთან. გთხოვთ ნებისმიერ საიტიდან. მუშაობს GPT-4o-ზე!
// @description:kk      DuckDuckGo іздеу тақтасына AI жауаптарын қосады. Кез келген сайттан сұрау жасаңыз. GPT-4o үшін жұмыс жасайды!
// @description:kl      Tilersiornerit AI-svarerilluunngorniarnera DuckDuckGo. Arlaanngaanneersorneq ataaseqarnissaanik. Aamma GPT-4o ippit!
// @description:km      បន្ថែមចម្លើយ AI ទៅជួរស្វ័រ DuckDuckGo។ សួរពីតំបន់មួយណាមួយ។ ប្រព្រឹត្តនៅលើ GPT-4o!
// @description:kn      DuckDuckGo ಗೆ AI ಉತ್ತರಗಳನ್ನು ಸೇರಿಸುತ್ತದೆ. ಯಾವುದೇ ಸೈಟ್ನಿಂದ ಕೇಳಿ. GPT-4o ನಿಂದ ನಡೆಸಲ್ಪಡುತ್ತಿದೆ!
// @description:ko      DuckDuckGo 검색 사이드 바에 AI 답변을 추가합니다. 어느 사이트에서든 질문하세요. GPT-4o로 작동됩니다!
// @description:ku      Bersivên AI yên DuckDuckGo Search-ê dikeve kêleka siyayê. Ji her çi malperê pirs bike. Li ser GPT-4o pêşveçûn dike!
// @description:ky      DuckDuckGo издөө тамчысына AI жоопторду кошотот. Кандай сымалда калсаңыз болот. GPT-4o иштебейт!
// @description:la      Addit responsa AI ad latere explorandi DuckDuckGo. Interroga ex quacumque pagina. Agitur per GPT-4o!
// @description:lb      Setzt AI Äntwerten bei der DuckDuckGo Sichleeschbaarsäit derbäi. Froe vun där Äntwerten. Gesteiert vun GPT-4o!
// @description:lg      Ekola ebyamagero by'obuloko ku ssentebe ya sokweerabira ya DuckDuckGo. Ekola ebyamagero ku kintu kyonna. Ekitegedde nga GPT-4o!
// @description:ln      Kokata lisakoli ya téléchargement ya DuckDuckGo. Soma mpe mosala oyo ekóya. Epai na GPT-4o!
// @description:lo      ຕື່ມຄຳຕອບຈາກ AI ໃນເຄື່ອງມືການຊອກຫາຂອງ DuckDuckGo. ບໍ່ມີເຄື່ອງທີ່ໄດ້ປະກອບ. ເຮັດໃຫ້ໂປຣໄຟຟ້າໃຊ້ເປັນ GPT-4o!
// @description:lt      Prideda AI atsakymų į paieškos juostos šoną DuckDuckGo. Klauskite iš bet kurios svetainės. Veikia su GPT-4o!
// @description:lv      Pievieno atbildes no AI DuckDuckGo meklēšanas sānjoslā. Jautājiet no jebkuras vietnes. Darbojas ar GPT-4o!
// @description:mg      Manampy volabe AI ao amin'ny sidebar ny hetsika DuckDuckGo. Mandefa amin'ny toerana iray. Manankarena amin'ny GPT-4o!
// @description:mi      Tāpirihia ngā whakautu AI ki te tāpae mātaitanga DuckDuckGo. Pātai mai i ētahi tūranga. E whakahaere ana i te GPT-4o!
// @description:mk      Додава одговори од ИИ на страничната лента на пребарувањето DuckDuckGo. Прашајте од било која страница. Поддржано од GPT-4o!
// @description:ml      DuckDuckGo-യിലേക്ക് AI ഉത്തരങ്ങൾ ചേർക്കുന്നു. ഏതെങ്കിലും സൈറ്റിൽ നിന്ന് ചോദിക്കുക. GPT-4o നൽകുന്നത്!
// @description:mn      DuckDuckGo хайлтын хажуугийн самбарт AI хариултуудыг нэмдэг. Ямар ч сайтаас асуугаарай. GPT-4o дэмжлэгтэй!
// @description:mr      DuckDuckGo च्या शोध साइडबारमध्ये AI उत्तरे जोडली जातात. कोणत्याही साइटवरून विचारा. GPT-4o द्वारा समर्थित!
// @description:ms      Menambah jawapan AI ke sidebar DuckDuckGo. Tanya dari mana-mana laman web. Dikuasakan oleh GPT-4o!
// @description:mt      Iżżid tweġibiet AI mal-sidebar ta' DuckDuckGo. Staqsi minn kwalunkwe sit. Mgħammar minn GPT-4o!
// @description:my      DuckDuckGo ရှိ AI အဖြေများကို ထည့်သွင်းသည်။ မည်သည့်ဆိုဒ်မှမေးပါ။ GPT-4o ဖြင့်အထောက်အပံ့ပြုသည်!
// @description:na      Ongerenga mea a AI ki le tofiga o DuckDuckGo. Fesili mai so’o se ‘upega tafa’ilagi. Fa’aola e GPT-4o!
// @description:nb      Legger til AI-svar i DuckDuckGo sidefeltet. Spør fra hvilken som helst side. Drevet av GPT-4o!
// @description:nd      Ithunyelwe izimpendulo ze-AI ku-DuckDuckGo. Buza kusuka kunoma yisiphi isiza. Iqhutshwa yi-GPT-4o!
// @description:ne      DuckDuckGo खोजको साइडबारमा AI उत्तरहरू थप्छ। कुनै पनि साइटबाट सोध्नुहोस्। GPT-4o द्वारा समर्थित!
// @description:ng      Ongeza majibu ya AI kwenye menyu ya DuckDuckGo. Uliza kutoka kwa tovuti yoyote. Inaendeshwa na GPT-4o!
// @description:nl      Voegt AI-antwoorden toe aan de DuckDuckGo zijbalk. Vraag vanaf elke site. Aangedreven door GPT-4o!
// @description:nn      Legg til AI-svar i DuckDuckGo sidefelt. Spør fra hvilken som helst side. Drevet av GPT-4o!
// @description:no      Legger til AI-svar i DuckDuckGo sidefelt. Spør fra hvilken som helst side. Drevet av GPT-4o!
// @description:nso     E eketsa dikarabo tša AI go sephateng sa DuckDuckGo. Botšiša go tšwa sebakeng se sengwe le se sengwe. E hloletšwe ke GPT-4o!
// @description:ny      Imathandizira mayankho a AI ku sidebar ya DuckDuckGo. Funsani kuchokera patsamba lililonse. Yothandizidwa ndi GPT-4o!
// @description:oc      Apond las responsas AI a la barra laterala de DuckDuckGo. Demandatz a partir de qualsevol site. Alimentat per GPT-4o!
// @description:om      Deebii AI DuckDuckGo irratti dabalata. Marsariitii kamirraayyuu gaafadhu. GPT-4o tiin kan hojjetu!
// @description:or      DuckDuckGo କୁ AI ଉତ୍ତର ଯୋଗ କରେ | ଯେକ any ଣସି ସାଇଟରୁ ପଚାର | GPT-4o ଦ୍ୱାରା ଚାଳିତ!
// @description:pa      DuckDuckGo ਲਈ AI ਜਵਾਬ ਜੋੜਦਾ ਹੈ। ਕਿਸੇ ਵੀ ਸਾਈਟ ਤੋਂ ਪੁੱਛੋ. GPT-4o ਦੁਆਰਾ ਸੰਚਾਲਿਤ!
// @description:pl      Dodaje odpowiedzi AI do paska bocznego DuckDuckGo. Zapytaj z dowolnej strony. Wspierany przez GPT-4o!
// @description:ps      DuckDuckGo ته د AI ځوابونه اضافه کوي. له هر سایټ څخه پوښتنه وکړئ. د GPT-4o لخوا پرمخ وړل کیږي!
// @description:pt      Adiciona respostas AI à barra lateral do DuckDuckGo. Pergunte de qualquer site. Alimentado por GPT-4o!
// @description:pt-BR   Adiciona respostas AI à barra lateral do DuckDuckGo. Pergunte de qualquer site. Alimentado por GPT-4o!
// @description:qu      Añade respuestas de AI a la barra lateral de DuckDuckGo. Pregunta desde cualquier sitio. Impulsado por GPT-4o!
// @description:rm      Agiunta las respostas AI a la barra laterala da DuckDuckGo. Dumonda da tut il link. Sustegnì da GPT-4o!
// @description:rn      Yongeramwo inyishu za AI ku rubuga rwa DuckDuckGo. Baza kuri site yose. Iterwa n’inkomezi na GPT-4o!
// @description:ro      Adaugă răspunsuri AI în bara laterală DuckDuckGo. Întreabă de pe orice site. Susținut de GPT-4o!
// @description:ru      Добавляет ответы AI на боковую панель DuckDuckGo. Спрашивайте с любого сайта. На базе GPT-4o!
// @description:rw      Yongerera ibisubizo bya AI mu ruhande rwa DuckDuckGo. Ubusabe kuri site iyo ari yo yose. Gishyigikiwe na GPT-4o!
// @description:sa      DuckDuckGo इत्यत्र AI उत्तराणि योजयति । कस्यापि साइट् तः पृच्छन्तु। GPT-4o द्वारा संचालित!
// @description:sat     DuckDuckGoᱥ ᱵᱟᱨᱦᱟᱨᱚᱛ ᱠᱟᱹᱞᱤᱞᱟ AI ᱨᱮᱞᱟ ᱦᱚᱱᱮᱡ (GPT-4o ᱚᱛᱷᱟ ᱠᱚᱢᱵᱚᱨᱟᱺᱡ!)
// @description:sc      Aghjunghje risposte AI à a barra laterale di DuckDuckGo. Dumandate da qualsiasi situ. Supportatu da GPT-4o!
// @description:sd      شامل ڪري ٿو AI جوابن کي DuckDuckGo ڏانهن. ڪنهن به سائيٽ کان پڇو. GPT-4o پاران طاقتور!
// @description:se      Loahpa AI-vástádusat DuckDuckGo gaskkaside. Jearahuvvon gosage sajis. Doaimmasaš GPT-4o!
// @description:sg      Tisa na tîsânga ya AI kuna ntsâdi ya DuckDuckGo. Sônga kuna site y'oseî. Sa tebelî GPT-4o!
// @description:si      DuckDuckGo සෙවුමේ AI පිළිතුරු එකතු කරයි. කිසිඳු වෙබ් අඩවියකින් විමසන්න. GPT-4o විසින් බලගැන්වී ඇත!
// @description:sk      Pridáva AI odpovede do bočnej lišty vyhľadávania DuckDuckGo. Spýtajte sa z akejkoľvek stránky. Podporované GPT-4o!
// @description:sl      Dodaja AI odgovore v stransko vrstico iskanja DuckDuckGo. Vprašajte s katere koli strani. Podprto z GPT-4o!
// @description:sm      Faʻaopopo tali AI i le itu saogalemu o le DuckDuckGo. Fesili mai i soʻo se saite. Faʻatinoina e GPT-4o!
// @description:sn      Kupindura maitiro e AI kuve kuwandisa wevhu ra DuckDuckGo Search. Bvunza kubva pane chero saiti. Akakosha ne GPT-4o!
// @description:so      Ku daraya jawaabaha AI ee dhinaca DuckDuckGo. Weydii laga bilaabo goob kasta. Waxaa ku shaqeeya GPT-4o!
// @description:sq      Shton përgjigje AI në anëbardhën e kërkimit DuckDuckGo. Pyet nga çdo faqe. Mbështetur nga GPT-4o!
// @description:sr      Dodaje AI odgovore u bočnu traku DuckDuckGo. Pitajte sa bilo kog sajta. Podržano od strane GPT-4o!
// @description:ss      Faka izimpendulo ze-AI eceleni kwe-DuckDuckGo Search. Buza kusuka kunoma isiphi isiza. Ixhaswe yi-GPT-4o!
// @description:st      Eketsa likarabo tsa AI ho lehlakoreng la DuckDuckGo. Botsa ho tloha sebakeng leha e le sefe. E tsamaisoa ke GPT-4o!
// @description:su      Nambahkeun jawaban AI ka sidebar DuckDuckGo. Tanya ti situs mana waé. Disetir ku GPT-4o!
// @description:sv      Lägger till AI-svar i DuckDuckGo sidofält. Fråga från vilken sida som helst. Drivs av GPT-4o!
// @description:sw      Inaongeza majibu ya AI kwenye upau wa kando wa DuckDuckGo. Uliza kutoka kwa tovuti yoyote. Inaendeshwa na GPT-4o!
// @description:ta      DuckDuckGo க்கு AI பதில்களைச் சேர்க்கிறது. எந்த தளத்தில் இருந்தும் கேளுங்கள். GPT-4o மூலம் இயக்கப்படுகிறது!
// @description:te      DuckDuckGoకి AI సమాధానాలను జోడిస్తుంది. ఏదైనా సైట్ నుండి అడగండి. GPT-4o ద్వారా ఆధారితం!
// @description:tg      Зиёд кардани ҷавобҳои AI ба тарафи DuckDuckGo. Аз ҳар гуна сайт пурсед. Мувофиқи GPT-4o!
// @description:th      เพิ่มคำตอบ AI ในแถบด้านข้างของ DuckDuckGo. ถามจากเว็บไซต์ใดก็ได้. รองรับโดย GPT-4o!
// @description:ti      ናብ DuckDuckGo ናይ AI መልስታት ይውስኽ። ካብ ዝኾነ መርበብ ሓበሬታ ሕተት። ብ GPT-4o ዝሰርሕ!
// @description:tk      DuckDuckGo-a AI jogaplary goşýar. Islendik sahypadan sorag beriň. GPT-4o bilen işleýär!
// @description:tl      Nagdadagdag ng mga sagot na AI sa sidebar ng DuckDuckGo. Magtanong mula sa anumang site. Pinapagana ng GPT-4o!
// @description:tn      E kenyelelitse dikarabo tsa AI lehlakoreng la DuckDuckGo. Botsa ho tswa saeteng efe kapa efe. E tsamaisoa ke GPT-4o!
// @description:to      Tānaki atu ‘a e ngaahi tali AI ki he fehokotaki’anga ki tu‘a ‘o e DuckDuckGo. Fai ha me‘a mei ha saiti pē. Ngāue‘aki ‘e he GPT-4o!
// @description:tr      DuckDuckGo yan çubuğuna AI yanıtları ekler. Herhangi bir siteden sorabilirsiniz. GPT-4o tarafından desteklenmektedir!
// @description:ts      Yongeza swivutiso swa AI ehlangwini ra DuckDuckGo. Vutisa kusuka eka sayiti yin’wana na yin’wana. Ri seketelwa hi GPT-4o!
// @description:tt      DuckDuckGo Эзләү читенә AI җавапларын өсти. Теләсә кайсы сайттан сорагыз. GPT-4o белән эшли!
// @description:tw      Ɛde AI mmuae aka ho maa DuckDuckGo mpapawsoɛ. Bisa fi beae biara. Ɛyɛ GPT-4o a ɛde tumi!
// @description:ug      DuckDuckGo ئىزدەشتە AI جاۋابلىرىنى قوشىدۇ. ھەر قانداق تور بەتتىن سوراڭ. GPT-4o نىڭ قوللىشى بىلەن!
// @description:uk      Додає AI відповіді у бічну панель DuckDuckGo. Питайте з будь-якого сайту. Підтримується GPT-4o!
// @description:ur      DuckDuckGo سائڈبار میں AI جوابات شامل کرتا ہے۔ کسی بھی سائٹ سے پوچھیں۔ GPT-4o کے ذریعے تقویت یافتہ!
// @description:uz      DuckDuckGo qidiruviga AI javoblari qo'shadi. Har qanday saytdan so'rang. GPT-4o tomonidan qo'llab-quvvatlanadi!
// @description:ve      Vho hodza a AI kha zwa vhambadela zwa DuckDuckGo. U nga vhudzisa kha tshiimiswa tshithihi na tshithihi. Zwi khou shuma nga GPT-4o!
// @description:vi      Thêm câu trả lời AI vào thanh bên DuckDuckGo. Hỏi từ bất kỳ trang web nào. Được hỗ trợ bởi GPT-4o!
// @description:vo      Läükon datans AI ad päts binon DuckDuckGo. Pedön sevei okik. Nüköfon dö GPT-4o!
// @description:wa      Åjouter des réponses AI å l'cohete di DuckDuckGo. Dimande a på onk ki site. Sopoirtê pa GPT-4o!
// @description:wo      Duggal na AI ci wetu DuckDuckGo. Laaj fi kan la rekk. Naataanal ko GPT-4o!
// @description:xh      Yongeza iimpendulo ze-AI kwicala le-DuckDuckGo. Buza kwisiza nayiphi na. Iqhutywa yi-GPT-4o!
// @description:yi      מוסיף תשובות AI לסרגל הצד של DuckDuckGo. שאל מכל אתר. מופעל על ידי GPT-4o!
// @description:yo      Fikun awọn idahun AI si abala DuckDuckGo. Beere lati ọdọ eyikeyi aaye ayelujara. Ṣe atilẹyin nipasẹ GPT-4o!
// @description:za      Gaeng an de AI beix bouxmaenz an DuckDuckGo. Faenh daengz mboujlaenz sim. Giekdaemz an GPT-4o fap!
// @description:zh      为 DuckDuckGo 添加 AI 答案。从任何网站提问。由 GPT-4o 提供支持！
// @description:zh-CN   为 DuckDuckGo 添加 AI 答案。从任何网站提问。由 GPT-4o 提供支持！
// @description:zh-HK   為 DuckDuckGo 增加人工智慧答案。從任何網站詢問。由 GPT-4o 提供支援！
// @description:zh-SG   为 DuckDuckGo 添加 AI 答案。从任何网站提问。由 GPT-4o 提供支持！
// @description:zh-TW   為 DuckDuckGo 增加人工智慧答案。從任何網站詢問。由 GPT-4o 提供支援！
// @description:zu      Faka izimpendulo ze-AI eceleni kwe-DuckDuckGo. Buza kusuka kunoma yisiphi isiza. Ixhaswe yi-GPT-4o!
// @author              KudoAI
// @namespace           https://kudoai.com
// @version             2024.6.21.12
// @license             MIT
// @icon                https://media.ddgpt.com/images/icons/duckduckgpt/icon48.png?af89302
// @icon64              https://media.ddgpt.com/images/icons/duckduckgpt/icon64.png?af89302
// @compatible          chrome except for Streaming Mode w/ Tampermonkey (use ScriptCat instead)
// @compatible          firefox
// @compatible          edge except for Streaming Mode w/ Tampermonkey (use ScriptCat instead)
// @compatible          opera after allowing userscript manager access to search page results in opera://extensions
// @compatible          brave except for Streaming Mode w/ Tampermonkey (use ScriptCat instead)
// @compatible          vivaldi
// @compatible          waterfox
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @compatible          whale
// @compatible          kiwi
// @compatible          mask
// @compatible          orion
// @match               *://*/*
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
// @grant               GM_getResourceText
// @grant               GM.xmlHttpRequest
// @noframes
// @downloadURL         https://update.greasyfork.org/scripts/459849/duckduckgpt.user.js
// @updateURL           https://update.greasyfork.org/scripts/459849/duckduckgpt.meta.js
// @homepageURL         https://www.duckduckgpt.com
// @supportURL          https://support.duckduckgpt.com
// @contributionURL     https://github.com/sponsors/KudoAI
// ==/UserScript==

// Documentation: https://docs.ddgpt.com
// Dependencies:
// - chatgpt.js (https://chatgpt.js.org) © 2023–2024 KudoAI & contributors under the MIT license
// - generate-ip (https://generate-ip.org) © 2024 Adam Lui & contributors under the MIT license
// - highlight.js (https://highlightjs.org) © 2006 Ivan Sagalaev under the BSD 3-Clause license
// - KaTeX (https://katex.org) © 2013–2020 Khan Academy & other contributors under the MIT license
// - Marked (https://marked.js.org) © 2018+ MarkedJS © 2011–2018 Christopher Jeffrey under the MIT license

(async () => {

    // Init BROWSER FLAGS
    const isChrome = JSON.stringify(navigator.userAgentData?.brands)?.includes('Chrome'),
          isFirefox = chatgpt.browser.isFirefox(),
          isEdge = JSON.stringify(navigator.userAgentData?.brands)?.includes('Edge'),
          isBrave = JSON.stringify(navigator.userAgentData?.brands)?.includes('Brave'),
          isMobile = chatgpt.browser.isMobile(),
          isDDGserp = /^https:\/\/(?:www\.)?duckduckgo\.[^/]+\/\?/.test(document.location.href)

    // Init CONFIG
    const config = {
        appName: 'DuckDuckGPT', appSymbol: '🤖', keyPrefix: 'duckDuckGPT',
        appURL: 'https://www.duckduckgpt.com', gitHubURL: 'https://github.com/KudoAI/duckduckgpt',
        greasyForkURL: 'https://greasyfork.org/scripts/459849-duckduckgpt',
        minFontSize: 13, maxFontSize: 24, lineHeightRatio: 1.28 }
    config.updateURL = config.greasyForkURL.replace('https://', 'https://update.')
        .replace(/(\d+)-?([a-zA-Z-]*)$/, (_, id, name) => `${ id }/${ !name ? 'script' : name }.meta.js`)
    config.supportURL = config.gitHubURL + '/issues/new'
    config.feedbackURL = config.gitHubURL + '/discussions/new/choose'
    config.assetHostURL = config.gitHubURL.replace('github.com', 'cdn.jsdelivr.net/gh') + '@f2c9d00/'
    config.userLanguage = chatgpt.getUserLanguage()
    config.userLocale = config.userLanguage.includes('-') ? config.userLanguage.split('-')[1].toLowerCase() : ''
    loadSetting(['asktipDisabled', 'autoget', 'autoFocusChatbarDisabled', 'autoScroll', 'fontSize', 'notFirstRun',
                'prefixEnabled', 'proxyAPIenabled', 'replyLanguage', 'rqDisabled', 'scheme',
                'stickySidebar', 'streamingDisabled', 'suffixEnabled', 'widerSidebar'])
    loadSetting(['sitesToNotShowAsktip'], 'global')
    if (!config.replyLanguage) saveSetting('replyLanguage', config.userLanguage) // init reply language if unset
    if (!config.fontSize) saveSetting('fontSize', 16.4) // init reply font size if unset
    if ( // disable streaming in unspported envs
        !/Tampermonkey|ScriptCat/.test(getUserscriptManager()) // unsupported userscript manager
        || getUserscriptManager() == 'Tampermonkey' && (isChrome || isEdge || isBrave) // TM in browser that triggers STATUS_ACCESS_VIOLATION
    ) saveSetting('streamingDisabled', true)
    if (!config.notFirstRun) { // first run inits
        if (isMobile) saveSetting('autoget', true) // reverse default auto-get disabled if mobile
        config.greetUser = true // for after msgs load
    } saveSetting('notFirstRun', true)

    // Init UI VARS
    let scheme = config.scheme || ( chatgpt.isDarkMode() ? 'dark' : 'light' )
    const isCentered = isCenteredMode()
          
    // Init API props
    const openAIendpoints = { auth: 'https://auth0.openai.com', session: 'https://chatgpt.com/api/auth/session' }
    const apis = {
        'AIchatOS': {
            endpoint: 'https://api.binjie.fun/api/generateStream', expectedOrigin: 'https://chat18.aichatos8.com',
            method: 'POST', streamable: true, accumulatesText: false, failFlags: ['很抱歉地', '系统公告'] },
        'GPTforLove': {
            endpoint: 'https://api11.gptforlove.com/chat-process', expectedOrigin: 'https://ai27.gptforlove.com',
            method: 'POST', streamable: true, accumulatesText: true },
        'MixerBox AI': {
            endpoint: 'https://chatai.mixerbox.com/api/chat/stream', expectedOrigin: 'https://chatai.mixerbox.com',
            method: 'POST', streamable: true, accumulatesText: false },
        'OpenAI': {
            endpoint: 'https://api.openai.com/v1/chat/completions', expectedOrigin: 'https://chatgpt.com',
            method: 'POST', streamable: true }
    }
    const apiIDs = { gptForLove: { parentID: '' }, aiChatOS: { userID: '#/chat/' + Date.now() }}

    // Init INPUT EVENTS
    const inputEvents = {} ; ['down', 'move', 'up'].forEach(action =>
          inputEvents[action] = ( window.PointerEvent ? 'pointer' : isMobile ? 'touch' : 'mouse' ) + action)

    // Init MESSAGES
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
                    msgHref.replace(/([^_]+_[^_]+)_[^/]*(\/.*)/, '$1$2') // ...strip region before retrying
                        : ( msgHostDir + 'en/messages.json' ) // else use default English messages
                GM.xmlHttpRequest({ method: 'GET', url: msgHref, onload: onLoad })
            }
        }
    }) ; if (!config.userLanguage.startsWith('en')) try { msgs = await msgsLoaded; } catch (err) {}

    if (config.greetUser && !isDDGserp) // greet user on first run
        safeWindowOpen(`https://duckduckgo.com/?q=${ msgs.query_hiThere || 'hi there' }&src=first-run`)

    // Init MENU objs
    const menuIDs = [] // to store registered cmds for removal while preserving order
    const menuState = {
        symbol: ['❌', '✔️'], separator: getUserscriptManager() == 'Tampermonkey' ? ' — ' : ': ',
        word: [(msgs.state_off || 'Off').toUpperCase(), (msgs.state_on || 'On').toUpperCase()]
    }

    registerMenu() // create browser toolbar menu

    // Define SCRIPT functions

    function loadSetting(keys, scope = '') {
        keys.forEach(key => {
            if (scope == 'global') {
                const val = localStorage[key]
                config[key] = val ? JSON.parse(val) : false
            } else config[key] = GM_getValue(config.keyPrefix + '_' + key, false)
    })}

    function saveSetting(key, val, scope = '') {
        if (scope == 'global') localStorage[key] = JSON.stringify(val)
        else GM_setValue(config.keyPrefix + '_' + key, val)
        config[key] = val
    }

    function safeWindowOpen(url) { window.open(url, '_blank', 'noopener') } // to prevent backdoor vulnerabilities
    function getUserscriptManager() { try { return GM_info.scriptHandler } catch (err) { return 'other' }}

    // Define MENU functions

    function registerMenu() {

        if (isDDGserp) {

            // Add command to toggle proxy API mode
            const pamLabel = menuState.symbol[+config.proxyAPIenabled] + ' '
                           + ( msgs.menuLabel_proxyAPImode || 'Proxy API Mode' ) + ' '
                           + menuState.separator + menuState.word[+config.proxyAPIenabled]
            menuIDs.push(GM_registerMenuCommand(pamLabel, toggleProxyMode))

            // Add command to toggle streaming mode or alert unsupported
            const stmState = !config.proxyAPIenabled ? false : !config.streamingDisabled // show disabled state to OpenAI users
            const stmLabel = menuState.symbol[+stmState] + ' '
                           + ( msgs.mode_streaming || 'Streaming Mode' ) + ' '
                           + menuState.separator + menuState.word[+stmState]
            menuIDs.push(GM_registerMenuCommand(stmLabel, () => {
                const scriptCatLink = isFirefox ? 'https://addons.mozilla.org/firefox/addon/scriptcat/'
                                    : isEdge    ? 'https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh'
                                                : 'https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf'
                if (!/Tampermonkey|ScriptCat/.test(getUserscriptManager())) { // alert userscript manager unsupported, suggest TM/SC
                    siteAlert(`${ msgs.mode_streaming || 'Streaming Mode' } ${ msgs.alert_unavailable || 'unavailable' }`,
                        `${ msgs.mode_streaming || 'Streaming Mode' } ${ msgs.alert_isOnlyAvailFor || 'is only available for' }`
                            + ( !isEdge && !isBrave ? // suggest TM for supported browsers
                                ` <a target="_blank" rel="noopener" href="https://tampermonkey.net">Tampermonkey</a> ${ msgs.alert_and || 'and' }`
                                    : '' )
                            + ` <a target="_blank" rel="noopener" href="${scriptCatLink}">ScriptCat</a>.` // suggest SC
                            + ` (${ msgs.alert_userscriptMgrNoStream || 'Your userscript manager does not support returning stream responses' }.)`)
                } else if (getUserscriptManager() == 'Tampermonkey' && (isChrome || isEdge || isBrave)) // alert TM/browser unsupported, suggest SC
                    siteAlert(`${ msgs.mode_streaming || 'Streaming Mode' } ${ msgs.alert_unavailable || 'unavailable' }`,
                        `${ msgs.mode_streaming || 'Streaming Mode' } ${ msgs.alert_isUnsupportedIn || 'is unsupported in' } `
                            + `${ isChrome ? 'Chrome' : isEdge ? 'Edge' : 'Brave' } ${ msgs.alert_whenUsing || 'when using' } Tampermonkey. `
                            + `${ msgs.alert_pleaseUse || 'Please use' } <a target="_blank" rel="noopener" href="${scriptCatLink}">ScriptCat</a> `
                                + `${ msgs.alert_instead || 'instead' }.`)
                else if (!config.proxyAPIenabled) { // alert OpenAI API unsupported, suggest Proxy Mode
                    let msg = `${ msgs.mode_streaming || 'Streaming Mode' } `
                            + `${ msgs.alert_isCurrentlyOnlyAvailBy || 'is currently only available by' } `
                            + `${ msgs.alert_switchingOn || 'switching on' } ${ msgs.mode_proxy || 'Proxy Mode' }. `
                            + `(${ msgs.alert_openAIsupportSoon || 'Support for OpenAI API will be added shortly' }!)`
                    const switchPhrase = msgs.alert_switchingOn || 'switching on'
                    msg = msg.replace(switchPhrase, `<a class="alert-link" href="#">${switchPhrase}</a>`)
                    siteAlert(`${ msgs.mode_streaming || 'Streaming Mode' } ${ msgs.alert_unavailable || 'unavailable' }`, msg)
                    appDiv.querySelector('[href="#"]')?.addEventListener('click', () => {
                        document.querySelector('.modal-close-btn').click() ; toggleProxyMode() })
                } else { // functional toggle
                    saveSetting('streamingDisabled', !config.streamingDisabled)
                    notify(( msgs.mode_streaming || 'Streaming Mode' ) + ' ' + menuState.word[+!config.streamingDisabled])
                    refreshMenu()
                }
            }))

            // Add command to toggle auto-get mode
            const agmLabel = menuState.symbol[+config.autoget] + ' '
                           + ( msgs.menuLabel_autoGetAnswers || 'Auto-Get Answers' ) + ' '
                           + menuState.separator + menuState.word[+config.autoget]
            menuIDs.push(GM_registerMenuCommand(agmLabel, () => {
                saveSetting('autoget', !config.autoget)
                notify(( msgs.menuLabel_autoGetAnswers || 'Auto-Get Answers' ) + ' ' + menuState.word[+config.autoget])
                refreshMenu()
            }))

            if (!isMobile) {

                // Add command to toggle auto-focus chatbar
                const afcLabel = menuState.symbol[+!config.autoFocusChatbarDisabled] + ' '
                               + ( msgs.menuLabel_autoFocusChatbar || 'Auto-Focus Chatbar' ) + ' '
                               + menuState.separator + menuState.word[+!config.autoFocusChatbarDisabled]
                menuIDs.push(GM_registerMenuCommand(afcLabel, () => {
                    saveSetting('autoFocusChatbarDisabled', !config.autoFocusChatbarDisabled)
                    notify(( msgs.menuLabel_autoFocusChatbar || 'Auto-Focus Chatbar' ) + ' '
                                 + menuState.word[+!config.autoFocusChatbarDisabled])
                    refreshMenu()
                }))

                // Add command to toggle auto-scroll (when streaming)
                const assLabel = menuState.symbol[+config.autoScroll] + ' '
                               + `${ msgs.mode_autoScroll || 'Auto-Scroll' } (${ msgs.menuLabel_whenStreaming || 'when streaming' })`
                               + menuState.separator + menuState.word[+config.autoScroll]
                menuIDs.push(GM_registerMenuCommand(assLabel, () => {
                    saveSetting('autoScroll', !config.autoScroll)
                    notify(( msgs.mode_autoScroll || 'Auto-Scroll' ) + ' ' + menuState.word[+config.autoScroll])
                    refreshMenu()
                }))
            }

            // Add command to toggle showing related queries
            const rqLabel = menuState.symbol[+!config.rqDisabled] + ' '
                          + ( msgs.menuLabel_relatedQueries || 'Related Queries' ) + ' '
                          + menuState.separator + menuState.word[+!config.rqDisabled]
            menuIDs.push(GM_registerMenuCommand(rqLabel, () => {
                saveSetting('rqDisabled', !config.rqDisabled)
                const relatedQueriesDiv = appDiv.querySelector('.related-queries')
                if (relatedQueriesDiv) // update visibility based on latest setting
                    relatedQueriesDiv.style.display = config.rqDisabled ? 'none' : 'flex'
                if (!config.rqDisabled && !relatedQueriesDiv) { // get related queries for 1st time
                    const lastQuery = stripQueryAugments(msgChain)[msgChain.length - 1].content
                    get.related(lastQuery).then(queries => show.related(queries))
                        .catch(err => { consoleErr(err.message)
                            if (get.related.status != 'done') api.tryNew(get.related) })
                }
                updateTweaksStyle() // toggle <pre> max-height
                notify(( msgs.menuLabel_relatedQueries || 'Related Queries' ) + ' ' + menuState.word[+!config.rqDisabled])
                refreshMenu()
            }))

            // Add command to toggle prefix mode
            const pfmLabel = menuState.symbol[+config.prefixEnabled] + ' '
                          + ( msgs.menuLabel_require || 'Require' ) + ' "/" '
                          + ( msgs.menuLabel_beforeQuery || 'before query' ) + ' '
                          + menuState.separator + menuState.word[+config.prefixEnabled]
            menuIDs.push(GM_registerMenuCommand(pfmLabel, () => {
                saveSetting('prefixEnabled', !config.prefixEnabled)
                if (config.prefixEnabled && config.suffixEnabled) { // disable Suffix Mode if activating Prefix Mode
                    saveSetting('suffixEnabled', !config.suffixEnabled) }
                notify(( msgs.mode_prefix || 'Prefix Mode' ) + ' ' + menuState.word[+config.prefixEnabled])
                refreshMenu()
            }))

            // Add command to toggle suffix mode
            const sfmLabel = menuState.symbol[+config.suffixEnabled] + ' '
                          + ( msgs.menuLabel_require || 'Require' ) + ' "?" '
                          + ( msgs.menuLabel_afterQuery || 'after query' ) + ' '
                          + menuState.separator + menuState.word[+config.suffixEnabled]
            menuIDs.push(GM_registerMenuCommand(sfmLabel, () => {
                saveSetting('suffixEnabled', !config.suffixEnabled)
                if (config.prefixEnabled && config.suffixEnabled) { // disable Prefix Mode if activating Suffix Mode
                    saveSetting('prefixEnabled', !config.prefixEnabled) }
                notify(( msgs.mode_suffix || 'Suffix Mode' ) + ' ' + menuState.word[+config.suffixEnabled])
                refreshMenu()
            }))

            if (!isCentered && !isMobile) {

                // Add command to toggle wider sidebar
                const wsbLabel = menuState.symbol[+config.widerSidebar] + ' '
                               + ( msgs.menuLabel_widerSidebar || 'Wider Sidebar' )
                               + menuState.separator + menuState.word[+config.widerSidebar]
                menuIDs.push(GM_registerMenuCommand(wsbLabel, () => toggleSidebar('wider')))

                // Add command to toggle sticky sidebar
                const ssbLabel = menuState.symbol[+config.stickySidebar] + ' '
                               + ( msgs.menuLabel_stickySidebar || 'Sticky Sidebar' )
                               + menuState.separator + menuState.word[+config.stickySidebar]
                menuIDs.push(GM_registerMenuCommand(ssbLabel, () => toggleSidebar('sticky')))
            }
        }

        // Add command to toggle highlight-to-ask
        const htaLabel = `${menuState.symbol[+!config.asktipDisabled]} `
                       + `${ msgs.menuLabel_highlightToAsk || 'Highlight-to-ask' } `
                       + `(${ msgs.menuLabel_fromAnySite || 'from any site' })`
                       + menuState.separator + menuState.word[+!config.asktipDisabled]
        menuIDs.push(GM_registerMenuCommand(htaLabel, () => {
            saveSetting('asktipDisabled', !config.asktipDisabled)
            notify(`${ msgs.menuLabel_highlightToAsk || 'Highlight-to-ask' } ${menuState.word[+!config.asktipDisabled]}`)
            refreshMenu()
        }))

        if (isDDGserp) {

            // Add command to set reply language
            const rlLabel = '🌐 ' + ( msgs.menuLabel_replyLanguage || 'Reply Language' )
                          + menuState.separator + config.replyLanguage
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
                            `${ config.appName } ${ msgs.alert_willReplyIn || 'will reply in' } `
                                + ( replyLanguage || msgs.alert_yourSysLang || 'your system language' ) + '.',
                            '', '', 330) // width
                        refreshMenu() ; break
            }}}))

            // Add command to set color scheme
            const schemeLabel = ( config.scheme == 'light' ? '☀️' :
                                  config.scheme == 'dark'  ? '🌘' : '🌗' ) + ' '
                              + ( msgs.menuLabel_colorScheme || 'Color Scheme' ) + menuState.separator
                              + ( config.scheme == 'light' ? msgs.scheme_light   || 'Light' :
                                  config.scheme == 'dark'  ? msgs.scheme_dark    || 'Dark'
                                                           : msgs.menuLabel_auto || 'Auto' )
            menuIDs.push(GM_registerMenuCommand(schemeLabel, launchSchemeModal))
        }

        // Add command to launch About modal
        const aboutLabel = `💡 ${ msgs.menuLabel_about || 'About' } ${ config.appName }`
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
        const buttons = schemeModal.querySelectorAll('button'),
              schemes = { 'light': '☀️', 'dark': '🌘', 'auto': '🌗'}
        for (const btn of buttons) {
            const btnScheme = btn.textContent.toLowerCase()

            // Emphasize active scheme
            btn.classList = (
                config.scheme == btn.textContent.toLowerCase() || (btn.textContent == 'Auto' && !config.scheme)
                  ? 'primary-modal-btn' : '' )

            // Prepend emoji + localize labels
            if (Object.prototype.hasOwnProperty.call(schemes, btnScheme))
                btn.textContent = `${schemes[btnScheme]} ${ // emoji
                    msgs['scheme_' + btnScheme] || msgs['menuLabel_' + btnScheme] || btnScheme.toUpperCase() }`
            else btn.style.display = 'none' // hide Dismiss button

            // Clone button to replace listener to not dismiss modal on click
            const newBtn = btn.cloneNode(true) ; btn.parentNode.replaceChild(newBtn, btn)
            newBtn.addEventListener('click', event => {
                event.stopPropagation() // disable chatgpt.js dismissAlert()
                updateScheme(btnScheme) // call corresponding scheme func
                schemeModal.querySelectorAll('button').forEach(btn => btn.classList = '') // clear prev emphasized active scheme
                newBtn.classList = 'primary-modal-btn' // emphasize newly active scheme
                newBtn.style.cssText = 'pointer-events: none' // disable hover fx to show emphasis
                setTimeout(() => { newBtn.style.pointerEvents = 'auto'; }, 100) // re-enable hover fx after 100ms to flicker emphasis
            })
        }

        function updateScheme(newScheme) {
            scheme = newScheme == 'auto' ? ( chatgpt.isDarkMode() ? 'dark' : 'light' ) : newScheme
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
                + '📜 ' + ( msgs.about_sourceCode || 'Source code' ) + ':\n '
                    + `<a href="${ config.gitHubURL }" target="_blank" rel="nopener">`
                        + config.gitHubURL + '</a>',
            [ // buttons
                function checkForUpdates() { updateCheck() },
                function getSupport() { safeWindowOpen(config.supportURL) },
                function leaveAReview() {
                    const reviewModalID = chatgpt.alert(( msgs.alert_choosePlatform || 'Choose a platform' ) + ':', '',
                        [ function greasyFork() { safeWindowOpen(
                              config.greasyForkURL + '/feedback#post-discussion') },
                          function productHunt() { safeWindowOpen(
                              'https://www.producthunt.com/products/duckduckgpt/reviews/new') },
                          function futurepedia() { safeWindowOpen(
                              'https://www.futurepedia.io/tool/duckduckgpt#duckduckgpt-review') },
                          function alternativeTo() { safeWindowOpen(
                              'https://alternativeto.net/software/duckduckgpt/about/') }
                        ], '', 523) // Review modal width
                    const reviewBtns = document.getElementById(reviewModalID).querySelectorAll('button')
                    reviewBtns[0].style.display = 'none' // hide Dismiss button
                    reviewBtns[1].textContent = ( // remove spaces from AlternativeTo label
                        reviewBtns[1].textContent.replace(/\s/g, '')) },
                function moreChatGPTapps() { safeWindowOpen('https://github.com/adamlui/chatgpt-apps') }
            ], '', 527) // About modal width

        // Resize/format buttons to include emoji + localized label + hide Dismiss button
        for (const btn of document.getElementById(aboutModalID).querySelectorAll('button')) {
            btn.style.height = '52px' // re-size to fit meaty text content
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
            onload: resp => { const updateAlertWidth = 409

                // Compare versions
                const latestVer = /@version +(.*)/.exec(resp.responseText)[1]
                for (let i = 0 ; i < 4 ; i++) { // loop thru subver's
                    const currentSubVer = parseInt(currentVer.split('.')[i], 10) || 0,
                          latestSubVer = parseInt(latestVer.split('.')[i], 10) || 0
                    if (currentSubVer > latestSubVer) break // out of comparison since not outdated
                    else if (latestSubVer > currentSubVer) { // if outdated

                        // Alert to update
                        const updateModalID = siteAlert(( msgs.alert_updateAvail || 'Update available' ) + '! 🚀', // title
                            `${ msgs.alert_newerVer || 'An update to' } ${ config.appName } `
                                + `(v${ latestVer }) ${ msgs.alert_isAvail || 'is available' }!  `
                                + '<a target="_blank" rel="noopener" style="font-size: 1.1rem" '
                                    + 'href="' + config.gitHubURL + '/commits/main/greasemonkey/'
                                    + config.updateURL.replace(/.*\/(.*)meta\.js/, '$1user.js') + '"'
                                    + `>${ msgs.link_viewChanges || 'View changes' }</a>`,
                            function update() { // button
                                safeWindowOpen(config.updateURL.replace('meta.js', 'user.js') + '?t=' + Date.now())
                            }, '', updateAlertWidth
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
        alertP.id = 'ddgpt-alert' ; alertP.className = 'no-user-select'

        alerts.forEach((alert, idx) => { // process each alert for display
            let msg = appAlerts[alert] || alert // use string verbatim if not found in appAlerts
            if (idx > 0) msg = ' ' + msg // left-pad 2nd+ alerts
            if (msg.includes(appAlerts.login)) deleteOpenAIcookies()
            if (msg.includes(appAlerts.waitingResponse)) alertP.classList.add('loading')

            // Add login link to login msgs
            if (msg.includes('@'))
                msg += '<a class="alert-link" target="_blank" rel="noopener" href="https://chatgpt.com">chatgpt.com</a>.'
                     + ` (${ msgs.alert_ifIssuePersists || 'If issue persists' },`
                     + ` ${( msgs.alert_try || 'Try' ).toLowerCase() }`
                     + ` ${ msgs.alert_switchingOn || 'switching on' }`
                     + ` ${ msgs.mode_proxy || 'Proxy Mode' })`

            // Hyperlink msgs.alert_switching<On|Off>
            const foundState = ['On', 'Off'].find(state =>
                msg.includes(msgs['alert_switching' + state]) || new RegExp(`\\b${state}\\b`, 'i').test(msg))
            if (foundState) { // hyperlink switch phrase for click listener to toggleProxyMode()
                const switchPhrase = msgs['alert_switching' + foundState] || 'switching ' + foundState.toLowerCase()
                msg = msg.replace(switchPhrase, `<a class="alert-link" href="#">${switchPhrase}</a>`)
            }

            // Create/fill/append msg span
            const msgSpan = document.createElement('span')
            msgSpan.innerHTML = msg ; alertP.append(msgSpan)

            // Activate toggle link if necessary
            msgSpan.querySelector('[href="#"]')?.addEventListener('click', toggleProxyMode)
        })
        appDiv.append(alertP)
    }

    function consoleInfo(msg) { console.info(`${ config.appSymbol } ${ config.appName } » ${ msg }`) }
    function consoleErr(label, msg) { console.error(`${config.appSymbol} ${config.appName} » ${label}${ msg ? `: ${msg}` : '' }`)}

    // Define UI functions

    function isCenteredMode() { return document.documentElement.classList.toString().includes('center') }

    function updateTitleAnchor() {
        if (appDiv.querySelector('.loading, #ddgpt-alert')) return // only update reply UI

        const appTitleVisible = !!appDiv.querySelector('.app-name'),
              logoVisible = !!appDiv.querySelector('img')

        // Create/fill/classify/style/append/update title anchor
        if (!appTitleVisible || !logoVisible) {
            const appTitleAnchor = createAnchor(config.appURL, (() => {
                if (appLogoImg.loaded) { // size/pos/return app logo img
                    appLogoImg.width = 181 ; appLogoImg.style.margin = '-7px 0'
                    return appLogoImg
                } else { // create/fill/return app name span
                    const appNameSpan = document.createElement('span')
                    appNameSpan.innerText = '🤖 ' + config.appName
                    return appNameSpan
                }
            })())
            appTitleAnchor.classList.add('app-name', 'no-user-select')
            if (!appTitleVisible) appDiv.append(appTitleAnchor)
            else appDiv.querySelector('.app-name').replaceWith(appTitleAnchor) // for appLogoImg.onload() callback
        }
    }

    function updateAppLogoSrc() {
        appLogoImg.onerror = () => appLogoImg.style.display = 'none'
        appLogoImg.src = 'data:image/png;base64,'
            + ( scheme == 'light' ? 'iVBORw0KGgoAAAANSUhEUgAAArkAAAB6CAYAAAC7vUuHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAzj0lEQVR42u2de3QTh5X/J2dPt909p7+uu/1tt2d7uo03J7/TbX85RCP6+G1TktSB7TZpnkYj0iQkBEMKhJAGnCeQ8HKggTwKBEh4BEiCeaWAJRvZYONgAzFv/LYelt+2LFu25ZcsfX9/IDkaaSRLoxlJI997zvdAHFmaGenqfrhzHwxDRkZGRkZGRkZGRpac1prF/mM9p77TzKk0Rg273KRl95k0KoOZY8vNHHvDxLGNJo61GzWsy6hhXSaOtZs4ttH7/86ZNCqDScvuM3HsG2ZOpTHPmjql9QH2H1Ph2gAgkUgkEolESjmlpJm0qjvMHPu8kWOPmDjWYuJYyCEzx5rNnPqwmWOfN2lVdxDkkkgkEolEIhHkSmaWP7I/aNCo55k59lMTx7bKBbURqNXMsZ+atep55syp/0qQSyKRSCQSiUSQGx2cMcwtRq1aa+bYLxIItRNI9TejVq0Fw9xCkEsikUgkEolEkBvSzJz6bhOn3mbiWEfywm2QHCZOvc3Mqe8myCWRSCQSiUQiyB23Bo36d2ZOrRcLmk2LH0R7zvPo/uQd9BkOYfDaOQzXX8NIkxGurja4BxzwjI3BM+aCe8ABV1cbRpqMGK6/jsFr5+E4eRC2Pe+gPed5NC1+MAbgVevNWtV/E+SSSCQSiUQiTWLItXCqh02cqjiqhrAnfoW2tQvR88UuDNddhcc1CqnN4xrFcO1V9HyxE21rF8L8xK+iBd7TDZzqYYJcEolEIpFIpEkEuRat6l4Tx5ZHnKl94SHYc7diqLICibKhygrYD2xB0+KHopjQoC6zaFX3EuSSSCQSiUQipTDk1mrZ7xm1qg8jAUTL7LvQtX01Bq9fiC0rOzKMMYcdrvYmuDqaMeawwzMyHNNzDl4/j67tq2B5+q6IYNeoUX3Y/OTP/5kgl0QikUgkEinFINesYZ8zc2z3REDY8srj6C85AbjHIgLOsd5uDFVdRF/REXTv3YT29S+gacnDsDx7D8yP/yJ0lvXxX8Dy7D1oWvII2jcsQfe+TegrOoKhqosYc9gjo123G/0lx9H8yuORwK7drGGfI8glkUgkEolESgHItWrY/zBx6sKJILB1+TMYKD85MVc6++GsKEb3JxvR/PLjsk1NaHnlcXTv3QhnRQnczv4Jj2ug/CRaVzwTSXNaYUOm6jaCXBKJRCKRSCSFQq6ZU2lMWrYnLNy+mQVnRUl4sB0cQF/REbStmp+wUWFtq+ejr+gI3IPOsMfqvFiC1jfnTvR8vWZOpSHIJZFIJBKJRFIY5Jq06vVha26fuRuOgtzwwFhRgs4PXoNp1tTkmYurnYrOD16bEMwdBbmwzLl7oufbQJBLIpFIJBKJpADIbZw1Nd2oYU+Fg7uu7avD1r32nfoCzcs0Sb8IonkZh75TX4SuF3bY0bVjTfgJDFr2VN2sqekEuSQSiUQikUhJCrmNs1SsiWPNIUeBLXkEg9fOhcl+HkDTCw9DQdvOvCPOHoaj4EDYaQxNS8Kel7lhloolyCWRSCQSiURKMshtnDU1w8SxvaFArvOD1+AecoZs2mp64SHFwa3QPN9QzXPuIefN0oswdbrGWVMzCHJJJBKJRCKRkgRy67WqmeHgr/fEPkHwG22xoGPTMsXDbaA6Ni3DaItZ8Jx78/ZNUPOrmkmQSyKRSCQSiZRgyG3QqOeFAjbrogcwVHVREPZ6Du9IObgNVM/hHYLnPlR9CdaF94fZlKbKIsglkUgkEolEShDkmsJkcJtfnoXR9qYgwHN1d6D97cUpD7g+tb+9GGPdHcFZ7PYmNL88K/TvathMglwSiUQikUikOEOu8WYNrvDs21Xz4O53BIGds6IYjfOnRwyIlmfuTgnQbZw3Hc6vioPrdAccYWf/xlqjS05AIpFIJBKJIDeaEoWbUxQEm8w6Ni4F4AkCOnvu1pAw17D4YdRuXQPrhVIM99oxOtAH9/AQPwPc2YIRSy2cX51Gz6FtaH0rS3Gwaz+wVbB8oWPj0pDNaLFMXSAnIJFIJBKJRJAboVme+PmtocaEdWxaJghxtp05EwJg/Yos1H62HTW1dejrn3iN7nh2+KvT6Ny6UjGga9uZIwy6IRrwzBxrahQ5R5ecgEQikUgkEkFupGUKIRY9tK2eLwhvE4zNElTtptfQ3daCaM2h2w/rogeSHnQ7339V8PhDlS6YObaIIJdEIpFIJBJJJsgNtaq3+eVZcA/wa3A9w4NoW7coutrVN+fBfvo4RtqaEIs5dPuTHnTb1i2EZ3gwqEY3ZDOaVr2eIJdEIpFIJBJJYsg1cyqN8Jiw++ESmKIQDeAa5/83OuqrMeZ2QypzO/uSvoyhbd2i4OkTHc2wLrpfkhm65AQkEolEIpEIcsOYVcP+R6hGs6HqSzGXKNR+th0trW1o6+hAS2vbuDq7bOjutsPpdGJ0dFQU7PYXH1Nc6cJQ9aUQkMv21GvY/0gWyCUjS5CxdAnIyMg/yCavScogJk5dKLjJLG+/qCYzIcit/Ww76nZvQt3uTajduubmn59tR80X+1CjP4qq8lLU1NbB2tSMzi5bVFnfocoKxTWj9eaFKrlQFxLkkqWwZXiVxTBMNsMwOQzDGLyCn8jIyD/IP8gIcmMzo4Z9TjAD+cFrQWA2eP2C7EBY//IfUZezBHW7N6GptgpOpzMlQNeeGzxerPOvrwuXd2jY5whyyVLMAoP0RCIjI/8g/yAjyBVv1U/+/J9NHNsdCFlNSx6Be8gZMMqrWHYQbM7WonPrSjh0+zFiqYXb2R91na5Dtz9pZ+w6K/gLIzxDg2h68VGhx3Y3P/nzfybIJaMgTkZG/kH+QUaQK8LMHLtVCMYGb1zgN0t1d6Bx3nRZwM/yzN2wH90Z88SFUDN2k2nkWOO86XAFrAAevH4+1FixrQS5ZBTEycjIP8g/yAhyo7QGrepeIbjq+mhNECy2v71YcuAzL3kUPVcvwO1yQW7rLz6WNCuE299eHHR8XTvWCG+K06ruJcgloyBORkb+MZn8Q2udkaa1zsjQWmdk+8ngJ/+fZ2qtM6gZjyCXbyZOXRaUVZ1zD8b6engA1nNou6SQZ3zqLjTlH8LoyDDiaa7OFjRna5MCdHsO7+Ad21hfDyxz7hHI5qrL4gG5DMOkM183PEihdHJRshQL4uQjZOQf8kJtltY6Y5vWOsOotc6ASPkAmJXpONO98C2H0mU43gwFS/x72KBlHxKCL8fJgzz4Gm0xSw64HVXXJJ2XG23NbrKUL4y2mPkLLk4eDJHNZR+KA+RmR/kFG40qvF/g2QzDZFJwpyCu0CBOPkJG/iEPhG2LAWrDqcILzmkSHm+2TMcqBOvbvK+XEcPxQsEyiH6jzNrg1b2tb2UFQWHHxqXSAq7ECyHE2IilNikgt2Pj0qBja31rXnA2V8ueUjjkCsnOMMw25uaYnDSKbxTEJznkko+QTSrI9cKtIU6wZPfCYpoEx52dQOjLjRbaFQ65OeIAd5ZqhmDn/6VSHnANlBVICrgN5SUJB1z/hrRkAN2BsgL+cV0qFa5fnqWakWKQG6hcbwaLjII4QS75CPlHikKu93Z/boKgyai1zsiM8fizkwD+7N4sb3oEx6tkyM0WB7mcSheUxV35bBAINi1+UDKYq9u9KeJ5t3Kaw+GA3W5Ha2srbO9mo33h/6BpzrSEQW7T4geDs7kr5wT/I4FT6VIccn0yejNXZBTECXLJR8g/UghyvVlIezLcBheb1U0SyOVlO8Odi8IhN/oyDbN26jTBjOK5Qj4M6j+TdLmDtak5YWBbW1uL4uJi6HQ6noryjgEfvTmuoXcWw/4yF3fQdeg/52fQzxUKZ3O1U6dNAsj1D+SUtaIgTpBLPkL+kQKQK2PdbSzZ0EwR55GdhDAY8lwmHeQaNaoPA+Gp5dUngsDQKmEWt0Z/FH394Zc62Gw2dHR0oLm5GY2NjWhtbUVnZyd6e3tFw211dTXy8/Oh1+vH5ftvH+jWf76dB7r46E14tq9Ay7yMhGZzW159IqK5uSkMuT4ZGGrCoSBOkEs+Qv6hSMj1Tk2oSJVb4kkKuSFrWJUMuaJGiJm0bE8gPPWX5vEAq6/oiKRZ3JraOsFa3KqqKpw+fRo6nQ56vR4FBQXQ6XTIz8/n/VlQUIDy8nLU1NREBLednZ2839fpdDimP4/9JxzYc9yNvSeA3ONNOKErgU6nAz5aCc+OlfBsX8GD3Y7F8ZvC0Fd0hD/Xt1QX/Dgt2zMJIdfXgEMZKwriBLnkI+QfCoJcBQAutNYZWVGeU3aSn8+2FIFce9SQ26BRc8HbxqYFQWLz0pnSZXG/2BdUqtDV1TWeWc3TGXA07yJyT1hx4EQ7Dp2oRZ7+zHjW1QfA/hnYnp6ekIDb1dXFA1y9Xo9DedfxybFu5J4w41BeNY7kXceBY1bsPTYGnb7wZjZ3x8qgjC4+ehPti34fF8htfikz4Ew8sDwzTSCbq9JMQsj1ieoQKYgT5JKPkH8oB3IrJK6jFZI9XoCrEMjlZaeVPD4sasg1atijQdvNdqyRdepAVXkp2jq+XmPb3Nw8np09nHcFu48NY8/xMXx+ohWHT9TiyIkbOHTCjOO6snGoDSwxyM/PR2dnp2DJg+9xvqywXq/HF7pyXlbX93OdTodjeWeh0+ng2cHP4np2rBgH347n748L6Dq/Kp5wC5pRwx6dxJBLQZyCOEEu+Qj5hwIgV4IaXLu3qYqN4LXSvU1tuXICrkjItYcBdH/JUs+qYMjNjQpyKzOn/qsQWA1VfsWfi/veK5JBW8Pih1FZXTNej9vW1jaelT2Sdxm7jruQm2eGTl8YlH0VAlsfuBYUFECv16O1tZV37IGNZf6w66/A59bpdGg4sEMwk+tT6/zp8s/Nff8V3vkMVX4l+LjKzKn/mgSQG8mQ5jTm5manLObmvE8jBXEK4pMIcslHyCYl5MaY7bSLHh31NfBukwNwRZ6bIYrnTvOuKM6Jceubb1xaWsD6Y7EyiHjtWF8zIyrINXGquUENT0seCdoGJiW01W56bRxy29raeJC5P68dB/NqeXW3PvAMBFAhSPU9zge6dXV1ITO/gdlbob8XnvgbPNtXjOtmA9pyHujGI5vrdvIb9JpefESoNvdZhUCukLHeYB5r/SHtKacgngqQSz5CllKQ64VMe7xHe4U4DoNks1fjALkCr5UVI+xmS3Qt43bO/hYd5GrZfYGwZD/4Ib/hzHBIWsj9bDsqq2vQ2toW1FD2eZ4lLJAGZl192V3ffxcUFIw/n81mE4RX/8f4fu9IYSH2nT6NXWfOYN/p09hfUoJj3t/p3/02D3THYXfHzcY0x4rZ8jegGQ7x3hP7wQ+FIHefgiHXZ+kivtSlfH0yCuLJCrnkI+QfSoZcgxQNUxJnle1SvUa8gc+bjRW7PMM+aSDXyLHNQaUK1ZcCVspmSQpsNV/sQ2V1DfT6/CB4PaE7zQNcH8gGwmogAPs/LjBz658N9kGur1zhsMGAj778EusvXcIblZVYWluLl6uqsOLGDbxbUYG9p0/jy+NH+DW5fiPFPNuXw7N9heyQG7haeaj6ksBiCLY5BSDXZ7FkrOiWLAXxVIZc8hHyD0VBrjfzmDSA63dcrNKzmjGAbqZSzzliyDVmsv83qEv/qV/zSxX6HZIDW1V5Kb4sKw/K2AqB68HCQuwsKcGWsjJsOXsWO0tK8HFxMXQnT/ImLURaxuBfi/vFqVPYWl6O16qrMbujA7P6+qB1OjFzYACz7HYssFiw/vJl7Csuvgmz25bzANd/8kLv8iflL1kYcPDeG/NT/xX0GKtG/bMUgdxYgriR4mJM5qsFzQ6jDOZm3SgFcfIR8hF5fSQVIFfMrXVF3XFIIOSmiSwD2abUc44Yck0a9cJASGrPeZ4/VeHCKVkg94ROD70AoPpD686SEmy6cAGvVlVhSUMDnrNY8GJdHV6prsYHZWU4cOqUYCbXH2T9/+4Pxfn5+dhZVoZX6+rwtN2OOaOjeNnjwWoAb3g8mO92g3M68VxTE96tqEBd7ocBUxb4o8VG3ntJ/ikLF07x3pv2nOeDH6dRL0whyBXzBS8mU+Vr8olUsQ7YT4/z60VyPNkMw1SIhKUcJrZZrIkI4hkSvgfkI+QjcvqIov1DZBbXLlUNbqpDbizXeBJArupQICT1HtvDH7+15y+Sw1pFUQFO6PTQ6YS3jel0OuwpLcWay5ex0GKBtrcXmUNDeHh4GA8NDuJRux3zzGZsuHABn546Jfj7QvW8/oB72GDAxkuXsKCtDfNdLrwHQA+gDMApADsBvOD2YFZfH16qr8dJ/WE+5G5bzlsSEY+SBdvuDbz3pvfYHoFRYqpDKQa56czNZploA0tFlF/o0Tx3rLe3suP8euHOO5baTqFgni0iexXvIB7t9bdPcE7kI+QjcvqIov1DZBZXceU0CYbcNJElC+lKPOfIIZdjTYGQNFx/nb8AIlsrOayd1R1Dnj4f+vyCoLFe+fn5OHTqFN6rqMACqxV/dDrxJ7cHKz3AWgAve4A/uj140OnEXLMZGy9cwAGDYbz5LFT5gn+Wt6CgAPuKi7G6qgpzHQ6s8nhQBMAKwA6gHUAFgM0AZo+OIqu5GVvOlcOxe63gql9fZrcl67fyLoZYxvHem+GGG0Irfo0pBrlijsGndArgIaFIysAtFMizkjSIZ4g4nwyJ30/yEfKRaHxEsf7hHXsV9YgrRoGWSMj1vn6u2Jm5KQm55tl3f0sIpOC3ZnesxyYLrJV/cQB5+nzk6fSC63p3l5ZieU0NZjscWOr2YC+AUgAXABQA2ATgSbcHj/T0ILuyErtLSwVLFYRA1/e4/WfOYGVtLeY7ndgM4DoAB4ARAE4AZgAHASxwuTC3vR3vffUVOvb/ZXyEmGfHyqBtaPGYmTvW0+VXMD0m+Bjz7Lu/lWKQmyYyU5VNATzIskReS7Fd/GlJFMTFfI6yZXg/yUfIR6LxEcX6h0jwUmRTZBJAbna8R4klNeSatKo7JpqPO3jjgvTZyLn34tLh/TzI9Z+GcFyvx56yMixqasLckVF8COAygE4APd5s60kAr3uAB4ZHMN9sxtbychwsKgq5LEIoo7u/uBhrKivxp/5+/NXjwVUAvQCGAQwAMAL4DMAilwsLWlrwXkUFHHvWBW8/88votv1phuyQO3SDv6SjaYnQvFzVHSkGuQwjrsHGQAE85msYqyKZyxqvIG6Q6fNDPkI+IqePKNI/RN5CtzMKtSSA3EyCXH/I1bCZQU1n65fwAMphOCj9KKz502H5dDPy9PnQ6YNraXMLC7H13DksbGnBC64xHAHQCGDQm2XtBXAFwEYAj7lcmN3cjHfPn8cBgyEs3Ab+/NOSEmy4dg1LurqwamwMOgAN3lIFK4CzAN71APOdTiwzGvFxeTlcH6/yzsZdwWs+85UsxGMphCNgXm77+iUCzWdsZgpCLisygFAAT1zwjvQzEY8gLnUdbjJCLvlIavqIIv1DZDOUrCPDUhxyMwhyeZCrfi0Qjrr3beIBVPeed2SB3NZ97+OETu9tPvt6NW9BQQEOFhbiw3Pn8EJzMxa5XMj1lg44vVnWHm+97AYAj466MLexEZvLynB8AqgNLFk4bDBg27lzeN1kwov9/djgduMQAAOA4wA2ezx4cWQECzs68O7Vq9hXXIyhnWt5ZQr+m89cH2THBXJte/7Cf4/2bRLI5KpfS0HIZRhxq00zKIAnNHhHAotyB3FWps9NskEu+Uhq+ogi/SOCFbqyzG4lyCXIZRiGYcxadk/QVq2iIxOPqIpRTXPuxvBHq8YhNz+/gFdPe0Kvx84vv8Rr9fWYNziI97wTD5q8WdY6AH8DsMzjwaNOJ/5cW4udJSW8LWahFFivu7+4GJsvXsSrFguW9PbilZERrHC58ProKJYMDGBJWxtWV1ZiZ1kZjhcUoH9XDn+igl9W17H8qbDnbZk9BdZ5d8A6746Yrl9bziL+NrqiIwKPU32SopArJhBlT/IAnp3A4B0pQMkZxNNEgF+2zNeYfIR8JBofUaR/iJmqwCjYCHKTriaXzQ+q96ys4Nd7Ln5QlmykZ8fKmzW5+nzodPogCN1ZUoL1V69ins2G510ubPZmV08COADgTQCzRl3QdnZizeXL2HnmzPjvB24785+P6z8n15fR/bSkBB9UVGBdVRVet1jwcmsrlrW0YHl9PTZeuYJPS0pwtKgI+fn56NmzgT9Rwe/PUGDbvvx2DBm+C9eFb8N97R/H5brwbTj2/QDty2+P6tpZn/8Df/PZja+E1vvmpyjkiglGOZM4gGdIFIQrvO+rgYmuMSXS45YziOfG4fNLPkI+IqePKM4/tNYZ6am+/CEJIZcaz3iZXE51Nmh8mLGKB1CWp38jC+SObHoRhbrjOKHTIy+gJjc/Px9HT53C3rIyvF5Tg6yuLswdGcGf3W4s83iwwO3G4yMj+GNnJ16pqsKeL7/EsYDpDD7Y9R8p5oNa/8f4fn7UYMDnpaXYWV6ObefPY9v58/j47FkcLizEF0VF48fmg9zA8WEjm178urFu8U9he+dWQbANpc61t0V87SxP/4Y/RsxYKTBGTHU2RSFXTEAyTOIAbmTE3z7NYcI3w2R4H2OU4HMgVxCXsw43WSGXfCT1fERx/iEyq5jDKNgUCrlZSjznSBvPrgXC0WirhQdQJq1aFsi1v8Lh0uH9N2ty9fm8ulwfmB4sLMSWsjKsun4dC5uaMMdmwxN2O5602fBcUxPeunEDm8vLcfj0aR4g+57Dt8JXaHauD3j9QTc/Px/HCwpwxGDA0aKioBrfgoICjH701nhN7ng97scvY+D9u9G9+UcYMnw3IqgNlPP49yK/flo17z0abbEIZXKvpSjkpokIRsZJGsDF3oI1MNFvj8oKCOTRwqIcQVzuOtxkhVzykdTzEcX5RyKyigS5Mww0J9cfcjnWHDSD1d759QjWIaesDVS+CQt5Oj1vKoL/3w8bDNhZUoIt584h5+pVrLtyBeuuXsWW8nLsLClBbmFh0O8FTmv48ssvQy6GCARgHyT7z9P1/x3sWAnPR8vg2fMUkPsL9Ov/F7oLbxEFtv5lC63ZP4nq2rmHnF/PMrZ3Cj3GnKKQyzDydI+nWgAXOzM1ls7mNL/zirZ5ROognsZEv341njWd5CPkI5mp7B9a64yceAMXQa6ojWdpSjznSCHXFgRPgwN+iyC65J0S8G6234QF/ugv/7ICnU6HPIMBB0+dwu7SUhwoLIT+5Mlx8PTPxgbW5Op0OjQ0NKCjoyPsmt9QCyQM+YdQnP8+zhlex42TmXB4obb99NcavvQt0YDrPP49NC/+aUwLIYT+MWLWsrYUhlwjBXBZMlQVEr0/YtZESh3Eo22+yo3z+0k+Qj6S0v6RiKziZIZckePaKpR6zhFBrpFjR4K2nXk8X98Gb22UFXKNT93Fg9yJ1vGGk1Ct7Xj21Tcpor2dB8E6nQ4FulycM7yOa4Ucrhv+B9WF02As+j+wFP0bLEX/hrbTf4f207ego/iW8T99f28/fQuGLn5TNNxG23DmL5etHfC4x+X3/zwmjnUbOXY0hSFXzKpNdpIFcDGQk57A+CBlEM9ior9Vnxbn95N8hHwkpf1DDOTGAFrp3hpgOZQexXEkEnKNiaiBTvZM7nAQ5PrXerZaZJ/5euVC+c3mM93XI8SEYNcHsb5Zuv5rgEM9XqfTwW63886ps7MTer0epflreRAbifzhtv30LRiq+GbUZQliM7cT1k4H/gOCY0cIcqOqJUulAC6m1i7RA9ilCuKsiFvQrATHTz5CPkL+wYcfexwhN1vkrXpJ64QTBXwiS0Ogtc5gJXhthZUrTFzrKalq9Efx1cVL3lFiwllZ/5IE/0kJQple/7rc7u5uBNnAGTir/xARxIb7+dDFb0UFt92bfxTzfFx+7bRfucKgYO20jSB30gbwHIVlcaUM4hVxfh8JcslHyD+E4QdxhNyMyQq5MQC+UYoPJjWeTaC63ZtQWV2DS5evBNXI+mdohUoWhJrDfM9hs9mC+NbTvhruyh+Mw2ffuW+EBNrAsgSf+s59I6qsbfvy22GZPUXy6zbJG88ogIe3aANZBZN4kyKIRwsuuRIeP/kI+Qj5R+Igl51skOs9Z0MM55UlxQeTRohNoPoVWaisrkFldQ1aWlrDruONVB0dHXy6HeuFpykrJJD2nfsGbGf+LmTW1lb6d+g///cR19ra3rlVFrD9WuqJy0o0KTtCjAJ4eBMzPioZxvbEGsQzmfjX4RLkko+QfyQB5Ip9PaVBrrf2OCtGuJWk4UwRkGtM4DII/+YzH+R2d9+sn62trQ0qPcgPWPYQ+HO9Xo/Kysrg8oSxXngsmohLC0Yv/wNGLn0LI5e+hdHL/xAx2HZv/pEktbailkGYqgRqclN2GQQF8PCWKcO1SfYgns4kpg6XIJd8hPwjeSDXqEDINXp/R0jbvDBrkABqZZtikeyZXIG1vl/xAMr6/B9kh7aqKxdRWV0Da1Mz77Vra2tx5syZoDm2/lnb0tJSGI1GhDJP++qoamejKUWIJ9iGXetbWTGZ1vpSAJf2eZOhHjfWIJ6oOlyCXPIR8o/kgVyDAiE3EZL0+y/ZIXdPIBz1nfqCB1Bt6xbFpfmssroGNbV1IWG1p6cHvb296OrqgsPhQF9fHyIxd81PIgLX/kPf5zWGWefdgdbsn6B9+e3oXHsbbO/cis61t6F58U9lLkWYWG3rFvHOse/UUSHI3UOQOykDeK6Ia5MMJjaIJ7IOlyCXfIT8I3kgN4cgd0JJPiEkqSHXwqleDYSj7v3v8QDKtntD3JrPKqtrMOZ2Q0pz1/0yosxsosE1qiUauzfwzrF7/3sCNbnq1whyJ+UM0GivTTI0nYkN4tG+Z1LX4aYa5JKPpFZjZkL9IwGQm02QK+9MXOVlcjn1Y4Fw1P6XF3kA5TiZKzu0+TefOZ3OuENuz8c/VAzgmjgWjpO5vHNs3/CiUHPaYykMuRWM9JmYVAngxiR7r+QK4mJWsmbJePzkI+Qj5B8xlg/E+HpsQA1rKBknGeTapZqkoDzI1aruCISjphcf5QHU4PXzskObUPOZVOax750Qcm3v3KooyB28fp53jk0vPipQrqC6I4UhFxTAJbs2SoXcDBHnKmdGjnyEfIT8I0bIjWa7WByhTMmQa5D7miY15NYvuu2bwXCk5q32HevuiAu4hWo+i9nGeiesyx0p/Y6iINd/ljE8HsExb/W/u+2bBLm823AUwFMLchlG3EB/uUZBkY+Qj5B/xA65sk+xmCSQa4jHtUx6yGUYhjFzrHGiMWLNSzVJ0Xwm2gbORNR4Jvmor9lT0Jr9E3Rv/hH6D30fQ4bvov/Q99G+/HbRz9m8TMMfH2asEnqc0fchSEHIzZApSFEAV14QF3NLVo7xYeQj5CPkH9IAXyZBbkxlCdviBbeKgVwTxx4MhKTeE3v5zWe71ssOubVb18jWfBZp2cJI6XfQufY20UDbvPinaF9+O3o+/iGGDN8NOZJsyPBd8U1nu9bzzqv3+F6hyQq5KQy5WSK+tLdRAE9JyGUYcTNP5ShbIB8hHyH/iB34ZF+6kWKQa/BOlchM1AdTAZCrWhDUfLb+BX4i9HyRopvPxrOeNz7CSOl3Ih4p5tj3A3Rv/hE6196G9uW382R751b0fPxDOPb9ICzQSl0DPHC+iN90tv4FgcepFqQw5Mp1C44CuDKDuJjflaNsgXyEfIT8gw8/Gckw4irJITfcMohQytBaZ7BJ8r2d/JDboFH/LDgreRd/QkFfr6Kbz3zWX3zsJsQvvx3O49+LGEqlkuvCt2Nuchvr6+FvpJt9V9BjGrVTf5rCkCumazyDAnhKQ66YjU52RtoB/+Qj5CPkH3z4SROTmZxkkJss37+pC7k3s7lsU9Dms5orPJhqXfms/M1n5aXyNJ/5xqHp9geVGNjeuRVDhu/KDrjO49+LeTta68pn+ZvOaq4IrPNlm/w/BCkGuWJ2zkfqCZN1BmgqQK6Y6yn1uZOPkI+QfwQDkDGeY8QIcglyQ0Cuem8gLPUc3sEHxAL55+XWfrZdvuYzALY974StqbW9c6ukGV7XhW+j5+MfSrb6N3A+bs/h7ULzcfemMORmyfhFPVkDuNI3nsWawZSqbIF8hHyE/CMYgHKTbcICQe5khFwN+2zQvNw/P8YvWejvjWvz2ejoaFwhNyhrmv0T2N65Ff2Hvh8V2I6UfmccbKXeoubu7+XPx/3zY8GwzqnnpDDkyllblioBXEw9ZlqKBHFWxLlLVbZAPkI+Qv4RDEBZybKZiyB3EkNuwxN3/IsQVA1VX+JBVcem7Lg1n/X09iYUcgNlnXfHeMNZ9+YfwbHvB+ONae3Lb5cFav3VsSmbX6pQfUnwcQ1P3PEvKQq5Yr6gEcUXdKoEcDG3JTOS4LtSiiAuFmCk+LySj5CPkH8EA1C6CMg1ynkhCXInIeQyDMOYOfXhoHFVH6+L65QF/+azzi5bUkFuohU4VcH2cU7QY8yc+nDghyCFIFdMhiqaUTipEsDFzEjNToLvSqmCeBoT/dpWKVaako+Qj5B/CENQRTKVLBDkTlLINWlVM4NufT97TxAoCq6QVUjzmfOr04oE3MBVywBgefZeoVW+M1MUcsXMeoz2izlVAjgjM+gkexAX+3mxx3hLmnyEfIT8QxoIknWUGEHuJIVchmEYE8fagzKIZ/P5DWgnD8oKdHW7N8nWfDZUWaFIyHUYDvJHoZ3NF3qcXehDkAKQyzLitvbYo3ydaAN4rHVjOTIG8FwZb1krIYiLvQa5CoVc8pHU9xHF+ofIkgXINQuWIHcSQ66ZY7cEwlPLG7ODYNG66H75IDdniWzNZ25nn+IA17ro/qDzaHljtkCpArslBSFXbPAWk0XKiOM5ijmvaM5Hro1XSgriYleait0cRD5CPkL+ERqEtomAXFmy5wS5kxhyrZzqLiHQcl44zV8lm7dfsUshrIseUBTk9ubtj6jkwsqp7koxyM2MIXiLaVyINoCL/QJOY+Qf5SN2ViqbQkFczOc2ltuy5CPkI+QfoUGIFZnNlfwfFgS5kxhyGYZhTBx7Imic1ltZfFL0uGFdKF821we5La1tkkNu59aVysniLrwf8Lj5SzneyhJ67IlQHwIFQm66yFtpsXZCi2lGEQND2+KUdRPzOkYm9lFJ6d7XTkuCIC7mecVm7MhHyEfk9BGl+4fYbG5UkEmQS5A7MeRq2OlCwDV45Sy/LrRUJxvcVRcXoLK6BnUNRtm3niWz+kt1vGMfvFIm/FgNOz0FIJeNIbhJ0ewiJrOTFafgLea80kW+ToXIbFVawOck2npMuYK42LFa0UIg+Qj5iJw+onT/8NXm2sVmdLXWGTHPKvauGs4lyJ3EkHszm6suDASptjV/CgLG9g1LZG0+q6yukRxylVKX275hSdCxt615TmjDWWG4D0GCILfC+yUYTpne582N4Zar1DVz0R5HpFmddJEZk1jBRCww2L2vF+m5ZYe4dplJEMTF3paNNmNHPkI+IqePKN0/xAIRb36u1jpD1Cgzb7lEjkjIJshNQcj9gxB49RUd4UHXiLVe9qUQQ0PDk7Iud8RazzvmvqIjIR6r/kMSQm4iVCHBbcRcka+bISK4xSOAp0vw2rne1/aHryzvzyoY6er35AziYmeD5sgMCuQj5COR+ojS/cMfigwxgC68oLrNu00tI0S2NsP7/3O8cBzL6xHkphrk3gRdtjQQqBqzMuB29vPgy567VXHNZ8m+FMKeuzUg+9yPxqyM4OukYb+c6EMwSSBXquaErBiOwegNRD5VSHyOYm8xJ/q9i3TskJxBnGHE1ZNGc1uWfIR8RE4fUbp/BEKoPUbwjKcIclMRcs3aqdOEAMy28+3g2+hrF0i/FOLKRdmWQogtWah6Uo2/Lf9/2P7ub1D1pFoWwG1buyAYyne+LfhYs3bqNIJcSTcRpcX52A1xOs9tCniP5A7iYq9DpLdlyUfIR+R8j5TuH0LlA3aCXILchEEuwzCMUcNuFoKroaqLPAhzdbTA8uw9ksJejf6obEshoi1Z8MHtIt19mFs4HXMLp+P9LdMkB1zLs/fC1dnCX2BRdTFUs9nmSD4EKQy5Yps/kiXY5TDRbR7KjhFMKhL4XtmZiQfpxyOIi50NGsm1Jx8hH5HTR5TuH0oGXYLcVIVc8+wp/2Tk2K5AwGpeOhMeF39Rw8C5Qtmaz8bc7mBI7WvAMeNeFFqPwNrXIFvJQvGSX+L1A/eOw61Pi3T3SQ65A+cK+ZPaRkfQvHSm0GM7zbOn/NMkhVw7I+8eeSlq9CLtrM9g4peNS3QQn+iLLR5BPJbb7RPBIvkI+YicPqJ0/wgHusYkBtxtWuuM9GQHPoLcWECXU2UJAVnn1hVB4Nj96fuyNJ85nc6g19p8dSUPOhcXP4LPa7fCNtQuSclC1ZNqbH/3N0Fw66/Lc6dKdr7dn74fPNN3ywrhMgVOlRXphyCFIDeabuZYLYuRN7vmOweWie8t5zQm9vmqcmUU4xXExbxWJIsNyEfIR+T0EaX7RzhIEjPWS24ZhJraCHJTEHIZhmFMHFsgBFuO/ANBYNa1fXVcms82XHwpJHxuvroSZ1tPii5ZKF7yS7x0NCMs4M4tnI7iJb+U5Fy7tq8OnuebfyDU4wui+RCkAORWeANqWpx9V45bsgaB80hEXaVU3exSHnc8g3i6DOdCPkI+ovSadTn9IxJYykyC8oVcMXBLkKtwyDVzU35s4thuIegarrsWBGgdm5ZJ03xWXhqy+Swc5Pr01vnneLDrdPXjbOtJ7KrcgLfOP4fnCx8Yr7NdtfeeiLK3/jqw+r9iPseOTcuCzm247lqIRjPWZuam/HgSQK7B+5rpCfbfnDgEskQEcF8gkzNjtS3K9y+eQTyWzzSbJJBLPjK5fETp/hFNVjc7zrBr944ai9mXCHIVCrk3s7nqx4TAq+mFh+GyBZcItK2eHzMA1n62PWTzWSSQ69PLXz6Bj26sx8LTD4Z93CsH7434OecWTsee9b+ObZLCqvlB5+WytaPphYeFG9O06kej/RAkMeT6jxPK9mai2CT04QxG3AxJ//FA4b48jQkK4Izf7WCpMnJ2EXCbqCDOMOLqL0PNmiUfIR+R00eU7h9i4ClLxjIGo7feNlPKDwpBroIhl2EYxqxl1wnBV8vrT8E9NMiveR3oQ9uq2EC3duua8ZKF0dFR0ZD7lH46ni6YHhXARqLt7/4mJsB1D/Txr9mQEy2vPylcvqFl14n5EMipSWZZTOSbpyqSJMsWjaV5z3FblMGtwvs7mQzZZDfyEfIROSAqzVvKkBPDIgmD9/ezpMjYkiXeZGMQk0ZlEIS2dQsF615jKV3wbz7r6e0VDbl/yL1PFsgVO0ZMqEQBANrWLQz1OyfFfggIcmXL7PivXc1kvt50lErmv8EpO8XPlYx8hHxEWeCb4adsr7L8f05XiiA3esiddee/mzi2XhDe3n9VEN7ENqP5N591dtnCTlcIp999loE5J5MDcru2rxK8Rp3vvxrqd+pNs+7892SEXBKJRCKRSKRESDYzz5o6JVQjWucHwqDrvHxW0uazXZUbFAe5QmPCwgGuWcvazLOmTonlXzokEolEIpFIBLlRmGUWe4+JYz3CpQuL4BkeDIK5gXIDLHPuEbUUIrD57PParRHD6Iz9iYVcy5x7MHDOEHQ9PEODaFu3KNTveSyz2HtiTeeTSCQSiUQiEeRGacaZ6kdDgV3L608JTl1wdTSjbc2fIofcnCWCzWfJALmRNJ61rfkTXB3NglMUWl5/KnSpxszoJikQ5JJIJBKJRCLIlbJGl1PPCQVqTUsexnD9dcFb9PbPN8e0FOKYcW9UkPuUPoLM7NFZES2BiBRy7Qe2CJ77cP01NC15OMzvqudIVZhNIpFIJBKJRJArNqOrUT0SqnTBxLFwFOQKwt5IYx3a178wcV3ulYuorK5BS2vb+O9e7jwbMYw+dOg+/O6zYNCdc3I6/pg3HY8dvQ9bKt4dX/Wbn/0rvL9l2oTPm5/9K8HjbV//AkYa6wTP2VFwINy5eiwa1SNSdh+SSCQSiUQiEeTGYA0z2XtCNaOZOBadW1fC4xoVBL/+M3mwLvx9SPir0R8NqsuNBnLfOLsAmkMa/PaTDPz2kwzct+/mn1nH52H56eW40n4F/SP9AICeQ9t4rx0OeC/Pncp7rHXh79F/Jk/wHD0uF7q2rgx5jmYta7PMjK0GlyCXRCKRSCQSQa4cUxcyp04xcmxDKJBrXqrBUPVlYQgcc6H3xF5YF/w+ZPNZZXUNxtzum9MaXP0Twu2Giy+h1n6V9zpt/e1o628fh9pA82VzhZSf/SscWP1feH/LNN5KX+uC36P3xF7APSb4nEPVl9C8TBMug1sfyxQFglwSiUQikUgEuXLX6M6689+NIRZG+GTbtR7uwQGEMkdBLq9m1X8phNPpHH/c4uJHQsLt5c6zEGuB2dxwNcehSjEAwD04ANuu9RM9z0mxc3AJckkkEolEIhHkxjurG2IFsE+N8+5D36mjYWFzoNyAjo1LQzafBc7KFcrcijG3sw/WRQ+E3li2cSkGyg1hn6Pv1FE0zrsvfFOdJvpVvQS5JBKJRCKRCHITbCZO/ZhZy9rCjthauwCDV8vDAuOYww57VyfMlkbeUgjbUDt2VW7AMeNeWPsaIKX1Fx/jHWfrimfgyP8cYw572N8bvFqOtrULJsre2oza2EeEEeSSSCQSiUQiyE1URpeb8mMTxxZMOE921Xw4K4onhM8xlwvxMvuBrRgoP4mx3u4JH+usKEbbqvkTljiYtWy+mZvy43jtdiaRSCQSiUQiyJU1q6uaa+LYzokgsOWNpzFQVoCEmscd8UMHyk6iZfnTE8/75dhOE6eaG89rTk5AIpFIJBKJIDce83Qz2e+YOPVfI2nqapz7W9h2rcdQzZXYgdXjCfhvNwCP6KccqrkM26630Tj3txFublP/1Tx7yj/F+3qTE5BIJBKJRCLIje8Eht+YOLY00tW+zUtnoufIRxiuv5aw5O5w3TX0HPkYzUtnRryS2MSxpWbt1GmJus7kBCQSiUQikQhyEwG7WtUDRk5dGAU0wvLMNLT/5UX05u3HiLlGNqgdMdegN28/2v/yIizPTIsGbGHSqgymmaoHEn19yQlIJBKJRCIR5CYUdtX3mTj2eFQg6WvkevwXaH5pJjo2vgT7Zx+gv/gYhmouY8RSC1d7E8Yc3fCMDH9drTAyjDFHN1ztTRix1GKo+jL6i4/B/tkH6Nj4Eppfmgnz47+AmGMxcezxxllTM5LlupITkEgkEolEIshNhppdLftro4bdPNHYMXEw/PNY4DXsOl6jht1s1LK/TrbrSU5AIpFIJBKJIDfZsrsaNtOkUR2SGkolk0Z1yMSpH0vma0hOQCKRSCQSiSA3Sa1Vy37PyKmfMXGqT0wc25hAsG00capPjJz6mfrMO/+3Eq4dOQGJRCKRSCSCXIVYfead/2nWsM+ZOPaAkWPrZYTaehPHHjBr2OfqM+/8TyVeK3ICEolEIpFIBLkKNWSx32jQqH9m0ageMWrZV8wcu8vIqXTeEWVXTBxrvLmIgR0yceyQ9+9G7/8rNXIqnZFjdxm17CsWjeqRBo36Z5WZP/37lLg25AQkEolEIpEIcsnIyMjIyMjIyMiUbf8fHt7z7ua/iloAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDctMTJUMTM6NTM6NDQrMDA6MDC1fB7JAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA3LTEyVDEzOjUzOjQ0KzAwOjAwxCGmdQAAAABJRU5ErkJggg=='
                                  : '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' )
    }

    function updateAppStyle() {
        appStyle.innerText = (
            '.no-user-select { -webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none }'
          + '.cursor-overlay {' // for fontSizeSlider.createAppend() drag listeners to show grabbing cursor everywhere
              + 'position: fixed ; top: 0 ; left: 0 ; width: 100% ; height: 100% ; z-index: 9999 ; cursor: grabbing }'
          + '#ddgpt { border-radius: 8px ; padding: 17px 26px 16px ; flex-basis: 0 ;'
              + 'flex-grow: 1 ; word-wrap: break-word ; white-space: pre-wrap ; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.06) ;'
              + `${ scheme == 'dark' ? 'border: none ; background: #282828' : 'border: 1px solid #dadce0 ; background: #fff' }}`
          + '#ddgpt:hover { box-shadow: 0 1px 6px rgba(0, 0, 0, 0.14) }'
          + '#ddgpt p { margin: 0 ; ' + ( scheme == 'dark' ? 'color: #ccc } ' : ' } ' )
          + `#ddgpt .alert-link { color: ${ scheme == 'light' ? '#190cb0' : 'white ; text-decoration: underline' }}`
          + ( scheme == 'dark' ? '#ddgpt a { text-decoration: underline }' : '' ) // underline dark-mode links in alerts
          + '.app-name, .app-name:hover { font-size: 1.5rem ; font-weight: 700 ; text-decoration: none ;'
              + `color: ${ scheme == 'dark' ? 'white' : 'black' }}`
          + '.kudoai { margin-left: 6px ; color: #aaa } '
          + '.kudoai a, .kudoai a:visited { color: #aaa ; text-decoration: none !important } '
          + `.kudoai a:hover { color: ${ scheme == 'dark' ? 'white' : 'black' }}`
          + '#corner-btns { float: right ; margin-top: 2px }'
          + '.corner-btn { float: right ; cursor: pointer ; position: relative ; top: 4px ;'
              + ( scheme == 'dark' ? 'fill: white ; stroke: white;' : 'fill: #adadad ; stroke: #adadad' ) + '}'
          + `.corner-btn:hover { ${ scheme == 'dark' ? 'fill: #aaa ; stroke: #aaa' : 'fill: black ; stroke: black' } ;`
              + 'transform: scale(1.185) ; transition: transform 0.05s ease }'
          + '#ddgpt .loading { color: #b6b8ba ; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite }'
          + '#ddgpt.sidebar-free { margin-left: 60px ; height: fit-content }'
          + '#font-size-slider-track { width: 98% ; height: 10px ; margin: -6px auto -13px ; padding: 15px 0 ;'
              + 'background-color: #ccc ; box-sizing: content-box; background-clip: content-box ; -webkit-background-clip: content-box }'
          + '#font-size-slider-track::before {' // to add finger cursor to unpadded core only
              + 'content: "" ; position: absolute ; top: 10px ; left: 0 ; right: 0 ; height: calc(100% - 20px) ; cursor: pointer }'
          + '#font-size-slider-thumb { width: 10px ; height: 25px ; border-radius: 30% ; position: relative ; top: -7.65px ;'
              + `background-color: ${ scheme == 'dark' ? 'white' : '#4a4a4a' } ;`
              + 'box-shadow: rgba(0, 0, 0, 0.21) 1px 1px 9px 0px ; cursor: grab ; cursor: -webkit-grab ; cursor: -moz-grab }'
          + '#font-size-slider-thumb:active { cursor: grabbing ; cursor: -webkit-grabbing ; cursor: -moz-grabbing }'
          + '.standby-btn { width: 100% ; margin: 9px 0 9px ; padding: 11px 0 ; cursor: pointer ;'
              + 'border-radius: 4px ; border: 1px solid #888 ;'
              + 'transform: scale(1) ; transition: transform 0.1s ease !important }'
          + '.standby-btn:hover { border-radius: 4px ; transform: scale(1.025) ;'
              + `${ scheme == 'dark' ? 'background: white ; color: black' : 'background: black ; color: white' }}`
          + '#ddgpt > pre {'
              + `font-size: ${config.fontSize}px ; white-space: pre-wrap ; min-width: 0 ;`
              + `line-height: ${ config.fontSize * config.lineHeightRatio }px ;`
              + 'margin: .99rem 0 7px 0 ; padding: 1.25em 1.25em 0 1.25em ; border-radius: 10px ; overflow: auto ;'
              + ( scheme == 'dark' ? 'background: #3a3a3a ; color: #f2f2f2' : '' ) + '}'
          + '@keyframes pulse { 0%, to { opacity: 1 } 50% { opacity: .5 }}'
          + '#ddgpt section.loading { padding-left: 5px }' // left-pad loading status when sending replies
          + '#ddgpt + footer { margin: 2px 0 25px }'
          + `#ddgpt + footer * { color: ${ scheme == 'dark' ? '#ccc' : '#666' } !important }`
          + '.balloon-tip { content: "" ; position: relative ; border: 7px solid transparent ;'
              + 'float: left ; left: 9px ; margin: 34px -14px 0 0 ;' // positioning
              + 'border-bottom-style: solid ; border-bottom-width: 1.19rem ; border-top: 0 ; border-bottom-color: '
                  + ( scheme == 'dark' ? '#3a3a3a' : '#eaeaea' ) + '}'
          + '#app-chatbar {'
              + `border: solid 1px ${ scheme == 'dark' ? '#aaa' : '#638ed4' } ; border-radius: 12px 13px 12px 0 ;`
              + 'font-size: 0.92rem ; height: 19px ; width: 94.6% ; max-height: 200px ; resize: none ; '
              + `color: #${ scheme == 'dark' ? 'eee' : '222' } ;`
              + 'margin: 3px 0 15px 0 ; padding: 13px 10px 9px 10px ;'
              + 'background: ' + ( scheme == 'dark' ? '#515151' : '#eeeeee70' ) + ' } '
          + '.related-queries {'
              + 'display: flex ; flex-wrap: wrap ; width: 100% ; position: relative ; overflow: visible ;'
              + `${ isFirefox ? 'top: -20px ; margin: -3px 0 -10px' : 'top: -25px ; margin: -7px 0 -15px' }}`
          + '.related-query {'
              + `margin: 4px 4px ${ scheme == 'dark' ? 7 : 2 }px 0 ; padding: 4px 10px 5px 10px ;`
              + `color: ${ scheme == 'dark' ? '#f2f2f2' : '#767676' } ;`
              + `background: ${ scheme == 'dark' ? '#424242' : '#dadada12' } ;`
              + `border: 1px solid ${ scheme == 'dark' ? '#777' : '#e1e1e1' } ; font-size: 0.88em ; cursor: pointer ;`
              + 'border-radius: 0 13px 12px 13px ; width: fit-content ; flex: 0 0 auto ;'
              + `box-shadow: 1px 3px ${ scheme == 'dark' ? '11px -8px lightgray' : '8px -6px rgba(169, 169, 169, 0.75)' };`
              + 'transform: scale(1) ; transition: transform 0.1s ease !important }'
          + '.related-query:hover, .related-query:focus { transform: scale(1.025) !important ;'
              + `background: ${ scheme == 'dark' ? '#a2a2a270': '#e5edff ; color: #000000a8 ; border-color: #a3c9ff' }}`
          + '.related-query svg { position: relative ; top: 4px ; margin-right: 6px ;' // related query icon
              + `color: ${ scheme == 'dark' ? '#aaa' : '#c1c1c1' }}`
          + '.fade-in { opacity: 0 ; transform: translateY(10px) ; transition: opacity 0.5s ease, transform 0.5s ease }'
          + '.fade-in-less { opacity: 0 ; transition: opacity 0.2s ease }'
          + '.fade-in.active, .fade-in-less.active { opacity: 1 ; transform: translateY(0) }'
          + '#send-btn { border: none ; float: right ; position: relative ; background: none ;'
              + `color: ${ scheme == 'dark' ? '#aaa' : 'lightgrey' } ; cursor: pointer }`
          + `#send-btn:hover { color: ${ scheme == 'dark' ? 'white' : '#638ed4' } }`
          + ( // rendered markdown styles
                '#ddgpt > pre h1 { font-size: 24px } #ddgpt > pre h2 { font-size: 22px } #ddgpt > pre h3 { font-size: 20px }' // size headings
              + '#ddgpt > pre h1, #ddgpt > pre h2, #ddgpt > pre h3 { margin-bottom: -15px }' // reduce gap after headings
              + '#ddgpt > pre ol { margin: -30px 0 -21px }' // reduce v-padding
              + '#ddgpt > pre ol > li { margin: -10px 0 0 1.6em ; list-style: decimal }' // reduce v-padding, show number markers
              + '#ddgpt > pre ol > li::marker { font-size: 0.9em }' // shrink number markers
              + '#ddgpt > pre ul { margin: -28px 0 -21px }' // reduce v-padding
              + '#ddgpt > pre ul > li { margin: -10px 0 0 1.2em ; list-style: inside }' ) // reduce v-padding, show bullets
          + '.katex-html { display: none } ' // hide unrendered math
          + '.chatgpt-notif { padding: 11px 15px 6px 12px !important }' // pad site notifications
          + '.chatgpt-modal > div { padding: 20px 25px 24px 25px !important ;' // increase alert padding
              + 'background-color: white !important ; color: black }'
          + '.chatgpt-modal h2 { margin: 0 ; padding: 0 ; font-weight: bold }' // shrink margin/padding around alert titles, force bold
          + '.modal-close-btn { top: -4px !important ; right: -11px !important }' // re-pos modal close button
          + `.modal-close-btn path {${ scheme == 'dark' ? 'stroke: white ; fill: white' : 'stroke: black ; fill: black' }}`
          + `.modal-close-btn:hover { background-color: #${ scheme == 'dark' ? '666464' : 'f2f2f2' } !important }`
          + '.chatgpt-modal p { margin: -8px 0 -14px 4px ; font-size: 1.55rem }' // pos/size modal msg
          + `.chatgpt-modal a { color: #${ scheme == 'dark' ? '00cfff' : '1e9ebb' } !important }`
          + `.modal-buttons { margin: 24px -5px -3px ${ isMobile ? -5 : -15 }px !important }` // pos modal buttons
          + '.chatgpt-modal button {' // modal buttons
              + 'font-size: 1rem ; text-transform: uppercase ; min-width: 121px ;'
              + `padding: ${ isMobile? '7px' : '4px 10px' } !important ;`
              + 'cursor: pointer ; border-radius: 0 !important ; height: 39px ;'
              + 'border: 1px solid ' + ( scheme == 'dark' ? 'white' : 'black' ) + '!important ;'
              + ( scheme == 'dark' ? 'background: none ; color: white' : '') + '}'
          + '.primary-modal-btn { background: black !important ; color: white !important }'
          + '.chatgpt-modal button:hover { background-color: #9cdaff !important ; color: black !important }'
          + ( scheme == 'dark' ? // additional darkmode alert styles
              ( '.chatgpt-modal > div, .chatgpt-modal button:not(.primary-modal-btn) {'
                  + 'background-color: black !important ; color: white }'
              + '.primary-modal-btn { background: white !important ; color: black !important }'
              + '.chatgpt-modal button:hover { background-color: #00cfff !important ; color: black !important }' ) : '' )
          + '#ddgpt * { scrollbar-width: thin }' // make scrollbars thin in Firefox
        )
    }

    function updateTweaksStyle() {

        // Update tweaks style based on settings (for tweaks init + show.reply() + toggleSidebar())
        const isStandbyMode = appDiv.querySelector('.standby-btn'),
              answerIsLoaded = appDiv.querySelector('.corner-btn')
        tweaksStyle.innerText = ( config.widerSidebar ? wsbStyles : '' )
                              + ( config.stickySidebar && !isStandbyMode && answerIsLoaded ? ssbStyles : '' )

        // Update 'by KudoAI' visibility based on corner space available
        const kudoAIspan = appDiv.querySelector('.kudoai')
        if (kudoAIspan) kudoAIspan.style.display = (
            appDiv.querySelectorAll('.corner-btn').length < ( isMobile ? 3 : !config.widerSidebar ? 6 : 8 )) ? '' : 'none'

        // Update <pre> max-height in Sticky Sidebar mode based on RQ visibility (for get.reply()'s RQ show + menu RQ toggle)
        const answerPre = appDiv.querySelector('pre'),
              relatedQueries = appDiv.querySelector('.related-queries'),
              shorterPreHeight = window.innerHeight - relatedQueries?.offsetHeight - 245,
              longerPreHeight = window.innerHeight - 255
        if (answerPre) answerPre.style.maxHeight = !config.stickySidebar ? 'none' : (
            relatedQueries?.offsetHeight > 0 ? `${ shorterPreHeight }px` : `${ longerPreHeight }px` )
    }

    const fontSizeSlider = {
        fadeInDelay: 5, // ms
        hWheelDistance: 10, // px

        createAppend: function() {

            // Create/append slider elems
            fontSizeSlider.cursorOverlay = document.createElement('div')
            fontSizeSlider.cursorOverlay.classList.add('cursor-overlay') // for grabbing cursor
            const slider = document.createElement('div') ; slider.id = 'font-size-slider-track'
            slider.className = 'fade-in-less' ; slider.style.display = 'none'
            const sliderThumb = document.createElement('div') ; sliderThumb.id = 'font-size-slider-thumb'
            slider.append(sliderThumb)
            appDiv.insertBefore(slider, appDiv.querySelector('.btn-tooltip,' // desktop
                                                           + 'pre')) // mobile
            // Init thumb pos
            setTimeout(() => {
                const iniLeft = (config.fontSize - config.minFontSize) / (config.maxFontSize - config.minFontSize) // left ratio
                              * (slider.offsetWidth - sliderThumb.offsetWidth) // slider width
                sliderThumb.style.left = iniLeft + 'px'
            }, fontSizeSlider.fadeInDelay) // to ensure visibility for accurate dimension calcs

            // Add event listeners for dragging thumb
            let isDragging = false, startX, startLeft
            sliderThumb.addEventListener(inputEvents.down, event => {
                isDragging = true ; startX = event.clientX ; startLeft = sliderThumb.offsetLeft     
                document.body.appendChild(fontSizeSlider.cursorOverlay)
            })
            document.addEventListener(inputEvents.move, event => {
                if (isDragging) moveThumb(startLeft + event.clientX - startX) })
            document.addEventListener(inputEvents.up, () => {
                isDragging = false
                if (fontSizeSlider.cursorOverlay.parentNode)
                    fontSizeSlider.cursorOverlay.parentNode.removeChild(fontSizeSlider.cursorOverlay)
            })

            // Add event listener for wheel-scrolling thumb
            if (!isMobile) slider.addEventListener('wheel', event => {
                event.preventDefault()
                moveThumb(sliderThumb.offsetLeft - Math.sign(event.deltaY) * fontSizeSlider.hWheelDistance)
            })

            // Add event listener for seek/dragging by inputEvents.down on track
            slider.addEventListener(inputEvents.down, event => {
                const clientX = event.clientX || event.touches?.[0]?.clientX
                moveThumb(clientX - slider.getBoundingClientRect().left - sliderThumb.offsetWidth / 2)
                isDragging = true ; startX = clientX ; startLeft = sliderThumb.offsetLeft // manually init dragging
                document.body.appendChild(fontSizeSlider.cursorOverlay)
            })

            function moveThumb(newLeft) {

                // Bound thumb
                const sliderWidth = slider.offsetWidth - sliderThumb.offsetWidth
                if (newLeft < 0) newLeft = 0
                if (newLeft > sliderWidth) newLeft = sliderWidth
    
                // Move thumb
                sliderThumb.style.left = newLeft + 'px'
    
                // Adjust font size based on thumb position
                const answerPre = appDiv.querySelector('pre'),
                      fontSizePercent = newLeft / sliderWidth,
                      fontSize = config.minFontSize + fontSizePercent * (config.maxFontSize - config.minFontSize)
                answerPre.style.fontSize = fontSize + 'px'
                answerPre.style.lineHeight = fontSize * config.lineHeightRatio + 'px'
                saveSetting('fontSize', fontSize)
            }

            return slider            
        },

        toggle: function(state = '') {
            const slider = document.getElementById('font-size-slider-track') || fontSizeSlider.createAppend()

            // Toggle visibility
            const balloonTip = appDiv.querySelector('.balloon-tip')
            if (state == 'on' || (!state && slider.style.display == 'none')) {
                slider.style.display = '' ; balloonTip.style.display = 'none'
                setTimeout(() => slider.classList.add('active'), fontSizeSlider.fadeInDelay)
            } else if (state == 'off' || (!state && slider.style.display != 'none')) {
                slider.classList.remove('active') ; balloonTip.style.display = ''
                setTimeout(() => slider.style.display = 'none', 55)
            }
        }
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
        for (const [attr, value] of [['width', 17], ['height', 17], ['viewBox', '0 0 16 16']])
            ssbSVG.setAttribute(attr, value)

        // Update SVG elements
        while (ssbSVG.firstChild) { ssbSVG.removeChild(ssbSVG.firstChild) }
        const ssbSVGpaths = config.stickySidebar ? ssbONpaths : ssbOFFpaths
        ssbSVGpaths.forEach(path => ssbSVG.append(path))
        if (!ssbSpan.contains(ssbSVG)) ssbSpan.append(ssbSVG)
    }

    function updateTooltip(buttonType) { // text & position
        const cornerBtnTypes = ['about', 'speak', 'ssb', 'csb', 'font-size', 'wsb'],
              [ctrAddend, spreadFactor] = appDiv.querySelector('.standby-btn') ? [20, 15] : [6, 27.5],
              iniRoffset = spreadFactor * (buttonType == 'send' ? 1.5 : cornerBtnTypes.indexOf(buttonType) + 1) + ctrAddend

        // Update text
        tooltipDiv.innerText = (
            buttonType == 'about' ? msgs.menuLabel_about || 'About'
          : buttonType == 'speak' ? msgs.tooltip_playAnswer || 'Play answer'
          : buttonType == 'ssb' ? (( config.stickySidebar ? `${ msgs.prefix_exit || 'Exit' } ` :  '' )
                                   + ( msgs.menuLabel_stickySidebar || 'Sticky Sidebar' ))
          : buttonType == 'csb' ? msgs.menuLabel_colorScheme || 'Color Scheme'
          : buttonType == 'font-size' ? msgs.tooltip_fontSize || 'Font size'
          : buttonType == 'wsb' ? (( config.widerSidebar ? `${ msgs.prefix_exit || 'Exit' } ` :  '' )
                                   + ( msgs.menuLabel_widerSidebar || 'Wider Sidebar' ))
          : buttonType == 'send' ? msgs.tooltip_sendReply || 'Send reply' : '' )

        // Update position
        tooltipDiv.style.top = `${ buttonType != 'send' ? -15
          : tooltipDiv.eventYpos - appDiv.getBoundingClientRect().top - 36 }px`
        tooltipDiv.style.right = `${ iniRoffset - tooltipDiv.getBoundingClientRect().width / 2 }px`
    }

    function handleRQevent(event) { // for attachment/removal in `get.reply()` + `show.reply().handleSubmit()`
        const keys = [' ', 'Spacebar', 'Enter', 'Return'], keyCodes = [32, 13]    
        if (keys.includes(event.key) || keyCodes.includes(event.keyCode) || event.type == 'click') {
            event.preventDefault() // prevent scroll on space taps

            // Remove divs/listeners
            const relatedQueriesDiv = appDiv.querySelector('.related-queries')
            Array.from(relatedQueriesDiv.children).forEach(relatedQueryDiv => {
                ['click', 'keydown'].forEach(event => { relatedQueryDiv.removeEventListener(event, handleRQevent) })})
            relatedQueriesDiv.remove()

            // Send related query
            const chatbar = appDiv.querySelector('textarea')
            if (chatbar) {
                chatbar.value = event.target.textContent
                show.reply.submitSrc = 'click' // for show.reply()'s mobile scroll-to-top if user interacted
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
        notify(( msgs.menuLabel_proxyAPImode || 'Proxy API Mode' ) + ' ' + menuState.word[+config.proxyAPIenabled])
        refreshMenu()
        if (appDiv.querySelector('#ddgpt-alert')) location.reload() // re-send query if user alerted
    }

    function toggleSidebar(mode) {
        saveSetting(mode + 'Sidebar', !config[mode + 'Sidebar'])
        updateTweaksStyle()
        if (mode == 'wider' && appDiv.querySelector('.corner-btn')) updateWSBsvg() ; else updateSSBsvg()
        notify(( msgs[`menuLabel_${ mode }Sidebar`] || mode.charAt(0).toUpperCase() + mode.slice(1) + ' Sidebar' )
            + ' ' + menuState.word[+config[mode + 'Sidebar']])
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

        tryNew: function(caller, reason = 'err') {
            consoleErr(`Error using ${apis[caller.api].endpoint} due to ${reason}`)
            if (caller.attemptCnt < Object.keys(apis).length -1) {
                consoleInfo('Trying another endpoint...')
                caller.triedAPIs.push({ [caller.api]: reason }) ; caller.attemptCnt++
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
            const ip = ipv4.generate({ verbose: false })
            let headers = { 'Content-Type': 'application/json', 'X-Forwarded-For': ip, 'X-Real-IP': ip }
            if (api == 'OpenAI') headers.Authorization = 'Bearer ' + config.openAIkey
            headers.Referer = headers.Origin = apis[api].expectedOrigin || '' // preserve expected traffic src
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
                    api.tryNew(get.reply, 'timeout') }, config.streamingDisabled ? 9000 : 6000)

            // Get/show answer from ChatGPT
            GM.xmlHttpRequest({
                method: apis[get.reply.api].method, url: apis[get.reply.api].endpoint,
                responseType: config.streamingDisabled || !config.proxyAPIenabled ? 'text' : 'stream',
                headers: api.createHeaders(get.reply.api), data: api.createPayload(get.reply.api, msgChain),
                onload: resp => dataProcess.text(get.reply, resp),
                onloadstart: resp => dataProcess.stream(get.reply, resp),
                onerror: err => { consoleErr(err.message)
                    if (!config.proxyAPIenabled) appAlert(!config.openAIkey ? 'login' : ['openAInotWorking', 'suggestProxy'])
                    else if (get.reply.status != 'done') api.tryNew(get.reply)
                }
            })

            // Get/show related queries if enabled on 1st get.reply()
            if (!config.rqDisabled && get.reply.attemptCnt == 1) {
                const lastQuery = stripQueryAugments(msgChain)[msgChain.length - 1].content
                get.related(lastQuery).then(queries => show.related(queries))
                    .catch(err => { consoleErr(err.message)
                        if (get.related.status != 'done') api.tryNew(get.related) })
            }
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

            setTimeout(() => { // try diff API after 7s of no response
                if (get.related.status != 'done')
                    api.tryNew(get.related, 'timeout') }, 7000)

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
                        } else if (get.related.api == 'AIchatOS'
                            && !new RegExp([apis.AIchatOS.expectedOrigin, ...apis.AIchatOS.failFlags]
                                .map(str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // escape special chars
                                .join('|')).test(event.responseText)) {
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

        text: function(caller, resp) {
            if (!config.streamingDisabled && config.proxyAPIenabled || get.reply.status == 'done')
                return
            if (resp.status != 200) {
                consoleErr('Response status', resp.status)
                consoleErr('Response text', resp.responseText)
                if (config.proxyAPIenabled && get.reply.status != 'done')
                    api.tryNew(caller)
                else if (resp.status == 401 && !config.proxyAPIenabled) {
                    GM_deleteValue(config.keyPrefix + '_openAItoken') ; appAlert('login') }
                else if (resp.status == 403)
                    appAlert(config.proxyAPIenabled ? ['proxyNotWorking', 'suggestOpenAI'] : 'checkCloudflare')
                else if (resp.status == 429)
                    appAlert(['tooManyRequests', config.proxyAPIenabled ? 'suggestOpenAI' : 'suggestProxy'])
                else // uncommon status
                    appAlert(`${ config.proxyAPIenabled ? 'proxyN' : 'openAIn' }otWorking`,
                             `suggest${ config.proxyAPIenabled ? 'OpenAI' : 'Proxy' }`)
            } else if (caller.api == 'OpenAI') {
                if (resp.response) {
                    try {
                        show.reply(JSON.parse(resp.response).choices[0].message.content)
                    } catch (err) {
                        consoleInfo('Response: ' + resp.response)
                        consoleErr(appAlerts.parseFailed, err)
                        appAlert('openAInotWorking, suggestProxy')
                    }
                } else { consoleInfo('Response: ' + resp.responseText) ; appAlert('openAInotWorking, suggestProxy') }
            } else if (caller.api == 'AIchatOS') {
                if (resp.responseText
                    && !new RegExp([apis.AIchatOS.expectedOrigin, ...apis.AIchatOS.failFlags]
                        .map(str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // escape special chars
                        .join('|')).test(event.responseText)) {
                            try {
                                const text = resp.responseText, chunkSize = 1024
                                let answer = '', currentIdx = 0
                                while (currentIdx < text.length) {
                                    const chunk = text.substring(currentIdx, currentIdx + chunkSize)
                                    currentIdx += chunkSize ; answer += chunk
                                }
                                show.reply(answer)
                                get.reply.status = 'done' ; api.clearTimedOut(get.reply.triedAPIs) ; get.reply.attemptCnt = null
                            } catch (err) { // use different endpoint or suggest OpenAI
                                consoleInfo('Response: ' + resp.responseText)
                                consoleErr(appAlerts.parseFailed, err)
                                if (get.reply.status != 'done') api.tryNew(caller)
                            }
                } else { consoleInfo('Response: ' + resp.responseText) ; if (get.reply.status != 'done') api.tryNew(caller) }
            } else if (caller.api == 'GPTforLove') {
                if (resp.responseText && !resp.responseText.includes('Fail')) {
                    try {
                        let chunks = resp.responseText.trim().split('\n'),
                            lastObj = JSON.parse(chunks[chunks.length - 1])
                        if (lastObj.id) apiIDs.gptForLove.parentID = lastObj.id
                        show.reply(lastObj.text)
                        get.reply.status = 'done' ; api.clearTimedOut(get.reply.triedAPIs) ; get.reply.attemptCnt = null
                    } catch (err) { // use different endpoint or suggest OpenAI
                        consoleInfo('Response: ' + resp.responseText)
                        consoleErr(appAlerts.parseFailed, err)
                        if (get.reply.status != 'done') api.tryNew(caller)
                    }
                } else { consoleInfo('Response: ' + resp.responseText) ; if (get.reply.status != 'done') api.tryNew(caller) }
            } else if (caller.api == 'MixerBox AI') {
                if (resp.responseText) {
                    try {
                        const extractedData = Array.from(resp.responseText.matchAll(/data:(.*)/g), match => match[1]
                            .replace(/\[SPACE\]/g, ' ').replace(/\[NEWLINE\]/g, '\n'))
                            .filter(match => !/(?:message_(?:start|end)|done)/.test(match))
                        show.reply(extractedData.join(''))
                        get.reply.status = 'done' ; api.clearTimedOut(get.reply.triedAPIs) ; get.reply.attemptCnt = null
                    } catch (err) { // use different endpoint or suggest OpenAI
                        consoleInfo('Response: ' + resp.responseText)
                        consoleErr(appAlerts.parseFailed, err)
                        if (get.reply.status != 'done') api.tryNew(caller)
                    }
                } else { consoleInfo('Response: ' + resp.responseText) ; if (get.reply.status != 'done') api.tryNew(caller) }
            }
        },

        stream: function(caller, stream) {
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
                if (caller.api == 'MixerBox AI') { // pre-process chunks
                    const extractedChunks = Array.from(chunk.matchAll(/data:(.*)/g), match => match[1]
                        .replace(/\[SPACE\]/g, ' ').replace(/\[NEWLINE\]/g, '\n'))
                        .filter(match => !/(?:message_(?:start|end)|done)/.test(match))
                    chunk = extractedChunks.join('')
                }
                accumulatedChunks = apis[caller.api].accumulatesText ? chunk : accumulatedChunks + chunk
                if (/['"]?status['"]?:\s*['"]Fail['"]/.test(accumulatedChunks)) { // GPTforLove fail
                    consoleErr('Response', accumulatedChunks)
                    if (get.reply.status != 'done' && !get.reply.sender) api.tryNew(caller)
                    return
                }
                try { // to show stream text
                    let textToShow
                    if (caller.api == 'GPTforLove') { // extract parentID + latest chunk text
                        const jsonLines = accumulatedChunks.split('\n'),
                              nowResult = JSON.parse(jsonLines[jsonLines.length - 1])
                        if (nowResult.id) apiIDs.gptForLove.parentID = nowResult.id // for contextual replies
                        textToShow = nowResult.text
                    } else textToShow = accumulatedChunks
                    if (textToShow && get.reply.status != 'done') { // text ready, app waiting or sending
                        if (!get.reply.sender) get.reply.sender = caller.api // app is waiting, become sender
                        if (get.reply.sender == caller.api) show.reply(textToShow)
                    }
                } catch (err) { consoleErr('Error showing stream', err.message) }
                return reader.read().then(({ done, value }) => {
                    if (get.reply.sender == caller.api) // am designated sender, recurse
                        processStreamText({ done, value })
                }).catch(err => consoleErr('Error reading stream', err.message))
            }
        }
    }

    // Define SHOW functions

    const show = {

        reply: function(answer) {

            // Hide font size slider if visibile
            if (appDiv.querySelector('#font-size-slider-track')) fontSizeSlider.toggle('off')

            // Build answer interface up to reply section if missing
            if (!appDiv.querySelector('pre')) {
                while (appDiv.firstChild) appDiv.removeChild(appDiv.firstChild) // clear app content

                // Create/append app title anchor
                updateTitleAnchor()

                // Create/append corner buttons div
                const cornerBtnsDiv = document.createElement('div') ; cornerBtnsDiv.id = 'corner-btns'
                appDiv.append(cornerBtnsDiv)

                // Create/append About button
                const aboutSpan = document.createElement('span'),
                      aboutSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                      aboutSVGpath = document.createElementNS('http://www.w3.org/2000/svg','path')
                aboutSpan.id = 'about-btn' // for toggleTooltip()
                aboutSpan.className = 'corner-btn'
                const aboutSVGattrs = [['width', 17], ['height', 17], ['viewBox', '0 0 56.693 56.693']]
                aboutSVGattrs.forEach(([attr, value]) => aboutSVG.setAttribute(attr, value))
                aboutSVGpath.setAttribute('d',
                    'M28.765,4.774c-13.562,0-24.594,11.031-24.594,24.594c0,13.561,11.031,24.594,24.594,24.594  c13.561,0,24.594-11.033,24.594-24.594C53.358,15.805,42.325,4.774,28.765,4.774z M31.765,42.913c0,0.699-0.302,1.334-0.896,1.885  c-0.587,0.545-1.373,0.82-2.337,0.82c-0.993,0-1.812-0.273-2.431-0.814c-0.634-0.551-0.954-1.188-0.954-1.891v-1.209  c0-0.703,0.322-1.34,0.954-1.891c0.619-0.539,1.438-0.812,2.431-0.812c0.964,0,1.75,0.277,2.337,0.82  c0.594,0.551,0.896,1.186,0.896,1.883V42.913z M38.427,24.799c-0.389,0.762-0.886,1.432-1.478,1.994  c-0.581,0.549-1.215,1.044-1.887,1.473c-0.643,0.408-1.248,0.852-1.798,1.315c-0.539,0.455-0.99,0.963-1.343,1.512  c-0.336,0.523-0.507,1.178-0.507,1.943v0.76c0,0.504-0.247,1.031-0.735,1.572c-0.494,0.545-1.155,0.838-1.961,0.871l-0.167,0.004  c-0.818,0-1.484-0.234-1.98-0.699c-0.532-0.496-0.801-1.055-0.801-1.658c0-1.41,0.196-2.611,0.584-3.572  c0.385-0.953,0.86-1.78,1.416-2.459c0.554-0.678,1.178-1.27,1.854-1.762c0.646-0.467,1.242-0.93,1.773-1.371  c0.513-0.428,0.954-0.885,1.312-1.354c0.328-0.435,0.489-0.962,0.489-1.608c0-1.066-0.289-1.83-0.887-2.334  c-0.604-0.512-1.442-0.771-2.487-0.771c-0.696,0-1.294,0.043-1.776,0.129c-0.471,0.083-0.905,0.223-1.294,0.417  c-0.384,0.19-0.745,0.456-1.075,0.786c-0.346,0.346-0.71,0.783-1.084,1.301c-0.336,0.473-0.835,0.83-1.48,1.062  c-0.662,0.239-1.397,0.175-2.164-0.192c-0.689-0.344-1.11-0.793-1.254-1.338c-0.135-0.5-0.135-1.025-0.002-1.557  c0.098-0.453,0.369-1.012,0.83-1.695c0.451-0.67,1.094-1.321,1.912-1.938c0.814-0.614,1.847-1.151,3.064-1.593  c1.227-0.443,2.695-0.668,4.367-0.668c1.648,0,3.078,0.249,4.248,0.742c1.176,0.496,2.137,1.157,2.854,1.967  c0.715,0.809,1.242,1.738,1.568,2.762c0.322,1.014,0.486,2.072,0.486,3.146C39.024,23.075,38.823,24.024,38.427,24.799z')
                aboutSVGpath.setAttribute('stroke', 'none')
                aboutSVG.append(aboutSVGpath) ; aboutSpan.append(aboutSVG) ; cornerBtnsDiv.append(aboutSpan)

                // Create/append Speak button
                if (answer != 'standby') {
                    var speakSpan = document.createElement('span'),
                        speakSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                    speakSpan.id = 'speak-btn' // for toggleTooltip()
                    speakSpan.className = 'corner-btn' ; speakSpan.style.margin = '-2px 8px 0 0'
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
                    speakSpan.append(speakSVG) ; cornerBtnsDiv.append(speakSpan)
                }

                // Create/append Sticky Sidebar button
                if (!isCentered && !isMobile) {
                    var ssbSpan = document.createElement('span'),
                        ssbSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                    ssbSpan.id = 'ssb-btn' // for updateSSBsvg() + toggleTooltip()
                    ssbSpan.className = 'corner-btn' ; ssbSpan.style.marginRight = '8px'
                    ssbSpan.append(ssbSVG) ; cornerBtnsDiv.append(ssbSpan) ; updateSSBsvg()
                }

                // Create/append Color Scheme button
                const csbSpan = document.createElement('span'),
                      csbSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                      csbSVGpath = document.createElementNS('http://www.w3.org/2000/svg','path')
                csbSpan.id = 'csb-btn' // for toggleTooltip()
                csbSpan.className = 'corner-btn' ; csbSpan.style.margin = '-0.2px 9px 0 0'
                const csbSVGattrs = [['width', 15], ['height', 15], ['viewBox', '0 -960 960 960']]
                csbSVGattrs.forEach(([attr, value]) => csbSVG.setAttribute(attr, value))
                csbSVGpath.setAttribute('d', 'M479.92-34q-91.56 0-173.4-35.02t-142.16-95.34q-60.32-60.32-95.34-142.24Q34-388.53 34-480.08q0-91.56 35.02-173.4t95.34-142.16q60.32-60.32 142.24-95.34Q388.53-926 480.08-926q91.56 0 173.4 35.02t142.16 95.34q60.32 60.32 95.34 142.24Q926-571.47 926-479.92q0 91.56-35.02 173.4t-95.34 142.16q-60.32 60.32-142.24 95.34Q571.47-34 479.92-34ZM530-174q113-19 186.5-102.78T790-480q0-116.71-73.5-201.35Q643-766 530-785v611Z')
                csbSVG.append(csbSVGpath) ; csbSpan.append(csbSVG) ; cornerBtnsDiv.append(csbSpan)

                // Create/append Font Size button
                if (answer != 'standby') {
                    var fontSizeSpan = document.createElement('span'),
                        fontSizeSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                    const fontSizeSVGpathA = document.createElementNS('http://www.w3.org/2000/svg','path'),
                          fontSizeSVGpathB = document.createElementNS('http://www.w3.org/2000/svg','path')
                    fontSizeSpan.id = 'font-size-btn' // for toggleTooltip()
                    fontSizeSpan.className = 'corner-btn' ; fontSizeSpan.style.margin = '0 10px 0 2px'
                    const fontSizeSVGattrs = [['width', 17], ['height', 17], ['viewBox', '0 0 512 512']]
                    fontSizeSVGattrs.forEach(([attr, value]) => fontSizeSVG.setAttribute(attr, value))
                    fontSizeSVGpathA.setAttribute('d',
                        'M234.997 448.199h-55.373a6.734 6.734 0 0 1-6.556-5.194l-11.435-48.682a6.734 6.734 0 0 0-6.556-5.194H86.063a6.734 6.734 0 0 0-6.556 5.194l-11.435 48.682a6.734 6.734 0 0 1-6.556 5.194H7.74c-4.519 0-7.755-4.363-6.445-8.687l79.173-261.269a6.734 6.734 0 0 1 6.445-4.781h69.29c2.97 0 5.59 1.946 6.447 4.79l78.795 261.269c1.303 4.322-1.933 8.678-6.448 8.678zm-88.044-114.93l-19.983-84.371c-1.639-6.921-11.493-6.905-13.111.02l-19.705 84.371c-.987 4.224 2.22 8.266 6.558 8.266H140.4c4.346 0 7.555-4.056 6.553-8.286z')
                    fontSizeSVGpathB.setAttribute('d',
                        'M502.572 448.199h-77.475a9.423 9.423 0 0 1-9.173-7.268l-16-68.114a9.423 9.423 0 0 0-9.173-7.268H294.19a9.423 9.423 0 0 0-9.173 7.268l-16 68.114a9.423 9.423 0 0 1-9.173 7.268h-75.241c-6.322 0-10.851-6.104-9.017-12.155L286.362 70.491a9.422 9.422 0 0 1 9.017-6.69h96.947a9.422 9.422 0 0 1 9.021 6.702l110.245 365.554c1.825 6.047-2.703 12.142-9.02 12.142zM379.385 287.395l-27.959-118.047c-2.293-9.683-16.081-9.661-18.344.029l-27.57 118.047c-1.38 5.91 3.106 11.565 9.175 11.565h55.529c6.082-.001 10.571-5.676 9.169-11.594z')
                    fontSizeSVG.append(fontSizeSVGpathA, fontSizeSVGpathB) ; fontSizeSpan.append(fontSizeSVG) ; cornerBtnsDiv.append(fontSizeSpan)
                }

                // Create/append Wider Sidebar button
                if (!isCentered && !isMobile) {   
                    var wsbSpan = document.createElement('span'),
                        wsbSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                    wsbSpan.id = 'wsb-btn' // for updateSSBsvg() + toggleTooltip()
                    wsbSpan.className = 'corner-btn' ; wsbSpan.style.margin = '-1px 12.5px 0 0'
                    wsbSpan.append(wsbSVG) ; cornerBtnsDiv.append(wsbSpan) ; updateWSBsvg()
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
                csbSVG.addEventListener('click', launchSchemeModal)
                fontSizeSVG?.addEventListener('click', () => fontSizeSlider.toggle())
                wsbSVG?.addEventListener('click', () => toggleSidebar('wider'))
                if (!isMobile) // add hover listeners for tooltips
                    [aboutSpan, speakSpan, ssbSpan, csbSpan, fontSizeSpan, wsbSpan].forEach(span => { if (span)
                        ['mouseover', 'mouseout'].forEach(event => span.addEventListener(event, toggleTooltip)) })

                // Create/append 'by KudoAI'
                const kudoAIspan = document.createElement('span')
                kudoAIspan.classList.add('kudoai', 'no-user-select') ; kudoAIspan.textContent = 'by '
                kudoAIspan.append(createAnchor('https://www.kudoai.com', 'KudoAI'))
                appDiv.querySelector('.app-name').insertAdjacentElement('afterend', kudoAIspan)
                updateTweaksStyle() // show/hide based on corner space available

                // Show standby state if prefix/suffix mode on
                if (answer == 'standby') {
                    const standbyBtn = document.createElement('button')
                    standbyBtn.className = 'standby-btn'
                    standbyBtn.textContent = msgs.buttonLabel_sendQueryToGPT || 'Send search query to GPT'
                    appDiv.append(standbyBtn)
                    standbyBtn.addEventListener('click', () => {
                        appAlert('waitingResponse')
                        msgChain.push({ role: 'user', content: augmentQuery(new URL(location.href).searchParams.get('q')) })
                        show.reply.submitSrc = 'click' ; show.reply.chatbarFocused = false
                        get.reply(msgChain)
                    })

                // Otherwise create/append answer bubble
                } else {
                    const answerPre = document.createElement('pre'),
                          balloonTipSpan = document.createElement('span')
                    balloonTipSpan.className = 'balloon-tip'
                    appDiv.append(balloonTipSpan, answerPre)
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
                continueChatDiv.append(chatTextarea)
                replyForm.append(continueChatDiv) ; replySection.append(replyForm)
                appDiv.append(replySection)

                // Create/append send button
                const sendButton = document.createElement('button'),
                      sendSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                      sendSVGpath = createSVGpath({ stroke: '', 'stroke-width': '2', linecap: 'round',
                          'stroke-linejoin': 'round', d: 'M7 11L12 6L17 11M12 18V7' })
                sendButton.id = 'send-btn'
                sendButton.style.right = `${ isFirefox ? 8 : 6 }px`
                sendButton.style.bottom = `${ isFirefox ? 49 : 53 }px`
                for (const [attr, value] of [
                    ['viewBox', '4 2 16 16'], ['fill', 'none'], ['width', 16], ['height', 16],
                    ['stroke', 'currentColor'], ['stroke-width', '2'], ['stroke-linecap', 'round'], ['stroke-linejoin', 'round']
                ]) sendSVG.setAttribute(attr, value)
                sendSVG.append(sendSVGpath) ; sendButton.append(sendSVG) ; continueChatDiv.append(sendButton)

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
                    else window.scrollBy({ top: appDiv.querySelector('#app-chatbar').getBoundingClientRect().bottom - window.innerHeight +12 })
                }
            }

            // Focus chatbar conditionally
            if (!config.autoFocusChatbarDisabled && !show.reply.chatbarFocused // do only once if enabled
                && !isMobile // exclude mobile devices to not auto-popup OSD keyboard
                && ( appDiv.offsetHeight < window.innerHeight - appDiv.getBoundingClientRect().top )) { // app fully above fold
                    appDiv.querySelector('#app-chatbar').focus() ; show.reply.chatbarFocused = true }

            show.reply.submitSrc = 'none' // for reply section builder's mobile scroll-to-top if user interacted

            function handleEnter(event) {
                if (event.key == 'Enter' || event.keyCode == 13) {
                    if (event.ctrlKey) { // add newline
                        const chatTextarea = appDiv.querySelector('#app-chatbar'),
                              caretPos = chatTextarea.selectionStart,
                              textBefore = chatTextarea.value.substring(0, caretPos),
                              textAfter = chatTextarea.value.substring(caretPos)
                        chatTextarea.value = textBefore + '\n' + textAfter // add newline
                        chatTextarea.selectionStart = chatTextarea.selectionEnd = caretPos + 1 // preserve ibeam pos
                        autosizeChatbar()
                    } else if (!event.shiftKey) handleSubmit(event)
            }}

            function handleSubmit(event) {
                event.preventDefault()
                const chatTextarea = appDiv.querySelector('#app-chatbar')

                // No reply, change placeholder + focus chatbar
                if (chatTextarea.value.trim() == '') {
                    chatTextarea.placeholder = `${ msgs.placeholder_typeSomething || 'Type something' }...`
                    chatTextarea.focus()

                // Yes reply, submit it + transform to loading UI
                } else {

                    // Modify/submit msg chain
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
                        const relatedQueriesDiv = appDiv.querySelector('.related-queries')
                        Array.from(relatedQueriesDiv.children).forEach(child => {
                            ['click', 'keydown'].forEach(event => child.removeEventListener(event, handleRQevent)) })
                        relatedQueriesDiv.remove()
                    } catch (err) {}

                    // Remove 'Send reply' tooltip from send btn clicks
                    if (!isMobile) tooltipDiv.style.opacity = 0

                    // Show loading status
                    const replySection = appDiv.querySelector('section')
                    replySection.classList.add('loading', 'no-user-select')
                    replySection.innerText = appAlerts.waitingResponse

                    show.reply.chatbarFocused = false // for auto-focus routine
                }
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
                    if (parseInt(getComputedStyle(chatTextarea).height, 10) < 35) // if down to one line
                        chatTextarea.style.height = '19px' // ...reset to original height
                }
                chatTextarea.style.height = chatTextarea.scrollHeight - vOffset + 'px'
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

    if (isDDGserp) { // show DUCKDUCKGPT

        // Init ALERTS
        var appAlerts = {
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

        // Pre-load LOGO
        var appLogoImg = document.createElement('img') ; updateAppLogoSrc() 
        appLogoImg.onload = () => { appLogoImg.loaded = true ; updateTitleAnchor() }

        // Create/ID/classify/listenerize DDGPT container
        var appDiv = document.createElement('div') ; appDiv.id = 'ddgpt' ; appDiv.classList.add('fade-in')
        appDiv.addEventListener(inputEvents.down, event => { // to dismiss visible font size slider
            let elem = event.target
            while (elem && !(elem.id?.includes('font-size'))) // find font size elem parent to exclude handling down event
                elem = elem.parentNode
            if (!elem && appDiv.querySelector('#font-size-slider-track')) fontSizeSlider.toggle('off')
        })

        // Stylize APP elems
        var appStyle =  document.createElement('style') ; updateAppStyle()
        const hljsStyle = document.createElement('style') ; hljsStyle.innerText = GM_getResourceText('hljsCSS')
        document.head.append(appStyle, hljsStyle)

        // Stylize SITE elems
        var tweaksStyle = document.createElement('style'),
              wsbStyles = 'section[data-area="mainline"] { max-width: 590px !important }' // max before centered mode changes
                        + 'section[data-area="sidebar"] { max-width: 530px !important ; flex-basis: 530px !important }'
                        + '#app-chatbar { width: 95.6% }',
              ssbStyles = '#ddgpt { position: sticky ; top: 14px }'
                        + '#ddgpt ~ * { display: none }' // hide sidebar contents
                        + 'body, div.site-wrapper { overflow: clip }' // replace `overflow: hidden` to allow stickiness
        updateTweaksStyle() ; document.head.append(tweaksStyle)

        // Create/stylize TOOLTIPs
        if (!isMobile) {
            var tooltipDiv = document.createElement('div') ; tooltipDiv.classList.add('btn-tooltip', 'no-user-select')
            const tooltipStyle = document.createElement('style')
            tooltipStyle.innerText = '.btn-tooltip {'
                + 'background-color: rgba(0, 0, 0, 0.64) ; padding: 4px 6px ; border-radius: 6px ; border: 1px solid #d9d9e3 ;' // bubble style
                + 'font-size: 0.87em ; color: white ;' // font style
                + 'position: absolute ;' // for updateTooltip() calcs
                + 'box-shadow: 3px 5px 16px 0px rgb(0 0 0 / 21%) ;' // drop shadow
                + 'opacity: 0 ; transition: opacity 0.1s ; height: fit-content ; z-index: 9999 }' // visibility
            document.head.append(tooltipStyle)
        }
     
        // Create/classify/fill feedback FOOTER
        const appFooter = document.createElement('footer')
        appFooter.classList.add('fade-in', // DDGPT class
                                'feedback-prompt') // DDG class
        let footerContent = createAnchor(config.feedbackURL, msgs.link_shareFeedback || 'Share feedback')
        footerContent.className = 'js-feedback-prompt-generic' // DDG footer class
        appFooter.append(footerContent)

        // APPEND DDGPT + footer to DDG
        const appElems = [appFooter, appDiv],
              hostContainer = document.querySelector(isMobile || isCentered ? '[data-area*="mainline"]'
                                                                            : '[class*="sidebar"]')
        appElems.forEach(elem => hostContainer.prepend(elem))
        appElems.toReversed().forEach((elem, idx) => // fade in staggered
            setTimeout(() => elem.classList.add('active'), idx * 550 - 200))

        // REPLACE hostContainer max-width w/ min-width for better UI
        if (!isMobile) { hostContainer.style.maxWidth = '' ; hostContainer.style.minWidth = '448px' }

        // Check for active TEXT CAMPAIGNS to replace footer CTA
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
                                        !config.userLocale || !adGroup.targetLocations.some( // ...and user locale is missing or excluded
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
                                footerContent.setAttribute('class', '') // reset for re-fade
                                const newFooterContent = destinationURL ? createAnchor(destinationURL)
                                                                        : document.createElement('span')
                                footerContent.replaceWith(newFooterContent) ; footerContent = newFooterContent
                                footerContent.classList.add('fade-in', // DDGPT fade class
                                                            'js-feedback-prompt-generic') // DDG footer class
                                footerContent.textContent = chosenAd.text
                                footerContent.setAttribute('title', chosenAd.tooltip || '')
                                setTimeout(() => footerContent.classList.add('active'), 100) // to trigger fade
                                adSelected = true ; break
                            }
                            if (adSelected) break // out of campaign loop after ad selection
                }})}

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
        })

        // Show STANDBY mode or get/show ANSWER
        var msgChain = [{ role: 'user', content: augmentQuery(new URL(location.href).searchParams.get('q')) }]
        if (!config.autoget && !/src=(?:first-run|asktip)/.test(location.href) // Auto-Get disabled and not queried from other site or 1st run
            || config.prefixEnabled && !/.*q=%2F/.test(document.location) // prefix required but not present
            || config.suffixEnabled && !/.*q=.*(?:%3F|？|%EF%BC%9F)(?:&|$)/.test(document.location)) { // suffix required but not present
                show.reply('standby')
                if (!config.rqDisabled) {
                    const lastQuery = stripQueryAugments(msgChain)[msgChain.length - 1].content
                    get.related(lastQuery).then(queries => show.related(queries))
                        .catch(err => { consoleErr(err.message)
                            if (get.related.status != 'done') api.tryNew(get.related) })
                }
        } else { appAlert('waitingResponse') ; get.reply(msgChain) }

        // Observe for DDG SCHEME CHANGES to update DDGPT scheme if auto-scheme mode if auto-scheme mode
        (new MutationObserver(handleSchemeChange)).observe( // class changes from DDG appearance settings
            document.documentElement, { attributes: true, attributeFilter: ['class'] })
        function handleSchemeChange() {
            if (config.scheme) return // since light/dark hard-set
            const newScheme = chatgpt.isDarkMode() ? 'dark' : 'light'
            if (newScheme != scheme) { scheme = newScheme ; updateAppLogoSrc() ; updateAppStyle() }
        }

    } else { // create/append/listenerize ASKTIP + elems

        const asktipDisabled = () => config.asktipDisabled
            || config.sitesToNotShowAsktip && config.sitesToNotShowAsktip.some(domain => location.href.includes(domain))

        // Pre-load ICON
        const appIconImg = document.createElement('img')
        appIconImg.src = 'https://media.ddgpt.com/images/icons/duckduckgpt/icon64.png?af89302'

        // Init asktip
        let asktip = document.getElementById('asktip')
        if (!asktip) { // make/append it
            const fontFamilies = '"Source Sans Pro", sans-serif', bgColor = '#f9f9f9',
                  noUserSelectStyles = '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none ;'

            // Create/ID/stylize/append asktip div
            asktip = document.createElement('div') ; asktip.id = 'asktip'
            asktip.style.cssText = noUserSelectStyles
              + `font-family: ${fontFamilies} ; font-size: 14px ;`
              + `position: absolute ; background-color: ${bgColor} ; border: 1px solid black ; border-radius: 12px ;`
              + 'padding: 5px 2px ; box-shadow: rgba(0, 0, 0, 0.21) 0 5px 11px ; display: none ; z-index: 1000'
            document.body.append(asktip)

            // Create/stylize/listenerize/append hide tip ELEMS
            const hideTipSpan = document.createElement('span'),
                  hideTipSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                  hideTipSVGpath = document.createElementNS('http://www.w3.org/2000/svg','path'),
                  hideTipSVGattrs = [['width', 17], ['height', 17], ['viewBox', '0 -960 960 960'], ['fill', 'black']]
            hideTipSVGattrs.forEach(([attr, value]) => hideTipSVG.setAttribute(attr, value))
            hideTipSVG.style.cssText = 'position: relative ; top: 2.85px ; margin: 0 4px 0 6px ; vertical-align: baseline'
            hideTipSVGpath.setAttribute('d',
                'm660.61-425.83-93.65-93.65q4.6-29.82-17.63-53.22-22.24-23.39-54.37-18.78l-89.13-89.13q14.43-6.3 34.84-10.61 20.42-4.3 39.5-4.3 82.4 0 138.87 56.48 56.48 56.47 56.48 138.87 0 17.95-3.59 37.63-3.58 19.67-11.32 36.71ZM805.17-280.7l-81.08-81.65q34.04-27.87 61.93-60.82 27.89-32.96 50.02-76.83-52.13-101.3-145.7-162.09-93.57-60.78-210.59-60.78-28.75 0-54.58 3.44-25.82 3.43-48.43 9.73l-90.35-90.34q42.87-17.87 92.44-27.59 49.57-9.72 101.17-9.72 163.3 0 292.61 92Q901.91-653.36 961.09-500q-23.44 64.87-64.65 121.37-41.22 56.5-91.27 97.93ZM790.39-20.48 624.52-184.91q-33.87 11.56-69.5 16.91T480-162.65q-163.87 0-293.78-92.28Q56.3-347.22-1.09-500q19.44-52.87 50.63-100.57 31.2-47.69 71.07-87.82L11.43-798.87l74-74 778.4 778.96-73.44 73.43ZM202.83-608.87q-26 27.7-44.09 52-18.09 24.3-34.22 56.87 50.6 102.48 144.5 162.68 93.9 60.19 210.98 60.19 9.74 0 21.96-.5 12.21-.5 27.04-3.07l-22.78-26.21q-6.31 1.43-12.78 1.93-6.46.5-13.44.5-82.47 0-138.99-56.53-56.53-56.52-56.53-138.99 0-6.41-.07-12.66-.06-6.25 1.37-13.56l-82.95-82.65Zm348.08 72.91ZM365.57-445Z')
            hideTipSpan.style.cssText = 'padding: 3px 1px ; border-radius: 9px ; cursor: pointer'
            hideTipSpan.onmouseover = () => { // highlight bg, show menu
                hideTipSpan.style.background = '#bcd7dfab'
                if (hideAsktipMenu.style.display == 'none') {
                    hideAsktipMenu.style.display = 'grid'
                    hideAsktipMenu.style.left = `${hideTipSpan.getBoundingClientRect().left}px`
                    hideAsktipMenu.style.top = `${ hideTipSpan.getBoundingClientRect().bottom
                        + ( window.scrollY || window.pageYOffset || document.documentElement.scrollTop ) +6 }px`
            }}
            hideTipSpan.onmouseout = () => hideTipSpan.style.background = 'none' // unhighlight bg
            hideTipSVG.append(hideTipSVGpath) ; hideTipSpan.append(hideTipSVG) ; asktip.append(hideTipSpan)

            // Create/ID/stylize/append hide tip menu
            const hideAsktipMenu = document.createElement('div')
            hideAsktipMenu.id = 'hide-asktip-menu' ; hideAsktipMenu.style.display = 'none'
            hideAsktipMenu.style.cssText = noUserSelectStyles
              + `font-family: ${fontFamilies} ; font-size: 13px ; border: 1px solid black ; border-radius: 9px ;`
              + `display: none ; color: rgb(27, 27, 27) ; background: ${bgColor} ; position: absolute ; padding: 3px ;`
              + 'box-shadow: rgba(0, 0, 0, 0.21) 0 5px 11px ; z-index: 1200'
            document.body.append(hideAsktipMenu)

            // Create/fill/stylize/listenerize/append hide tip menu items
            const hideAsktipMenuItemA = document.createElement('span'),
                  hideAsktipMenuItemB = document.createElement('span')
            hideAsktipMenuItemA.textContent = `${ msgs.menuLabel_hideMenu || 'Hide menu' } `
                                         + `${ msgs.menuLabel_forThisSite || 'for this site' }`
            hideAsktipMenuItemB.textContent = `${ msgs.menuLabel_hideMenu || 'Hide menu' } `
                                         + `${ msgs.menuLabel_fromAllSites || 'from all sites' }`;
            [hideAsktipMenuItemA, hideAsktipMenuItemB].forEach((menuItem, idx) => {
                menuItem.style.cssText = 'cursor: pointer ; padding: 1px 6px'
                menuItem.onmouseover = () => menuItem.style.background = '#bcd7dfab' // highlight bg
                menuItem.onmouseout = () => menuItem.style.background = 'none' // unhighlight bg
                if (idx == 0) { // entry to hide menu for site
                    menuItem.style.cssText += '; border-bottom: 1px dotted rgb(0, 0, 0)' // add separator
                    menuItem.onclick = () => {
                        if (!config.sitesToNotShowAsktip) config.sitesToNotShowAsktip = []
                        config.sitesToNotShowAsktip.push(new URL(location.href).hostname)
                        saveSetting('sitesToNotShowAsktip', config.sitesToNotShowAsktip, 'global')
                        document.getElementById('hide-asktip-menu').style.display = 'none'
                        document.getElementById('asktip').style.display = 'none'
                    }
                } else { // entry to hide menu always
                    menuItem.onclick = () => {
                        saveSetting('asktipDisabled', true)
                        refreshMenu()
                        document.getElementById('hide-asktip-menu').style.display = 'none'
                        document.getElementById('asktip').style.display = 'none'
                }}
            })
            hideAsktipMenu.append(hideAsktipMenuItemA, hideAsktipMenuItemB)
        }

        // Add inputEvents.up event to SHOW asktip
        document.addEventListener(inputEvents.up, event => { setTimeout(() => {
            if (asktipDisabled()) return
            const selectedText = window.getSelection().toString().trim()
            if (selectedText && !event.target.closest('#asktip')) {
            
                    // Init asktip content
                    let asktipContentSpan = document.getElementById('ddgpt-asktip-content')
                    if (!asktipContentSpan) { // make/append it
                        asktipContentSpan = document.createElement('span') ; asktipContentSpan.id = 'ddgpt-asktip-content'
                        asktipContentSpan.textContent = `${ msgs.menuLabel_ask || 'Ask' } ${config.appName}`
                        appIconImg.style.cssText = 'width: 17px ; position: relative ; top: 3px ; margin-right: 5px ; vertical-align: baseline'
                        asktipContentSpan.prepend(appIconImg)
                        asktipContentSpan.style.cssText = 'padding: 3px 6px ; border-radius: 9px ;  cursor: pointer'
                        asktipContentSpan.onmouseover = () => { // highlight bg, hide hide-tip menu
                            asktipContentSpan.style.background = '#bcd7dfab'
                            const hideAsktipMenu = document.getElementById('hide-asktip-menu')
                            if (hideAsktipMenu?.style.display != 'none') hideAsktipMenu.style.display = 'none'
                        }
                        asktipContentSpan.onmouseout = () => asktipContentSpan.style.background = 'none' // unlight bg
                        asktip.prepend(asktipContentSpan)
                    }

                    // Add/update click event each time to capture live selectedText
                    asktipContentSpan.onclick = () => {
                        safeWindowOpen(`https://duckduckgo.com/?q=${encodeURIComponent(selectedText)}&src=asktip`)
                        asktip.style.display = 'none'
                    }

                    // Show asktip
                    asktip.style.display = 'ruby'
                    asktip.style.left = `${ event.pageX - asktip.offsetWidth/2 }px`
                    asktip.style.top = `${ event.pageY - asktip.offsetHeight -28 }px`

            } else // hide everything
                asktip.style.display = document.getElementById('hide-asktip-menu').style.display = 'none'

        }, 1)})  // to avoid double trigger
    }

})()
