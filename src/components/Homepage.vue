<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="table-responsive">
          <table class="table">
            <tbody v-for="story in stories" :key="story.id">
              <tr>
                <td><span id="score">{{ story.data.score }} points</span></td>
                <td><a :href="story.data.url"><h2>{{ story.data.title }}</h2></a></td>
              </tr>
              <tr>
                <td>by {{ story.data.by }}</td>
                <router-link :to="{ path: '/story/' + story.data.id }">
                  <td>{{ story.data.descendants }} comments</td>
                </router-link>
              </tr>

            </tbody>

          </table>
        </div>
      </div>
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