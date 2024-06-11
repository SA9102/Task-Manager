<script>
	export let task;
</script>

<div>
	{#if task.isEditing}
		<input type="text" bind:value={task.name} placeholder="Name/title of task" />
		<button on:click={() => (task.isEditing = false)}>Save</button>
	{:else}
		<p>{task.name}</p>
		<button on:click={() => (task.isEditing = true)}>Edit</button>
	{/if}
</div>
