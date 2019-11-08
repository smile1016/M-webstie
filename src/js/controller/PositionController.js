import Positionhtml from '../../views/position/positionlist.html';
import itemHtml from '../../views/position/positionlist-item.html'
import fetch from '../model/Fetch.js'
class PositionController{
    async render(){
        $('#main-container').html(Positionhtml);
        $('#loading').show();
        let rs =await fetch.getPositionlist();
        let html = template.render(itemHtml,{list:rs.content.data.page.result})
        $('#list-container').html(html);
        $('#loading').hide();
    }
}

export default new PositionController();