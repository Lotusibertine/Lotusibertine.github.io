var posts=["posts/8df660ab.html","posts/7342d5b5.html","posts/140ab620.html","posts/dfb8a81f.html","posts/2ea8de7b.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};