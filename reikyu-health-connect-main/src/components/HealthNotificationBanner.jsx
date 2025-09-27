// src/HealthNotificationBanner.jsx - EXPANDED DATASET

import React, { useState, useEffect } from 'react';

// === 1. HEALTH DAYS DATA (Your Expanded Calendar Database) ===
// Format: "MonthIndex-DayNumber": { name: "Event Name", lesson: "Motivational/Educational Fact/Lesson" }
// Month is 0-indexed (0=Jan, 1=Feb, ..., 11=Dec)
const HEALTH_DAYS_DATA = {
    // JANUARY (0)
    "0-4": { name: "World Braille Day", lesson: "Promoting human rights and fundamental freedoms for persons who are blind or visually impaired. Accessibility matters!" },
    "0-12": { name: "National Youth Day (India)", lesson: "Focusing on youth health, mental fitness, and promoting positive life habits based on Swami Vivekananda's principles." },
    "0-30": { name: "World Neglected Tropical Diseases Day", lesson: "Protecting vulnerable populations from infectious diseases like leprosy and rabies. Early diagnosis saves lives." },

    // FEBRUARY (1)
    "1-4": { name: "World Cancer Day", lesson: "Prevention is key! Adopting a healthy diet, exercising, and avoiding tobacco can significantly reduce your cancer risk. 🥗" },
    "1-10": { name: "National Deworming Day (India)", lesson: "Preventing parasitic worm infections in children is vital for nutrition and cognitive development." },
    "1-15": { name: "International Childhood Cancer Day", lesson: "Raising awareness for the unique challenges faced by children and adolescents with cancer." },
    "1-28": { name: "National Science Day (India) - Health Focus", lesson: "Celebrating innovations in healthcare and diagnostics that improve public wellbeing." },
    
    // MARCH (2)
    "2-3": { name: "World Hearing Day", lesson: "Ear and hearing care is essential across all life stages. Action is needed to prevent hearing loss." },
    "2-8": { name: "International Women's Day (Health Focus)", lesson: "Championing women's health access, reproductive rights, and gender equality in healthcare leadership." },
    "2-14": { name: "World Kidney Day", lesson: "Are your kidneys okay? Check your kidney health and reduce risks by managing blood pressure and diabetes." },
    "2-20": { name: "World Oral Health Day", lesson: "Healthy mouth, healthy body! Good oral hygiene prevents serious diseases. Brush twice a day." },
    "2-21": { name: "World Down Syndrome Day", lesson: "Promoting inclusion and the rights of people with Down syndrome to ensure full participation in society." },
    "2-24": { name: "World Tuberculosis Day", lesson: "TB is curable. If you have a persistent cough (over 2 weeks) or fever, get tested immediately to stop the spread." },
    
    // APRIL (3)
    "3-2": { name: "World Autism Awareness Day", lesson: "Promoting understanding and acceptance of people with autism to support their full realization of human rights." },
    "3-7": { name: "World Health Day (Major)", lesson: "Health For All: Universal healthcare ensures everyone has access to quality services without financial hardship." },
    "3-11": { name: "National Safe Motherhood Day (India)", lesson: "Focus on proper ante-natal and post-natal care to reduce maternal and infant mortality." },
    "3-14": { name: "World Chagas Disease Day", lesson: "Raising visibility and resources to prevent, control, and eliminate Chagas disease." },
    "3-17": { name: "World Hemophilia Day", lesson: "Promoting awareness and better diagnosis and access to care for people with hemophilia and other bleeding disorders." },
    "3-25": { name: "World Malaria Day", lesson: "Zero malaria starts with me. Prevent mosquito bites and seek treatment immediately if symptomatic." },
    "3-28": { name: "World Day for Safety and Health at Work", lesson: "Promoting safe and healthy work environments globally. Your workplace safety matters!" },
    
    // MAY (4)
    "4-5": { name: "World Hand Hygiene Day", lesson: "Clean hands save lives! Simple hand washing prevents the spread of dangerous germs and infections. Wash often!" },
    "4-7": { name: "World Asthma Day", lesson: "Improving asthma care and educating people on managing their condition to live a full life." },
    "4-8": { name: "World Red Cross and Red Crescent Day", lesson: "Honoring volunteers who provide emergency aid and medical assistance globally." },
    "4-12": { name: "International Nurses Day", lesson: "Honoring the dedication and hard work of nurses who play a crucial role in the healthcare system." },
    "4-14": { name: "World Hypertension Day", lesson: "Know your numbers! Get your blood pressure checked regularly to prevent strokes and heart disease." },
    "4-31": { name: "World No Tobacco Day (Major)", lesson: "Smoking kills. Quitting tobacco is the single best action you can take for your health. Your body starts healing instantly! 🚭" },

    // JUNE (5)
    "5-5": { name: "World Environment Day (Health Link)", lesson: "A healthy planet means healthy people. Reducing pollution is key to public health." },
    "5-14": { name: "World Blood Donor Day", lesson: "🩸 Be a lifesaver! Donating blood is safe and essential. One donation can save up to three lives. Find a donation center today." },
    "5-15": { name: "World Elder Abuse Awareness Day", lesson: "Protecting the rights and dignity of older persons. We must ensure a life free from abuse and neglect for our elders." },
    "5-21": { name: "International Day of Yoga (India)", lesson: "Promoting the holistic benefits of yoga for physical and mental well-being across the globe. Take a moment to breathe." },
    "5-26": { name: "International Day Against Drug Abuse", lesson: "Raising awareness about the major problems illicit drugs pose to society and individual health. Seek help if needed." },
    
    // JULY (6)
    "6-1": { name: "National Doctors Day (India)", lesson: "A heartfelt thank you to all doctors for their tireless service, dedication, and compassion in saving lives." },
    "6-11": { name: "World Population Day", lesson: "Focusing on global population issues, including reproductive health and family planning for sustainable development." },
    "6-28": { name: "World Hepatitis Day", lesson: "Hepatitis can be prevented and treated. Get tested, know your status, and advocate for elimination." },
    
    // AUGUST (7)
    "7-1": { name: "World Breastfeeding Week Starts (1-7)", lesson: "Promoting the critical benefits of breastfeeding for infant health and maternal well-being. Support new mothers." },
    "7-10": { name: "National Deworming Day (India - 2nd Round)", lesson: "Ensuring all children receive the necessary medication to prevent parasitic infections and enhance their nutrition." },
    "7-12": { name: "International Youth Day (Health Focus)", lesson: "Focusing on youth mental health, substance abuse prevention, and access to necessary services." },
    "7-31": { name: "International Overdose Awareness Day", lesson: "Remembering those lost to overdose and stimulating action to prevent drug-related harm." },

    // SEPTEMBER (8)
    "8-1": { name: "National Nutrition Week Starts (1-7, India)", lesson: "Prioritizing balanced diets and healthy eating habits to combat malnutrition and lifestyle diseases." },
    "8-8": { name: "World Physiotherapy Day", lesson: "Promoting the role of physical therapists in rehabilitation and helping people maintain mobility and health." },
    "8-10": { name: "World Suicide Prevention Day", lesson: "If you're struggling, talk to someone. Support is available. Simple acts of compassion can prevent a tragedy." },
    "8-17": { name: "World Patient Safety Day", lesson: "Promoting safe practices in healthcare and advocating for a culture of reporting and learning from errors." },
    "8-21": { name: "World Alzheimer's Day", lesson: "Raising awareness and challenging the stigma surrounding Alzheimer's and dementia. Support caregivers." },
    // Add this temporary line
    "8-26": { name: "System Check Day", lesson: "System check successful! The code is working." },
    "8-28": { name: "World Rabies Day", lesson: "Focusing on rabies prevention and ensuring post-exposure prophylaxis is available globally. Vaccinate pets!" },
    "8-29": { name: "World Heart Day (Major)", lesson: "Keep your heart healthy! A diet low in salt and saturated fats, combined with regular exercise, drastically cuts your risk." },
    
    // OCTOBER (9)
    "9-1": { name: "International Day of Older Persons", lesson: "Focusing on the health, rights, and well-being of the elderly. Value and respect our senior citizens." },
    "9-10": { name: "World Mental Health Day (Major)", lesson: "🧠 Your mind matters. Check in with loved ones and yourself. Mental health is just as vital as physical health. Seek help when needed." },
    "9-12": { name: "World Arthritis Day", lesson: "Raising awareness about the impact of rheumatic and musculoskeletal diseases on quality of life. Early diagnosis is key." },
    "9-15": { name: "Global Handwashing Day", lesson: "Make handwashing a habit! It is one of the most effective and least expensive ways to prevent diseases." },
    "9-16": { name: "World Food Day", lesson: "Focusing on global hunger and the need for healthy diets. Ensure food security and nutrition for all." },
    "9-20": { name: "World Osteoporosis Day", lesson: "Promoting early detection and prevention of osteoporosis, a condition that weakens bones and causes fractures." },
    "9-24": { name: "World Polio Day", lesson: "Celebrating the progress toward a polio-free world and stressing the importance of vaccination to finish the job." },
    "9-29": { name: "World Stroke Day", lesson: "Learning the warning signs of stroke (F.A.S.T.) can save a life. Act quickly: face drooping, arm weakness, speech difficulty, time to call 911/108." },
    
    // NOVEMBER (10)
    "10-7": { name: "National Cancer Awareness Day (India)", lesson: "Promoting early diagnosis and prevention measures. Know the signs and seek timely medical advice." },
    "10-12": { name: "World Pneumonia Day", lesson: "Pneumonia is preventable with vaccines and treatable with antibiotics. Protecting children is the main focus." },
    "10-14": { name: "World Diabetes Day (Major)", lesson: "Know your risk. Diabetes is manageable through diet, exercise, and regular monitoring. Early diagnosis prevents complications." },
    "10-17": { name: "World Prematurity Day", lesson: "Raising awareness of premature birth and the struggles faced by premature babies and their families." },
    "10-25": { name: "International Day for the Elimination of Violence Against Women", lesson: "Ending gender-based violence is a critical public health issue. Speak out and support victims." },
    
    // DECEMBER (11)
    "11-1": { name: "World AIDS Day (Major)", lesson: "Get tested. Modern treatments allow people with HIV to live long, healthy lives and prevent transmission. Let's end the stigma." },
    "11-3": { name: "International Day of Persons with Disabilities", lesson: "Promoting the rights and well-being of persons with disabilities in all spheres of society and development." },
    "11-12": { name: "Universal Health Coverage Day", lesson: "Advocating for strong, equitable health systems that provide essential health services to all people, everywhere." },
};

// ... (Rest of the HealthNotificationBanner component code follows here) ...
// (The component logic remains the same, but now uses the massive list above)

const HealthNotificationBanner = () => {
    // ... rest of the code (useState, useEffect, return block) ...
    const [todayEvent, setTodayEvent] = useState(null);
    const [isVisible, setIsVisible] = useState(true); 

    useEffect(() => {
        const today = new Date();
        const month = today.getMonth(); 
        const day = today.getDate();   
        
        const dateKey = `${month}-${day}`; 
        const eventData = HEALTH_DAYS_DATA[dateKey];
        
        if (eventData) {
            setTodayEvent(eventData); 
        }
    }, []); 

    if (!todayEvent || !isVisible) {
        return null; 
    }

    const { name, lesson } = todayEvent;

    const bannerStyle = { 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 9999, 
        transition: 'transform 0.3s ease-in-out',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' 
    };

    return (
        <div 
            style={bannerStyle}
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
            
            <button
                className="ml-4 flex-shrink-0 text-white hover:text-gray-200"
                onClick={() => setIsVisible(false)} 
                aria-label="Close Notification"
            >
                <span className="text-2xl font-light">&times;</span>
            </button>
        </div>
    );
};

export default HealthNotificationBanner;
