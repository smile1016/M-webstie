// import Searchhtml from '../../views/search/search.html';

// class SearchController{
//     render(){
//         $('#main-container').html(Searchhtml)
//     }

// }
// export default new SearchController();

import searchHtml from '../../views/search/search.html';
import itemHtml from '../../views/position/positionlist-item.html'
import search from '../model/Search.js';

class SearchController {
    constructor(){

        
        
    }
    async render() {
        $("#main-container").html(searchHtml);
        $('.search-btn').on('click',await this.getlist())
        // $('.search-btn').on('click',this.clickHandler)
    }
    
    getlist() {
        console.log(11)
        // return new Promise(async (reslove, reject) => {
        //     let rs = await search.getPositionlist();
        //     // this.total = rs.content.data.page.totalCOntent;
        //     // this.datalist = this.datalist.concat(rs.result)
        //     let html = template.render(itemHtml, {
        //         list: rs
        //     })
        //     $("#list-container").html(html)
        //     reslove();
        // })
    }
}

export default new SearchController();