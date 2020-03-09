export class CreateApplicationDto {
	id: SERIAL;
	first_name: string;
	last_name: string;
	email_address: string;
	phone_number: string;
	company_name: string;
	effective_date: date;
	status: string;
	primary_al: boolean;
	primary_gl: boolean;
	primary_el: boolean;
	is_deleted: boolean;
}

