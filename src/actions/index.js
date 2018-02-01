export const ACTIVE_OBSZAR = 'OBSZAR_SELECTED';

export function wybierzObszar(obszar) {
	return {
		type: ACTIVE_OBSZAR,
		payload: obszar
	}
}