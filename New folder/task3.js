
//Everything not credited is Miles
function displayQuestion(){
    
    // Jake
    h3 = document.getElementById("question")
    if(questions.length === usedQuestions.length){
        h3.innerText = "YOU ARE A LLH$ MILLIONAIRE!"
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
    //reset lfieline
    lifeLineUsed = false
    p = document.getElementById("incorrect")
    p.innerText = ``
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
        score += 200000
        //  Jake
        p = document.getElementById("score")
        p.innerText = `${score} LLH$`
    }
    else{
        // Jake + Mario + Cooper
        h3.innerText = "Lost"
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
function lifeline(btn){
    if(btn.value > 0 && !lifeLineUsed){
        lifeLineUsed = true
        btn.value =  btn.value -1
        btn.innerText = `Lifelines ${btn.value}`
        do{
            randomIndex = Math.floor(Math.random() * answers[questionIndex].length)
        }while(answers[questionIndex][randomIndex] === questions[questionIndex].answer)
        // Mario
        p = document.getElementById("incorrect")
        p.innerText = `${answers[questionIndex][randomIndex]} is not correct!`
    }
}
// cooper
questions = [
    {
        question: "How tall is Miles?",
        answer: "5ft. 5in."
    },
    // Jake
    {
        question: "How many pairs of shoes does Jake own?",
        answer: "5"
    },
    // Leo
    {
        question: "What's Leo's favorite day of the week?",
        answer: "Thursday"
    },
    // Cooper
    {
        question: "How many bucket hats does Cooper own?",
        answer: "3"
    },
    // Mario
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
lifeLineUsed = false
score = 0
questionIndex = -1
usedQuestions = []
displayQuestion()