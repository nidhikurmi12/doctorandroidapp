import { Observable } from '@nativescript/core';
import { MEDICINE_CATEGORIES } from '../shared/medicine-constants';

export function createViewModel() {
    const viewModel = new Observable();
    
    // Initialize properties
    viewModel.searchQuery = "";
    viewModel.categories = MEDICINE_CATEGORIES;
    viewModel.selectedCategory = 'otc';
    
    // Search handler
    viewModel.onSearch = () => {
        console.log(`Searching for medicine: ${viewModel.searchQuery}`);
        // TODO: Implement medicine search
    };
    
    // Category selection handler
    viewModel.onCategorySelect = (args) => {
        const category = args.object.bindingContext;
        viewModel.set('selectedCategory', category.id);
        console.log(`Selected category: ${category.title}`);
        // TODO: Update medicine list based on category
    };
    
    // Prescription upload handler
    viewModel.onUploadPrescription = () => {
        console.log('Upload prescription tapped');
        // TODO: Implement prescription upload
    };
    
    return viewModel;
}