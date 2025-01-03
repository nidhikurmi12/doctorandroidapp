import { Observable } from '@nativescript/core';
import { QUICK_LINKS, HEALTH_TIPS } from '../shared/constants';
import { getUserName, formatDate } from '../shared/utils';

export function createViewModel() {
    const viewModel = new Observable();

    // Initialize properties
    viewModel.welcomeMessage = `Welcome, ${getUserName()}!`;
    viewModel.searchQuery = "";
    viewModel.quickLinks = QUICK_LINKS;
    viewModel.healthTips = HEALTH_TIPS;
    
    // Mock appointment data
    viewModel.appointmentDate = formatDate(new Date());
    viewModel.doctorName = "Dr. Smith";

    // Search handler
    viewModel.onSearch = () => {
        console.log(`Searching for: ${viewModel.searchQuery}`);
        // TODO: Implement search functionality
    };

    // Quick link tap handler
    viewModel.onQuickLinkTap = (args) => {
        const link = args.object.bindingContext;
        console.log(`Quick link tapped: ${link.title}`);
        // TODO: Implement navigation
    };

    return viewModel;
};