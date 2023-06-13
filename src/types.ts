export interface IButton {
	children?: any;
	className: string;
	content: string;
	callback: Function;
	isActive?: boolean;
	buttonStyle?: any;
}

export interface IInput {
    type: string;
    id: string;
    name: string,
	className: string;
	value?: string;
	label?: string;
	placeholder?: string;
	isEnable?: boolean;
	isEmpty: boolean;
	isValid: boolean;
	isRequired?: boolean;
	error?: string;
	callback: Function;
}
export interface IBookInfo {
	error: string,
    title: string,
    subtitle: string,
    language:string,
    authors: string,
    publisher: string,
    isbn10: string,
    isbn13: string,
    pages: string,
    year: string,
    rating: string,
    desc: string,
    price: string,
    image: string,
    url: string,
    pdf: any,
}

export interface IBookCard {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
}
