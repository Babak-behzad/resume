<template>
    <section>
        <h2 class="mt-12 mb-3">S K I L L S</h2>
        <h3 class="text-lg mt-6 mb-4 font-bold">L A N G U A G E S</h3>
        <ul class="list-none pl-0">
            <li v-for="lang in langs" class="flex items-center mt-2">
                <p class="medium-p w-32 text-black">{{ lang.title }}</p>
                <div class="flex mb-0.5 gap-1">
                    <div v-for="item in lang.score" class="w-2.5 aspect-square bg-black rounded-full"></div>
                    <div v-for="item in 10 - lang.score" class="w-2.5 aspect-square bg-neutral-400 rounded-full"></div>
                </div>
            </li>
        </ul>
        <h3 class="text-lg mt-6 mb-4 font-bold">F R A M E W O R K S & L I B R A R I E S</h3>
        <ul class="list-none pl-0">
            <li v-for="frameWork in frameWorks" class="flex items-center mt-2">
                <p class="medium-p w-32 text-black">{{ frameWork.title }}</p>
                <div class="flex mb-0.5 gap-1">
                    <div v-for="item in frameWork.score" class="w-2.5 aspect-square bg-black rounded-full"></div>
                    <div v-for="item in 10 - frameWork.score" class="w-2.5 aspect-square bg-neutral-400 rounded-full">
                    </div>
                </div>
            </li>
        </ul>
        <h3 class="text-lg mt-6 mb-4 font-bold">T O O L S</h3>
        <ul class="list-none pl-0">
            <li v-for="tool in tools" class="flex items-center mt-2">
                <p class="medium-p w-32 text-black">{{ tool.title }}</p>
                <div class="flex mb-0.5 gap-1">
                    <div v-for="item in tool.score" class="w-2.5 aspect-square bg-black rounded-full"></div>
                    <div v-for="item in 10 - tool.score" class="w-2.5 aspect-square bg-neutral-400 rounded-full">
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<style></style>

<script setup lang="ts">

interface Skill {
    title: string;
    score: number;
}

const frameWorks: Skill[] = [
    {
        title: 'VUE',
        score: 8
    },
    {
        title: 'REACT',
        score: 6
    },
    {
        title: 'NUXT',
        score: 8
    },
    {
        title: 'NEXT',
        score: 6
    },
    {
        title: '.NET',
        score: 5
    },

]

const langs: Skill[] = [
    {
        title: 'HTML',
        score: 8
    },
    {
        title: 'CSS',
        score: 8
    },
    {
        title: 'JAVASCRIPT',
        score: 8
    },
    {
        title: 'TYPESCRIPT',
        score: 7
    },
    {
        title: 'C#',
        score: 6
    },
    {
        title: 'PYTHON',
        score: 8
    },
]

const tools: Skill[] = [
    {
        title: 'GIT',
        score: 8
    },
    {
        title: 'ROLLUP',
        score: 7
    },
    {
        title: 'VITE',
        score: 8
    },
    {
        title: 'FIGMA',
        score: 6
    },
    {
        title: 'VITEST',
        score: 7
    },
    {
        title: 'STORYBOOK',
        score: 7
    },
]

</script>