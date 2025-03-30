export const formatDate = (dateString) => {
    const dateFormatter = new Intl.DateTimeFormat('en-US', { 
        weekday: 'long',  // "Monday"
        year: 'numeric',  // "2024"
        month: 'long',    // "March"
        day: 'numeric'    // "28"
    });

    return dateFormatter.format(new Date(dateString));
};
