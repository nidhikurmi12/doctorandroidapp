import { Observable } from '@nativescript/core';

// Dummy user data
const DUMMY_USERS = [
    {
        email: 'john@example.com',
        password: 'password123',
        name: 'John Doe',
        profileImage: '👤'
    },
    {
        email: 'jane@example.com',
        password: 'password123',
        name: 'Jane Smith',
        profileImage: '👤'
    }
];

class UserStore extends Observable {
    constructor() {
        super();
        this.currentUser = null;
        this.isAuthenticated = false;
    }

    login(email, password) {
        const user = DUMMY_USERS.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = { ...user };
            this.isAuthenticated = true;
            return true;
        }
        
        return false;
    }

    logout() {
        this.currentUser = null;
        this.isAuthenticated = false;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    isLoggedIn() {
        return this.isAuthenticated;
    }
}

// Create a singleton instance
export const userStore = new UserStore();