
const baseURLAPI = "https://naxab.net/api";
const texts = {
  seo: {
    // حط هنااسم ووصف للموقع لتحسين نتائج محركات البحث
    title: "Naxab - نكسب",
    website_url: "naxab.net",
    website_image: "../assets/imgs/site_img.jpg",
    keywords: "Earn rewards, collect points, win new customers, earn rewards, loyalty points, cash back points, اكسب مكافئات، جمع نقاط، اكسب عملاء جدد، تطبيق نكسب، نقاط الولاء، نقاط الكاش باك",
    seller_tab_description:  "The first application that enables your customers to benefit from the offers and discounts that you offer them and convert them into points and rewards that you give them to enhance their loyalty to your brand | التطبيق الاول الذي يمكن عـــــمــــلائـــــك من الاسـتـفــــادة من العروض والـخــصــــومـــات التي تقدمها لهم وتحويلها إلى نـقـــــاط ومكافئات تمنحها لهم لتعزيز ولائهم لعلامتك التجارية",
    customer_tab_description: "The first application that enables you to benefit from offers and discounts offered by stores and brands | التطبيق الاول الذي يمكنك من الاستفادة من العروض والخصومات المقدمة من المتاجر والعلامات التجارية",
  },
  sellers: {  // ------ الجزء الخاص بالمتاجر ------
    // لينكات البرنامج علي جوجل ستور وابل ستور
    app_links: {
      google_store: "https://play.google.com/store/apps/details?id=com.eaststar.naxab.store",
      apple_store: "https://apps.apple.com/us/app/%D9%86%D9%83%D8%B3%D8%A8-%D8%AA%D8%AC%D8%A7%D8%B1/id6450875684"
    },
    // navbar menuهنا حط اسماء وروابط اللينكات اللي بتظهر فوق في ال 
    navLinks: {
      link1: {
        sectionHash: "index",
        path: "/",
        translationId: "menu"
      },
      link3: {
        sectionHash: "get_points",
        path: "/",
        translationId: "give_your_clients_points"
      },
      link4: {
        sectionHash: "stats",
        path: "/",
        translationId: "stats"
      },
      link6: {
        sectionHash: "contact_us",
        path: "/",
        translationId: "contact_us"
      }
    },
    about: {
      // حط هنا لينك الفيديو في قسم تعرف علي نكسب والصورة هتتبدل بالفيديو لوحدها
      video_url: "",
      // عدل الوصف من هنا مش من ملفات الترجمة عشان النص يحتفط بعدد السطور
      description_ar: `لديك عملاء بالفعل يترددون على متجرك باستمرار ويفضلون شراء بضاعتك ومنتجاتك ، فلم لا تكافئهم على تكرار عمليات الشراء هذه وتحفزهم وتشجعهم على ذلك أكثر فأكثر من خلال منحهم نقاط نكسب ، إما نقاط ( كاش باك ) ، أو نقاط ( الولاء ) ليزداد ولائهم لمتجرك وارتباطهم به .
      عزز ولاء عملائك الحاليين وقوي علاقتهم بعلامتك التجارية .
      وكذلك قم بجذب عملاء جدد من خلال العروض والخصومات التي تقدمها داخل التطبيق وتحويلها إلى نقاط ومكافئات عينية يمكن لعملائك وزبائنك صرفها والاستفادة منها بعد ذلك .
      تطبيق نكسب المعنى الحقيقي لتطوير برامج الولاء 
                                    تطبيق نكسب .... كله مكسب 
                                تطبيق نكسب .... هو مكسب حقيقي 
                                          للعميل ، وللتاجر`,
      description_en: `
      You already have customers who frequent your store constantly and prefer to buy your goods and products, so why not reward them for repeating these purchases and motivate and encourage them to do so more and more by giving them earning points, either (cashback) points, or (loyalty) points to increase their loyalty to your store and their association with it.
      Enhance the loyalty of your existing customers and strengthen their relationship with your brand.
      Also, attract new customers through the offers and discounts that you offer within the application and convert them into points and in-kind rewards that your customers and customers can spend and benefit from after that.
      An application that earns the true meaning of developing loyalty programs
                                    We earn.... It's all about earning
                                Naxab application.... is a real gain
                                          To the customer, and to the merchant
      `
    },
    // غير هنا الصورة والوصف و العنوان لكل عنصر في قسم رحلتك مع النقاط. ممكن تضيف او تمسح عناصر لو عايز
    points_illustrations: [
      {
        image: "../assets/imgs/Wallet-rafiki.svg",
        descriptionTranslationId: "points_seller_description_1",
        titleTranslationId: "points_seller_title_1",
      },
      {
        image: "../assets/imgs/Appreciation-rafiki.svg",
        descriptionTranslationId: "points_seller_description_2",
        titleTranslationId: "points_seller_title_2"
      }
    ],
    // translation keys only عناصر النسب واحصاءات 
    facts_list: [
      "seller_fact_1",
      "seller_fact_2",
      "seller_fact_3",
      "seller_fact_4",
      "seller_fact_5",
    ],
    // translation keys only اهم المزايا - المتاجر
    features: [
      "seller_feature_1",
      "seller_feature_2",
      "seller_feature_3",
      "seller_feature_4",
      "seller_feature_5",
      "seller_feature_6",
      "seller_feature_7",
      "seller_feature_8",
      "seller_feature_9",
      "seller_feature_10",
      "seller_feature_11",
      "seller_feature_12",
    ]
  },
  customers: { // ------  الجزء الخاص بالعملاء -------
    // لينكات البرنامج علي جوجل ستور وابل ستور
    app_links: {
      google_store: "https://naxab.app.link/playStore",
      apple_store: "https://naxab.app.link/appStore"
    },
    // navbar menuهنا حط اسماء وروابط اللينكات اللي بتظهر فوق في ال
    navLinks: {
      link1: {
        sectionHash: "index",
        path: "/",
        translationId: "menu"
      },
      link3: {
        sectionHash: "get_points",
        path: "/",
        translationId: "journeys_of_points"
      },
      link4: {
        sectionHash: "features",
        path: "/",
        translationId: "features"
      },
      link5: {
        sectionHash: "stats-section",
        path: "/",
        translationId: "stats"
      },
      link6: {
        sectionHash: "features-list",
        path: "/",
        translationId: "seller_features"
      },
      link7: {
        sectionHash: "contact_us",
        path: "/",
        translationId: "contact_us"
      }
    },
    about: {
      // حط هنا لينك الفيديو في قسم تعرف علي نكسب والصورة هتتبدل بالفيديو لوحدها
      video_url: "",
      // عدل الوصف هنا مش من ملفات الترجمة عشان النص يحتفط بعدد السطور
      description_ar: `كل واحد منا لا يمكنه الاستغناء عن التسوق وشراء أغراضه ومتطلباته التي يحتاج إليها  من أطعمة ومشروبات وملابس وإكسسوارات وهدايا ومقتنيات .....
      وطالما تتسوق باستمرار فلم لا تستفيد من عمليات الشراء العديدة والمتكررة التي تجريها ، بل ويمكنك تحويلها إلى استثمار رابح  وادخار نافع ، يعود عليك بالنفع والكسب بعد ذلك .
      أصبحت الآن تستطيع مع تطبيق نكسب تحقيق ذلك الاستثمار الرابح ، والحصول عليه .
      فتطبيق نكسب هو التطبيق الأول الذي يمكنك من الاستفادة من العروض والخصومات التي تقدمها المتاجر والعلامات التجارية لعملائها .
       بحيث يجمع ما بين المتاجر من جهة ، وبين العملاء والزبائن من جهة أخرى ،  وينسق آلية طرح الخصومات والعروض المقدمة من تلك المتاجر بطريقة حديثة ومبتكرة ليحولها إلى نقاط ( كاش باك ) تعود على العميل ويتم الاحتفاظ بها في محفظته داخل التطبيق ،  ليتمكن من صرف هذه النقاط بعد ذلك في عمليات الشراء من تلك المتاجر التي منحته النقاط .
       أو ( نقاط ولاء ) والتي تضاف لزيادة معدل الولاء ، ويزيد هذا المعدل كلما زادت عمليات شرائك حتى تصل إلى حد الولاء المطلوب ، وهو القدر الذي حدده المتجر للوصول إليه كي تحصل على مكافأة الولاء المخصصة لذلك .
       ويمكنك إضافة النقاط بنفسك من خلال فاتورة مشترياتك ، بطريقة سهلة وبسيطة وميسرة بدون تدخل البائع أو مراجعة الكاشير .
      وذلك يكون بالضغط على زر ( إضافة النقاط ) الموجود في أعلى الصفحة الرئيسية للتطبيق ، وتوجيه كاميرا الجوال على رمز الكيو أر كود أو الباركود الموجود على فاتورة المشتريات ، فتتم عملية إضافة النقاط تلقائيا وفي الحال . 
      كما تستطيع أن تتابع نقاط محفظتك ومعدل ولائاتك من داخل التطبيق وتطلع عليها وقت ما تشاء بكل سهولة ويسر .
      قبل تطبيق نكسب كنت تتسوق من المتاجر وتنفق أموالك بدون استفادة أو عائد يعود عليك وينفعك .
      ولكن الآن مع تطبيق نكسب تستطيع أن تحول كل عمليات شرائك إلى استثمار حقيقي وإدخار يعود عليك بالكسب والنفع .
      وكلما زادت مشترياتك ، كلما زادت نقاطك ومكافئاتك .
                                 تطبيق نكسب .... كله مكسب 
                            تطبيق نكسب .... هو مكسب حقيقي 
                                      للعميل ، والتاجر 
      سارع في تحميل التطبيق وكن من مستخدميه لتستفيد من أقوى الخصومات والعروض الحصرية المقدمة  من المتاجر والعلامات التجارية ، وقم بجمع النقاط واحصل على المكافآت .`,
      description_en: `Each one of us cannot do without shopping and buying his items and requirements that he needs, such as food, drinks, clothes, accessories, gifts and collectibles.....
      And as long as you are constantly shopping, why not benefit from the many and repeated purchases that you make, and you can even turn them into a profitable investment and useful savings, which will benefit you and gain after that.
      Now you can, with the application of earnings, achieve that profitable investment, and get it.
      The Naxab application is the first application that enables you to take advantage of the offers and discounts offered by stores and brands to their customers.
       So that it combines between stores on the one hand, and customers and customers on the other hand, and coordinates the mechanism for offering discounts and offers offered by those stores in a modern and innovative way to convert them into (Cash Back) points that belong to the customer and are kept in his wallet within the application, so that he can spend these points After that, in purchases from those stores that awarded him points.
       Or (loyalty points), which are added to increase the loyalty rate, and this rate increases as your purchases increase until you reach the required loyalty limit, which is the amount set by the store to reach it in order to obtain the loyalty reward designated for that.
       And you can add the points yourself through your purchase invoice, in an easy, simple and convenient way without the intervention of the seller or checking with the cashier.
      This can be done by clicking on the (add points) button located at the top of the main page of the application, and pointing the mobile camera at the QR code or barcode on the purchase invoice, so the process of adding points is done automatically and immediately.
      You can also track your wallet points and your loyalty rate from within the application and view them whenever you want with ease.
      Before the application of earnings, you used to shop in stores and spend your money without benefit or return to you and benefit you.
      But now, with the Naxab application, you can turn all your purchases into real investment and savings that will bring you profit and benefit.
      The more you purchase, the higher your points and rewards.
                                 We earn.... It's all about earning
                            Naxab application.... is a real gain
                                      To the customer, and to the merchant
      Hurry up to download the application and become one of its users to benefit from the strongest discounts and exclusive offers offered by stores and brands, and collect points and get rewards.`
    },
    // غير هنا الصورة والوصف لكل عنصر في قسم رحلتك مع النقاط. ممكن هنا تضيف او تمسح عناصر لو عايز
    points_illustrations: [
      {
        image: "../assets/imgs/Online shopping-bro.png",
        descriptionTranslationId: "points_customer_description_1",
        titleTranslationId: "points_customer_title_1"
      },
      {
        image: "../assets/imgs/Discount-cuate.png",
        descriptionTranslationId: "points_customer_description_2",
        titleTranslationId: "points_customer_title_2"
      },
      {
        image: "../assets/imgs/Gemini_Generated_Image_r9nts6r9nts6r9nt.png",
        descriptionTranslationId: "points_customer_description_3",
        titleTranslationId: "points_customer_title_3"
      },
      {
        image: "../assets/imgs/Wallet-pana.png",
        descriptionTranslationId: "points_customer_description_4",
        titleTranslationId: "points_customer_title_4"
      },
      {
        image: "../assets/imgs/Gemini_Generated_Image_czufrczufrczufrc.png",
        descriptionTranslationId: "points_customer_description_5",
        titleTranslationId: "points_customer_title_5"
      }
    ],
    // عناصر قسم اهم المزايا ،ممكن تضيف او تمسح عناصر sliders
    features_slides: [
      {
        image: "../assets/imgs/mobile-1.png",
        descriptionTranslationId: "customer_feature_1"
      },
      {
        image: "../assets/imgs/mobile-1.png",
        descriptionTranslationId: "customer_feature_2"
      },
      {
        image: "../assets/imgs/mobile-1.png",
        descriptionTranslationId: "customer_feature_3"
      },
      {
        image: "../assets/imgs/mobile-1.png",
        descriptionTranslationId: "customer_feature_4"
      },
      {
        image: "../assets/imgs/mobile-1.png",
        descriptionTranslationId: "customer_feature_5"
      }
    ],
    // حط هنا لينكات وايقونات العلامات التجارية. باردو ممكن تضيف او تمسح عناصر
    trade_marks: [
      {
        label_Icon: "",
        link: ""
      },
      {
        label_Icon: "",
        link: ""
      },
      {
        label_Icon: "",
        link: ""
      },
      {
        label_Icon: "",
        link: ""
      }
    ]
  },
  links: {
    // حط لينكات السوشيال ميديا تحت
    socials: {
      instagram: "https://instagram.com/naxab2023?igshid=ZGUzMzM3NWJiOQ==",
      facebook: "https://www.facebook.com/profile.php?id=100094897624440&mibextid=ZbWKwL",
      twitter: "#",
      snapchat: "#"
    },
    // هنا لينك حط لينك الواتساب
    whatsappButton: "https://wa.me/201033164201"
  },
  // ضيف لينك لزرار انضم الآن وابدأ التجربة
  join_us_button_link: "#",
  // الخاص بتواصل معانا تحت URL requestحط لينك ال
  contact_us_request_url: `${baseURLAPI}/contact-us`
}

export default texts;
