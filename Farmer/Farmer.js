let Language=localStorage.getItem("language") || "zh"

        const farmers = [
            {
                name: { zh: "学工妈", en: "Xuegong Ma" },
                age: "70岁",
                image: "../farmer_image/学工妈.jpg",
                description: { zh: "种植大糯50年,广南侗寨四组", en: "50 years of glutinous rice farming, Group 4, Guangnan Dong Village"},
                details: {
                zh: `我今年 70 岁，大家都叫我“学工妈”——这个名字叫得久了，我自己都快忘记原来的名字了。我 52 年前嫁到广南村，就一直在这里生活、劳动，慢慢也成了村里人熟悉的面孔。我是一名裁缝，擅长用侗族传统布料做头巾和装饰品。每一针一线，我都把对侗族文化的热爱缝进去。现在，我还经营着一家小杂货铺，孩子们常来买我做的小点心。这辈子，我把一半的时间都献给了广南。我爱这个村庄，它的山、它的人、它的布，也爱每天平凡的日子里藏着的骄傲与喜悦。`,
                en: "I am 70 years old. Everyone calls me Xue Gong Ma—I've heard it so long that I've almost forgotten my real name. I married into Guangnan Village 52 years ago and have been living and working here ever since. I'm a seamstress skilled in using traditional Dong fabrics to make headscarves and ornaments. Every stitch reflects my love for Dong culture. Nowadays, I also run a small grocery shop, and kids often come to buy the snacks I make. I've spent half of my life devoted to Guangnan. I love its mountains, its people, its cloth—and the pride and joy hidden in its ordinary days."
                }
            },
            {
                name: { zh: "杨谋（老杨）", en: "Yang Mou (Old Yang)" },
                age: "68岁",
                image: "../farmer_image/杨谋.jpg",
                description: { zh: "广南四组人,种植大糯53年", en: " From Group 4, Guangnan, 53 years of glutinous rice farming" },
                details: {
                zh: `我是老杨，在广南种了一辈子的大糯。年轻时候跟着父亲下田，日子虽苦，但心安。现在每天还是会绕村子走一圈，看看田，看看天。有稻香的地方，就是我最踏实的地方。`,
                en: "’m Old Yang, and I’ve been growing glutinous rice in Guangnan my whole life. When I was young, I followed my father into the fields. Life was hard, but I had peace of mind. Now, I still walk around the village every day, looking at the fields and the sky. Wherever there’s the smell of rice, that’s where I feel most at ease."
                }
            },
            {
                name: { zh: "王书姣", en: "Wang Shujiao" },
                age: "68岁",
                image: "../farmer_image/王书娇.jpg",
                description: { zh: "广南芒兰组人,种植大糯50年", en: " From Manglan Group, Guangnan, 50 years of glutinous rice farming" },
                details: {
                zh: `我叫王书姣，广南芒兰组的人。从小种地，和糯米打了一辈子交道。我没什么特别的本事，就是把每天的事做好，把这片地当家一样对待。`,
                en: "My name is Wang Shujiao, from the Manglan group in Guangnan. I’ve been growing rice since childhood and have spent a lifetime working with glutinous rice. I don’t have any special skills—just the commitment to do everyday things well and treat the land like home."
                }
            },
            {
                name: { zh: "老蒙", en: "Old Meng" },
                age: "65岁",
                image: "../farmer_image/老蒙.jpg",
                description: { zh: "广南二组人,种植大糯45年", en: "From Group 2, Guangnan, 45 years of glutinous rice farming" },
                details: {
                zh: `我是老蒙，广南人，种田 40 多年了。我说不上什么大话，就想着把祖宗留下的地种好，让吃到的人说一声“香”，我这心里就踏实了。`,
                en: "I’m Old Meng, a native of Guangnan. I’ve been farming for over 40 years. I don’t make grand claims; I just want to farm the land left by our ancestors well. If people say the rice tastes good, I feel content."
                }
            },
            {
                name: { zh: "石修爱妈妈", en: " Shi Xiu'ai's Mother" },
                age: "60岁",
                image: "../farmer_image/石修爱妈妈.jpg",
                description: { zh: "广南芒兰人,种植大糯40年", en: "From Manglan, Guangnan, 40 years of glutinous rice farming" },
                details: {
                zh: `大家都叫我石修爱妈妈，我习惯了每天早起进田，看天看苗。种地是个细致活，不光靠力气，更靠心。我一直觉得，一棵稻谷是会听人说话的。`,
                en: "Everyone calls me Shi Xiu’ai’s mother. I’m used to getting up early and going into the fields, watching the sky and the seedlings. Farming is meticulous work—it doesn’t just require strength but also heart. I always believe that a stalk of rice can understand human speech"
                }
            },
            {
                name: { zh: "彬彬阿姨", en: "Aunt Binbin" },
                age: "55岁",
                image: "../farmer_image/彬彬阿姨.jpg",
                description: { zh: "广南二组人,种植大糯35年", en: "From Group 2, Guangnan, 35 years of glutinous rice farming" },
                details: {
                zh: `我是彬彬阿姨，别人说我种田细心，其实我只是比别人更慢一点。我喜欢那种一步一步来的感觉，就像日头升起那样慢慢的，却踏实。`,
                en: "I’m Aunt Binbin. People say I’m careful in farming, but I think I’m just slower than others. I like doing things step by step, like how the sun rises—slow but steady."
                }
            },
            {
                name: { zh: "石志向", en: "Shi Zhixiang" },
                age: "62岁",
                image: "../farmer_image/石志向.jpg",
                description: { zh: "广南二组人,种植大糯42年", en: "From Group 2, Guangnan, 42 years of glutinous rice farming" },
                details: {
                zh: `我叫石志向，是土生土长的广南人，和这片土地一起老去的人。四十多年下来，种糯米早成了习惯，也成了牵挂。日子过得不快不慢，季节一轮轮走，我只希望把地种好，把老手艺留住，就够了。`,
                en: "My name is Shi Zhixiang, born and raised in Guangnan. I’ve aged alongside this land. After over forty years, growing glutinous rice has become both habit and attachment. Life passes neither fast nor slow, and seasons cycle through—I only hope to cultivate the land well and preserve our traditional craft."
                }
            },
            {
                name: { zh: "杨小雪", en: " Yang Xiaoxue" },
                age: "43岁",
                image: "../farmer_image/杨小雪.jpg",
                description: { zh: "广南甲江人,草编手艺人,种植大糯20年", en: " From Jiajiang, Guangnan, grass weaving artisan, 20 years of glutinous rice farming" },
                details: {
                zh: `我是杨小雪，今年 42 岁，是侗族人。我从邻村嫁到广南后，向公公学习了编草工艺——那是我们侗族传承了几百年的手艺。我现在是一位非遗传承人，希望把这门手艺继续传下去。除了编草，我也爱捡东西——别人不要的，我觉得它们都有“变成宝”的机会。我把这些材料变成艺术品，向更多人展示侗乡的美。我常说：“到处都有美，只要你睁开眼睛，就能看见。”这是我生活的信仰，也是我继续创作的动力。`,
                en: "I’m Yang Xiaoxue, 42 years old, and Dong by ethnicity. I married into Guangnan from a nearby village and learned grass weaving from my father-in-law—an art passed down for centuries among the Dong people. I’m now a recognized cultural heritage inheritor and hope to pass on this craft. I also love collecting discarded things—I believe everything has the potential to become treasure. I turn them into art to showcase the beauty of Dong life. I often say, Beauty is everywhere, if you just open your eyes. This belief fuels my creativity and daily life."
                }
            },
            {
                name: { zh: "杨兰芳", en: "Yang Lanfang" },
                age: "46岁",
                image: "../farmer_image/杨兰芳.jpg",
                description: { zh: "广南二组人,种植大糯20年", en: " From Group 2, Guangnan, 20 years of glutinous rice farming" },
                details: {
                zh: `我叫杨兰芳，这片土地我走过无数遍，每块田、每条沟我都认识。日子虽平凡，但我喜欢这种脚踏实地、看得见结果的生活。`,
                en: "I’m Yang Lanfang. I’ve walked this land countless times and know every field and ditch. Life may be ordinary, but I enjoy this grounded life where I can see the fruits of my labor."
                }
            },
            {
                name: { zh: "吴科技", en: "Wu Keji" },
                age: "40岁",
                image: "../farmer_image/吴科技.jpg",
                description: { zh: "广南六组人,建筑工程师,大糯种植传承10年", en: "From Group 6, Guangnan, construction engineer, 10 years of glutinous rice farming" },
                details: {
                zh: `我是吴科技，虽是搞建筑出身，但这十年，我在糯米田里找到了另一种坚实感。田地和建筑一样，都要基础稳，心也得沉得住，才能扎得深。`,
                en: "I’m Wu Keji. Though trained as a construction engineer, I’ve found another kind of stability in rice farming these past ten years. Like buildings, fields require a solid foundation and a calm heart to take root."
                }
            },
            {
                name: { zh: "理斯妈妈", en: "Li Si’s Mother" },
                age: "67岁",
                image: "../farmer_image/理斯妈妈.jpg",
                description: { zh: "广南甲江人,大糯种植传承人,大糯制品手艺人,种植大糯50年", en: "From Jiajiang, Guangnan, glutinous rice artisan and cultivator, 50 years of glutinous rice farming" },
                details: {
                zh: `我叫理斯妈妈，今年 67 岁，是一位从小种糯米长大的侗族农妇。我出生在附近村子，嫁来广南已五十多年，一直在种田，也在学习侗族的种植技艺。每天，我种糯米、晒糯米，还做“饭团”卖给村里人。我觉得，泥土和我是一体的，我的手知道该怎么照顾这片土地，它也回馈我丰收和平静。除了种田，我还是两个孩子的母亲。我在村里把他们带大，如今一个回乡做保护中心的志愿者，一个是中国南方航空的飞行员。我的生命既属于土地，也属于我热爱的家人。`,
                en: "My name is Li Si’s mother. I’m 67 years old, a Dong woman who has grown up with glutinous rice. I was born in a nearby village and married into Guangnan over fifty years ago. I’ve been farming and learning Dong agricultural techniques ever since. Every day I grow rice, dry rice, and make rice balls to sell to villagers. I feel one with the soil—my hands know how to care for it, and in return, it brings me peace and harvest. I’m also a mother of two. I raised them in the village. One is now a conservation volunteer, and the other a pilot for China Southern Airlines. My life belongs to this land and to the family I love."
                }
            }
            ];

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
        
        function heroLang(lang){
            const title=document.getElementById("hero-title")
            const subTitle=document.getElementById("hero-subTitle")

            if (title&&subTitle) {
                title.textContent=lang==="zh" ? "认识广南的种田人" : "Farmer Information"
                subTitle.textContent=lang==="zh" ? "他们的手掌里，不只有泥土，还有几十年的技艺与记忆。" : "In their hands lies not only soil, but decades of skill and memory."
            }
        }

        


        function renderFarmers(lang){
                const container=document.getElementById("farmer_list")
                container.innerHTML=""

                for(let i=0; i<farmers.length;i++){
                const farmer=farmers[i]
                const html = `
                    <div class="farmer-card" data-index="${i}">
                        <div class="card-image">
                            <div class="flip-container">
                                <div class="flip-inner">
                                    
                                    <div class="image-front">
                                        <img src="${farmer.image}" alt="${farmer.name[lang]}">
                                        <div class="overlay">
                                            <p>${lang==="zh" ? "简介" : "intro"}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="image-back">
                                        <p>${farmer.details[lang]}</p>
                                    </div>
                                
                                </div>
                            </div>
                        </div>

                        <div class="card-info">
                            <h2>${farmer.name[lang]}(${farmer.age})</h2>
                            <p>${farmer.description[lang]}</p>
                        </div>
                    </div>
                `   

                document.getElementById("farmer_list").innerHTML+=html
            }


             const flipCards = document.querySelectorAll(".card-image");

            flipCards.forEach(card => {
                card.addEventListener("click", () => {
                    const inner = card.querySelector(".flip-inner");
                    inner.classList.toggle("flipped");
                });
            });
        }

         function slogan(lang){
            const call=document.getElementById("intro-callout-call")
            const button_text=document.getElementById("call-button")

            call.textContent=lang==="zh" ? "想要帮助广南" : "Want help Guangnan"
            button_text.textContent=lang==="zh" ? "立即认养" : "Adopt Immeadiately"
        }//change the call section language


        function bindLanguageSelector() {
            const oldSelect = document.getElementById("languageSelect");
            const select = oldSelect.cloneNode(true);
            oldSelect.parentNode.replaceChild(select, oldSelect);
            select.value = Language;
            select.addEventListener("change", function () {
                Language = this.value;
                localStorage.setItem("language", Language)
                renderFarmers(Language)
                heroLang(Language)
                navigationLang(Language)
                slogan(Language)

                bindLanguageSelector()
            });
        }
        

        window.onload=function(){
            renderFarmers(Language)
            heroLang(Language)
            navigationLang(Language)
            slogan(Language)

            navDisplay()
    
            bindLanguageSelector()
        }

        
        
        const button=document.getElementById("floating_arrow")  //animation for clicking then scroll down automaticlly
            const target=document.getElementById("farmer_list")

            button.onclick=function(){
                const y=target.getBoundingClientRect().top+window.pageYOffset-100

                window.scrollTo({
                    top:y,
                    behavior:"smooth"
                })
            }