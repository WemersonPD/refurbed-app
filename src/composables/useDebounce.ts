import { ref, watch, type Ref } from "vue";

/**
 * This function will debounce a ref change.
 * @param source a ref from an input.
 * @param delay time to act.
 * @returns value if reached the timeout.
 */
export function useDebounce<T = string | number>(source: Ref<T>, delay = 300) {
	const debounced = ref(source.value);
	let timeout: number;

	watch(source, (val) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			debounced.value = val;
		}, delay);
	});

	return debounced;
}
