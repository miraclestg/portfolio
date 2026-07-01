// Certificates and Achievements data - from certificates.html
export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    image: string;
    type: 'certificate' | 'achievement';
    description?: string;
}

export const certificates: Certificate[] = [
    // Google Certificates (first)
        {
        id: "network-architecture",
        title: "Network Architecture",
        issuer: "Google",
        image: "/images/certificates/network_architecture.pdf",
        type: "certificate"
    },
    ];

export const achievements: Certificate[] = [
    
    
];

export const featuredCertificates = certificates.slice(0, 3);
export const featuredAchievements = achievements.slice(0, 2);
