// Mock user database
const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

export const mockLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                // Create a mock token
                const token = btoa(JSON.stringify({
                    username: user.username,
                    role: user.role,
                    exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours from now
                }));

                resolve({
                    token,
                    user: {
                        username: user.username,
                        role: user.role
                    }
                });
            } else {
                reject(new Error('Invalid username or password'));
            }
        }, 500); // 500ms delay to simulate network
    });
};
