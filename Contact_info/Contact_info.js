let Language=localStorage.getItem("language") || "zh"

instructionData={
    en:'<p>Thank you so much for your kind support of Guangnan Village and for taking the time to fill out the adoption form. Your help means a lot to us and to the farmers in our community.To move forward, please open WeChat and scan the QR code on the right. This will let you add our program contact. She will guide you through the next steps, answer your questions, and help you start your adoption smoothly.If you prefer, you can also reach out to us by email.</p><p>You can also <a href="mailto:GuangnanStickyRIceAdoptionprogram@outlook.com">email us</a> if you have any questions or contact with us through email</p>',

    zh:'<p>非常感谢您对广南村的支持，以及您抽出宝贵时间填写认养表单。您的帮助对我们和村里的农户来说意义重大。接下来，请打开微信并扫描右侧的二维码，这将使您添加我们的项目联系人。她会引导您完成接下来的步骤，解答您的问题，并协助您顺利开始认养流程。如果您更倾向于通过电子邮件联系，也欢迎发送邮件给我们。</p> <p>如有任何问题，您也可以 <a href="mailto:GuangnanStickyRIceAdoptionprogram@outlook.com">发送邮件联系我们</a>。</p>'
    


}

function success_lnaguage(lang){
    const text=document.getElementById("success-text")
    text.textContent=lang==="zh" ? "你的认养信息表单已成功提交" : "Your adoption form has been submitted successfully"
}

function navigationLang(lang){
            const container=document.getElementById("navigation")
            container.innerHTML=""

            const html=`
                <li><img src="/Image_about/Logo.jpg" alt="Logo" id="Logo"></li>
                <li><a href="/index.html">${lang==="zh" ? "主页" : "Home"}</a></li>
                <li><a href="/Adoption.html">${lang==="zh" ? "想要认养" : "Want to Adopt"}</a></li>
                <li><a href="/About.html">${lang==="zh" ? "关于" : "About"}</a></li>
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



function instruction_language(lang){
    const content=document.getElementById("instruction-text")
    content.innerHTML=lang==="zh" ? instructionData.zh : instructionData.en
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
                    success_lnaguage(Language)
                    instruction_language(Language)
                    bindLanguageSelector()
                }
            )}
        }


        window.onload=function(){
                navigationLang(Language)
                navDisplay()
                success_lnaguage(Language)
                instruction_language(Language)
                bindLanguageSelector()
                
        }