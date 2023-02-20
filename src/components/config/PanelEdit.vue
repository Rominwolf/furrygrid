<template>
  <div class="q-col-gutter-y-md">
    <EditTableConfig></EditTableConfig>
    <EditGridItems></EditGridItems>
  </div>
</template>

<script>
import EditTableConfig from "components/config/edit/EditTableConfig";
import EditGridItems from "components/config/edit/EditGridItems";

export default {
  name: "PanelEdit",
  components: {EditGridItems, EditTableConfig},
}
</script>

<style>
.edit-grid-items > .q-item__section--avatar {
  align-items: center;
}
</style>
