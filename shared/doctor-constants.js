export const DOCTOR_SPECIALTIES = [
    { id: 'general', name: 'General Physician', icon: '👨‍⚕️' },
    { id: 'cardio', name: 'Cardiologist', icon: '❤️' },
    { id: 'dental', name: 'Dentist', icon: '🦷' },
    { id: 'pediatric', name: 'Pediatrician', icon: '👶' },
    { id: 'ortho', name: 'Orthopedic', icon: '🦴' },
    { id: 'derma', name: 'Dermatologist', icon: '🧬' }
];

export const CONSULTATION_TYPES = [
    { id: 'video', name: 'Video Call', icon: '📹' },
    { id: 'audio', name: 'Audio Call', icon: '📞' },
    { id: 'clinic', name: 'Clinic Visit', icon: '🏥' }
];

export const SAMPLE_DOCTORS = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialty: 'General Physician',
        experience: '15 years',
        rating: 4.8,
        reviews: 234,
        consultationFee: '₹500',
        availability: 'Available Today',
        image: '👩‍⚕️',
        location: 'Central Hospital',
        distance: '2.5 km',
        consultationTypes: ['video', 'audio', 'clinic']
    },
    {
        id: 2,
        name: 'Dr. Michael Chen',
        specialty: 'Cardiologist',
        experience: '20 years',
        rating: 4.9,
        reviews: 456,
        consultationFee: '₹1000',
        availability: 'Next Available: Tomorrow',
        image: '👨‍⚕️',
        location: 'Heart Care Center',
        distance: '3.2 km',
        consultationTypes: ['video', 'clinic']
    }
];