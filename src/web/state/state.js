const state = {
  elements: {
    container: null,
    scoreboard: null,
    volume: null,
    time: null,
    pause: null,
    moves: null,
    help: null,
    mainArea: null,
    puzzles: [],

    pauseBtn: null,

    menu: null,
    continueGameBtn: null,
    newGameBtn: null,
    saveGameBtn: null,
    savedGamesBtn: null,
    bestScoresBtn: null,
    rulesGameBtn: null,
    clearBestScoresBtn: null,
    settingsBtn: null,

    savedGamesMenu: null,
    savedGamesMenuTitle: null,
    savedGamesMenuButtonsWrapper: null,
    loadButton: null,
    removeButton: null,

    bestScoresMenu: null,
    rulesMenu: null,
    settingsMenu: null,
    boardSizeSelect: null,
    moveAnimationCheckbox: null,
    difficultySelect: null,

    backButton: null,
    winMenu: null,

    audioMove: null,
    audioDragMove: null,
    audioWin: null,
    audioMoveAnimation: null,
    audioMenuItemHover: null,
    audioMenuItemSelect: null,
    audioMenu: null,
    audioMainTheme: null,

    // local storage
    screenShot: null,
    // saved game menu
    screenShots: [],

    slider: null,
    angleLeft: null,
    angleRight: null,
  },
  values: {
    dimension: 4,
    moves: 0,
    timerId: "",
    time: `00:00`,
    minutes: 0,
    seconds: 0,
    isPauseClicked: false,
    isVolumeOn: true,
    isAnimation: true,
    // autoplay policy
    isMenuItemClicked: false,
    previousRandomImageName: "",
    randomImageName: "",
    maxSavedGamesCount: 10,
    maxBestScoresCount: 10,

    isLoad: false,
    savedGames: [],
    bestScores: [],
    currentScreenShotId: 0,
    difficulty: 2,
  },
};

export default state;
