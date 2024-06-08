<template>
  <div class="py-6 px-4 my-auto">
    <div class="">
      <div class="w-full max-w-sm flex justify-center">
        <!-- <h1 class="text-2xl text-green-500">minne<span class="text-black">.wallet</span></h1> -->
        <div class="animate one customFont w-full max-w-sm flex justify-center">
          <strong><i><span>m</span><span>i</span><span>n</span><span>n</span><span>e</span><span>.</span>
            <span class="custom--subtitle text-black">w</span><span class="custom--subtitle text-black">a</span><span class="custom--subtitle text-black">l</span><span class="custom--subtitle text-black">l</span><span class="custom--subtitle text-black">e</span><span class="custom--subtitle text-black">t</span></i></strong>
          </div>
        </div>
        <div class="flex justify-center flex-col mt-5 pb-6 w-full max-w-sm">
          <span class="text-align">Seu Guia para a Saúde Financeira</span>
          <strong class="text-align" >Todas as Suas Contas, Um Único Lugar.</strong>
        </div>
      </div>

      <div class="relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-10 focus:ring focus:ring-offset-4 ring-black-500" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <LucideMail class="size-6 text-muted-foreground" />
        </span>
      </div>

      <div class="relative flex w-full max-w-sm items-center mt-3">
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <LucideLock class="size-6 text-muted-foreground" />
        </span>
        <Input id="search" :type="showPass ? 'text' : 'password'" placeholder="Password..." class="pl-10 focus:ring focus:ring-offset-4 ring-black-500" />
        <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2"
          @click="passVisibility"
        >
          <LucideEyeOff v-if="showPass" class="size-6 text-muted-foreground" />
          <LucideEye v-else class="size-6 text-muted-foreground" />
        </span>

        
        </div>
        <div class="flex justify-end underline text-xs mt-2 text-zinc-600 hover:text-zinc-800 cursor-pointer">
          <p>esqueci minha senha</p>
        </div>

        <div class="mt-12 flex flex-col w-full max-w-sm">
          <Button variant="outline" class="w-full max-w-sm ring-black-500 bg-green-700 hover:bg-green-900 text-white hover:text-white">Add
            <LucideChevronRight class="w-4 h-4" />
          </Button>

          <Button variant="outline" class="w-full max-w-sm bg-zinc-50 hover:bg-zinc-200 mt-3 focus:ring focus:ring-offset-4 ring-black-500">Add
            <LucideChevronRight class="w-4 h-4" />
          </Button>
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
<style scoped lang="scss">
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

.custom {
  background-repeat: no-repeat; /* evita que a imagem seja repetida */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 30px;

  &--title {
    color: #B9E9BF;
  }

  &--subtitle {
    color: #f2f2f2;
  }

  & > img {
    margin-top: 30px;
  }

  &-btn {
    background: #B9E9BF;
    margin: 20px;
    width: 200px;
    height: 60px;
  }
}

.main {
  padding: 0 20px;
  background: #222;
}

.floating { 
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}
 
@keyframes floating {
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(30px, 0px); }
  100%   { transform: translate(0, -0px); }   
}


.one span {
  font-size: 35px;
	opacity: 0;
	transform: translate(-150px, -50px) rotate(-180deg) scale(3);
	animation: revolveScale .4s forwards;
}

.animate span:nth-of-type(2) {
	animation-delay: 1.05s;
}
.animate span:nth-of-type(3) {
	animation-delay: 1.09s;
}
.animate span:nth-of-type(4) {
	animation-delay: 1.1s;
}
.animate span:nth-of-type(5) {
	animation-delay: 2s;
}
.animate span:nth-of-type(6) {
	animation-delay: 3s;
}
.animate span:nth-of-type(7) {
	animation-delay: 2.05s;
}
.animate span:nth-of-type(8) {
	animation-delay: 2.15s;
}
.animate span:nth-of-type(9) {
	animation-delay: 2.5s;
}
.animate span:nth-of-type(10) {
	animation-delay: 2.7s;
}
.animate span:nth-of-type(11) {
	animation-delay: 2.9s;
}
.animate span:nth-of-type(12) {
	animation-delay: 2.93s;
}

@keyframes revolveScale {
	20% {
		transform: translate(20px, 20px) rotate(30deg) scale(.3);
    color: #FFF;
	}

  60% {
    color: #46754D;
  }

  70% {
    color: #93F5A0;
	}
  
  80% {
    color: white;
	}

	100% {
		transform: translate(0) rotate(0) scale(1);
		opacity: 1;
    color: #74C27F;
	}
}
</style>
