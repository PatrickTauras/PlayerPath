import React from 'react';
import styles from './PlayerCard.module.css';

const PlayerCard = ({ player, revealedLogos, showTeamName }) => {
  const logos = [];
  const teamNames = [];
  for (let i = 1; i <= player['Team_Count']; i++) {
    logos.push(player[`LOGO ${i}`]);
    teamNames.push(player[`Team Name ${i}`]);
  }

  return (
    <div className={styles.card}>
      {logos.map((logo, index) => (
        <div key={index} className={revealedLogos[index] ? styles.logoBox : styles.hiddenLogoBox}>
          {showTeamName ? (
            revealedLogos[index] ? (
              <span className={styles.teamName}>{teamNames[index]}</span>
            ) : (
              <div className={styles.hiddenTeamName}>{teamNames[index]}</div>
            )
          ) : (
            <img
              src={logo}
              alt={`Team ${index + 1}`}
              className={revealedLogos[index] ? styles.logoImage : styles.hiddenLogoImage}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;
