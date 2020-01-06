<template>
    <div class="padding-all">
        <Item v-for="story in stories" :key="story.data.id" :story="story" />
    </div>
</template>

<script>
import axios from "axios";
import Item from "@/components/Item";
export default {
    name: 'Show',
    components: {
        'Item': Item
    },
    data: function(){
        return {
            err: '',
            stories: []
        }
    },
    created: function(){
        axios.get('https://hacker-news.firebaseio.com/v0/showstories.json')
            .then((response) => {
                let results = response.data.slice(0,9);
                results.forEach(id => {
                    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                        .then((response) => {
                            this.stories.push(response);
                        })
                        .catch((err) => {
                            this.err = err;
                        })
                });
            })
            .catch((err) => {
                this.err = err;
            })
    }
}
</script>

<style scoped>
.padding-all{
    padding: 20px;
}
</style>