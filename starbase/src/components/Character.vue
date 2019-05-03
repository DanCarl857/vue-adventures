<template>
<div class="col-md-4" @click="switchCharacter">
    <div class="character-card">
        <div class="card-block">
            <h4 class="card-title">{{character.name}}</h4>
            <p class="card-text">Height: {{character.height}}cm</p>
            <p class="card-text">Mass: {{character.mass}}kg</p>
            <p class="card-text">Hair Color: {{character.hair_color}}</p>
            <p class="card-text">Eye Color: {{character.eye_color}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'character',
    props: ['id'],
    data() {
        return {
            character: {}
        }
    },
    created() {
        this.fetchCharacter(this.id)
    },
    methods: {
        fetchCharacter(id) {
            fetch(`http://swapi.co/api/people/${id}`, {
                method: 'GET'
            })
                .then(response => console.log(response))
                .then(responseJSON => this.character = responseJSON)
        },
        switchCharacter() {
            let random_id = Math.floor(Math.random() * 83) + 1
            this.fetchCharacter(random_id)
        }
    }
}
</script>

<style scoped>
.character-card {
    border: 2px solid #4FC08D;
    border-radius: 4px;
    cursor: pointer;
}
</style>