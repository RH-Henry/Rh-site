var bandeon=true;
var modifsFrom = ['.bande','.title','.games'];
var modifsTo = ['bandemodif','titlemodif','current'];
function bandechange() {
    for (let i = 0; i < modifsFrom.length; i++) {
        try{
            const el = document.querySelector(modifsFrom[i]).classList
            if (bandeon) {
                el.add(modifsTo[i])
            } else {
                el.remove(modifsTo[i])
            }
        }
        catch(err) {
            
        }
    }
    bandeon = !bandeon
}


window.addEventListener('click', function(e){   
    if (document.querySelector('.bande').contains(e.target)){
        

    } else{
        for (let i = 0; i < modifsFrom.length; i++) {
            if (this.document.querySelector(modifsFrom[i])!==null){
            const el = document.querySelector(modifsFrom[i]).classList
            if (!bandeon) {
                el.remove(modifsTo[i])
                
            }}
            
}
bandeon=true}
  });