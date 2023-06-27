var captchaText = document.querySelector('.captcha-text');
var reloadBtn = document.querySelector('.reload-btn');
var inputCaptcha = document.querySelector('.input-captcha');
var checkBtn = document.querySelector('.check-btn');
var captchaMsg = document.querySelector('.captcha-msg');

const allCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0];

const getCaptcha = ()=>{
    for(var i = 0; i < 6; i++){
        var randomChar = allCharacters[Math.floor(Math.random()*allCharacters.length)];
        captchaText.innerHTML += `${randomChar}`;
    }
}
getCaptcha();

//reload btn
reloadBtn.addEventListener('click',()=>{
    inputCaptcha.value = "";
    captchaText.innerHTML = "";
    captchaMsg.innerHTML = "";
    getCaptcha();
});
checkBtn.addEventListener('click',()=>{
    if(inputCaptcha.value == captchaText.innerHTML){
        message('success','Captcha is matched.');
    }else if(inputCaptcha.value == ''){
        message('failed','Please enter the captcha.');
    }else{
        message('failed','Captcha is not matched.');
    }
});

//auto update
const autoUpdate = ()=>{
    setInterval(()=>{
        inputCaptcha.value = "";
        captchaText.innerHTML = "";
        captchaMsg.innerHTML = "";
        getCaptcha();
    },20000);
}
autoUpdate();

//message 
const message = (status,txt)=>{
    var status = status;
    var txt = txt;
    captchaMsg.innerHTML = txt;

    if(status=='success'){
        captchaMsg.style.color = 'green';
    }else if(status=='failed'){
        captchaMsg.style.color = 'red';
    }
}



