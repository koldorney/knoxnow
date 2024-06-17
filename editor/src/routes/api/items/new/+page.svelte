<script>
	import { goto } from '$app/navigation';
	let name = '';
	let description = '';

	async function addItem() {
		try {
			const res = await fetch('/api/items', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, description })
			});
			if (!res.ok) throw new Error('Failed to add item');
			goto('/api/items');
		} catch (error) {
			console.error(error);
		}
	}
</script>

<main>
	<h1>Create New Item</h1>
	<form on:submit|preventDefault={addItem}>
		<input bind:value={name} placeholder="Name" required />
		<input bind:value={description} placeholder="Description" required />
		<button type="submit">Add Item</button>
	</form>
</main>
