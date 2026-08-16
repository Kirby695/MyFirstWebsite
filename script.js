function searchPage()  {
    let search=
document.getElementById("searchbox").value.toLowerCase().trim();

 if (search === "page1") {
        window.location.href = "pages/page1.html";
    }
 else if (search === "page2") {
        window.location.href = "pages/page2.html";
    }
}