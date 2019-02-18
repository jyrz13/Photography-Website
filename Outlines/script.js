function loadDefault() 
{
    $("#content-wrapper").load("pages/default.html");
    $(".nav-opt").removeClass("active"); 
    $("#nav-default").addClass("active"); 
}

function loadPictures() 
{
    $("#content-wrapper").load("pages/pictures.html");
    $(".nav-opt").removeClass("active");
    $("#nav-pictures").addClass("active");
}

function loadContact() 
{
    $("#content-wrapper").load("pages/contact.html");
    $(".nav-opt").removeClass("active");
    $("#nav-contact").addClass("active");
}

function loadContact2() 
{
    $("#content-wrapper").load("pages/contact2.html");
    $(".nav-opt").removeClass("active");
    $("#nav-contact2").addClass("active");
}

