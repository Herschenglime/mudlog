<script lang="ts">
  import { theme } from '$lib/stores'
  let sys = "system";
  let dark = "dark";
  let light  = "light";
</script>

<select bind:value="{$theme}">
  <option value="system"
  class:sys ="{sys === 'system'}"
  >System</option>
  <option value="light"
  class:light = "{light ==="light"}"
  >Light</option>
  <option value="dark"
  class:dark ="{dark ==='dark'}"
  
  >Dark</option>
</select>
