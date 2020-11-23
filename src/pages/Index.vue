<template>
  <Layout>
    <div class="profile-header">
      <div class="profile-header__image-wrapper">
        <g-image class="profile-header__image-wrapper__image-circle" src="~/images/hassan.png" />
      </div>
      <div class="profile-header__description">
        <p>
          Web サービスを作る仕事をしています。
          Ruby / Rails / Nuxt.js を好んで使います。
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
        <p>株式会社CAMPFIREでWeb・SREエンジニア→フリーランスエンジニアになりました。</p>
        <p>以下のスキルを用いた機能開発、改善をしています。</p>
        <h4>SKILLS</h4>
        <ul>
          <li>HTML5、CSS3、SCSS</li>
          <li>Vue.js、Nuxt.js、TypeScript</li>
          <li>Ruby、Rails</li>
          <li>AWS、Heroku、Terraform</li>
          <li>MySQL、PostgreSQL</li>
        </ul>

        <h2 class="section-title">執筆</h2>
        <p>仕事でやった事を記事に書いたりしています。</p>
        <ul>
          <li>
            <a href="https://note.mu/campfire_dev/n/n72acb517aecc">2タップでかんたん支援！クイック支援をリリースしました！</a>
          </li>
          <li>
            <a
              href="https://note.mu/campfire_dev/n/n354c56dd007c"
            >プロジェクトの支援がしやすく！ログインせずに支援できるようになりました！</a>
          </li>
          <li>
            <a
              href="https://note.mu/campfire_dev/n/nb5969d388fd3"
            >Rails 5.1.6 から 5.2.2.1 へアップデートしました！</a>
          </li>
          <li>
            <a href="https://note.mu/campfire_dev/n/n1686059962b5">Rails に Webpack と Vue を導入しました！</a>
          </li>
          <li>
            <a
              href="https://qiita.com/Hassan/items/065dd6bd3c123e1a6092"
            >Digdag + Embulk によるデータマスキング</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 class="section-title">個人開発</h2>
        <p>
          請求書・作業報告書の自動作成サービス
          <a href="https://klow.app" target="_blank">Klow</a> を作っています。
        </p>
        <p>毎月の経理作業を億劫に感じてるフリーランスの方に特にお勧めです。</p>
      </section>

      <br />
      <p>仕事・個人問わず、「自分が使うものを作る」ことを大切にしています。</p>

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
        <p>0->1で多くの人に使われるサービスを作る</p>
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
