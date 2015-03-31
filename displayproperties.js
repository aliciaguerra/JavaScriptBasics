function displayProperties(inputObject, inputObjectName){
var result=""

for(var eachProperty in inputObject){
result += inputObjectName + "." + eachProperty +
"=" + inputObject[eachProperty] + "<BR>"
}
return result
}
