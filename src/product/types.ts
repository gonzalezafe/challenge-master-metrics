export interface Product {
	author?: {
		name: string;
		lastname: string;
	};
	item?: {
		id: string;
		title: string;
		price: {
			currency: string;
			amount: number;
			decimals: number;
		};
		picture: string;
		condition: string;
		free_shipping: boolean;
		sold_quantity: number;
		description: string;
	};
}

export interface Price {
	currency: string;
	amount: number;
	decimals: number;
}

export interface ItemIdInterface {
	id: string;
	title: string;
	price: Price;
	picture: string;
	condition: string;
	free_shipping: boolean;
	sold_quantity: number;
	description: string;
	category_id: string;
}
