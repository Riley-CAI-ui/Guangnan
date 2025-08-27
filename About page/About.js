let Language=localStorage.getItem("language") || "zh"

    const sectionMeaning = [
    {
        title: {
            zh: "我们是谁",
            en: "Who Are We"
        },
        text: {
            zh: "我们是三位来自中国和英国的学生，因为对广南文化的共同兴趣走到了一起。通过糯米田认养计划，我们希望为这片土地和生活在这里的人们，做一些实际的事情。",
            en: "We are three students from China and England. What brought us together is a shared interest in the culture of Guangnan. Through the sticky rice adoption project, we hope to do something practical to support this place and the people who live here."
        }
    },
    {
        title: {
            zh: "认养计划的意义",
            en: "The Purpose of the Adoption Program"
        },
        text: {
            zh: "我们的认养计划，立足于广南千年侗寨的文化根基，旨在通过可持续方式，回应村落在医疗、农业、经济与文化上的多重困境。首先，我们希望发扬侗族传统的耕种文化。广南村的糯米田不仅是粮食生产的场所，更承载着一套顺应自然节律、代代相传的生态智慧。我们鼓励不使用化肥与农药，保留牛耕、人力除草、时节播种等传统农法，让土地以自然的方式恢复生机，同时也让年轻一代重新理解劳动与土地的意义。其次，我们致力于提高村民收入，让广南的“好米”真正走出大山。我们通过认养机制保障农民收益，为糯米建立清晰的产品形象与品牌认知，让劳动获得应有的尊重，让稻田变得可持续。再次，我们希望搭建一座连接城市与乡村的桥梁。让城市中的家庭与学校，通过认养、走访与互动，理解一碗糯米背后的山川气候、种植节奏与人文情感，从而拉近城乡距离，激发城市人对乡村命运的共情与责任。最后，认养收入还将用于建设一所具有侗医特色的“侗医诊所”，以回馈村落医疗匮乏的现实。我们希望，这不只是一间治病的屋舍，更是一个侗医知识传承与弘扬的平台。诊所将结合侗医采药、制药、施治的传统方式，探索在地医药文化的现代表达，让广南的草木之力继续守护侗民的健康与尊严。",
            en: "Our adoption program is rooted in the cultural foundation of Guangnan’s thousand-year-old Dong village and aims to address its multiple challenges in healthcare, agriculture, economy, and heritage through sustainable methods. First, we aim to revitalize traditional Dong farming culture. Guangnan’s sticky rice fields are not just sources of food, but bearers of time-honored ecological wisdom that follows nature’s rhythms. We encourage natural cultivation—eschewing fertilizers and pesticides, using ox plowing, hand-weeding, and seasonal planting—to let the land regenerate naturally while helping younger generations reconnect with the meaning of labor and land. Second, we aim to increase villagers' income and help Guangnan’s excellent sticky rice reach a wider market. Through the adoption mechanism, we secure farmer earnings and build a strong product identity, ensuring that labor is respected and the rice fields become sustainable. Third, we strive to build a bridge between cities and villages. Through adoption, visits, and engagement, urban families and schools can better understand the climate, cultivation rhythms, and emotional stories behind each grain of sticky rice—narrowing the urban-rural divide and inspiring empathy and responsibility. Finally, part of the adoption revenue will fund a Dong Medicine Clinic to address the lack of healthcare in the village. This will not only be a place for treatment, but also a hub for preserving and promoting Dong medical traditions. The clinic will integrate traditional practices of gathering herbs, preparing medicine, and treating illnesses, exploring new ways to express local healing culture and continuing to protect the health and dignity of the Dong people through the power of local plants."
        }
    },

    {
        Jacob:{
            intro:{
                en:"I’m Jacob, originally from Hong Kong, and I’ve been studying at Charterhouse School in the UK since the age of 13. My fascination with Guangnan stems from a personal place. With both of my parents from China, I’ve always felt deeply connected to my cultural heritage. Yet, what’s often overlooked are the communities in China’s rural heartlands - ethnic minorities, mountain villages, and centuries-old crafts and languages that quietly, yet strugglingly persist. To me, Guangnan represents exactly that: a living, breathing archive of culture, identity, and resilience. My goal is to support Guangnan’s growth - not only by preserving its traditions, but also by sharing them with the rest of China and the world. Having organised an exhibition to showcase Guangnan’s culture at my school in the UK, I’m now helping to promote Guangnan’s top-quality glutinous rice adaptation project in China.",
                zh:"我是梓晟，在香港出生，13岁来到英国Charterhouse School 读书。我对广南的迷恋源于个人经历。我一直对中国传统有着深厚的情感 – 我的父母都在国内出生和长大。中国乡村腹地的社群常常被忽略：少数民族、山村、传承数百年的技艺和语言，它们默默地、却又艰难地延续着。对我来说，广南正是这样的：一个鲜活的、充满文化、身份认同和韧性的档案库。因此，我想帮助广南改变，不仅维持传统，而且带领他走向全中国和世界。我在英国学校展出了广南的文化，在中国我们要把广南顶级的糯米推向全国。",
            },
            image:"Jacob_image.jpg"
        },

        Alex:{
            intro:{
                en:"I’m Alex, from the UK, though I’ve also lived in Japan and Singapore for several years. I have been studying at Charterhouse School since Year 9. I was eager to join Jacob on this project, inspired by my long-standing interest in Eastern philosophy and culture. Visiting Guangnan with Jacob was eye-opening. I was deeply moved by the richness of its traditions, rituals, and spiritual life - experiences unlike anything I had encountered before. I documented many of these moments, hoping to share Guangnan’s unique heritage with a wider audience and highlight the importance of preserving such cultural treasures, and did this in ‘The Story of Guangnan: Exhibition’.",
                zh:"我叫Alex，来自英国，也曾在日本和新加坡生活过几年。我从九年级起就在查特豪斯公学就读。我渴望加入Jacob的这个项目，因为我一直以来对东方哲学和文化由浓厚的兴趣。第一次来到中国，和Jacob一起参观广南让我大开眼界。我被这里丰富的传统、仪式和精神生活深深打动——这是我从未体验过的体验。我记录下了许多这样的瞬间，希望与更广泛的受众分享广南独特的文化遗产，并强调保护这些文化瑰宝的重要性，于是，我创作了“广南故事：展览”。",
            },
            image:"Alex_image.jpg"
        },

        Riley:{
            intro:{
                en:"I’m Riley, a Grade 9 student at Shenzhen College of International Education. I’m passionate about computer science and biology—and this project gave me a way to connect those interests with something real. Guangnan’s culture, especially the stories of the farmers, touched me deeply.One moment I can’t forget: in the village square, a group of children were playing without any adults around. Their parents had gone to work in faraway cities. That quiet image stayed with me—it made me think about what kind of support a village really needs.I decided to build this website not just as a technical challenge, but as a way to help more people see what makes this place special. From structuring multilingual content to designing farmer profiles, every line of code was a way of understanding Guangnan better. Technology felt less like a tool, and more like a bridge.",
                zh:"我是 Riley，就读于深圳国际交流书院九年级。我对计算机和生物充满兴趣，而这个项目让我第一次把这些兴趣用在真实的事情上。广南的文化，尤其是农民的故事让我很有触动。有一个场景让我印象特别深：傍晚的广场上，一群孩子在玩耍，周围却没有一个大人。他们的父母都外出打工了。那个画面很安静，却让我久久不能忘——也让我开始思考，乡村真正需要的支持到底是什么。我决定搭建这个网站，不只是出于技术挑战的兴趣，更是想通过它让更多人看到广南的特别。从多语言内容结构，到农民资料的排版设计，每一行代码都是我理解广南的方式。那一刻，技术不再只是工具，而是变成了连接彼此的桥梁。",
            },
            image:"/member_images/Riley_image.jpg"
        
        }

    }
]


    const introText = [
            {
                title: {
                    zh: "广南村的历史与由来",
                    en: "History of Guangnan Village"
                },
                text: {
                    zh: "广南村，位于广西桂林市龙胜各族自治县平等镇，是一座拥有千年历史的侗族自然村落。相传北宋天圣九年（1031年），吴、曹两姓先祖自外迁徙至此，因这片土地广阔平坦，又位于原籍南方，遂取名“广南”。历经千载，侗民于山林之间安居垦殖，逐步营建出今日这一充满韵味的传统村寨。清乾隆年间，又有来自湖南靖州、通道与贵州黎平等地的侗人陆续迁入，使得村落更为兴旺。2022年，广南村被列入广西首批地名文化遗产“千年古村落”名录，成为历史与族群记忆的活态见证。",
                    en: "Guangnan Village, located in Pingdeng Town, Longsheng Various Nationalities Autonomous County, Guilin City, Guangxi, is a traditional Dong ethnic village with a history spanning over a thousand years. According to legend, in the ninth year of the Tiansheng era of the Northern Song Dynasty (1031), ancestors of the Wu and Cao families migrated here from elsewhere. Because the land was broad and flat, and situated to the south of their original home, they named it “Guangnan” (literally meaning “Broad South”). Over the centuries, the Dong people settled and cultivated the mountains and forests, gradually building the charming traditional village seen today. During the Qianlong reign of the Qing Dynasty, more Dong people migrated from Jingzhou and Tongdao in Hunan, and from Liping in Guizhou, further enriching the community. In 2022, Guangnan Village was included in Guangxi’s first batch of cultural heritage sites under the name “Millennium Ancient Village,” becoming a living testament to history and ethnic memory."
                }
            },
            {
                title: {
                    zh: "民居建筑与侗族文化之核",
                    en: "Traditional Architecture and the Core of Dong Culture"
                },
                text: {
                    zh: "在广南村，建筑与文化如同血脉相连。传统民居多为五柱三间三层瓦盖木楼，前檐双层，楼底养畜，实用与美观兼具。侗族“三宝”——鼓楼、风雨桥、凉亭——点缀其间，成为村寨精神的象征。其中，广南鼓楼高达28米、15层檐瓴，为广西第二高，雄踞村心，如同星辰之下的灯塔，引领族人聚会、议事与祭祀。鼓楼四周，民居呈放射状围绕，形成独有的侗寨肌理。风雨桥则将桥、亭、廊合而为一，梁柱间雕花细腻，神台供奉关公，桥上云龙图腾寓意祥和，承载着侗族的信仰、艺术与审美理想。",
                    en: "In Guangnan Village, architecture and culture are closely intertwined. Traditional homes typically feature three stories, with tiled roofs supported by five pillars, a double-layered eave in front, and livestock kept on the ground floor—combining practicality and beauty. The 'three treasures' of the Dong people—drum towers, wind-and-rain bridges, and pavilions—are scattered throughout the village, symbolizing its communal spirit. The Guangnan Drum Tower, standing 28 meters tall with 15 layered eaves, is the second tallest in Guangxi. It dominates the village center like a lighthouse under the stars, guiding people in gatherings, discussions, and rituals. Around it, homes radiate outward in a unique Dong layout. The wind-and-rain bridge combines bridge, pavilion, and corridor, adorned with delicate carvings and featuring a shrine to Guan Yu and cloud-dragon motifs that embody peace and Dong cultural ideals."
                }
            },
            {
                title: {
                    zh: "非遗文化与生态之田",
                    en: "Intangible Heritage and Ecological Fields"
                },
                text: {
                    zh: "广南村不仅地理环境优越，自然生态亦与文化交融相生。清泉绕村，梯田层叠，适宜侗家传统的生态农业。村民世代以牛耕与手作劳作田地，种植香软粘糯的侗族糯米，承续“靠天吃饭、顺天而作”的自然哲学。更为珍贵的是，广南村至今保留着一系列独特的非物质文化遗产：草龙、草狮、侗族大歌、岩坪调、舞龙舞狮……其中草龙草狮被列入国家级非遗名录，多次亮相东盟博览会。每年正月初六的鼓楼文化节上，村民身着盛装，鼓声震野，歌舞连天，侗寨仿佛在这一日重新苏醒，为世界奏响山村的心跳。",
                    en: "Guangnan Village boasts not only an advantageous geographical setting but also a harmonious integration of natural ecology and cultural heritage. Clear springs flow around the village, and terraced fields cascade down the hillsides, supporting traditional Dong ecological farming. Villagers have tilled the land for generations with oxen and hand tools, growing soft and sticky Dong glutinous rice in accordance with their philosophy of living with nature. Even more precious is the village’s preservation of numerous forms of intangible cultural heritage: straw dragons, straw lions, Dong grand songs, Yanping tunes, dragon and lion dances, among others. The straw dragon and lion traditions are recognized as national intangible heritage and have been showcased at the China-ASEAN Expo. Each year, on the sixth day of the first lunar month, the village hosts the Drum Tower Cultural Festival—an explosion of drums, songs, and dances as villagers don vibrant costumes and the Dong village seemingly awakens anew, resonating with the heartbeat of the mountains."
                }
            }
]


    const problemText =[
            {
                side:"left",
                
                front:{
                    zh: {
                        title:"产能不稳定，劳力短缺",
                        text:"广南糯米的年产量常受天气、气候与人力条件影响。当前主要耕作者为年长村民，劳力不足，耕作节奏不稳定。此外，灾害性天气时常打乱种植周期，使得大宗采购商对稳定供货缺乏信心，影响投资意愿。"
                    },
                    
                    en:{
                        title:"Unstable Yield and Labor Shortage",
                        text:"The annual yield of Guangnan’s sticky rice is heavily influenced by weather, climate, and labor availability. Most current farmers are elderly, and the workforce is insufficient to ensure consistent farming cycles. Natural disasters often disrupt planting and harvesting, making large-scale buyers hesitant to invest due to uncertain supply."
                    },

                    background:"/Image_about/ageing.jpg"
                },

                back:{
                    zh: {
                        title:"数据记录与公众参与提升稳定性",
                        text:"项目引入定期种植进展记录与可视化报告，提升透明度与可预测性。参与者也可远程或亲自体验农事活动，增强归属感与耐心。通过提高公众参与度与构建信任机制，我们正在逐步提升广南糯米产能的稳定性与长期投资吸引力。"
                    },
                    
                    en:{
                        title:"Data Logging and Public Engagement for Stability",
                        text:"The project introduces regular progress tracking and visual reporting to improve transparency and predictability. Participants can engage in farming activities either remotely or on-site, deepening their sense of connection. By increasing public participation and trust, we aim to gradually stabilize rice production and make Guangnan more appealing to long-term investment."
                    }
                }
            },

            {
                side:"right",
                
                front:{
                    zh: {
                        title:"品牌影响力不足",
                        text:"广南糯米虽品质出众，但在品牌推广上仍显薄弱。当前销售方式仍以集市与口口相传为主，缺乏系统化的营销策略。现代消费者对产品故事与溯源越来越重视，而广南的糯米尚未在更广范围内建立起鲜明的品牌形象与认知度。"
                    },
                    
                    en:{
                        title:"Lack of Brand Recognition",
                        text:"Although Guangnan sticky rice is of exceptional quality, it suffers from weak brand promotion. Sales are still dominated by traditional markets and word-of-mouth, lacking structured marketing strategies. Modern consumers increasingly value product stories and traceability, but Guangnan has yet to establish a clear and recognizable brand image on a broader scale."
                    },

                    background:"/Image_about/mature_sticky_rice.jpg"
                },

                back:{
                    zh: {
                        title:"数字化传播打造乡村品牌",
                        text:"我们通过网站与社交平台（如微信）推广认养计划，用数字方式讲述广南的土地、劳作与传承故事，吸引更多年轻受众。视觉内容与农田动态更新增强了透明度与信任，也将“广南糯米”这一地方特色品牌带向更广的市场空间。"
                    },
                    
                    en:{
                        title:" Digital Outreach to Build Rural Identity",
                        text:"We leverage websites and social platforms like WeChat to promote the adoption program and share Guangnan’s stories of land, labor, and tradition in a digital format. Engaging visuals and regular updates enhance transparency and build trust, helping “Guangnan Sticky Rice” grow into a meaningful and recognized regional brand in the broader marketplace."
                    }
                }
            },

            {
                side:"left",
                
                front:{
                    zh: {
                        title:"生产成本较高",
                        text:"广南村坚持生态种植与传统耕作方式，虽能保证糯米的高品质，但也带来了较高的人工与时间成本。在缺乏机械化支持的情况下，农户需要投入更多劳力完成耕种、灌溉与收割等环节，导致糯米价格偏高，竞争力下降，难以与邻近机械化大米产品抗衡。"
                    },
                    
                    en:{
                        title:"High Production Costs",
                        text:"Guangnan Village adheres to ecological and traditional farming methods, which ensure the high quality of sticky rice but also lead to increased labor and time costs. Without mechanized support, local farmers must devote great effort to planting, irrigation, and harvesting. As a result, the production cost is high, driving up prices and weakening competitiveness against cheaper, industrialized alternatives nearby."
                    },

                    background:"/Image_about/lowincome.jpg"
                },

                back:{
                    zh: {
                        title:"圈地认养助力农户",
                        text:"通过推行“圈地认养”计划，我们为村民提供了稳定而情感化的收入来源。参与者提前认养糯米田，不仅帮助分担生产成本，也提升了消费者对传统农业价值的理解与认同，使得农民有更多动力投入精细化种植，保障品质与效益双赢。"
                    },
                    
                    en:{
                        title:"Land Adoption Empowers Farmers",
                        text:"The “adopt-a-plot” model provides local farmers with a stable and emotionally engaging source of income. By allowing participants to pre-adopt rice fields, the plan offsets production costs and fosters appreciation for traditional farming values. This not only motivates farmers to engage in high-quality cultivation, but also ensures both economic sustainability and emotional connection with consumers."
                    }
                }
            }
]


    function navigationLang(lang){
            const container=document.getElementById("navigation")
            container.innerHTML=""

            const html=`
                <li><img src="/Image_about/Logo.jpg" alt="Logo" id="Logo"></li>
                <li><a href="/index.html">${lang==="zh" ? "主页" : "Home"}</a></li>
                <li><a href="/Adoption.html">${lang==="zh" ? "想要认养" : "Want to Adopt"}</a></li>
                <li><a href="/Details.html">${lang==="zh" ? "认养细节" : "Adoption Details"}</a></li>
                <li><a href="/Journal.html">${lang==="zh" ? "项目日志" : "Project Journal"}</a></li>
                
                <li class="dropdown">
                    <a href="#">${lang==="zh" ? "其他细节" : "Other Details"}</a>
                    <ul class="dropdown-menu">
                        <li><a href="/Farmer.html">${lang==="zh" ? "农民信息" : "Farmer Info"}</a></li>
                        <li><a href="/QaA.html">${lang==="zh" ? "常见问题" : "Common Problems"}</a></li>
                        <li><a href="/Dongyi.html">${lang==="zh" ? "侗医项目简介" : "Dongyi Program Info"}</a></li>
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

    function bannerLanguage(lang){
            const container=document.getElementById("banner_area")
            container.innerHTML=""

            html=`
                
                <div id="banner_text">
                    <h1 style="font-size:48px">${lang==="zh" ? "走进广南" : "Walk into Guangnan Village"}</h1>
                    <h2 style="font-size: 24px;">${lang==="zh" ? "感受侗族文化魅力" : "Feel the charm of Dong indigenous culture"}</h2>
                </div>
                
            `

            document.getElementById("banner_area").innerHTML+=html
}

    function introLanguage(lang){
            const container=document.getElementById("brief_introdution")
            container.innerHTML=""
            
          

            html=`
                
                    <div class="item">
                        <img src="/Image_about/Guangnan_image5.jpg" alt="Picture of village">
                        <div class="info_text">
                            <h1>${introText[0].title[lang]}</h1>
                            <p>${introText[0].text[lang]}</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="/Image_about/Guangnan_image3.jpg" alt="Picture of Village">
                        <div class="info_text">
                            <h1>${introText[1].title[lang]}</h1>
                            <p>${introText[1].text[lang]}</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="/Image_about/Guangnan_image2.jpg" alt="Picture of village">
                        <div class="info_text">
                            <h1>${introText[2].title[lang]}</h1>
                            <p>${introText[2].text[lang]}</p>
                        </div>
                    </div>
                `

            document.getElementById("brief_introdution").innerHTML+=html
}
        
    function MembersDisplay(){
            let show=false
            const members=document.getElementById("members")
            document.getElementById("toggleMembers").addEventListener("click", function(){
                if (!show) {
                    members.classList.add("show")
                    show=true
                } else{
                    members.classList.remove("show")
                    show=false
                }


            })
}
        
    function renderSectionMeaning(lang) {
            const container = document.getElementById("meaning");
            container.innerHTML = "";
            
            const html=`
            <div id="meaning_text">
                <div id="meaning_intro">
                    <h1>${sectionMeaning[0].title[lang]}</h1>
                    <p id="who_are_we">${sectionMeaning[0].text[lang]}</p>
                </div>


                <div id="buttonAndMembers" style="position:relative;">
                    <button id="toggleMembers">${lang === "zh" ? "成员介绍" : "Members Info"}</button>

                    <div id="members">
                        <div class="member">
                            <figure>
                                <img src="${sectionMeaning[2].Jacob.image}" alt="Jacob">
                                <figcaption>Jacob</figcaption>
                            </figure>
                            <div>${sectionMeaning[2].Jacob.intro[lang]}</div>
                        </div>

                        <div class="member">
                            <figure>
                                <img src="${sectionMeaning[2].Alex.image}" alt="Alex">
                                <figcaption>Alex</figcaption>
                            </figure>
                            <div>${sectionMeaning[2].Alex.intro[lang]}</div>
                        </div>

                        <div class="member">
                            <figure>
                                <img src="${sectionMeaning[2].Riley.image}" alt="Riley">
                                <figcaption>Riley</figcaption>
                            </figure>
                            <div>${sectionMeaning[2].Riley.intro[lang]}</div>
                        </div>
                    </div>
                </div>
                                
                <div id="impact">
                    <h1>${sectionMeaning[1].title[lang]}</h1>
                    <p id="program_goal">${sectionMeaning[1].text[lang]}</p>
                </div>
            </div>

            <a href="/Dongyi.html">Want to learn more about traditional Dong Medicine</a>`

            container.innerHTML+=html

            MembersDisplay()


}

    function slogan(lang){
            const call=document.getElementById("intro-callout-call")
            const button_text=document.getElementById("call-button")

            call.textContent=lang==="zh" ? "想要帮助广南" : "Want help Guangnan"
            button_text.textContent=lang==="zh" ? "立即认养" : "Adopt Immeadiately"
}

    function showProblem(){
            const items=document.querySelectorAll(".problem-left")
            const another=document.querySelector(".problem-right")
            const trigger=window.innerHeight*0.85

            items.forEach(item=>{
                const top=item.getBoundingClientRect().top
                if (top<trigger){
                    item.classList.add("show")
                }
            })

            const top2=another.getBoundingClientRect().top
            if (top2<trigger) {
                another.classList.add("show")
            }
}

    function problemFacingLanguage(lang){
            const container=document.getElementById("problems")
            container.innerHTML=""

            for (let i=0; i<problemText.length; i++) {
                const item = problemText[i]
                const sideClass=item.side==="left" ? "problem-left" :  "problem-right"   
                
                const front = item.front[lang]
                const back=item.back[lang]
                const background=item.front.background

                const cardHTML=`
                    <div class="${sideClass}">
                            <div class="flip-inner">
                                
                                <div class="front-problem" style="background-image: url('${background}'); background-size:cover; background-position:center;">
                                    <div class="overlay">${lang === "zh" ? "想看看我们如何解决吗？" : "Want to see how we solve this?"}</div>
                                    <h2>${front.title}</h2>
                                    <p>${front.text}</p>
                                </div>

                                <div class="back-solution">
                                    <h2>${back.title}</h2>
                                    <p>${back.text}</p>
                                </div>
                            
                            </div>
                    </div>
                `

                container.innerHTML+=cardHTML

                problemFlip()
            }

           
}

    function enableOverlayClickMobile(){
        if (window.innerWidth<=768) {
            const cards = document.querySelectorAll("flip-inner")
            cards.forEach(card=>{
                const overlay = card.querySelector(".overlay")
                card.addEventListener("click", function(e){
                    e.stopPropagation()
                    overlay.classList.toggle("active")
                })
            })
        }
    }

    function problemFlip(){
            const flipCards=document.querySelectorAll(".flip-inner")
            flipCards.forEach(card=>{
                card.addEventListener("click", ()=>{
                    card.classList.toggle("flipped")
                })
            })
}

    function bindLanguageSelector(){
            const oldSelect=document.getElementById("languageSelect")
            const select=oldSelect.cloneNode(true)
            oldSelect.parentNode.replaceChild(select,oldSelect)

            if (select) {
                select.value=Language
                select.addEventListener("change", function() {
                    Language=this.value
                    localStorage.setItem("language", Language)
                    navigationLang(Language)
                    bannerLanguage(Language)
                    introLanguage(Language)
                    problemFacingLanguage(Language)
                    renderSectionMeaning(Language)
                    slogan(Language)
                    bindLanguageSelector()
                }
            )}
}

    window.onload=function(){
            navigationLang(Language)
            bannerLanguage(Language)
            introLanguage(Language)
            problemFacingLanguage(Language)
            renderSectionMeaning(Language)
            slogan(Language)

            navDisplay()
            enableOverlayClickMobile()
            window.addEventListener("scroll", showProblem)
            bindLanguageSelector()
}
