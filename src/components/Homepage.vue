<template>
  <div>
    <div v-for="story in stories" :key="story.id">
      <span id="score">Score: {{ story.data.score }}</span>
      <a :href="story.data.url"><h2>{{ story.data.title }}</h2></a>
      <p>Type: {{ story.data.type }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Homepage',
    data: function () {
      return {
        err: '',
        stories: [],
        hrefLink: ''
      }
    },
    created: function () {
      axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then((result) => {
          this.results = result.data.slice(0, 10)
          this.results.forEach(element => {
            axios.get('https://hacker-news.firebaseio.com/v0/item/' + element + '.json')
              .then((result) => {
                this.stories.push(result)
                this.hrefLink = result.data.url
                console.log(this.hrefLink)
              })
              .catch((err) => {
                console.log(err)
              })
          })
        })
        .catch((err) => { this.err = err })


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #score {
    color: #ff6600;
    /*font-size: 1.1em;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 0;
    width: 80px;
    text-align: center;
    margin-top: -10px;*/
  }
</style>