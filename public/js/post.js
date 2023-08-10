// Posting a new post
const newPost = async (event) => {
    event.preventDefault();

    // Grab inputted title and content
    const title = document.querySelector('').value.trim;
    const content = document.querySelector('').value.trim;

    // When both exist, fetch to api to run post method
    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // If response is okay, refresh dashboard, if not give alert
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post!');
        };
    };
};

// Update existing post

const updatePost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('').value;
    const content = document.querySelector('').value;

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // When both exist, fetch to api to run post method
    if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // If response is okay, refresh dashboard, if not give alert
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post!');
        };
    };
}

