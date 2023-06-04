
<script setup>
import Cards from './Cards.vue';
import sd from '../assets/sd.png'
import mts from '../assets/mts.png'
import smk from '../assets/smk.jpg'
import kuliah from '../assets/stiki.jpg'
</script>

export <template>
  <div id="education">
            <div className="pt-12">
                    
                    <div className="text-center pl-16 underline underline-offset-8 collapse-title text-black  font-bold text-2xl peer-checked:text-black">
                        Education
                    </div>
                    <div className="text-primary-content peer-checked:text-black">
                        <div className="container mx-auto mr-7 mt-10 pb-10">
                            <div className="grid grid-rows-1 grid-flow-col gap-5">
                                <Cards :imgurl="sd" LinkTo="https://dapo.kemdikbud.go.id/sekolah/FE98E207E8490E39DA02" Tahun="2004 - 2010" Sekolah="SD 1 Taliwang" />
                                <Cards :imgurl="mts" LinkTo="http://50204342.siap-sekolah.com/sekolah-profil/" Tahun="2010 - 2013" Sekolah="MTsN 1 Taliwang" />
                                <Cards :imgurl="smk" LinkTo="https://www.smkn1taliwang.sch.id/" Tahun="2013 - 2016" Sekolah="SMkN 1 Taliwang" />
                                <Cards :imgurl="kuliah" LinkTo="https://www.stiki.ac.id/" Tahun="2016 - 2021" Sekolah="STIKI Malang" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
</template>


<style>

</style>