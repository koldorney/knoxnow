<script>
	export let header = '';
</script>

<style>
    .article-container {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }

    .header {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 20px;
    }

    .content {
        font-size: 1rem;
        line-height: 1.5;
    }
</style>

<div class="article-container">
	<div class="header">{header}</div>
	<div class="content">
		<slot></slot>
	</div>
</div>
