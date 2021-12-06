export async function verifyLogin({ email, password }) {
    return new Promise((resolve, reject) => {
        const { email: savedEmail, password: savedPassword } = JSON.parse(localStorage.getItem('gallery'));
        console.log(savedEmail, email, password, savedPassword);
        setTimeout(() => {
            if (email === savedEmail && password === savedPassword) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}