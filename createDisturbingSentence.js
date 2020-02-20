class UpLowCaseSentence{
    constructor(){

    }
    MessUpString(myString){
        let dummy = new Array();
        let boolArray = new Array();
        boolArray.length = myString.length;
        let retString = '';
        while(true){
            let i = Math.floor(Math.random() * Math.floor(myString.length));
            let myBool = Math.floor(Math.random() * Math.floor(2));
            
            if(boolArray[i] != 'true'){
                if(myBool == 1){
                    dummy[i] = myString[i].toLocaleUpperCase();
                    boolArray[i] = 'true';
                }else{
                    dummy[i] = myString[i].toLocaleLowerCase();
                    boolArray[i] = 'true';
                }
            }
            if(boolArray.filter(x => x == 'true').length == myString.length){
                break;
            }
        }
        for(let d of dummy){
            retString += d;
        }
        return retString;
    }

    convertMessage(sentence){
        let messageArray = sentence.split(' ');
        let messedUpSentence = '';
        for(let m of messageArray){
            const retValue = this.MessUpString(m);
            messedUpSentence += retValue + ' ';
        }
        return messedUpSentence;
    }
}