export <template>
<div class="card mycard mb-4 w-96 bg-gray-700 max-lg:w-80 max-md:w-72">
  <figure><img style="max-width: 100%;" :src="imgurl" alt="port!"/></figure>
  <div class="card-body">
    <h2 class="card-title max-lg:text-lg max-md:text-sm">{{ title }}</h2>
    <p class="max-lg:text-sm max-md:text-xs">{{desc}}</p>
    <!-- <iframe src="https://mukhyiddin.github.io/Wedding-Dreaming-Mataram/screenshot.png" width="600" height="400" frameborder="0"></iframe> -->
    <!-- <img src="https://mukhyiddin.github.io/Wedding-Dreaming-Mataram" alt="Website Preview" width="800" height="600"> -->

    <div class="card-actions justify-center">
      <a :href="LinkTo" target="_blank">
        <button class="btn btn-l max-lg:btn-sm max-md:btn-xs btn-primary">(    
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