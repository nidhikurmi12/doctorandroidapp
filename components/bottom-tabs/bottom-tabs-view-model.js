import { Observable } from '@nativescript/core';
import { NAVIGATION_ITEMS } from '../../shared/navigation-items';
import { navigate } from '@nativescript/core/ui/frame';

export function createBottomTabsModel() {
    const viewModel = new Observable();
    
    viewModel.navigationItems = NAVIGATION_ITEMS;
    viewModel.currentTab = 'home';

    viewModel.onTabTap = (args) => {
        const tappedItem = args.object.bindingContext;
        viewModel.currentTab = tappedItem.id;
        
        navigate({
            moduleName: tappedItem.route,
            clearHistory: false
        });
    };

    return viewModel;
}