<template>
  <Layout>
    <div class="profile-header">
      <div class="profile-header__image-wrapper">
        <g-image class="profile-header__image-wrapper__image-circle" src="~/images/hassan.png" />
      </div>
      <div class="profile-header__description">
        <p>Web サービスを作る仕事をしています。
        Ruby / Rails / Javascript / Vue.js を好んで使います。
        個人で Rinaria というサービスを作成しています。
        趣味はピアノと囲碁です。</p>
      </div>
    </div>

    <article>
      <p>
        <a href="https://twitter.com/hassasa3">Twitter</a> / 
        <a href="https://www.instagram.com/hassasasan/">Instagram</a> / 
        <a href="https://note.mu/usabdelah">note</a> やっています。
      </p>

      <section>
        <h2 class="section-title">仕事 (2018/03/01 ~)</h2>
        <p>クラウドファンディングのサービスを作っています。</p>
        <p>主な業務は、バックエンド (Ruby / Rails)・フロントエンド (CSS [SCSS] / Javascript) を用いて新規の機能開発や機能改善をすることです。</p>
      </section>

      <section>
        <h2 class="section-title">個人開発してます</h2>
        <p>個人で <a href="https://rinaria.co" target="_blank">Rinaria (https://rinaria.co)</a> という演奏化のマッチングサービスを作っています。</p>
        <p>質の高いマッチングを実現するため、今は演奏化の動画・音源・文章などのアウトプットをまとめる場所になることを目指しています。</p>
      </section>

      <br>
      <p>仕事・個人問わず、「自分が欲しくて使うものを作る」ことを大切にしています。</p>

      <section>
        <h2 class="section-title">ピアノを弾きます</h2>
        <p>アニソン・ボカロ・JPOP を中心にピアノを弾きます。</p>
        <p>愛してやまないピアニスト「まらしぃ」さんの譜面を弾いたり、耳コピして弾きます。</p>
        <p>これは耳コピして弾いた BiSH の「プロミスザスター」という曲です。</p>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/7-InFoUHtO8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>使用している電子ピアノは Roland の RD2000 です。</p>
        <p>最高ですね。</p>
        <p>今後弾く曲は <a href="https://rinaria.co/users/@uvpian" target="_blank">Rinaria の私のページ</a>から見ることができます。</p>
      </section>

      <section>
        <h2 class="section-title">たまに囲碁を打ちます</h2>
        <p>五段戦で惜しくも準優勝だったり、</p>
        <g-image class='description-image' src="~/images/igo.png" />
        <p>小さな大会で優勝するくらいの実力です。</p>
        <g-image class='description-image' src="~/images/igo_yusyo.png" />
        <p>囲碁を初めた時から六段の取得が目標なのですが、人生の後半で目標を失った時のために五段でとめています。</p>
      </section>

      <section>
        <h2 class="section-title">今後やってみたいこと</h2>
        <p>・好きな人が喜ぶサービスを0から作ること</p>
        <p>・ピアノの生放送</p>
      </section>
    </article>
  </Layout>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.profile-header {
  display: flex;
  align-items: center;
  margin: 0 0 1.5rem 0;

  @media screen and (max-width: 500px) {
    margin: 0 0 .5rem 0;
  }

  &__image-wrapper {
    width: 80px;
    margin: 0 1rem 0 0;

    &__image-circle {
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
  }
}

.section-title {
  font-size: 1.3rem;
  margin: 3rem 0 0 0;
}

.description-image {
  width: 100%;
  height: 500px;

  @media screen and (max-width: 500px) {
    height: 350px;
  }
}
</style>
