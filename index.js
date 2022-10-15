document.getElementById("alpha").addEventListener("click", Scrolltop);


function Scrolltop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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