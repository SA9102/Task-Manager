<script lang="ts">
	// Components
	import TaskItem from '$lib/components/TaskItem.svelte';

	// Types
	import type { taskType } from '$lib/types/taskType';

	// NPM
	import { v4 as uuidv4 } from 'uuid';

	const EMPTY_TASK: taskType = {
		id: '',
		name: '',
		isComplete: false,
		isEditing: true,
		description: '',
		location: null,
		start: null,
		end: null
	};

	let tasks: taskType[] = [];

	// Creates a new task with a random id, and adds it to the
	// list of current tasks.
	const handleAddTask = () => {
		const newTask = { ...EMPTY_TASK, id: uuidv4() };
		tasks = [newTask, ...tasks];
	};
</script>

<div class="app">
	<h1>Tasks</h1>

	<button on:click={handleAddTask}>New task</button>

	{#if tasks.length > 0}
		{#each tasks as task}
			<TaskItem {task} />
		{/each}
	{:else}
		<p>No tasks to do!</p>
	{/if}
</div>
