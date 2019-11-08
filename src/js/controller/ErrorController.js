import errorHtml from '../../views/errorpage/404.html'

class ErrorController{
    render(){
        console.log(1);
        $('#main-container').html(errorHtml)
    }
}
export default new ErrorController();