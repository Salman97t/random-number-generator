const generateRandomnum=(num)=>{

return  Math.floor(Math.random()*num);
}
const movietester={
    fanOf:['Anime','Horror movies','Adventure movies','Action movies'],
    taste:['Awesome','good','Terrible','Voilant'],
    watch:['OnePiece','Dragon Ball Z','Saw I-X','LOTR','Expendables']
}
let suggestion=[];
for(let movies in movietester){
    let suggester = generateRandomnum(movietester[movies].length)
    if(movies=='fanOf'){
        suggestion.push(`You are ${movietester[movies][suggester]} fan.`)
    }
    else if(movies=='taste'){
        suggestion.push(`You have a ${movietester[movies][suggester]} in watching.`)
    }
    else if(movies=='watch'){
        suggestion.push(`You should watch ${movietester[movies][suggester]} .`)
    }
    else{
        suggestion.push('Not enough data provided.')
    }
}
function formateSuggestion(){
    const formatted= suggestion.join('\n')
    console.log(formatted);
}
formateSuggestion(movietester);