<template>
  <div class="relative">
    <div class="left-bg basis-1/2 absolute left-0 w-1/2 bottom-0 top-0 -z-50">
    </div>
    <div class="right-bg basis-1/2 absolute right-0 w-1/2 bottom-0 top-0 -z-50" >
    </div>
    <div class="container grid grid-cols-2 gap-16">
      <section class="pt-10">
        <CallAndEmail/>
        <Certificate/>
        <Reference/>
        <Experience/>
        <Interests/>
      </section>
      <section class="pt-10">
        <Title/>
        <Skills/>
        <Education/>
      </section>
    </div>
  </div>
  
</template>

<style scoped>
.right-bg {
  background-color: #f1f1f1;
}
.left-col {
  width: 385px;
}
.right-col {
  width: 385px;
}

</style>

<script>
import CallAndEmail from './components/CallAndEmail.vue';
import Certificate from './components/Certificate.vue';
import Reference from './components/Reference.vue';
import Interests from './components/Interests.vue';
import Experience from './components/Experience.vue';
import Title from './components/Title.vue';
import Skills from './components/Skills.vue';
import Education from './components/Education.vue'

export default {
  components: {
    CallAndEmail,Certificate,Reference,Interests,Experience,Title,Skills,Education
  },
}


</script>