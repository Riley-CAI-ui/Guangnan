emailjs.init("tyjWA79G-_NJdKJos")//intialize the emialjs



const form=document.getElementById("adopt_form")

const button=document.getElementById("submit_button")

function showNotification(type){
    const box=document.getElementById("notification")

    if (type==="success") {
        box.innerText=Language==="zh" ? "发送成功" : "Successfully sent"
        box.style.backgroundColor="#4CAF50"
    } else{
        box.innerText=Language==="zh" ? "发送失败， 请重试" : "Failed, please retry"
        box.style.backgroundColor="#f44336"
    }

    box.style.display="block"//make the box visible to the user

    setTimeout(() => {
        box.style.display="none"
    }, 10000);
}

function setButtonLoading(isLoading){
    if (isLoading) {
        button.innerText=Language==="zh" ? "加载中" : "Loading..."
        button.disabled=true //change the atatus of the button when loading
    } else{
        button.innerText = Language==="zh" ? "提交表单" : "Submit adoption form"
        button.disabled = false;//恢复按钮
    }
}

form.addEventListener("submit", function(event){
    setButtonLoading(true)
    
    event.preventDefault()//prevent the default actions when the user click the submit button

    emailjs.sendForm("service_vmqgvze", "template_80hcvas",this)//send the data of the form to the emial js
        .then(function(response){
            console.log("Success!",response.status,response.text)
            showNotification("success")
            form.reset()
            
            
            setButtonLoading(false)
            
        })
        .catch(function(error){
            console.log("error...", error)
            showNotification("error")

            
            setButtonLoading(false)
        })
})



//language setting part

let Language=localStorage.getItem("language") || "zh"

formData={
    user_name:{
        en:"Name:",
        zh:"称呼方式:"
    },

    user_email:{
        en:"Email:",
        zh:"邮箱:"
    },

    user_phone:{
        en:"Phone number(optional):",
        zh:"手机号（可选）："
    },

    user_area:{
        en:"Area want to adopt(20 ㎡=annual yield: 50kg, price: 2000 RMB):",
        zh:"认养糯米地面积（20平方米年产量为50公斤，售价2000 RMB）："
    },

    user_note:{
        en:"Remarks (e.g., preferred farmer to cooperate with):",
        zh:"备注（如意向合作农民）："
    },

    button:{
        en:"Submit Adoption form",
        zh:"提交表单"
    }


}

function formLanguage(lang){
    const elements=document.querySelectorAll("[data-text-id]")

    elements.forEach(element=>{
        const key=element.getAttribute("data-text-id")

        element.innerText = formData[key][lang];
    })
}

function navigationLang(lang){
            const container=document.getElementById("navigation")
            container.innerHTML=""

            const html=`
                <li><img src="/Image_about/Logo.jpg" alt="Logo" id="Logo"></li>
                <li><a href="/index.html">${lang==="zh" ? "主页" : "Home"}</a></li>
                <li><a href="/About.html">${lang==="zh" ? "关于" : "About"}</a></li>
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
                    formLanguage(Language)
                    
                    bindLanguageSelector()
                }
            )}
        }

window.onload=function(){
    
    navigationLang(Language)
    formLanguage(Language)
    navDisplay()

    bindLanguageSelector()
                
}