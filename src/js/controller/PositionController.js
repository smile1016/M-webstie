import Positionhtml from '../../views/position/positionlist.html';
import itemHtml from '../../views/position/positionlist-item.html'
import fetch from '../model/Fetch.js';
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import PullUp from '@better-scroll/pull-up'
BScroll.use(PullDown)
BScroll.use(PullUp)

class PositionController {
  constructor() {
    this.name = 'listmore'
    this.pageNo = 1;
    this.pageSize = 15;
    this.datalist = [];
    this.total = 0;
    this.initEvent()
  }
  getlist() {
    return new Promise(async (reslove, reject) => {
      $("#loading").show();
      let rs = await fetch.getPositionlist({
        name:this.name,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      });
      this.total = rs.content.data.page.totalCOntent;
      this.datalist = this.datalist.concat(rs.content.data.page.result)
      let html = template.render(itemHtml, {
        list: this.datalist
      })
      $("#list-container").html(html)
      $("#loading").hide();

      reslove();
    })
  }

  async render() {
    $("#main-container").html(Positionhtml)
    var $head = $("#main-container .head");
    await this.getlist();

    this.scroll = new BScroll('#position-wrapper', {
      scrollY: true,
      click: true,
      probeType: 3,
      pullUpLoad: true,
      pullDownRefresh: {
        threshold: 50
      }
    })
    // 下拉刷新
    this.scroll.on('pullingDown', async () => {
      console.log('pullingDown')
      await this.getlist()
      this.scroll.finishPullDown()
    })

    // 上拉加载更多
    this.scroll.on('pullingUp', async () => {
      this.pageNo++;
      console.log('pullingup')
      await this.getlist()
      this.scroll.finishPullUp()
      this.scroll.refresh()
      if (this.datalist.length === this.total) {
        $("#main-container .foot").hide()
        alert('finish')
      }
    })

    this.scroll.on('scroll', function () {
      // console.log(this.y)
      if (this.y > 10 && this.y < 50) {
        $head.show();
      } else if (this.y > 50) {
        $head.find('img').attr('src', './images/loading.gif');
      } else {
        $head.hide();
      }
    })

  }

  initEvent() {
    $('#main-container').on('click','.item', function(){
      let id = $(this).attr('data-id');
      console.log(id)
      location.href = './detail.html?'+id;
    })
  }
}

export default new PositionController();