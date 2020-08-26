const Renderer = () => {
    const renderPosts = (posts) => {
        $("#posts").empty()
        for (let post of posts) {
            const postN = $(`<div class="post" data-id="${post.id}"></div>`)
            postN.append(`<p><button class="delete">x</button>${post.text}</p>`)
            for (let comment of post.comments) {
                postN.append(`<p id=${comment.id} class ="comment"><button class="delete-comment">x</button>${comment.text}</p>`)

            }
            const acd = $(`<div class = "addcommentdiv"></div>`)
            postN.append(`<input type="text" placeholder="What's on your mind?" class="commentinput"><button class="addcomment">Comment</button>`)
            $("#posts").append(postN)
        }
    }
    return {
        renderPosts
    }
}