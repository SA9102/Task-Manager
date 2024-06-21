<script lang="ts">
	export let task;
	export let handleDeleteTask;
</script>

<div class="task-item">
	{#if task.isEditing}
		<div class="name-input">
			<input type="text" bind:value={task.name} placeholder="Name/title of task" />
			<button on:click={() => (task.isEditing = false)}>Save</button>
		</div>
	{:else}
		<div class="name-and-checkbox">
			<input type="checkbox" bind:checked={task.isComplete} />
			<p class={task.isComplete ? 'task-complete' : ''}>{task.name}</p>
		</div>
		<button on:click={() => (task.isEditing = true)}>Edit</button>
		<button on:click={() => handleDeleteTask(task.id)}>Delete</button>
	{/if}
</div>

<style>
	.name-input {
		display: flex;
	}

	.name-and-checkbox {
		display: flex;
	}

	.task-complete {
		text-decoration: line-through;
	}
</style>
