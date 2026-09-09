import SectionTitle from "./SectionTitle";
import styles from "./kojin.module.css";

export default function Concept() {
  return (
    <section className={styles.section}>
      <SectionTitle>
        私たちが目指す「住まいと暮らしの工務店」とは？
      </SectionTitle>

      <div className={styles.concept}>
        <div className={styles.conceptMessage}>
          <h3>
            できることは、私たちが。
            <br />
            専門の力が必要なことは、
            <br />
            信頼できるプロと。
          </h3>
          <p>
            お客様・ご家族の「困った」を起点に、自社のサービスと地域の専門家が協力。
            力を合わせて、暮らし全体を支えます。
          </p>
        </div>

        <div className={styles.conceptPanel}>
          <div>
            <h3>自社で対応できること</h3>
            <ul>
              <li>家財整理・遺品整理</li>
              <li>引越し・運搬</li>
              <li>お家のクリーニング</li>
              <li>暮らしのお手伝い</li>
              <li>空き家管理 など</li>
            </ul>
          </div>

          <div className={styles.conceptCenter}>
            <span>お客様・ご家族</span>
            <strong>PROJECT HOPE</strong>
            <small>プロジェクトホープ</small>
          </div>

          <div>
            <h3>地域の専門家と連携</h3>
            <ul>
              <li>内装・リフォーム</li>
              <li>設備工事</li>
              <li>不動産</li>
              <li>士業（税理士・行政書士など）</li>
              <li>その他専門業者 など</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
