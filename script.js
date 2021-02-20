const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav_links_wrapper');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
})

function submitAnswers() {
    var total = 6;
    var score = 0;

    // User input

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    
    //validation


    for(i = 1; i <=total; i++){
        if(eval("q"+i) == null || eval("q"+i) == ""){
            alert("You missed question " + i);
            return false;
        }
    }
    
    //check answers
    
    for(i = 1; i <=total; i++){
        if(eval("q"+i) == "1") {
            score++
        }
    }

    var results = document.getElementById("results");
    results.innerHTML = "<h3> Your score: "+score+"/"+total+"";

    return false
}
