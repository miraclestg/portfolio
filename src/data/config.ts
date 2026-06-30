// Site configuration - migrated from data/config.json
export const siteConfig = {
    name: "Ly Hong Phuong An Portfolio",
    domain: "https://lyhongphuongan.github.io",
    author: "Lý Hồng Phương Ân",
    authorEn: "Ly Hong Phuong An",
    email: "lyhongphuongan@gmail.com",
    location: "Ho Chi Minh City, Vietnam",
    university: "HUFLIT",
    major: "Cybersecurity",
    bio: "IT Specialist focused on Cybersecurity and Software Development. Currently pursuing Information Technology at HUFLIT.",

    social: {
        linkedin: "https://www.linkedin.com/in/ph%C6%B0%C6%A1ng-%C3%A2n-l%C3%BD-h%E1%BB%93ng-658655292/",
        github: "https://github.com/miraclestg",
        facebook: "https://www.facebook.com/ly.hong.phuong.an.2024/",
        //instagram: "https://www.instagram.com/tht._csec",
        leetcode: "https://leetcode.com/u/lyhongphuongan/",
        //tiktok: "https://www.tiktok.com/@tuhocleetcode",
        //discord: "https://discord.com/users/815074234241646592",
    },

    academic: {
        startDate: "2023-09-01",
        endDate: "2027-07-31",
        currentSemester: 7,
        totalSemesters: 9,
        gpa: 3.33,
        creditsCompleted: 109,
        totalCredits: 135,
        expectedGraduation: 2027,
    },

    stats: {
        projectsBuilt: 5,
        technologiesUsed: 30,
    },
} as const;

// Calculate academic progress dynamically based on dates
// Calculate academic progress dynamically based on credits
export const getAcademicProgress = (): number => {
    const completed = siteConfig.academic.creditsCompleted;
    const total = siteConfig.academic.totalCredits;

    // Fallback to time-based if credits are missing
    if (!completed || !total) {
        const start = new Date(siteConfig.academic.startDate).getTime();
        const end = new Date(siteConfig.academic.endDate).getTime();
        const now = Date.now();
        const totalTime = end - start;
        const elapsed = now - start;
        return Math.min(Math.max((elapsed / totalTime) * 100, 0), 100);
    }

    const progress = Math.min(Math.max((completed / total) * 100, 0), 100);
    return Math.round(progress * 10) / 10;
};

// Calculate days remaining until graduation
export const getDaysRemaining = (): number => {
    const end = new Date(siteConfig.academic.endDate).getTime();
    const now = Date.now();
    const remaining = end - now;
    return Math.max(Math.ceil(remaining / (1000 * 60 * 60 * 24)), 0);
};

export type SiteConfig = typeof siteConfig;
