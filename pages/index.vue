<template>
  <div>
    <div>
      <Button variant="outline">Add
        <LucideChevronRight class="w-4 h-4" />
      </Button>


      <div class="relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <LucideMail class="size-6 text-muted-foreground" />
        </span>
      </div>

      <div class="relative flex w-full max-w-sm items-center">
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <LucideLock class="size-6 text-muted-foreground" />
        </span>
        <Input id="search" :type="showPass ? 'text' : 'password'" placeholder="Password..." class="pl-10" />
        <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2"
          @click="passVisibility"
        >
          <LucideEyeOff v-if="showPass" class="size-6 text-muted-foreground" />
          <LucideEye v-else class="size-6 text-muted-foreground" />
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const counterStore = useCounterStore()

const plus = async () => {
  await counterStore.increment()
}

const showPass = ref(false)

const passVisibility = () => {
  console.log('aqui', showPass.value);
  showPass.value = !showPass.value
}

</script>
<style>
.PopoverTrigger {
  background-color: white;
  border-radius: 4px;
}

.PopoverContent {
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  background-color: white;
}

.PopoverArrow {
  background-color: white;
}
</style>
