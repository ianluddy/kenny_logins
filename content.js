if (document.title == "The Document Title We Are Interested In" ){
    document.getElementsByTagName("input.username")[1].value = "username";
    document.getElementsByTagName("input.password")[0].value = "password";
    document.getElementsByTagName("input.login")[2].click();
}