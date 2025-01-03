import { Observable } from '@nativescript/core';
import { navigate } from '@nativescript/core/ui/frame';
import { userStore } from '../shared/stores/user-store';
import { showAlert } from '../shared/utils';

export function createViewModel() {
    const viewModel = new Observable();

    // Initialize properties
    viewModel.email = "";
    viewModel.password = "";
    viewModel.isLoading = false;

    // Login handler
    viewModel.onLogin = () => {
        // Basic validation
        if (!viewModel.email || !viewModel.password) {
            showAlert(
                "Validation Error", 
                "Please enter both email and password"
            );
            return;
        }

        viewModel.set('isLoading', true);

        // Simulate network delay
        setTimeout(() => {
            const success = userStore.login(viewModel.email, viewModel.password);
            
            if (success) {
                // Navigate to main layout (which includes home page and bottom tabs)
                navigate({
                    moduleName: "shared/layouts/main-layout",
                    clearHistory: true
                });
            } else {
                showAlert(
                    "Login Failed", 
                    "Invalid email or password. Try using:\nEmail: john@example.com\nPassword: password123"
                );
            }
            
            viewModel.set('isLoading', false);
        }, 1000);
    };

    // Forgot password handler
    viewModel.onForgotPassword = () => {
        showAlert(
            "Forgot Password", 
            "This is a demo app. Use:\nEmail: john@example.com\nPassword: password123"
        );
    };

    // Register handler
    viewModel.onRegister = () => {
        showAlert(
            "Register", 
            "This is a demo app. Use:\nEmail: john@example.com\nPassword: password123"
        );
    };

    return viewModel;
}