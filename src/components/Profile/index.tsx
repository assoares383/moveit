import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Profile.module.css';

export default function Profile() {
  const { level } = useContext(ChallengesContext);
  
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/15836394?s=460&u=70673f20d41e1ee784577c36affb639d453a3552&v=4" alt="Alexandre Soares"/>     
      <div>
        <strong>Alexandre Soares</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}