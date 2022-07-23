import swal from 'sweetalert';

const exibeAlertaButtons = (title: string, icon: string, buttons: string[]) => {
	swal({
		title: title,
		icon: icon,
		buttons: buttons,
	});
};

const exibeAlerta = (text: string, icon: string, title: string) => {
	swal({
		title: title,
		text: text,
		icon: icon,
		timer: 7000,
	});
};

const alertaDelete = {
	deleteUser: () =>
		swal({
			title: 'Deseja apagar o Usuario ? Você perderá todos os seus dados!',
			icon: 'error',
			buttons: ['Não', 'Sim'],
		}).then((resp) => resp),
};

const alertaDeleteOtherUser = () => {
	exibeAlertaButtons('Ops! Você não pode apagar outros Usuarios !', 'error', [
		'Cancelar',
		'OK',
	]);
};

export { alertaDelete, alertaDeleteOtherUser };
