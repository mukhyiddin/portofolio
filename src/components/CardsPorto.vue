export <template>
<div href="google.com" class="card mycard w-96 bg-gray-700">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div class="card-body">
    <h2 class="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div class="card-actions justify-end">
      <!-- <button class="btn btn-primary">Learn now!</button> -->
    </div>
  </div>
</div>
</template>

<style>
.mycard{
    transition: transform 0.7s;
}

.mycard:hover{
    transform: scale(1.08);
}
</style>