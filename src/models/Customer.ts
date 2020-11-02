export interface Account {
	id: string;
	avatar: string;
	firstName: string;
	lastName: string;
	company: string;
	isActive: boolean;
	addresses: {
		type: string;
		street: string;
		number: number;
		uf: string;
		cep: string;
		city: string;
	}[];
	contact: {
		phones: { value: string; type: string }[];
		emails: { value: string; type: string }[];
		socialNetworks?: {
			facebookURL?: string;
			instagramURL?: string;
			twitterURL?: string;
			linkedInURL?: string;
		};
	};
}
