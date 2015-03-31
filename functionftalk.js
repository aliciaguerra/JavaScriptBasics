function ftalk(kindOfPet){
if(kindOfPet=="dog") {
document.writeln("bow-wow!")
}
else{
if(kindOfPet=='cat'){
document.writeln("meow-meow-meow")
}
}
}
function pet(inputName, inputKind, inputColor){
this.name=inputName
this.kind=inputKind
this.color=inputColor
this.talk=ftalk(inputKind)
}
