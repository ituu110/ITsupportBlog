// 新着記事を動的生成する関数
function renderArticles() {
    const articleList = document.querySelector(".article-list");
    if (!articleList) return;
  
    // 記事を新着順にソート
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    // HTML生成
    articleList.innerHTML = articles.map(article => `
      <li>
        <a href="https://ituu110.github.io/ITsupportBlog/${article.url}">
          ${article.title}
        </a>
      </li>
    `).join('');
  }
  
  // ページ読み込み後に実行
  document.addEventListener("DOMContentLoaded", renderArticles);
  