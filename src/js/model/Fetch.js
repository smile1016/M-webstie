class Fetch{
    getPositionlist(){
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/fetch/listmore.json?pageNo=1&pageSize=15',
                type:'GET',
                success(result){
                    resolve(result) ;
                },error(result){
                    reject(result);
                }
            })  
        }) 
    }
}
export default new Fetch();
