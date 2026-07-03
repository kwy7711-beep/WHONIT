export interface TranslationSet {
  nav: {
    about: string;
    menu: string;
    experience: string;
    reservation: string;
    access: string;
    faq: string;
  };
  hero: {
    titleJa: string;
    titleSub: string;
    slogan: string;
    cta: string;
  };
  about: {
    subtitle: string;
    title: string;
    desc1: string;
    desc2: string;
    historyTitle: string;
    historyDesc: string;
    credoTitle: string;
    credoDesc: string;
  };
  menu: {
    title: string;
    subtitle: string;
    drinks: string;
    desserts: string;
    priceUnit: string;
    viewAll: string;
  };
  experience: {
    title: string;
    subtitle: string;
    duration: string;
    price: string;
    items: Array<{
      id: string;
      title: string;
      time: string;
      priceVal: string;
      desc: string;
      iconName: string;
    }>;
  };
  reservation: {
    title: string;
    subtitle: string;
    formName: string;
    formPhone: string;
    formDate: string;
    formTime: string;
    formSize: string;
    formProgram: string;
    formProgramNone: string;
    formNotes: string;
    submitBtn: string;
    modalTitle: string;
    modalDesc: string;
    modalSuccess: string;
    modalCode: string;
    modalClose: string;
    validationError: string;
    adminNotice: string;
  };
  access: {
    title: string;
    subtitle: string;
    addressLabel: string;
    addressVal: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValWeekdays: string;
    hoursValWeekends: string;
    hoursValClosed: string;
    mapInstruction: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  footer: {
    tagline: string;
    copyright: string;
    linksLabel: string;
  };
  admin: {
    btnLabel: string;
    modalTitle: string;
    modalDesc: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    linkLabel: string;
    linkPlaceholder: string;
    submitBtn: string;
    saveBtn: string;
    cancelBtn: string;
    incorrectPasswordError: string;
    urlRequiredError: string;
    verifiedSuccess: string;
    goToLinkBtn: string;
    linkSavedMsg: string;
  };
}

export const translations: Record<'ja' | 'ko', TranslationSet> = {
  ja: {
    nav: {
      about: "概要",
      menu: "お品書き",
      experience: "体験プログラム",
      reservation: "席のご予約",
      access: "霧沢処・時間",
      faq: "よくある質問"
    },
    hero: {
      titleJa: "カフェ・ウォニット",
      titleSub: "WHONIT",
      slogan: "霧沢温泉郷に佇む、数百年続く四宮家の古武術演武と伝統喫茶",
      cta: "席の予約を申し込む"
    },
    about: {
      subtitle: "継承される心技体",
      title: "霧深き温泉の里に守り継がれた伝統武術を、日常の喫茶に添えて",
      desc1: "「カフェ・ウォニット（WHONIT）」は、霧深い山々に囲まれた温泉情緒溢れる名郷・「霧沢（きりさわ）」にひっそりと佇む伝統演武喫茶です。この地は外部には『忍者の里の雰囲기를 今に残す、静かなる温泉観光地』として親しまれています。私たちは、代々伝わる古武道や心身鍛錬をベースとした気迫ある演武と、地元の名水で淹れたお茶や手作りの和菓子をお届けする、上質な和モダン空間として皆様をお迎えしております。",
      desc2: "一歩店内に足を踏み入れれば、渓谷のせせらぎ、磨き抜かれた畳の清々しい香り、そして凛とした静寂が漂います。湯上がりの散策がてら、歴史を宿した伝統家屋の中で極上の緊張と和みが織りなす特別なひとときをお過ごしください。",
      historyTitle: "数百年続く「四宮家（しのみやけ）」の歩み",
      historyDesc: "古くは霧沢の深い山間を拠点とし、歴史の裏舞台で護衛や情報伝達の任を担ってきたとされる四宮一族。時代の変遷に合わせ、一族が伝承してきた身体技法、調息法、そして「空間に調和をもたらす（結界）」の哲学を、現代の皆様に広くお伝えするための文化発信地として本カフェを設立いたしました。表向きは伝統的な古武術シ演と、上質な甘味をご提供する安らぎの場。決して大袈裟な看板は掲げず、湯煙の向こう側でひっそりと皆様をお待ちしております。",
      credoTitle: "もてなしの信条",
      credoDesc: "「真を秘め、和を成す」を信念に、お客様に余計な詮索はさせず、心地よい沈黙と至高の美味、そして古来の武の迫力を精確にお届けすることを使命としております。"
    },
    menu: {
      title: "お品書き",
      subtitle: "伝統とモダンが交差する、趣深い味覚の数々",
      drinks: "お飲み物",
      desserts: "甘味",
      priceUnit: "円",
      viewAll: "お品書き一覧"
    },
    experience: {
      title: "体験プログラム",
      subtitle: "五感で触れる伝統の所作と鍛錬",
      duration: "所要時間",
      price: "料金",
      items: [
        {
          id: "prog1",
          title: "結印（印を結ぶ）体験",
          time: "20分",
          priceVal: "¥1,500",
          desc: "伝統的な十二支の印（九字護身法など）の結び方と、呼吸を調え精神を集中させる古来の瞑想法を学びます。心の雑念を取り除く静寂のプログラムです。",
          iconName: "Sparkles"
        },
        {
          id: "prog2",
          title: "本格手裏剣術体験",
          time: "30分",
          priceVal: "¥2,000",
          desc: "本物の鉄製手裏剣を用い、安全に配慮された的（マト）へと投擲する伝統武術体験です。重心の捉え方、指先の繊細なコントロールを演者が直接指導いたします。",
          iconName: "Target"
        },
        {
          id: "prog3",
          title: "伝統古武道演武観覧",
          time: "15分",
          priceVal: "無料（ワンオーダー制）",
          desc: "当店の演者が目の前で披露する、一瞬の隙もない伝統武芸・刀剣演武。刃の風切り音や張り詰めた気迫を、至近距離で体感いただける人気のシ演です。",
          iconName: "Swords"
        }
      ]
    },
    reservation: {
      title: "お座席のご予約",
      subtitle: "伝統が息づく特別な時間の約束を、こちらからお申し込みください",
      formName: "お名前（カタカナ／アルファベット）",
      formPhone: "お電話番号",
      formDate: "ご来店日",
      formTime: "ご来店時間",
      formSize: "ご来店人数",
      formProgram: "ご希望のプログラム（任意）",
      formProgramNone: "お席と演武観覧のみ",
      formNotes: "ご要望・アレルギーなど（任意）",
      submitBtn: "予約を申し込む",
      modalTitle: "予約お申し込み完了",
      modalDesc: "カフェ・ウォニットへのご予約依頼を承りました。",
      modalSuccess: "ご予約が仮確定いたしました。当店より入力いただいた連絡先へ、確認のご連絡を差し上げます。ご来店の際は、以下の「忍の預かり札（予約コード）」をスタッフにご提示ください。",
      modalCode: "預かり札番号",
      modalClose: "閉じる",
      validationError: "※すべての必須項目を正確に入力してください。",
      adminNotice: "※ 管理者の方は管理者モードからアクセスしてください。"
    },
    access: {
      title: "アクセス・営業時間",
      subtitle: "信州・霧沢温泉郷の幽玄な山間に佇む隠れ家",
      addressLabel: "住所",
      addressVal: "〒390-1502 長野県霧沢温泉郷霧沢谷 350-4（霧沢渓谷・湯元大滝より徒歩5分、渓流沿いの竹林を抜けた奥にございます）",
      phoneLabel: "お電話",
      hoursLabel: "営業時間",
      hoursValWeekdays: "平日: 11:30 - 18:00 (演武: 13:00 / 15:30)",
      hoursValWeekends: "土日祝: 11:00 - 19:30 (演武: 12:00 / 14:30 / 17:00)",
      hoursValClosed: "定休日: 毎週火曜日（火曜日が祝日の場合は翌水曜日）",
      mapInstruction: "※温泉街の特性上、夕方以降は浴衣姿のお客様が多くお見えになります。浴衣でのご来店は大歓迎です。看板は非常に小さいため、「WHONIT」の刻印がある木製提灯の明かりを目印にお進みください。"
    },
    faq: {
      title: "よくある質問",
      subtitle: "皆さまから寄せられるご質問へのご回答",
      items: [
        {
          q: "本当に実在する忍者の末裔なのですか？",
          a: "私たちは霧沢の地で代々、伝統武術と心身鍛錬を伝承してきた「古武術の家系（四宮家）」でございます。歴史的な身体操作法や呼吸法は日々の修練に組み込まれておりますが、現代においては純粋な武道演武と、霧沢温泉郷を訪れる観光客の皆様へ上質な喫茶体験をご提供する文化サロンとして運営しております。"
        },
        {
          q: "温泉街からのアクセスや、服装に決まりはありますか？",
          a: "特に服装の指定はございません。温泉街の旅館から浴衣・雪駄のままお越しになるお客様も非常に多く、大歓迎しております。散策のついでに、お気軽に湯上がりの一服をお楽しみください。"
        },
        {
          q: "子供でも体験プログラムに参加できますか？",
          a: "はい、手裏剣体験や結印体験は安全に配慮した設計となっておりますので、小学生以上のお子様からご参加いただけます。親御様との同伴をお願いいたします。"
        },
        {
          q: "撮影やSNSへの投稿は可能ですか？",
          a: "店内やお食事の写真撮影、SNS投稿は大歓迎です。ただし、他のお客様のプライバシーへの配慮をお願いいたします。また、演武の最中は非常に素早い動きや鋭利な道具を用いることがあるため、安全面上フラッシュ撮影のみご遠慮いただいております。"
        },
        {
          q: "体験プログラムの料金には飲食代は含まれていますか？",
          a: "体験プログラムの料金には飲食代は含まれておりません。体験のみ、または別途ワンオーダー（お飲み물 / 食べ物）をお願いしております。"
        }
      ]
    },
    footer: {
      tagline: "深き和に隠れ、美しき技を語る。霧沢温泉郷 伝統演武喫茶",
      copyright: "© 2026 Cafe WHONIT. All Rights Reserved. 四宮家伝統武術保存会監수",
      linksLabel: "関連リンク"
    },
    admin: {
      btnLabel: "管理者モード",
      modalTitle: "四宮家 管理者認証",
      modalDesc: "この領域にアクセスするには、管理者用暗証番号が必要です。",
      passwordLabel: "暗証番号 (パスワード)",
      passwordPlaceholder: "暗証番号を入力してください (ヒント: 電話番号)",
      linkLabel: "転送先管理者URL (リダイレクト先)",
      linkPlaceholder: "https://jangyeong.netlify.app/",
      submitBtn: "認証する",
      saveBtn: "URLを保存する",
      cancelBtn: "閉じる",
      incorrectPasswordError: "※ 暗証番号が正しくありません。",
      urlRequiredError: "※ 転送先URLを入力してください。",
      verifiedSuccess: "管理者認証に成功しました。転送先URLを設定し、移動することができます。",
      goToLinkBtn: "管理者ページへ移動",
      linkSavedMsg: "転送先URLが保存されました。"
    }
  },
  ko: {
    nav: {
      about: "소개",
      menu: "메뉴 목록",
      experience: "체험 프로그램",
      reservation: "예약하기",
      access: "오시는 길 / 영업시간",
      faq: "자주 묻는 질문"
    },
    hero: {
      titleJa: "カフェ・ウォニット",
      titleSub: "WHONIT",
      slogan: "키리사와 온천마을에 호젓이 숨겨진 수백 년 전통 시노미야 가문의 무술 시연과 전통 찻집",
      cta: "좌석 예약 신청하기"
    },
    about: {
      subtitle: "계승되는 심기체",
      title: "안개 깊은 온천 마을에 지켜온 전통 무술을 일상의 찻집에 담아내다",
      desc1: "「카페 워닛 (カフェ・ウォニット / Cafe WHONIT)」은 안개가 깊게 내려앉는 산세와 고즈넉한 온천 정취를 품은 명소, 「키리사와(霧沢) 온천마을」에 호젓하게 자리 잡은 전통 무술 시연 카페입니다. 이 마을은 외부 관광객에게 '아름다운 닌자 테마와 온천을 함께 만날 수 있는 조용하고 매력적인 휴양지'로 널리 알려져 있습니다. 우리는 대대로 전승해 온 시노미야(四宮) 가문의 고무도(古武道)와 심신 단련에 기초한 격조 높은 고전 무예 시연, 그리고 맑은 협곡의 청정수로 우려낸 향긋한 전통차와 손수 빚은 정성 어린 화과자를 선보입니다.",
      desc2: "카페에 들어서면 은은하게 흐르는 계곡 물소리와 정갈히 정렬된 타타미의 깊은 향, 팽팽하면서도 기분 좋은 정적과 마주하게 됩니다. 온천을 마친 후 호젓이 산책하는 길에, 수백 년의 비법이 깃든 전통 가옥 안에서 온전한 긴장과 정교한 편안함이 어우러지는 기품 있는 순간을 만끽해 보세요.",
      historyTitle: "수백 년간 이어져 온 '시노미야(四宮) 가문'의 여정",
      historyDesc: "과거 안개 자욱한 키리사와 골짜기를 거점으로 삼아, 보이지 않는 역사의 무대에서 영주와 비장한 서책을 보호하고 호위하는 밀명을 수행해 온 것으로 전해지는 시노미야 일족. 시대의 변화에 맞추어 그들이 엄격히 단련해 왔던 신체 기법과 정묘한 호흡법, 그리고 '머무는 공간에 깊은 안식의 기운을 불어넣는(결계)' 철학을 현대인들에게 선물하고자 이 문화적 거점을 열었습니다. 표면적으로는 오래된 전통 무술의 보존과 시연, 그리고 수제 차와 디저트를 파는 고즈넉한 쉼터로서, 결코 요란한 문구를 내세우지 않고 안개 낀 온천 연기 저편에서 품격 있게 당신을 환대합니다.",
      credoTitle: "환대의 신조",
      credoDesc: "「진실을 비밀로 덮고, 깊은 조화를 이룬다」를 신념으로 삼아, 방문하신 고객분들이 불필요한 의문을 품지 않도록 기분 좋은 고요함과 궁극의 맛, 그리고 고대 무예의 날카로운 박력을 정밀하게 전달하는 것을 절대 사명으로 합니다."
    },
    menu: {
      title: "메뉴 목록",
      subtitle: "전통과 현대가 우아하게 교차하는 차와 디저트",
      drinks: "음료 (ドリンク)",
      desserts: "디저트 (デザート)",
      priceUnit: "엔",
      viewAll: "메뉴 목록 전체보기"
    },
    experience: {
      title: "체험 프로그램",
      subtitle: "몸짓과 호흡으로 정밀하게 느끼는 전통 기법",
      duration: "소요시간",
      price: "체험비",
      items: [
        {
          id: "prog1",
          title: "결인(結印) 수련 체험",
          time: "20분",
          priceVal: "¥1,500",
          desc: "정신을 집중하고 신체를 정렬하는 전통적인 12지의 수인(九字護身法 등)을 맺는 고유 호흡법과 명상을 배웁니다. 일상의 번뇌를 비우고 내면을 다듬는 정온한 프로그램입니다.",
          iconName: "Sparkles"
        },
        {
          id: "prog2",
          title: "정통 수리검 던지기 체험",
          time: "30분",
          priceVal: "¥2,000",
          desc: "실제 단조 철제로 제작된 수리검을 안전하게 특별 설계된 과녁에 던져보는 정통 인술 기법 체험입니다. 신체의 무게중심 이동과 민첩한 지각 능력을 지도자에게 직접 개별 교습 받습니다.",
          iconName: "Target"
        },
        {
          id: "prog3",
          title: "전통 무술 및 고무도 시연 관람",
          time: "15분",
          priceVal: "무료 (1인 1음료 필수)",
          desc: "당가(堂家)의 시연자가 손님들의 바로 코앞에서 선보이는 고전 검술 및 방어 예술. 바람을 가르는 칼날의 파열음과 일촉즉발의 긴장감을 온몸으로 체감할 수 있어 인기 있는 대표 프로그램입니다.",
          iconName: "Swords"
        }
      ]
    },
    reservation: {
      title: "예약석 신청",
      subtitle: "고풍스러운 긴장이 살아 있는 특별한 순간을 위한 시간 약속",
      formName: "예약자 성함 (영문 혹은 한글)",
      formPhone: "연락처",
      formDate: "방문 예정일",
      formTime: "방문 시간대",
      formSize: "방문 인원수",
      formProgram: "희망 체험 프로그램 (선택)",
      formProgramNone: "예약석 확보 및 시연 관람만 진행",
      formNotes: "요청사항 및 알레르기 유무 (선택)",
      submitBtn: "예약 신청 완료하기",
      modalTitle: "예약 신청 정상 완료",
      modalDesc: "카페 워닛으로의 예약 가접수가 무사히 완료되었습니다.",
      modalSuccess: "예약이 가접수되었습니다. 기입해 주신 연락처로 담당 스태프가 확인 문자를 개별 발송할 예정입니다. 방문 시, 아래의 '신비의 보증서 (예약 코드)'를 입구의 지배인에게 보여주시기 바랍니다.",
      modalCode: "보증 영수증 번호",
      modalClose: "안내창 닫기",
      validationError: "※ 모든 필수 항목을 올바르게 기입한 후 예약해 주세요.",
      adminNotice: "※ 관리자라면 관리자모드로 접속하세요."
    },
    access: {
      title: "오시는 길 / 영업시간",
      subtitle: "신슈 키리사와 온천향의 수려하고 깊은 계곡에 자리한 은신처",
      addressLabel: "오시는 주소",
      addressVal: "우편번호 390-1502 나가노현 키리사와 온천향 키리사왓골 350-4 (키리사와 계곡 • 유모토 대폭포에서 도보 5분, 산새 대나무 숲길 옆 오솔길 안쪽)",
      phoneLabel: "전화번호",
      hoursLabel: "운영 시간표",
      hoursValWeekdays: "평일: 11:30 - 18:00 (무술 시연회: 13:00 / 15:30)",
      hoursValWeekends: "주말 및 공휴일: 11:00 - 19:30 (무술 시연회: 12:00 / 14:30 / 17:00)",
      hoursValClosed: "정기 휴무일: 매주 화요일 (화요일이 법정 공휴일인 경우 수요일 휴무)",
      mapInstruction: "※ 온천마을의 특성상 해가 진 저녁 무렵부터는 가벼운 유카타(浴衣) 차림으로 산책하며 찾아주시는 손님이 무척 많습니다. 유카타 차림의 입장을 두 손 벌려 대환영합니다. 골목 입구에 아주 작은 크기로 제등이 걸려 있습니다. 「WHONIT」 각인이 각인된 가스등 불빛을 찾아 들어오십시오."
    },
    faq: {
      title: "자주 묻는 질문",
      subtitle: "방문객들이 자주 확인하는 서신들",
      items: [
        {
          q: "정말 역사적으로 실존했던 닌자의 후손인가요?",
          a: "저희는 키리사와의 수려한 자연 속에 터를 잡고 수대째 전통 무학(武學)과 고유 호흡 단련을 전승해 온 '고무술 전문 가문(시노미야가)'입니다. 가문 서사 속의 신체 운용법이나 호흡술은 본래 극복과 호신의 가치를 가꾸기 위해 가문의 수련에 포함되어 전수되고 있으며, 현재는 키리사와 온천마을을 찾는 현대의 나그네분들에게 기품 있는 찻자리와 전통 연무의 융합을 소개하는 문화 살롱으로 가꾸어 가고 있습니다."
        },
        {
          q: "온천가에서 가깝나요? 유카타나 온천 복장으로 가도 될까요?",
          a: "네, 온천가 중심 및 대폭포 온천 지구에서 도보 5분 이내로 매우 가까운 거리에 위치해 있습니다. 인근 전통 료칸에서 묵으시는 손님분들께서 유카타와 나막신(셋타) 차림 그대로 가벼운 저녁 마실을 나와 들러주시는 경우가 무척 많습니다. 부담 없이 오셔서 가벼운 온천욕 뒤의 달콤한 다과를 즐겨보세요."
        },
        {
          q: "어린이나 학생들도 프로그램 참가가 가능한가요?",
          a: "네, 체험 수리검 및 손짓(수인) 호흡 체험 등은 안전 규격이 철저히 준수되고 있습니다. 따라서 보호자를 동반한 초등학생 이상의 아동 및 청소년도 즐겁게 전통의 묘미를 체험해 볼 수 있습니다."
        },
        {
          q: "매장 사진 촬영 및 개인 SNS 기고가 허용되나요?",
          a: "매장의 고풍스러운 정취와 다채로운 요리 촬영은 기쁜 마음으로 대환영합니다. 다만, 타인의 프라이버시가 침해되지 않도록 매너 촬영을 부탁드리며, 무술 시연 도중에는 순간의 정밀함과 날카로운 무구 사용 안전을 위해 강한 불빛을 동반한 카메라 플래시 촬영만 정중하게 통제하고 있습니다."
        },
        {
          q: "체험 비용에 음료와 식사 요금도 일괄 포함되어 있나요?",
          a: "체험 프로그램 수수료에는 식음료 비용이 불포함되어 있습니다. 따라서 가벼운 체험 외에 매장의 전통적인 시그니처 찻자리 주문(1인 1음료 혹은 다과)을 별도로 요청드리고 있습니다."
        }
      ]
    },
    footer: {
      tagline: "깊은 평화 속에 모습을 숨기고, 위대한 무(武)를 노래하다. 키리사와 온천향 전통 연무 찻집",
      copyright: "© 2026 Cafe WHONIT. All Rights Reserved. 시노미야가 전통무술보존회 감수",
      linksLabel: "관련 서신"
    },
    admin: {
      btnLabel: "관리자 모드",
      modalTitle: "시노미야가 관리자 보증",
      modalDesc: "이 영역에 접속하려면 관리자 인증 비밀번호가 필요합니다.",
      passwordLabel: "인증 비밀번호",
      passwordPlaceholder: "비밀번호를 입력하세요 (힌트: 전화번호)",
      linkLabel: "이동할 관리자 페이지 링크 (리다이렉트 URL)",
      linkPlaceholder: "https://jangyeong.netlify.app/",
      submitBtn: "인증하기",
      saveBtn: "링크 저장하기",
      cancelBtn: "닫기",
      incorrectPasswordError: "※ 비밀번호가 올바르지 않습니다.",
      urlRequiredError: "※ 이동할 링크 URL을 입력해주세요.",
      verifiedSuccess: "관리자 인증에 성공했습니다. 이동할 링크를 지정하거나 즉시 이동할 수 있습니다.",
      goToLinkBtn: "관리자 페이지로 이동",
      linkSavedMsg: "이동할 관리자 페이지 링크가 저장되었습니다."
    }
  }
};

export interface MenuItem {
  id: string;
  nameJa: string;
  nameKo: string;
  descJa: string;
  descKo: string;
  price: number;
  badgeJa?: string;
  badgeKo?: string;
}

export const drinks: MenuItem[] = [
  {
    id: "drink1",
    nameJa: "苦無ラテ",
    nameKo: "쿠나이 라떼",
    descJa: "エスプレッソに苦無（クナイ）のラテアートを施した、ほろ苦さとコクの極上の一杯。",
    descKo: "에스프레소 위에 수제 쿠나이 모양 라떼아트를 새긴, 씁쓸하고도 깊은 고소함의 최고급 밸런스 라떼.",
    price: 680,
    badgeJa: "一番人気",
    badgeKo: "대표 메뉴"
  },
  {
    id: "drink2",
    nameJa: "結界抹茶",
    nameKo: "결계 말차",
    descJa: "濃厚な宇治抹茶に純金箔を散らし、静寂なる結界を表現した気品溢れるお抹茶。",
    descKo: "교토 우지의 최고급 말차에 고귀한 금박을 살짝 뿌려내어 정적의 결계를 아름답게 그려낸 격식 있는 전통 말차.",
    price: 750,
    badgeJa: "極上品",
    badgeKo: "최고급"
  },
  {
    id: "drink3",
    nameJa: "忍び焙じ茶ラテ",
    nameKo: "시노비 호지차 라떼",
    descJa: "香ばしく焙じた茶葉の風味に、仄かな燻製香を纏わせた大人のラテ。",
    descKo: "가문 비전의 깊게 덖은 호지차 향 and 은은히 풍기는 참나무 훈연 향을 가미하여 품격을 높인 은둔자의 호지차 라떼.",
    price: 650
  },
  {
    id: "drink4",
    nameJa: "朱雀サイダー",
    nameKo: "주작 사이다",
    descJa: "グレープフルーツとハイビスカスを掛け合わせた、鮮やかな朱赤の爽快ソーダ。",
    descKo: "루비빛 자몽과 붉은 히비스커스를 절묘하게 조합하여 만든 매혹적인 주홍빛 탄산 소다 (여름 한정 베스트셀러).",
    price: 620,
    badgeJa: "季節限定",
    badgeKo: "시즌 한정"
  },
  {
    id: "drink5",
    nameJa: "隠れ里ブレンド",
    nameKo: "은신 마을 블렌드",
    descJa: "自家焙煎の豆を丁寧にドリップ。酸味を抑え、深いコクと重厚感のある味わい。",
    descKo: "가문 비법으로 자체 로스팅한 프리미엄 원두 드립 커피. 산미는 최소화하고 중후한 보디감과 묵직한 가죽 향을 남기는 한 잔.",
    price: 580
  }
];

export const desserts: MenuItem[] = [
  {
    id: "dessert1",
    nameJa: "手裏剣クッキー",
    nameKo: "수리검 쿠키",
    descJa: "手裏剣を模したバタークッキー3種（ショコラ・抹茶・プレーン）の詰め合わせ。",
    descKo: "수리검 형상으로 갓 구운 고소한 수제 버터쿠키 3피스 (진한 벨기에산 초코, 교토 우지 말차, 전통 플레인 버터).",
    price: 480
  },
  {
    id: "dessert2",
    nameJa: "巻物ロール",
    nameKo: "두루마리 롤케이크",
    descJa: "古の秘伝書を思わせる巻物仕立てのロールケーキ。上品な甘さの小豆クリーム入り。",
    descKo: "비법 문헌이 담긴 고서 두루마리 모양의 푹신한 롤케이크. 유기농 팥크림 필링과 보드라운 말차 시트의 조화.",
    price: 580,
    badgeJa: "おすすめ",
    badgeKo: "강력 추천"
  },
  {
    id: "dessert3",
    nameJa: "影餅パフェ",
    nameKo: "그림자떡 파르페",
    descJa: "黒ごまアイスと濃厚抹茶ゼリー、白玉を重ねた漆黒と深緑の美しい和パフェ。",
    descKo: "가문의 그림자를 담은 흑임자 젤라토와 진득한 교토 말차 젤리, 쫄깃한 백옥 새알 떡을 레이어드한 극강의 그림자 파르페.",
    price: 890,
    badgeJa: "贅沢",
    badgeKo: "프리미엄"
  }
];
