import styles from "../../styles/waveAnimation.module.css";

const WaveAnimation: React.FC = () => {
  return (
    <div className="mt-40">
      <div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </div>
  );
};

export default WaveAnimation;
