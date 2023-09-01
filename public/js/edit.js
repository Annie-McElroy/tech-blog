// Update existing post

const updatePost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#update-post-title').value.trim();
    const text = document.querySelector('#update-post-context').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // When both exist, fetch to api to run post method
    if (title && text) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, text}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log(response)
        // If response is okay, refresh dashboard, if not give alert
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post!');
        };
    };
};

document
    .querySelector('#update-post')
    .addEventListener('submit', updatePost);
