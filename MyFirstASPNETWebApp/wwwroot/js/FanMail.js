////$("#btnsend").addEventListener("click", function () {
////    alert("From: " + $("#txtFrom").value +
////        ", Subject: " + $("#txtSubject").value +
////        ", Message: " + $("#txtMessage").value);
////})

$("#btnsend").click(function () {
    alert("From: " + $("#txtFrom").val() +
        ", Subject: " + $("#txtSubject").val() +
        ", Message: " + $("#txtMessage").val());

    $("#picGand").fadeOut("slow");
})