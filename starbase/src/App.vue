<template>
<div id="app">
    <h3>{{title}}</h3>
    <div class="row">
        <div class="col-md-12">
        <Character
            v-for="(id, index) in initial_ids"
            :key="index"
            :id="id"
        />
        </div>
    </div>
</div>
</template>

<script>
import Character from './components/Character.vue';

export default {
    name: 'app',
    components: {
        Character
    },
    data() {
        return {
            title: 'Generate your Team',
            initial_ids: [1, 13, 14]
        }
    },
}
</script>