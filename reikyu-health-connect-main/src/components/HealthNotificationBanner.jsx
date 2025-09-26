import React, { useState, useEffect } from 'react';

// === 1. HEALTH DATA + LESSONS (SIMPLIFIED DATABASE) ===
// Month is 0-indexed (0=Jan, 1=Feb, ..., 11=Dec)
const HEALTH_DAYS_DATA = {
    // We only need the date, the name, and the educational lesson
    "1-4": { 
        name: "World Cancer Day", 
        lesson: "Prevention is key! Adopting a healthy diet, exercising, and avoiding tobacco can significantly reduce your cancer risk." 
    },
    "2-24": { 
        name: "World Tuberculosis Day", 
        lesson: "TB is curable. If you have a persistent cough (over 2 weeks) or fever, get tested immediately to stop the spread." 
    },
    "3-7": { 
        name: "World Health Day (Major)", 
        lesson: "Health For All: Universal healthcare ensures everyone has access to quality services without financial hardship." 
    },
    "4-31": { 
        name: "World No Tobacco Day (Major)", 
        lesson: "Smoking kills. Quitting tobacco is the single best action you can take for your health. Your body starts healing instantly!" 
    },
    "5-14": { 
        name: "World Blood Donor Day", 
        lesson: "🩸 Be a lifesaver! Donating blood is safe and essential. One donation can save up to three lives. Find a donation center today." 
    },
    "8-10": { 
        name: "World Suicide Prevention Day", 
        lesson: "If you're struggling, talk to someone. Support is available. Simple acts of compassion and support can often prevent a tragedy." 
    },
    "9-10": { 
        name: "World Mental Health Day (Major)", 
        lesson: "🧠 Your mind matters. Check in with loved ones and yourself. Mental health is just as vital as physical health. Seek professional help when needed." 
    },
    "10-14": { 
        name: "World Diabetes Day (Major)", 
        lesson: "Know your risk. Diabetes is manageable through diet, exercise, and regular monitoring. Early diagnosis prevents serious complications." 
    },
    "11-1": { 
        name: "World AIDS Day (Major)", 
        lesson: "Get tested. Modern treatments allow people with HIV to live long, healthy lives and prevent transmission. Let's end the stigma." 
    },
    // Add more days using the format: "MonthIndex-DayNumber": { ... }
};

// Component Start
const HealthNotificationBanner = () => {
    // State 1: Holds the event data or null (to check if today is a special day)
    const [todayEvent, setTodayEvent] = useState(null);
    // State 2: Controls if the banner is currently visible (allows user to dismiss it)
    const [isVisible, setIsVisible] = useState(true); 

    // === 2. THE LOGIC (Runs when the component loads) ===
    useEffect(() => {
        const today = new Date();
        const month = today.getMonth(); // 0-11
        const day = today.getDate();   // 1-31
        
        const dateKey = `${month}-${day}`;
        const eventData = HEALTH_DAYS_DATA[dateKey];
        
        if (eventData) {
            setTodayEvent(eventData);
            // Optionally set IsVisible to true here, though it's true by default.
        }
    }, []); 

    // If no event is found OR the user clicked the close button, stop rendering.
    if (!todayEvent || !isVisible) {
        return null; 
    }

    const { name, lesson } = todayEvent;

    // --- VISUAL STYLING ---
    const bannerStyle = { 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 9999, // Makes it appear over everything else
        transition: 'transform 0.3s ease-in-out',
        // Simple visual check for the slide-in/out effect
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' 
    };

    return (
        // === 3. THE UI (LOOK) ===
        <div 
            style={bannerStyle}
            // Tailwind classes for color, padding, layout
            className="bg-green-600 text-white shadow-xl p-3 sm:p-4 flex items-center justify-between"
        >
            <div className="flex-grow text-left">
                <p className="font-bold text-lg leading-tight">
                    <span role="img" aria-label="bell">🔔</span> Today is {name}!
                </p>
                <p className="text-sm font-medium opacity-90 mt-1">
                    {lesson}
                </p>
            </div>
            
            {/* Close button */}
            <button
                className="ml-4 flex-shrink-0 text-white hover:text-gray-200"
                onClick={() => setIsVisible(false)} // Hides the banner
                aria-label="Close Notification"
            >
                <span className="text-2xl font-light">&times;</span>
            </button>
        </div>
    );
};

export default HealthNotificationBanner;