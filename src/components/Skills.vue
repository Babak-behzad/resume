<template>
    <section class="skills">
        <h2 class="mt-12 mb-3 skills-header">S K I L L S</h2>
        <ul class="list-none pl-0">
            <li class="flex items-center mt-2">
                <p class="medium-p w-32 text-black">HTML</p>
                <div class="flex mb-0.5 gap-1">
                    <div v-for="item in 8" class="w-2.5 aspect-square bg-black rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                </div>
            </li>
            <li class="flex items-center mt-2">
                <p class="medium-p w-32 text-black">CSS</p>
                <div class="flex mb-0.5 gap-1">
                    <div v-for="item in 7" class="w-2.5 aspect-square bg-black rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                </div>
            </li>
            <li class="flex items-center mt-2">
                <p class="medium-p w-32 text-black">JAVASCRIPT</p>
                <div class="flex mb-0.5 gap-1">
                    <div v-for="item in 5" class="w-2.5 aspect-square bg-black rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                </div>
            </li>
            <li class="flex items-center mt-2">
                <p class="medium-p w-32 text-black">VUE</p>
              <div class="flex mb-0.5 gap-1">
                <div v-for="item in 6" class="w-2.5 aspect-square bg-black rounded-full"></div>
                <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
              </div>
            </li>
            <li class="flex items-center mt-2">
                <p class="medium-p w-32 text-black">PHOTOSHOP</p>
                <div class="flex mb-0.5 gap-1">
                    <div v-for="item in 7" class="w-2.5 aspect-square bg-black rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                    <div class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                </div>
            </li>
        </ul>
    </section>
</template>

<style>

</style>