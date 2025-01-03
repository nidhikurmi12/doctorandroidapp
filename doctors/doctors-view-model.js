import { Observable } from '@nativescript/core';
import { DOCTOR_SPECIALTIES, CONSULTATION_TYPES, SAMPLE_DOCTORS } from '../shared/doctor-constants';

export function createViewModel() {
    const viewModel = new Observable();
    
    // Initialize properties
    viewModel.searchQuery = "";
    viewModel.specialties = DOCTOR_SPECIALTIES;
    viewModel.consultationTypes = CONSULTATION_TYPES;
    viewModel.doctors = SAMPLE_DOCTORS;
    viewModel.selectedSpecialty = null;
    viewModel.selectedConsultationType = null;
    
    // Search handler
    viewModel.onSearch = () => {
        console.log(`Searching for doctors: ${viewModel.searchQuery}`);
        // TODO: Implement doctor search
    };
    
    // Specialty selection handler
    viewModel.onSpecialtySelect = (args) => {
        const specialty = args.object.bindingContext;
        viewModel.set('selectedSpecialty', specialty.id);
        console.log(`Selected specialty: ${specialty.name}`);
        // TODO: Filter doctors by specialty
    };
    
    // Consultation type selection handler
    viewModel.onConsultationTypeSelect = (args) => {
        const type = args.object.bindingContext;
        viewModel.set('selectedConsultationType', type.id);
        console.log(`Selected consultation type: ${type.name}`);
        // TODO: Filter doctors by consultation type
    };
    
    // Book appointment handler
    viewModel.onBookAppointment = (args) => {
        const doctor = args.object.bindingContext;
        console.log(`Booking appointment with: ${doctor.name}`);
        // TODO: Navigate to appointment booking page
    };
    
    return viewModel;
}