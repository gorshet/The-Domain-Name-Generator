window.onload = () => {
var pronoun=['The','Our','My','Your','His'];
var adj=['great','amazing','awesome','wonderful','good'];
var noun=['jogger','racoon','cat','dog','guy'];
let result="";
for (let i = 0; i < pronoun.length; i++) {
for (let j = 0; j < adj.length; j++) {
for (let k = 0; k < noun.length; k++) {
console.log(pronoun[i]+adj[j]+noun[k]+ ".com");
result+= pronoun[i]+adj[j]+noun[k]+ ".com"+ "</br>";
document.querySelector("#domain").innerHTML=result;
}
}
}
}