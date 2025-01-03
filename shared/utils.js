import { alert } from '@nativescript/core/ui/dialogs';

export function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

export function getUserName() {
    return 'John';
}

export function showAlert(title, message) {
    return alert({
        title,
        message,
        okButtonText: "OK"
    });
}