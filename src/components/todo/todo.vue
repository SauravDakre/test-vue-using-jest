<template>
    <div>
        <h2>Todo Component</h2>
        <input type="text" v-model='newTask'>
        <button v-on:click="add">add</button>
        <ul>
            <li v-for="task in tasks">{{task}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        name: 'todo',
        data(){
            return{
                tasks: [],
                newTask: ''
            }
        },
        methods: {
            add: function(){
                this.tasks.push(this.newTask);
                this.newTask = '';
            }
        }
    }
</script>