<template>
  <!-- activity on social media and on the web -->
  <div>
    <h2 class="positionCenter presenceWeb">Presence on the web</h2>
    <div class="activity">
      <!-- GITHUB -->
      <div class="activityInfoBox github" v-if="coinUrl.links.repos_url.github.length > 0">
        <h3>Github</h3>
        <div v-for="(repo, index) in coinUrl.links.repos_url.github" :key="index" class="git">
          <i class="fab fa-github"></i>
          <a target="_blank" :href="repo">{{' ' + repo.slice(repo.lastIndexOf('/'),-1) }}</a>
        </div>
      </div>
      <!-- END ACTIVITYINFOBOX -->
      <!-- SOCIAL MEDIA -->
      <div class="social">
        <h3>Social media</h3>
        <!-- TWITTER -->
        <div class="activityInfoBox" v-if="coinUrl.links.twitter_screen_name">
          <div class="twitter">
            <i class="fab fa-twitter"></i>
            <a
              target="_blank"
              :href="twitter + coinUrl.links.twitter_screen_name"
            >{{" @" + coinUrl.links.twitter_screen_name}}</a>
            <p>{{ coinUrl.community_data.twitter_followers + " followers" }}</p>
          </div>
        </div>
        <!-- END ACTIVITYINFOBOX -->
        <!-- SUBREDDIT -->
        <div class="activityInfoBox" v-if="subreddit">
          <div class="subreddit">
            <i class="fab fa-reddit-alien"></i>
            <a target="_blank" :href="subreddit">{{' ' + coinUrl.name }}</a>
            <p>{{ coinUrl.community_data.reddit_subscribers + " subscribers" }}</p>
          </div>
        </div>
        <!-- END ACTIVITYINFOBOX -->
        <!-- FACEBOOK -->
        <div class="activityInfoBox" v-if="coinUrl.links.facebook_username">
          <div class="facebook">
            <i class="fab fa-facebook-f"></i>
            <a
              target="_blank"
              :href="facebook + coinUrl.links.facebook_username"
            >{{ ' ' + coinUrl.links.facebook_username}}</a>
          </div>
        </div>
        <!-- END ACTIVITYINFOBOX -->
      </div>
      <!-- END SOCIAL -->
      <!-- OTHER PRESENCE ON THE WEB -->
      <div class="otherWeb">
        <div
          class="activityInfoBox"
          v-if="coinUrl.links.homepage.length > 0 && coinUrl.links.homepage[0].length > 0"
        >
          <h3>Homepage</h3>
          <div v-for="(page, index) in coinUrl.links.homepage" :key="index" class="homepage">
            <div class v-if="page.length>0">
              <i class="fas fa-link"></i>
              <a target="_blank" :href="page">{{ ' ' + page }}</a>
            </div>
          </div>
        </div>
        <!-- END ACTIVITYINFOBOX -->
        <div
          class="activityInfoBox"
          v-if="coinUrl.links.official_forum_url.length > 0 && coinUrl.links.official_forum_url[0].length > 0"
        >
          <h3>Official forum</h3>
          <div
            v-for="(chat, index ) in coinUrl.links.official_forum_url"
            :key="index"
            class="forum"
          >
            <div v-if="chat.length>0">
              <i class="fas fa-comments"></i>
              <a target="_blank" :href="chat">{{ ' ' + chat}}</a>
            </div>
          </div>
        </div>
        <!-- END ACTIVITYINFOBOX -->
      </div>
      <!-- END OTHER WEB -->
    </div>
    <!-- END ACTIVITY -->
    <!-- THE BAR ON THE BOTTOM TO SEE THE SENTIMENT -->
    <p>{{"Sentiment : " + coinUrl.sentiment_votes_up_percentage + "% / " + coinUrl.sentiment_votes_down_percentage + "%"}}</p>
    <div class="sentiment">
      <div :style="{'width': coinUrl.sentiment_votes_up_percentage + '%'}" class="positiv"></div>
      <div class="negativ"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["coinUrl"],
  data: function() {
    return {
      twitter: "https://twitter.com/",
      facebook: "https://www.facebook.com/",
      subreddit: "coinUrl.links.subreddit_url"
    };
  },
  methods: {}
};
</script>

<style>
.activity {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.github,
.social,
.otherWeb {
  margin: 10px 20px;
}

.sentiment {
  width: 95%;
  margin: 2.5%;
  height: 2px;
  background: red;
}
.positiv {
  background: green;
  height: 100%;
  width: 50%;
}

.presenceWeb {
  margin: 20px;
}
a {
  line-height: 200%;
  letter-spacing: 1px;
  color: aliceblue;
}
</style>
