let Language=localStorage.getItem("language") || "zh"
        const functions_text = [
                {
                    title: {
                        zh: "想要了解更多",
                        en: "Want to Learn More"
                    },
                    para: {
                        zh: "了解认养的流程、价格、时间线与参与方式，清晰透明，不留疑问。",
                        en: "Explore the adoption process, pricing, timeline, and how to participate — clear and transparent."
                    },
                    image: "/Image_about/mature_sticky_rice.jpg",
                    link:"/Details.html"
                },
                {
                    title: {
                        zh: "想要认养",
                        en: "Want to Adopt"
                    },
                    para: {
                        zh: "选择一块糯米田，亲手种下希望，收获属于你的文化与稻香。",
                        en: "Choose a rice field, sow hope with your own hands, and harvest both grain and meaning."
                    },
                    image: "/Image_about/form.png",
                    link:"/Adoption.html"
                },
                {
                    title: {
                        zh: "关于项目",
                        en: "About the Project"
                    },
                    para: {
                        zh: "理解广南糯米认养计划的意义，以及广南村",
                        en: "Learn the meaning of Sticky Rice Adoption Plan and the Village of Guangnan"
                    },
                    image: "/Image_about/Guangnan_image3.jpg",
                    link:"/About.html"
                },
                {
                    title: {
                        zh: "侗医项目简介",
                        en: "Dongyi Program Introduction"
                    },
                    para: {
                        zh: "了解侗医所建设如何改善医疗资源，保护侗族传统医学。",
                        en: "Discover how the Dong Medicine Clinic improves healthcare and preserves traditional medicine."
                    },
                    image: "/Image_about/clinic_picture.png",
                    link:"/Dongyi.html"
                },
                {
                    title: {
                        zh: "农民信息",
                        en: "Farmer Information"
                    },
                    para: {
                        zh: "看看正在耕种你所认养稻田的农民是谁，听听他们的故事与笑容。",
                        en: "Meet the farmers cultivating your adopted field, and hear the stories behind their smiles."
                    },
                    image: "/farmer_image/石志向.jpg",
                    link:"/Farmer.html"
                },
                {
                    title: {
                        zh: "常见问题",
                        en: "Common Questions"
                    },
                    para: {
                        zh: "我们整理了认养过程中最常被问到的问题与答复，供你参考。",
                        en: "Find answers to frequently asked questions about the adoption experience and project details."
                    },
                    image: "/Image_about/People_with_sticky_rice_walking.jpg",
                    link:"/QaA.html"
                }
            ]

        const intro_text={
            title:{
                zh:"广南村糯米地认养项目简介",
                en:"Introduction of Sticky Rice Field Adoption Program in Guangnan Village"
            },

            text:{
                zh:"糯米地认养项目是一项融合公益认养与文化保护的乡村行动。通过认养侗寨的糯米田，支持当地年迈农户延续传统耕作方式，用户将在收获季节收到亲手种下的糯米作为回馈，也将在这个过程中选择体验农耕的乐趣，重新连接土地与人之间的关系。与此同时，大部分认养收益将用于建设侗医所，帮助村民获得更好的医疗资源和传承侗药文化。广南项目不仅是一场关于食物的分享，更是一段跨越城乡、延续文化的共同参与。",
                en:"The Sticky Rice Field Adoption Project is a rural initiative that blends public welfare with cultural preservation. By adopting a rice field in a Dong ethnic village, supporters help elderly farmers continue their traditional farming practices. During the harvest season, they receive the rice they helped grow and may choose to experience the joy of farming firsthand — reconnecting with the land and the people who cultivate it. Meanwhile, the majority of the adoption proceeds will fund the construction of a Dong Medicine Clinic, providing better healthcare for villagers and supporting the preservation of traditional Dong medicine. The Guangnan Project is not just a sharing of food — it is a shared journey across regions, rooted in cultural continuity and meaningful participation."
            }
        }
        function navigationLang(lang){
            const container=document.getElementById("navigation")
            container.innerHTML=""

            const html=`
                <li><img src="/Image_about/Logo.jpg" alt="Logo" id="Logo"></li>
                <li><a href="/About.html">${lang==="zh" ? "关于" : "About"}</a></li>
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
        function fadeInHero(){
            const content=document.querySelector(".hero-content")
            content.classList.add("show")
        }
        function audio(){
            let audio=new Audio("/nature.mp3")
            audio.loop=true

            let audioPlaying=false
            document.getElementById("hero-audio-toggle").addEventListener("click", ()=>{
                if (!audioPlaying){
                    audio.play()
                    audioPlaying=true
                    document.getElementById("hero-audio-toggle").textContent="🔊"
                } else{
                    audio.pause()
                    audioPlaying=false
                    document.getElementById("hero-audio-toggle").textContent="🔈"          
                }
            })
        }
        
        function heroLang(lang){
            const title=document.getElementById("hero-title")
            const subTitle=document.getElementById("hero-subtitle")

            if (title&&subTitle) {
                title.textContent=lang==="zh" ? "广南的一眼千年" : "Guangnan: A Glimpse Across Time"
                subTitle.textContent=lang==="zh" ? "在这片田里，文化从未被遗忘。" : "In these fields, culture has never been forgotten."
            }
        }
        function functionsLang(lang) {
            const titles = document.querySelectorAll(".item-title")
            const paras = document.querySelectorAll(".item-para")
            const functions=document.querySelectorAll(".function-item")

            functions_text.forEach((item, index) => {
                if (titles[index] && paras[index]) {
                    titles[index].textContent = item.title[lang]
                    paras[index].textContent = item.para[lang]

                    functions[index].style.backgroundImage=`url('${item.image}')`

                    functions[index].onclick = () => {
                    window.location.href = item.link
                    }
                }
            })
        }
        function particles(){
            const particles=document.querySelectorAll(".particle")

            particles.forEach(p=>{
                const x=Math.random()*innerWidth
                const y=Math.random()*innerHeight
                const delay=Math.random()*5

                p.style.left=`${x}px`
                p.style.top=`${y}px`
                p.style.animationDelay=`${delay}s`
            })
        }
        

        function introLang(lang){
            const title=document.getElementById("intro-title")
            const subTitle=document.getElementById("intro-text")

            if (title&&subTitle){
                title.textContent=`${intro_text.title[lang]}`
                subTitle.textContent=`${intro_text.text[lang]}`
            }
        }

        function scroll(){
            const button=document.getElementById("scroll-button")
            const target=document.getElementById("mission")

            button.onclick=function(){
                const y=target.getBoundingClientRect().top+window.pageYOffset-100

                window.scrollTo({
                    top:y,
                    behavior:"smooth"
                })
            }
        }
        
        function missionLang(lang){
            const title=document.getElementById("mission-title")
            const text=document.getElementById("mission-text")

            if (title&&text){
                title.textContent=lang==="zh" ? "我们的使命" : "Our mission"
                text.textContent=lang==="zh" ? "我们以一亩糯田为纽带，守护侗族文化的根脉，也为农人的生活播下新的希望。" : "Through each adopted rice field, we safeguard the roots of Dong culture and sow new hope into the lives of its farmers."
            }
        }

        function slogan(lang){
            const call=document.getElementById("intro-callout-call")
            const button_text=document.getElementById("call-button")

            call.textContent=lang==="zh" ? "想要帮助广南" : "Want help Guangnan"
            button_text.textContent=lang==="zh" ? "立即认养" : "Adopt Immeadiately"
        }//change the call section language

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
                    heroLang(Language)
                    missionLang(Language)
                    introLang(Language)
                    functionsLang(Language)
                    slogan(Language)
                    bindLanguageSelector()
                }
            )}
        }
        
        window.onload=function(){
            navigationLang(Language)
            navDisplay()
            heroLang(Language)
            missionLang(Language)
            introLang(Language)
            functionsLang(Language)
            slogan(Language)
            bindLanguageSelector()
            scroll()
            audio()
            fadeInHero()
            particles()
        }