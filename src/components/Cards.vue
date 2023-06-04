export <template>
  <div class="card border-black border-2 w-72 bg-base-100 shadow-lg shadow-black">
            <figure><img class="mt-3 rounded-xl" :src="imgurl" alt="Shoes" /></figure>
            <div class="card-body text-blue-700">
                <h2 class="card-title grid row">
                    <a :href= "LinkTo" target="_blank" rel="noreferrer"><div class="badge badge-secondary">{{ Sekolah }}</div></a>

                </h2>
                <h2>
                    <div class="badge badge-primary bg-transparent text-secondary font-bold">{{ Tahun }}</div>
                </h2>

                <div class="card-actions justify-end">

                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        imgurl: {
            type:String,
            default: ''
        },
        LinkTo: {
            type:String,
            default: ''
        },
        Sekolah: {
            type:String,
            default: ''
        },
        Tahun: {
            type:String,
            default: ''
        },
    }
}
</script>

<style>

</style>