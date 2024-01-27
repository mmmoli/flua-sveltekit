import { getContext, setContext } from 'svelte';

export function setOutcome(isAccepted = false) {
	return setContext('gate-outcome', isAccepted);
}

export function getOutcome() {
	return getContext('gate-outcome');
}
