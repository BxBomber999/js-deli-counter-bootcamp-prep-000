var katzDeli = [];
var katzDeliLine = [];

function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(){
  if(katzDeliLine.length > 0){
    var serving = katzDeliLine.shift()
    return `Currently serving ${serving}`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine() {
  if(katzDeliLine.length > 0){
    var output = "The line is currently:"
    for(var i = 0; i <= katzDeliLine.length; i++){
      if(i === katzDeliLine.length){
        return output += ` ${i+1}. ${katzDeliLine[i]}`
      }
      output += ` ${i+1}. ${katzDeliLine[i]},`;
    }
  } else {
    return "The line is currently empty."
  }
}
