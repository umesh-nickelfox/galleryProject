export async function verifyLogin({ email, password }) {
    return new Promise((resolve, reject) => {
        const authUsers = JSON.parse(localStorage.getItem('galleryUsers'));
        setTimeout(() => {
            const user = authUsers?.find(({ email: savedEmail }) => savedEmail === email);
            if (email === user?.email && password === user?.password) {
                localStorage.setItem("gallery", JSON.stringify({ email, password }));
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}