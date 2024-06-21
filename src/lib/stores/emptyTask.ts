import type { taskType } from '$lib/types/taskType';
import { readable } from 'svelte/store';

const VALUE: taskType = {
	id: '',
	name: '',
	isComplete: false,
	isEditing: true,
	description: '',
	location: null,
	start: null,
	end: null
};

let emptyTask = readable(VALUE);

export default emptyTask;
