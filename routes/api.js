/**
 * Created by David on 2015-02-02.
 */
module.exports = function(app){
    app.get('/posts/new',function (req, res) {
            res.render('./views/admin/newpost');
        });
    app.post('/posts/new',function (req, res) {
            var newPost = new BlogPost();
            newPost.title = req.body.title;
            newPost.content = req.body.content;
            newPost.save(function (err) {
                if (err)
                    res.send(err);
                else
                    console.log("Success! New post created!");
            })
        });

    app.get('/posts/:post_id',function (req, res) {
            var post = BlogPost.find().where('_id').equals(req.params.post_id);
        });
}