class Fetch{
    getPositionlist(params){
        let {name,pageNo,pageSize} = params;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:`/fetch/${name}.json?pageNo=${pageNo}&pageSize=${pageSize}`,
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
