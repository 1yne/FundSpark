<script lang="ts">
  import { Paper } from "@svelteuidev/core"
  export let title: string, description: string
</script>

<Paper override={{ backgroundColor: "#1c1c25", color: "white", padding: 0 }}>
  <div class="content p-4">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
</Paper>