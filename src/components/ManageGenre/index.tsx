import * as S from './style';
import ButtonCriar from 'components/ButtonPurple';
import ButtonUpdate from 'components/ButtonPurple';
import ButtonDelete from 'components/ButtonRed';
import { createService } from 'services/createService';
import { useEffect, useState } from 'react';
import { genreObj } from 'types/api/Genres';
import { findAllService, findByIdService } from 'services/findServices';
import { deleteService } from 'services/deleteService';
import { updateService } from 'services/updateService';
import { alertaDelete, alertaErro, alertaSucesso } from 'utils/alertas';

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
			alertaSucesso.alerta('Genero criado com sucesso!');
		}
		if (response.status === 422) {
			alertaErro.alerta('Não é possivel criar genero. Genero já existe!');
		}
		updateGeneros(true);
	};

	useEffect(() => {
		const getGenreById = async () => {
			const response = await findByIdService.findGenreById(genreId.id);
			console.log(response);
		};
		findAllGenres();
		getGenreById();

		// eslint-disable-next-line react-hooks/exhaustive-deps
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
	};

	const editGenre = async () => {
		const valores = {
			name: newGenre.name,
		};
		const response = await updateService.updateGenre(genreId.id, valores);

		if (response.status === 200) {
			alertaSucesso.alerta('Genero Atualizado com sucesso!');
		} else {
			alertaErro.alerta(`${response.data.message}`);
		}
		updateGeneros(true);
	};

	const deleteGenre = async () => {
		const response = await deleteService.deleteGenre(genreId.id);
		console.log(response);

		alertaSucesso.alerta('Genero apagado com sucesso!');
		updateGeneros(true);
	};

	const deleteModalOpen = () => {
		alertaDelete.deleteGenre().then((resp) => {
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
