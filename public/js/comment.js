const showCommentFormBtn = document.querySelector('#show-comment-form');
const submitCommentBtn = document.querySelector('#submit-comment');

const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentText = document.querySelector('#comment-text').value.trim();

    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log(postId);

    if (commentText) {
        const response = await fetch (`/api/comments`,
        {
            method: 'POST',
            body: JSON.stringify({ commentText}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment');
        }
    }
};


document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);