import Router from './router/Router.js'
class Index{
    constructor(){
        this.initEvent();
        location.hash = '#position'
    }
    initEvent(){
        $("#index_nav li").on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            let hash = $(this).attr('data-hash');
            // location.hash = hash;
            Router.go(hash)
        })
    }
}
new Index()