
//Everything not credited is Miles
function displayQuestion(){
    
    // Jake
    h3 = document.getElementById("question")
    if(questions.length === usedQuestions.length){
        h3.innerText = "Done"
        document.getElementById("answer1").remove()
        document.getElementById("answer1-label").remove()
        document.getElementById("answer2").remove()
        document.getElementById("answer2-label").remove()
        document.getElementById("answer3").remove()
        document.getElementById("answer3-label").remove()
        document.getElementById("answer4").remove()
        document.getElementById("answer4-label").remove()
        document.getElementById("submit").innerText = "Reset"
        return
    }
    do{
        randomIndex = Math.floor(Math.random() * questions.length)
    }while(!alreadyUsed(randomIndex) && questions.length != usedQuestions.length)
    
    // Leo
    h3.innerText = questions[randomIndex].question
    questionIndex = randomIndex
    usedQuestions.push(randomIndex)   
    displayAnswers(randomIndex)    
}
function displayAnswers(set){
    answerSlot = 1
    answerSet = answers[set]
    
    // Leo
    while(answerSlot <= 4)
    {
        randomIndex = Math.floor(Math.random() * answerSet.length)
        switch(answerSlot){
            case 1:
                input = document.getElementById("answer1")
                input.value = answerSet[randomIndex]
                // Mario
                label = document.getElementById("answer1-label")
                label.innerText = answerSet[randomIndex]
                //Slice Array
                firstHalf = answerSet.slice(0,randomIndex)
                secondHalf = answerSet.slice(randomIndex+1)
                answerSet = firstHalf.concat(secondHalf)
                
                break;
            case 2:
                input = document.getElementById("answer2")
                input.value = answerSet[randomIndex]
                // Mario
                label = document.getElementById("answer2-label")
                label.innerText = answerSet[randomIndex]
                //Slice Array
                firstHalf = answerSet.slice(0,randomIndex)
                secondHalf = answerSet.slice(randomIndex+1)
                answerSet = firstHalf.concat(secondHalf)
                
                break;
            case 3:
                input = document.getElementById("answer3")
                input.value = answerSet[randomIndex]
                // Mario
                label = document.getElementById("answer3-label")
                label.innerText = answerSet[randomIndex]
                //Slice Array
                firstHalf = answerSet.slice(0,randomIndex)
                secondHalf = answerSet.slice(randomIndex+1)
                answerSet = firstHalf.concat(secondHalf)
                
                break;
            case 4:
                input = document.getElementById("answer4")
                input.value = answerSet[randomIndex]
                // Mario
                label = document.getElementById("answer4-label")
                label.innerText = answerSet[randomIndex]
                //Slice Array
                firstHalf = answerSet.slice(0,randomIndex)
                secondHalf = answerSet.slice(randomIndex+1)
                answerSet = firstHalf.concat(secondHalf)
                
                break;
        }
        answerSlot++
    }
}
function submit(button){
    if(button.innerText === "Reset")
    {
        location.reload()
    }
    // Jake
    inputs = document.getElementsByTagName("input")
    console.log(inputs)
    userSelected = -1
    for(i = 0; i < inputs.length; i++){
        // Jake
        if(inputs[i].checked){
            userSelected = i
            break;
        }
    }
    if(userSelected === -1)
        return
    
    if(inputs[i].value === questions[questionIndex].answer){
        numberCorrect++
        //  Jake
        p = document.getElementById("score")
        p.innerText = numberCorrect
    }
    inputs[userSelected].checked = false
    displayQuestion()
}
function alreadyUsed(index){
    if(usedQuestions.length === 0)
        return true
    if(usedQuestions.includes(index))
        return false
    else
        return true
}
// cooper
questions = [
    {
        question: "How tall is Miles?",
        answer: "5ft. 5in."
    },
    {
        question: "How many pairs of shoes does Jake own?",
        answer: "5"
    },
    {
        question: "What's Leo's favorite day of the week?",
        answer: "Thursday"
    },
    {
        question: "How many bucket hats does Cooper own?",
        answer: "3"
    },
    {
        question: "What is Diego's real name?",
        answer: "Amaury"
    },
]
//everyone
answers = [
    [
        "5ft. 5in.",
        "4ft. 11in.",
        "5ft. 6in.",
        "5ft. 9in."
    ],
    [
        "5",
        "7",
        "11",
        "3"
    ],
    [
        "Thursday",
        "Friday",
        "Wednesday",
        "Tuesday"
    ],
    [
        "3",
        "2",
        "1",
        "5"
    ],
    [
        "Amaury",
        "Daniel",
        "Craig",
        "Mario"
    ],
]
numberCorrect = 0
questionIndex = -1
usedQuestions = []
displayQuestion()