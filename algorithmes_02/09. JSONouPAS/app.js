function JSONtest(obj) {
    try {
        JSON.parse(obj);
        return true;
    } catch (e) {
        return false;
    }
}

console.log(JSONtest('{"name":"Adam","age":20}'));
console.log(JSONtest('{"name":"Adam",age:"20"}'));



// -----------------  Énoncé ------------------- //

// Créez un programme qui sert à détecter si l'agument est bien du JSON valide ou non.
// Renvoyez true si ça l'est, false si ça ne l'est pas.
// -----------------  Conseils ------------------- //


// try catch
// JSON.parse()






