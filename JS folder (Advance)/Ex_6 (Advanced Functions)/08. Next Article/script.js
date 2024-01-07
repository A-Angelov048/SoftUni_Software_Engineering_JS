function getArticleGenerator(articles) {

    const content = document.querySelector('#content');
    let firstEle = document.createTextNode(articles.shift());
    
    function showNext() {
        if (firstEle.textContent !== 'undefined') {
            let createArticle = document.createElement('article');
            createArticle.appendChild(firstEle);
            content.appendChild(createArticle);
        }
        firstEle = document.createTextNode(articles.shift())
    }
    return showNext
}
