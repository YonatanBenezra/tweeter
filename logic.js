// const tweeter = () => {
// let posts =[
//     {
//         text: "First post!",
//         id: "p1",
//         comments: [
//             { id: "c1", text: "First comment on first post!" },
//             { id: "c2", text: "Second comment on first post!!" },
//             { id: "c3", text: "Third comment on first post!!!" }
//         ]
//     },
//     {
//         text: "Aw man, I wanted to be first",
//         id: "p2",
//         comments: [
//             { id: "c4", text: "Don't wory second poster, you'll be first one day." },
//             { id: "c5", text: "Yeah, believe in yourself!" },
//             { id: "c6", text: "Haha second place what a joke." }
//         ]
//     }
// ]
// let postIdCounter = post[this].id
// let commentIdCounter = 0
// const getPosts = () => posts
// const addPost = (id,text) => {
//     posts[name] = id+=postIdCounter,
//     posts[text] = text,
//     posts[comments] = []
// }
// const removepost = (PostId) => posts.slice(PostId)
// return {
//     getPosts,
//     addPost,
//     removepost
// }

// // const addComment = (PostId, text) => (PostId.comments[commentIdCounter]).push({
// //     posts[text]: text,

// // })
// // }
// }
// const tweet=tweeter()
// tweet.addPost(2,'hey')


const Tweeter = () => {
    posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = 2
    let commentIdCounter = 6
    const getPosts = () => posts

    const addPost = (text) => {
        postIdCounter++
        posts.push(
            {
                text: text,
                id: "p" + postIdCounter,
                comments: []
            }
        )
    }
    const removePost = (postId) => {
        for (let i = 0; i < posts.length; i++) {
            if (postId === posts[i].id) {
                posts.splice(i, 1)
            }
        }
    }
    const addComment = (postId, text) => {
        commentIdCounter++
        for (let i = 0; i < posts.length; i++) {
            if (postId === posts[i].id) {
                console.log(posts[i])
                posts[i].comments.push(
                    {
                        id: "c" + commentIdCounter,
                        text: text
                    }
                )
            }
        }
    }

    const removeComment = (postId, commentID) => {
        for (let i = 0; i < posts.length; i++) {
            if (postId === posts[i].id) {
                for (x = 0; x < posts[i].comments.length; x++) {
                    if (commentID === posts[i].comments[x].id) {
                        posts[i].comments.splice(x, 1)
                    }
                }
            }
        }
    }
    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}