<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let items = [];
	let editItemId = null;
	let editItemName = '';
	let editItemDescription = '';

	async function fetchItems() {
		try {
			const res = await fetch('/api/items');
			if (!res.ok) throw new Error('Failed to fetch items');
			items = await res.json();
		} catch (error) {
			console.error(error);
		}
	}

	async function deleteItem(id) {
		try {
			const res = await fetch(`/api/items/${id}`, { method: 'DELETE' });
			if (!res.ok) throw new Error('Failed to delete item');
			items = items.filter(item => item.id !== id);
		} catch (error) {
			console.error(error);
		}
	}

	async function updateItem() {
		console.log(`Updating item with ID: ${editItemId} Name: ${editItemName} Desc: ${editItemDescription}`);
		await fetch(`/api/items/${editItemId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: editItemName, description: editItemDescription })
		});

		await fetchItems();
		editItemId = null;
		editItemName = '';
		editItemDescription = '';
	}

	function startEditing(item) {
		editItemId = item.id;
		editItemName = item.name;
		editItemDescription = item.description;
	}

	onMount(fetchItems);
</script>

<main>
	<h1>Items</h1>
	<button on:click={() => goto('/api/items/new')}>Create New Item</button>
	<ul>
		{#each items as item (item.id)}
			<li>
				{#if editItemId === item.id}
					<input type="text" bind:value={editItemName} placeholder="Name" />
					<input type="text" bind:value={editItemDescription} placeholder="Description" />
					<button on:click={async () => { await updateItem(); }}>Save</button>
					<button on:click={() => { editItemId = null; editItemName = ''; editItemDescription = ''; }}>Cancel</button>
				{:else}
					<div>
						<a href={`./items/${item.id}`}>{item.name} - {item.description}</a>
						<button on:click={() => startEditing(item)}>Edit</button>
						<button on:click={() => deleteItem(item.id)}>Delete</button>
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</main>
