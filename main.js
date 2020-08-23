const tweeter = Tweeter()
const renderer = Renderer()
let render = function () { renderer.renderPosts(tweeter.getPosts()) }

const post = function () {
    const inpval = $("#input").val()
    tweeter.addPost(inpval)
    render()
}

$("#posts").on('click', '.delete', function () {
    const postid = $(this).closest(".post").data().id
    tweeter.removePost(postid)
    render()
})

$("#container").on("click", '.addcomment', function () {
    const text = $(this).closest(".post").find(".commentinput").val()
    const postid = $(this).closest(".post").data().id
    tweeter.addComment(postid,text)
    render()
})

$("#container").on("click", '.delete-comment', function () {
    const commentid = $(this).closest(".comment").attr("id")
    const postid = $(this).closest(".post").data().id
    tweeter.removeComment(postid, commentid)
    render()
})









render()