import { Observable } from '@nativescript/core';
import { LAB_TESTS, NEARBY_LABS } from '../shared/lab-constants';

export function createViewModel() {
    const viewModel = new Observable();
    
    // Initialize properties
    viewModel.searchQuery = "";
    viewModel.popularTests = LAB_TESTS.filter(test => test.isPopular);
    viewModel.essentialTests = LAB_TESTS.filter(test => test.isEssential);
    viewModel.nearbyLabs = NEARBY_LABS;
    
    // Search handler
    viewModel.onSearch = () => {
        console.log(`Searching for tests: ${viewModel.searchQuery}`);
        // TODO: Implement test search
    };
    
    // Book test handler
    viewModel.onBookTest = (args) => {
        const test = args.object.bindingContext;
        console.log(`Booking test: ${test.name}`);
        // TODO: Navigate to test booking page
    };
    
    // Lab selection handler
    viewModel.onSelectLab = (args) => {
        const lab = args.object.bindingContext;
        console.log(`Selected lab: ${lab.name}`);
        // TODO: Navigate to lab details page
    };
    
    return viewModel;
}