export const ACTIVE_OBSZAR = 'OBSZAR_SELECTED';

export function wybierzObszar(obszar) {
	return {
		type: ACTIVE_OBSZAR,
		payload: obszar
	}
}

export const ACTIVE_GABINET = 'GABINET_SELECTED';

export function wybierzGabinet(gabinet) {
	return {
		type: ACTIVE_GABINET,
		payload: gabinet
	}
}