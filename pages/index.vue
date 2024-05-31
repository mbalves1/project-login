<template>
  <div>
    <h1 class="bg-blue-400">Headsders</h1>
    <Button @click="plus()" class="border p-2">Count ++</Button>
    <p>Double Count: {{ counterStore.doubleCount }}</p>
  </div>
</template>
<script setup>

const counterStore = useCounterStore()

const plus = async () => {
  await counterStore.increment()
}

</script>
