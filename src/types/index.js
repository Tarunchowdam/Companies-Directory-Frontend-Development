export interface Company {
    id: string;
    name: string;
    description: string;
    logoUrl: string;
    websiteUrl: string;
}

export interface CompanyDetails extends Company {
    address: string;
    phone: string;
    email: string;
}