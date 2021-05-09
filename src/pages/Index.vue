<template>
  <Layout>
    <div class="profile-header">
      <div class="profile-header__image-wrapper">
        <g-image class="profile-header__image-wrapper__image-circle" src="~/images/hassan.png" />
      </div>
      <div class="profile-header__description">
        <p>
          Web サービスを作る仕事をしています。
          Rails / Nuxt.js を好んで使います。
          趣味は個人開発とピアノと囲碁です。
        </p>
      </div>
    </div>

    <article>
      <p>
        <a href="https://twitter.com/hassasa3">Twitter</a> /&nbsp;
        <a href="https://note.mu/usabdelah">note</a> /&nbsp;
        <a href="https://qiita.com/Hassan">Qiita</a> /&nbsp;
        <a href="https://github.com/yuta17">GitHub</a> やっています。
      </p>

      <section>
        <h2 class="section-title">仕事</h2>
        <p>
        フリーランスで Rails エンジニアをしています。
        前職は株式会社CAMPFIREで Web・SREエンジニアをしていました。
        サブスキルは Nuxt.js / AWS など。
        </p>

        <h4>できること</h4>
        <ul>
          <li>新機能開発</li>
          <li>機能改善</li>
          <li>Ruby / Rails のバージョンアップデート</li>
          <li>パフォーマンスチューニング</li>
          <li>etc</li>
        </ul>

        <p>仕事を依頼したい方は<a href="https://github.com/yuta17/cv_public">実績(職務経歴書)</a>をご覧ください。</p>

      <section>
        <h2 class="section-title">個人開発</h2>
        <p>
          個人でフリーランス・副業向けの稼働管理サービス
          <a href="https://klow.app" target="_blank">Klow</a> を作っています。
        </p>
        <p>日頃の稼働管理はもちろん、毎月のクライアントへの提出書類をワンクリックでダウンロードできるので、自分で作って自分で重宝しています。</p>
      </section>

      <section>
        <h2 class="section-title">趣味</h2>
        <p>アニソン・ボカロ・JPOP を中心にピアノを弾きます。</p>
        <p>愛してやまないピアニスト「まらしぃ」さんの譜面を弾いたり、耳コピして弾きます。</p>
        <p>これは耳コピして弾いた BiSH の「プロミスザスター」という曲です。</p>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/7-InFoUHtO8?controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>使用している電子ピアノは Roland の RD2000 です。</p>
        <p>最高ですね。</p>

        <p>後、たまに囲碁を打ちます。</p>
        <p>五段戦で惜しくも準優勝だったり、小さな大会で優勝するくらいの実力です。</p>
        <g-image class="description-image" src="~/images/igo.png" />
        <g-image class="description-image" src="~/images/igo_yusyo.png" />
        <p>囲碁を初めた時から六段の取得が目標なのですが、人生の後半で目標を失った時のために五段でとめています。</p>
      </section>

      <section>
        <h2 class="section-title">今後の目標</h2>
        <p>0->1でユーザーに好かれるサービスを作る。その収益で生活できたら最高です。</p>
      </section>
    </article>
  </Layout>
</template>

<style lang='scss' scoped>
.profile-header {
  display: flex;
  align-items: center;
  margin: 0 0 1.5rem 0;

  @media screen and (max-width: 500px) {
    margin: 0 0 0.5rem 0;
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
