var ScrollToTopId = document.getElementById("alpha");

ScrollToTopId.addEventListener("click", Scrolltop);


function Scrolltop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


var ScrollToBottomId = document.getElementById("gamma");

ScrollToBottomId.addEventListener("click", ScrollBottom);

var ScrollToBottomToo = document.getElementById("delta");

ScrollToBottomToo.addEventListener("click", ScrollBottom);

function ScrollBottom(){
    document.body.scrollTop = 2000;
    document.documentElement.scrollTop = 2000;
}

var ScrollAboutMe = document.getElementById("beta");

ScrollAboutMe.addEventListener("click", ScrollToAboutMe);

function ScrollToAboutMe(){
    document.body.scrollTop = 610;
    document.documentElement.scrollTop = 610;
}


var MailButton = document.getElementById("eta");
MailButton.addEventListener("click", MailPresenter);

function MailPresenter(){
    if(MailButton.textContent == "Mail")
    {
        MailButton.textContent = "georghiob@protonmail.com";
    }
    else if(MailButton.textContent == "georghiob@protonmail.com")
    {
        MailButton.textContent = "Mail";
    }
}