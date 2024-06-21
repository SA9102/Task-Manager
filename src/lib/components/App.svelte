<script lang="ts">
	// Components
	import TaskItem from '$lib/components/TaskItem.svelte';

	// Stores
	import emptyTask from '$lib/stores/emptyTask';

	// Types
	import type { taskType } from '$lib/types/taskType';

	// NPM
	import { v4 as uuidv4 } from 'uuid';

	let tasks: taskType[] = [];

	// Creates a new task with a random id, and adds it to the
	// list of current tasks.
	const handleAddTask = () => {
		const newTask = { ...$emptyTask, id: uuidv4() };
		tasks = [newTask, ...tasks];
	};

	const handleDeleteTask = (id: string) => {
		tasks = tasks.filter((task: taskType) => task.id !== id);
	};

	const handleDeleteAllCompleteTasks = () => {
		tasks = tasks.filter((task: taskType) => !task.isComplete);
	};
</script>

<div class="app">
	<h1>Tasks</h1>

	<button on:click={handleAddTask}>New task</button>

	{#if tasks.length > 0}
		<button on:click={handleDeleteAllCompleteTasks}>Delete all complete tasks</button>
		{#each tasks as task}
			<TaskItem {task} {handleDeleteTask} />
		{/each}
	{:else}
		<p>No tasks to do!</p>
	{/if}
</div>
