let Language=localStorage.getItem("language") || "zh"

    const textData = {
      clinic_title: {
        zh: "广南侗医诊所筹建计划",
        en: "Dong Medicine Clinic in Guangnan Village",
      },
      clinic_para: {
        zh: "在广西群山深处的广南村，侗族人依山而居、与草药共生。这里的老人仍记得哪些树皮退烧，哪种叶子止血，那些祖辈相传的智慧本该代代相承。但现实却是——村中无医务所，草医无诊室，老人需徒步求诊，经验无人继承。医疗资源的缺失，正让侗医药文化濒临失传。我们希望建一座“既能治病，也能留住文化”的侗医诊所。",
        en: "In the deep mountains of Guangxi, the Dong people live in harmony with nature, relying on the land and coexisting with medicinal herbs. The elders here still remember which bark can reduce fever and which leaves can stop bleeding—wisdom passed down through generations. Yet the reality is stark: there is no clinic in the village, no proper space for herbal doctors to treat patients, and the elderly must walk long distances for medical care. With no one to inherit their knowledge, the tradition of Dong medicine is on the verge of disappearing. We hope to build a clinic that not only heals, but also preserves this precious cultural heritage.",
      },
      what_is_title: {
        zh: "🌿 什么是侗药与侗医？",
        en: "🌿 What is Dong Medicine?",
      },
      what_is_para: {
        zh: "侗医，是侗族人民在千百年与山林共生中发展出的传统医疗体系。它源于生活，长于经验，不依赖高科技设备，却能因地制宜地解决常见病与慢性病。侗医讲究“人与自然的平衡”，强调顺应节气、调和阴阳，治疗手段包括草药、推拿、针刺、艾灸、拔罐等。侗药则是侗医的灵魂，多取自山林间的自然草本与矿物。每一种药材都有它的季节、气味和性格，常常由经验丰富的草医在特定时节上山采集，再经晾晒、配伍后入方。它们不仅治病，更承载着侗族人对自然的敬畏和对生命的理解。在侗乡，一位好草医不只看病，他还知道如何通过饮食调养、生活习惯引导，让身体“顺回来”。如今，侗医与侗药的传承面临危机。我们希望通过诊所建设，让这门深藏于群山之间的医术不被遗忘，让“从田间到药方”的智慧继续在人群中生长。",
        en: "Dong medicine is a traditional medical system developed by the Dong people through centuries of living in harmony with the mountains and forests. Rooted in daily life and enriched by experience, it does not rely on advanced technology, yet it effectively treats common and chronic illnesses by adapting to local conditions. Central to Dong medicine is the belief in maintaining a balance between humans and nature, emphasizing seasonal rhythms and the harmony of yin and yang. Its treatments include herbal remedies, massage, acupuncture, moxibustion, and cupping therapy.At the heart of Dong medicine lies its herbal practice. Most of the medicines are derived from natural herbs and minerals found in the surrounding mountains. Each plant has its own season, scent, and character, and is typically harvested by experienced herbal doctors during specific times of the year, then dried, blended, and prepared for use. These herbs are not only tools for healing—they embody the Dong people's reverence for nature and their understanding of life itself.In Dong villages, a good herbal doctor does more than treat illness—they guide people in adjusting their diets and daily habits to help the body regain balance. Today, however, Dong medicine and its herbal traditions are at risk of fading away. Through the creation of a dedicated clinic, we hope to preserve this ancient mountain-rooted practice and allow the wisdom—spanning from field to remedy—to continue growing among the people.",
      },
      why_build_title: {
        zh: "🏥 为什么建侗医诊所？",
        en: "🏥 Why Build a Dong Medicine Clinic?",
      },
      why_build_list: {
        zh: [
          "📉 村民缺乏基础医疗，老人就医困难",
          "🏡 草医只能在自家接诊，无固定空间",
          "🌿 侗医药知识缺乏传承，文化濒危",
          "💬 缺乏健康咨询、慢病管理与心理疏导渠道",
        ],
        en: [
          "📉 Lack of basic healthcare, elderly face difficulty seeking treatment",
          "🏡 Herbalists receive patients at home, no fixed clinic",
          "🌿 Loss of medical knowledge, cultural endangerment",
          "💬 No access to health advice, chronic care, or mental support",
        ],
      },
      why_build_strong: {
        zh: "我们的目标不仅是“让人能看病”，更是“让侗医文化活下去”。",
        en: "Our goal is not just healthcare, but cultural survival.",
      },
      service_title: {
        zh: "🌿 诊所将提供哪些服务？",
        en: "🌿 What Will the Clinic Offer?",
      },
      service_list: {
        zh: [
          "草药诊疗、针灸、推拿、艾灸等传统侗医服务",
          "结合中西医疗，提供健康评估与心理支持",
          "健康讲座与养生课程，提高村民健康意识",
          "草药晾晒与知识传承空间，供年轻人学习",
        ],
        en: [
          "Herbal treatment, acupuncture, massage, moxibustion, etc.",
          "Integrated care with mental and physical health support",
          "Health talks and wellness education",
          "Spaces for herb drying and knowledge preservation",
        ],
      },
      service_strong: {
        zh: "这是一个兼具医疗、教育、文化的社区型中心。",
        en: "A community hub for healing, learning, and culture.",
      },
      why_adopt_title: {
        zh: "一个村庄要靠什么，建起属于自己的侗医诊所？",
        en: "How Can a Village Build Its Own Clinic?",
      },
      why_adopt_para1: {
        zh: "我们的回答是：种田。——具体来说，是\"认养糯米田\"。",
        en: "Our answer: farming — specifically, adopting sticky rice fields.",
      },
      why_adopt_para2: {
        zh: `我们拒绝依赖一次性捐赠，也不希望建设诊所靠一时热情。  
  我们选择更稳定、持续、有文化价值的方式来筹集资金：

   🌾 认养一块糯米田 = 支持农民 + 资助诊所.

  认养费用将被明确划分为：
  一部分直接支付给农户，维持传统生态种植
  ,一大部分专项用于侗医诊所的建设与运营

  我们将定期公开使用情况，并邀请认养者了解全过程。`,
        en: `We refuse to rely on one-time donations or fleeting enthusiasm to build the clinic.
Instead, we choose a more stable, sustainable, and culturally meaningful way to raise funds:

🌾 Adopting a sticky rice field = Supporting farmers + Funding the clinic.

The adoption fees are clearly allocated:
A portion goes directly to the farmers to sustain traditional ecological farming,
while the majority is dedicated specifically to the construction and operation of the Dong Medicine Clinic.

We will regularly publish financial updates and invite adopters to follow the entire process transparently.`,
      },
      why_adopt_para3: {
        zh: `你不是在“买”一袋糯米，  
  你是在亲手种下一座诊所的地基。

  每一块田、每一粒米，背后都对应着村民的希望与侗医的未来。  
  这是一次文化共建，而非简单交易。`,
        en: `You’re not simply “buying” a bag of sticky rice —
you’re laying the foundation of a clinic with your own hands.

Behind every field and every grain lies the hope of a villager and the future of Dong medicine.
This is a shared act of cultural creation, not a mere transaction.`,
      },
      bottom_callout: {
        zh: "想要帮助广南建起侗医诊所",
        en: "Want to Help Build the Clinic in Guangnan?",
      },
      adopt_button_text: {
        zh: "立即认养",
        en: "Adopt Now",
      },
    };

    function navigationLang(lang){
            const container=document.getElementById("navigation")
            container.innerHTML=""

            const html=`
                <li><img src="../Image_about/Logo.jpg" alt="Logo" id="Logo"></li>
                <li><a href="../Index/index.html">${lang==="zh" ? "主页" : "Home"}</a></li>
                <li><a href="../Adoption/Adoption.html">${lang==="zh" ? "想要认养" : "Want to Adopt"}</a></li>
                <li><a href="../Details/Details.html">${lang==="zh" ? "认养细节" : "Adoption Details"}</a></li>
                <li><a href="../Journal/Journal.html">${lang==="zh" ? "项目日志" : "Project Journal"}</a></li>
                
                <li class="dropdown">
                    <a href="#">${lang==="zh" ? "其他细节" : "Other Details"}</a>
                    <ul class="dropdown-menu">
                        <li><a href="../Farmer/Farmer.html">${lang==="zh" ? "农民信息" : "Farmer Info"}</a></li>
                        <li><a href="../QaA/QaA.html">${lang==="zh" ? "常见问题" : "Common Problems"}</a></li>
                        <li><a href="../Dongyi introduction/Dongyi.html">${lang==="zh" ? "侗医项目简介" : "Dongyi Program Info"}</a></li>
                    </ul>
                </li>
                
                <li>
                    <select id="languageSelect">
                        <option value="zh">中文</option>
                        <option value="en">English</option>
                    </select>
                </li>
            `

            document.getElementById("navigation").innerHTML+=html

            
            

}

    function navDisplay(){
            const hamburger = document.getElementById("hamburger");
            const nav = document.getElementById("navigation");

            hamburger.addEventListener("click", function () {
                nav.classList.toggle("active")
        });
    }

    function renderContent(lang) {
      for (const key in textData) {
        const el = document.getElementById(key);
        if (!el) continue;
        if (Array.isArray(textData[key][lang])) {
          el.innerHTML = textData[key][lang].map(item => `<li>${item}</li>`).join("");
        } else {
          el.textContent = textData[key][lang];
        }
      }
    }

   

    function animation1() {
      const block = document.querySelector("#introduction_first_text");
      const trigger = window.innerHeight * 0.85;
      const top = block.getBoundingClientRect().top;
      if (top < trigger) block.classList.add("show");
    }

    function animation2() {
      const block = document.querySelector("#introduction_second_text");
      const trigger = window.innerHeight * 0.85;
      const top = block.getBoundingClientRect().top;
      if (top < trigger) block.classList.add("show");
    }

    

    window.addEventListener("scroll", animation1);
    window.addEventListener("scroll", animation2);

     function bindLanguageSelector() {
      const oldSelect = document.getElementById("languageSelect");
      const select = oldSelect.cloneNode(true);
      oldSelect.parentNode.replaceChild(select, oldSelect);
      select.value = Language;
      select.addEventListener("change", function () {
        Language = this.value;
        localStorage.setItem("language", Language)
        navigationLang(Language);
        renderContent(Language);
    
        bindLanguageSelector();
      });
    }

    window.onload = function () {
      navigationLang(Language);
      renderContent(Language);
      
      bindLanguageSelector();

      navDisplay()
      animation1();
      animation2();
    };