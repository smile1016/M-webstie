class Datail{
    constructor(){
        console.log('detail:'+location.search.replace('?',''))
    }
}

export default new Datail()