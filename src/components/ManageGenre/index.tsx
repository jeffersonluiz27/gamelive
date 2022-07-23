import * as S from './style';
import swal from 'sweetalert';
import ButtonCriar from 'components/ButtonPurple';
import ButtonUpdate from 'components/ButtonPurple';
import ButtonDelete from 'components/ButtonRed';
import { createService } from 'services/createService';
import { useEffect, useState } from 'react';
import { genreObj } from 'types/api/Genres';
import { findAllService, findByIdService } from 'services/findServices';
import { deleteService } from 'services/deleteService';
import { updateService } from 'services/updateService';

const ManageGenre = () => {
	const [listGenre, setListGenre] = useState<genreObj[]>([]);
	const [refreshGeneros, setRefreshGeneros] = useState(false);
	const [genreId, setGenreId] = useState({
		id: '',
		name: '',
	});
	const [genre, setGenre] = useState({
		name: '',
	});
	const [newGenre, setNewGenre] = useState({
		name: '',
	});

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setGenreId((values: genreObj) => ({
			...values,
			id: event.target.selectedOptions[0].id,
			name: event.target.value,
		}));
	};

	const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGenre((values: genreObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const handleChangeValues2 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewGenre((values: genreObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const createGenre = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		const response = await createService.createGenre(genre);

		if (response.status === 201) {
			exibeAlerta('Genero criado com sucesso!', 'success', 'Sucesso!');
		}
		if (response.status === 422) {
			exibeAlerta(
				'Não é possivel criar genero. Genero já existe!',
				'error',
				'Já existe!'
			);
		}
	};

	const exibeAlerta = (text: string, icon: string, title: string) => {
		swal({
			title: title,
			text: text,
			icon: icon,
			timer: 7000,
		});
		updateGeneros(true);
	};

	useEffect(() => {
		const getGenreById = async () => {
			const response = await findByIdService.findGenreById(genreId.id);
			console.log('Genero Listado', response.data);
		};
		findAllGenres();
		getGenreById();
	}, [genre, refreshGeneros]);

	const updateGeneros = (refreshProf: boolean) => {
		setRefreshGeneros(refreshProf);
		setTimeout(() => {
			setRefreshGeneros(false);
		}, 100);
	};

	const findAllGenres = async () => {
		const response = await findAllService.allGenres();

		setListGenre(response.data);
		console.log('Lista Generos', response.data);
	};

	const editGenre = async () => {
		const valores = {
			name: newGenre.name,
		};
		const response = await updateService.updateGenre(genreId.id, valores);

		if (response.status === 200) {
			exibeAlerta('Genero Atualizado com sucesso!', 'success', 'Sucesso!');
		}
	};

	const deleteGenre = async () => {
		const response = await deleteService.deleteGenre(genreId.id);
		console.log(response);

		exibeAlerta('Genero apagado com sucesso!', 'success', 'sucesso');
	};

	const deleteModalOpen = () => {
		swal({
			title: 'Deseja apagar o genero ?',
			icon: 'error',
			buttons: ['Não', 'Sim'],
		}).then((resp) => {
			console.log(resp);
			if (resp) {
				deleteGenre();
			}
		});
	};

	return (
		<>
			<h2>Cadastrar Genero</h2>
			<S.BoxNewGenre>
				<S.BoxNewGenreForm onSubmit={createGenre}>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Nome do genero..."
						onChange={handleChangeValues}
						required
					/>
					<ButtonCriar value="Criar" type="submit" />
				</S.BoxNewGenreForm>
			</S.BoxNewGenre>
			<h2>Atualizar Genero</h2>
			<S.BoxUpdateGenre>
				<S.BoxUpdateGenreForm>
					<select onChange={handleChange} id="genre">
						<optgroup label="Generos">
							<option>Escolha</option>
							{listGenre.map((genre) => (
								<option key={genre.id} id={genre.id}>
									{genre.name}
								</option>
							))}
						</optgroup>
					</select>
					<input
						type="text"
						placeholder="Novo nome do genero..."
						name="name"
						id="newName"
						onChange={handleChangeValues2}
					/>
					<S.BoxUpdateGenreDiv>
						<ButtonDelete
							value="Deletar"
							type="button"
							onClick={deleteModalOpen}
						/>
						<ButtonUpdate value="Atualizar" type="button" onClick={editGenre} />
					</S.BoxUpdateGenreDiv>
				</S.BoxUpdateGenreForm>
			</S.BoxUpdateGenre>
		</>
	);
};

export default ManageGenre;
