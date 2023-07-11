function scuberGreetingForFeet(someNumber){
  let result 
  if (someNumber < 400) {
    result = `This one is on me!`
  }  else if (someNumber < 2000){
    result = `That will be twenty bucks.`
  } else if (someNumber > 2500){
    result = `No can do.`
  } else {
    result = `I will gladly take your thirty bucks.`
  }
  return result
}

function ternaryCheckCity(city){
  let result
  if (city === 'NYC') {
    result = 'Ok, sounds good.'
  } else {
    result = 'No go.'
  }
  return result
}

function switchOnCharmFromTip(tipAmt){
  let result
  if (tipAmt === 'generous') {
    result = 'Thank you so much.'
  } else if (tipAmt === 'not as generous') {
    result = 'Thank you.'
  } else {
    result = 'Bye.'
  }
  return result
}

