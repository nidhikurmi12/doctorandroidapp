export const MEDICINE_CATEGORIES = [
    {
        id: 'otc',
        title: 'Over-the-counter',
        icon: '💊',
        description: 'Medicines available without prescription'
    },
    {
        id: 'prescribed',
        title: 'Prescribed Medicines',
        icon: '📝',
        description: 'Medicines that require prescription'
    },
    {
        id: 'supplements',
        title: 'Supplements',
        icon: '🌿',
        description: 'Vitamins and supplements'
    }
];

export const SAMPLE_MEDICINES = {
    otc: [
        { id: 1, name: 'Paracetamol', price: '₹50', description: 'Pain reliever and fever reducer' },
        { id: 2, name: 'Antacid', price: '₹45', description: 'Relieves heartburn and indigestion' }
    ],
    prescribed: [
        { id: 3, name: 'Amoxicillin', price: '₹120', description: 'Antibiotic (Prescription required)' },
        { id: 4, name: 'Metformin', price: '₹80', description: 'Diabetes medication (Prescription required)' }
    ],
    supplements: [
        { id: 5, name: 'Vitamin D3', price: '₹200', description: 'Supports bone health' },
        { id: 6, name: 'Omega-3', price: '₹350', description: 'Heart and brain health supplement' }
    ]
};