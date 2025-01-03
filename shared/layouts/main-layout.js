import { Observable } from '@nativescript/core';
import { createBottomTabsModel } from '../../components/bottom-tabs/bottom-tabs-view-model';

export function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = new Observable();
    
    // Set initial page
    viewModel.currentPage = 'home/home-page';
    
    // Initialize bottom tabs
    const bottomTabsModel = createBottomTabsModel();
    page.bindingContext = viewModel;
    
    // Find bottom tabs component and set its binding context
    const bottomTabs = page.getViewById('bottomTabs');
    if (bottomTabs) {
        bottomTabs.bindingContext = bottomTabsModel;
    }
}