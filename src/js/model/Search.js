class Search {

    getPositionlist() {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: '/search/api/positionlist',
          type: 'GET',
          success(result) {
            resolve(result);
          },
          error(result) {
            reject(result);
          }
        })
      })
    }
  }
  
  export default new Search();