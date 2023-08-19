export <template>
<div class="card mycard mb-4 w-96 bg-gray-700">
  <figure><img style="max-width: 100%;" :src="imgurl" alt="port!"/></figure>
  <div class="card-body">
    <h2 class="card-title">{{ title }}</h2>
    <p>{{desc}}</p>
    <!-- <iframe src="https://mukhyiddin.github.io/Wedding-Dreaming-Mataram/screenshot.png" width="600" height="400" frameborder="0"></iframe> -->
    <!-- <img src="https://mukhyiddin.github.io/Wedding-Dreaming-Mataram" alt="Website Preview" width="800" height="600"> -->

    <div class="card-actions justify-center">
      <a :href="LinkTo" target="_blank">
        <button class="btn btn-primary">(    
          <i class="fas fa-eye"> </i>
          ,
          <i class="fas fa-eye"> </i>
          )
        </button>
      </a>

    </div>
  </div>
</div>
</template>

<style>
.mycard{
    transition: transform 0.3s;
}

.mycard:hover{
    transform: scale(1.04);
}
</style>
<script>
  export default {
    props: {
        title: {
            type: String,
            default:''
      },
        desc: {
            type: String,
            default:''
        },
        imgurl: {
            type:String,
            default: ''
        },
        LinkTo: {
            type:String,
            default: ''
        },
    }
  }
</script>