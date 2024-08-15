import React, { useState, useEffect } from 'react';
import PlayerCard from '../Components/PlayerCard';
import CorrectPopup from '../Components/CorrectPopup';
import NotGuessedCorrectly from '../Components/NotGuessedCorrectly';
import ToggleSwitch from '../Components/ToggleSwitch';
import styles from './PlayerData.module.css';

// Function to get today's date in the correct timezone
const getCorrectedTodayDate = () => {
  const now = new Date();
  now.setHours(now.getHours() - 5); // Adjust for CST (UTC-5) if necessary
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

const PlayerData = ({ updateStats, selectedDate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [guesses, setGuesses] = useState(Array(8).fill(''));
  const [correctPlayer, setCorrectPlayer] = useState('');
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [revealedLogos, setRevealedLogos] = useState([]);
  const [showCorrectPopup, setShowCorrectPopup] = useState(false);
  const [showNotGuessedCorrectly, setShowNotGuessedCorrectly] = useState(false);
  const [showTeamName, setShowTeamName] = useState(false);
  const [showSeasonYear, setShowSeasonYear] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [showPosition, setShowPosition] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchPlayerData = async () => {
      const today = getCorrectedTodayDate();
      const todayDate = today.toISOString().slice(0, 10);
      const formattedDate = selectedDate.toISOString().slice(0, 10);

      const activeDate = selectedDate.getDate() === today.getDate() &&
                         selectedDate.getMonth() === today.getMonth() &&
                         selectedDate.getFullYear() === today.getFullYear()
                         ? todayDate
                         : formattedDate;

      try {
        const response = await fetch('/data/players.json');
        const data = await response.json();
        setPlayers(data);

        let selectedPlayer = JSON.parse(localStorage.getItem(`player_${activeDate}`));

        if (!selectedPlayer) {
          if (activeDate === "2024-08-10") {
            selectedPlayer = data.find(player => player.Player === "Derrick Rose");
          } else if (activeDate === "2024-08-11") {
            selectedPlayer = data.find(player => player.Player === "Ray Allen");
          } else if (activeDate === "2024-08-12") {
            selectedPlayer = data.find(player => player.Player === "Howard Eisley");
          } else {
            const hash = Array.from(activeDate).reduce((hash, char) => hash + char.charCodeAt(0), 0);
            const randomIndex = hash % data.length;
            selectedPlayer = data[randomIndex];
          }
          localStorage.setItem(`player_${activeDate}`, JSON.stringify(selectedPlayer));
        }

        if (selectedPlayer) {
          const totalTeamBorders = selectedPlayer['Total Team Borders'];
          const lastLogoIndex = totalTeamBorders - 1;

          // Initialize revealed logos array with first and last logos revealed
          let initialRevealedLogos = Array(totalTeamBorders).fill(false);
          if (totalTeamBorders > 0) {
            initialRevealedLogos[0] = true; // Reveal the first logo
            initialRevealedLogos[lastLogoIndex] = true; // Reveal the last logo
          }
          setRevealedLogos(initialRevealedLogos);

          setPlayer({ ...selectedPlayer, Team_Count: totalTeamBorders });
          setCorrectPlayer(selectedPlayer.Player);
        }
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayerData();
  }, [selectedDate]);

  // Reset guesses when selectedDate changes
  useEffect(() => {
    setGuesses(Array(8).fill(''));
    setGameOver(false);
    setShowCorrectPopup(false);
    setShowNotGuessedCorrectly(false);
  }, [selectedDate]);

  useEffect(() => {
    if (player) {
      const activeDate = selectedDate.getDate() === getCorrectedTodayDate().getDate() &&
                         selectedDate.getMonth() === getCorrectedTodayDate().getMonth() &&
                         selectedDate.getFullYear() === getCorrectedTodayDate().getFullYear()
                         ? selectedDate.toISOString().slice(0, 10)
                         : selectedDate.toISOString().slice(0, 10);

      const gameState = {
        guesses,
        revealedLogos,
        gameOver,
      };
      localStorage.setItem(`gameState_${activeDate}`, JSON.stringify(gameState));
    }
  }, [guesses, revealedLogos, gameOver, selectedDate, player]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (selectedPlayerName) => {
    if (gameOver) return;

    const selectedPlayer = players.find(player => player.Player === selectedPlayerName);

    setGuesses(prevGuesses => {
      const newGuesses = [...prevGuesses];
      const index = newGuesses.findIndex(g => g === '');
      if (index !== -1) {
        newGuesses[index] = selectedPlayerName;
      }
      return newGuesses;
    });

    setSearchTerm('');

    if (selectedPlayerName === correctPlayer) {
      setShowCorrectPopup(true);
      setGameOver(true);
      setRevealedLogos(Array(player['Total Team Borders']).fill(true));
      updateStats(guesses.filter(guess => guess !== '').length + 1, true);
    } else {
      setRevealedLogos(prevRevealedLogos => {
        const newRevealedLogos = [...prevRevealedLogos];
        const nextIndex = newRevealedLogos.findIndex((revealed, index) => !revealed && index !== 0 && index !== newRevealedLogos.length - 1);
        if (nextIndex !== -1) {
          newRevealedLogos[nextIndex] = true;
        }
        if (guesses.filter(guess => guess !== '').length + 1 >= 7) {
          return Array(player['Total Team Borders']).fill(true);
        }
        return newRevealedLogos;
      });

      if (guesses.filter(guess => guess !== '').length + 1 >= 8 && selectedPlayerName !== correctPlayer) {
        setGameOver(true);
        setShowNotGuessedCorrectly(true);
        updateStats(8, false);
      }
    }
  };

  const filteredPlayers = players.filter(player =>
    player.Player.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.toggleContainer}>
        <ToggleSwitch isChecked={showTeamName} onChange={() => setShowTeamName(!showTeamName)} label="Team Name" />
        <ToggleSwitch isChecked={showSeasonYear} onChange={() => setShowSeasonYear(!showSeasonYear)} label="Season Year" />
        <ToggleSwitch isChecked={showAge} onChange={() => setShowAge(!showAge)} label="Age" />
        <ToggleSwitch isChecked={showPosition} onChange={() => setShowPosition(!showPosition)} label="Position" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.additionalInfoContainer}>
          {showSeasonYear && player && (
            <>
              <div className={styles.additionalInfoHeader}>Season Year</div>
              <div className={styles.additionalInfoText}>From: {player['From']}</div>
              <div className={styles.additionalInfoText}>To: {player['To']}</div>
            </>
          )}
          {showAge && player && (
            <>
              <div className={styles.additionalInfoHeader}>Age</div>
              <div className={styles.additionalInfoText}>{player['Age']}</div>
            </>
          )}
          {showPosition && player && (
            <>
              <div className={styles.additionalInfoHeader}>Position</div>
              <div className={styles.additionalInfoText}>{player['Pos']}</div>
            </>
          )}
        </div>
        <div className={styles.logosContainer}>
          {player && (
            <PlayerCard 
              player={player} 
              revealedLogos={revealedLogos} 
              showTeamName={showTeamName} 
            />
          )}
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder={gameOver ? "Come back tomorrow..." : "Guess the player..."}
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className={styles.searchBar}
            disabled={gameOver}
          />
          {isFocused && !gameOver && (
            <div className={styles.suggestions}>
              {filteredPlayers.slice(0, 10).map(player => (
                <div
                  key={player.Rk}
                  className={styles.suggestionItem}
                  onClick={() => handleSelect(player.Player)}
                >
                  {player.Player}
                </div>
              ))}
            </div>
          )}
          <div className={styles.guessesContainer}>
            {guesses.map((guess, index) => (
              <div key={index} className={`${styles.guessBox} ${guess ? (guess === correctPlayer ? styles.correct : styles.incorrect) : ''}`}>
                {guess || `Guess ${index + 1}`}
              </div>
            ))}
          </div>
        </div>
      </div>
      <CorrectPopup
        isOpen={showCorrectPopup}
        onClose={() => setShowCorrectPopup(false)}
        playerData={player}
      />
      <NotGuessedCorrectly
        isOpen={showNotGuessedCorrectly}
        onClose={() => setShowNotGuessedCorrectly(false)}
        playerData={player}
      />
    </div>
  );
};

export default PlayerData;
