
   function objectValues(data){
       return Object.values(data);
           }

    function keysToString(data){
        return Object.keys(data).join(' ');
    }
    
    function valuesToString(data){
        // first attempt:
        // var tempArray = [];
        // for (var keys in data){
        //     if (typeof data[keys] === 'string'){
        //         tempArray.push(data[keys]);
        //     }
        // }
        // return tempArray.join(' ');
        return Object.values(data).filter(function(a){return typeof a === 'string';}).join(' ');
    }
    
    function arrayOrObject(input){
        if (Array.isArray(input)){
            return 'array';
        } else if (typeof input === "object"){
            return 'object';
        }
    }
    
     function capitalizeWord(word){
        return word[0].toUpperCase() + word.slice(1, word.length);
    }
    
    function capitalizeAllWords(words){
        var arr = words.split(' ');
        var final = arr.map(function(a){return a[0].toUpperCase() + a.slice(1, a.length);});
        return final.join(" ");
    }
    
    function welcomeMessage(objectInput){
        var fixed = capitalizeWord(objectInput.name);
        return 'Welcome ' + fixed + '!';
    }
    
    function profileInfo(profile){
        return capitalizeWord(profile.name) + ' is a ' + capitalizeWord(profile.species);
    }
    
    function maybeNoises(profile){
        if (profile.hasOwnProperty('noises') && Array.isArray(profile.noises) && profile.noises.length > 0){
            return profile.noises.join(' ');
        }
        return 'there are no noises';
    }
    
    function hasWord(wordPile, word){
        return (wordPile.search(word) > -1);
    }
    
    function addFriend(name, object){
        object.friends.push(name);
        return object;
    }
    
    function isFriend(name, object){
        if(object.hasOwnProperty('friends') && object.friends.includes(name)){
            return true;
        }
        return false;
    }
    
    function nonFriends(name, list){
        var arr = [];
        list.map(function(a){
            if (!isFriend(name, a) && a.name !== name){
                arr.push(a.name);
            }});
        return arr;    
        }
        
     function updateObject(obj, key, value){
        obj[key] = value;
        return obj;
     }
     
     function removeProperties(obj, stringArr){
         for (var key in obj){
             if (stringArr.includes(key) || stringArr.includes(obj[key])){
                 delete obj[key];
             }
         }
         return obj;
     }
     
     function dedup(arr){
         var tempArr = [];
         arr.map(function(a){
             if (!tempArr.includes(a)){
                 tempArr.push(a);
             }
         });
         return tempArr;
     }