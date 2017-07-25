/**
 * Part 2
 * 
 * In this file, we're going to create some 
 * Functions to work with our data created in
 * data.js.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    var changed = name.toLowerCase();
 for (var i = 0; i < animals.length;i++){
        if(animals[i].name.toLowerCase() === changed){
            return animals[i];
        }
 }
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    var hold = search(animals, name);
    if (hold !== null){
       animals.splice(animals.indexOf(hold), 1, replacement);
        
    }
    
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    var lookup = search(animals,name);
    if (lookup !== null){
        animals.splice(animals.indexOf(lookup), 1);
    }
    
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    var check;
    var lookup = search(animals, animal.name);
    if (animal.name.length > 0 && animal.species.length > 0){
       check = true;
    }
    if (check && lookup === undefined){
        animals.push(animal);
    }
}




/** 
 * You did it! You're all done with Matchy!
 */
 
 
 
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search;
    module.exports.replace = replace;
    module.exports.remove = remove;
    module.exports.add = add;
}