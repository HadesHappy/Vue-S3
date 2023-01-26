<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import ButtonComp from '../components/ButtonComp.vue'
import router from '@/router'

const store = useStore()


const toggleModal = () => {
  store.commit('toggleModal', null)
  router.push({ name: 'detail' })
}

</script>

<template>
  <ButtonComp @click="toggleModal" class="mx-auto my-2 block p-4 border rounded-sm"
    btnMsg="See It In My Size" />
</template>
