export interface userLoginObj {
	email: string;
	password: string;
}

export interface userObj {
	id?: string;
	name: string;
	cpf: string;
	email: string;
	password: string;
	confirmPassword: string;
	isAdmin: boolean;
}

export interface userHomeObj{
  id: string,
  name: string,
  email: string,
  cpf: string,
}

export interface userEditObj {
	name: string;
	email: string;
	isAdmin: boolean;
}

export interface userPassObj {
	password: string;
	confirmPassword: string;
}