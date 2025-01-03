import { Observable } from '@nativescript/core';
import { ACCOUNT_MENU_ITEMS } from '../shared/account-constants';

export function createViewModel() {
    const viewModel = new Observable();
    
    // Profile data
    viewModel.userProfile = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        profileImage: '👤' // Placeholder for actual image
    };
    
    viewModel.menuItems = ACCOUNT_MENU_ITEMS;
    
    // Menu item tap handler
    viewModel.onMenuItemTap = (args) => {
        const menuItem = args.object.bindingContext;
        console.log(`Navigating to: ${menuItem.title}`);
        // TODO: Implement navigation to respective pages
    };
    
    return viewModel;
}