'use strict';

hexo.extend.helper.register('total_word_count', function(posts){
  let total = 0;
  posts.forEach(function(post){
    total += strip_html(post.content).length;
  });
  return total;
});

// You might also need a strip_html helper if it's not built-in or provided by another plugin.
// For simplicity, assuming strip_html is available or will be handled.
// If not, you might need to implement it here or use a different approach for word count.
function strip_html(html) {
  return html.replace(/<[^>]*>/g, '');
}