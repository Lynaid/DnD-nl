window.addEventListener("DOMContentLoaded", (event) => {
  console.log("FRONTEND READY");
});

let gameInit = anime.timeline({
  easing: "easeInOutExpo",
  duration: 3000,
});

gameInit
  .add({
    targets: ".buttondiv",
    scale: [0, 1],
    marginTop: [0, 0],
    delay: 1000,
    duration: 750,
  })
  .add(
    {
      targets: "#srps-div",
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 750,
    },
    "-=200"
  )
  .add(
    {
      targets: "#srps-tag",
      opacity: [0, 1],
      duration: 750,
    },
    "-=800"
  )
  .add(
    {
      targets: "#code-tag",
      opacity: [0, 1],
      duration: 750,
    },
    "-=950"
  );

gameInit.finished.then(function () {
  let buttonBounce = anime.timeline({
    duration: 1200,
    easing: "easeInOutExpo",
    loop: true,
    direction: "alternate",
    delay: 3000,
  });

  buttonBounce.add({
    targets: ".buttondiv",
    scale: [1, 1.25],
  });
});

document.querySelector(".buttondiv").onclick = function () {
  gameStart();
};

gameStart = () => {
  let startGameAni = anime.timeline({
    duration: 1200,
    easing: "easeInOutBack",
    direction: "fowards",
    loop: false,
  });

  startGameAni
    .add({
      targets: ".buttondiv",
      translateX: [0, -3000],
      opacity: [1, 0],
      delay: 200,
    })
    .add({
      targets: "#choiceprompt",
      opacity: [0, 1],
      translateX: [3000, 0],
    })
    .add({
      targets: ".buttondiv",
      marginTop: [0, -3000],
    });
};

document.querySelector("#rock").onclick = function () {
  loadResult();
};

document.querySelector("#paper").onclick = function () {
  loadResult();
};

document.querySelector("#scissors").onclick = function () {
  loadResult();
};

loadResult = () => {
  let loadAni = anime.timeline({
    easing: "easeInOutExpo",
    direction: "forwards",
    duration: 450,
  });

  loadAni
    .add({
      targets: "#rock, #paper, #scissors",
      opacity: [1, 0],
    })
    .add({
      targets: "h1",
      opacity: [1, 0],
    })
    .add({
      targets: "h1, #rock, #paper, #scissors",
      marginTop: -2000,
    });

  loadAni.finished.then(function () {
    let resultAni = anime.timeline({
      easing: "easeInOutExpo",
      direction: "forwards",
      duration: 700,
    });

    resultAni
      .add({
        targets: ".result",
        marginTop: -2000,
        display: "none",
      })
      .add({
        targets: ".result",
        opacity: [0, 1],
        display: "block",
        marginTop: -40,
      })
      .add({
        targets: "#playerResult",
        opacity: [0, 1],
        delay: 300,
      })
      .add({
        targets: "#cpuResult",
        opacity: [0, 1],
        delay: 300,
      })
      .add({
        targets: "#finalResult",
        opacity: [0, 1],
        delay: 200,
      })
      .add({
        targets: "#outcome",
        opacity: [0, 1],
        delay: 200,
      })
      .add({
        targets: "#returnHome, #playAgain",
        opacity: [0, 1],
        delay: 200,
      });

    let flashAni = anime.timeline({
      direction: "forwards",
      loop: true,
      easing: "steps(1)",
    });

    flashAni.add({
      targets: "#playAgain",
      delay: 5000,
      border: [
        { value: "2px solid var(--yellow" },
        { value: "2px solid var(--black", duration: 200 },
        { value: "2px solid var(--yellow)", duration: 200 },
        { value: "2px solid var(--black)", duration: 200 },
        { value: "2px solid var(--yellow)", duration: 200 },
      ],
    });

    resultAni.finished.then(flashAni);
  });
};

let resetButton = document.getElementById("returnHome");
let activateResetButton = (resetButton.onclick = function () {
  let fadeLine = anime.timeline({
    duration: 1000,
  });

  fadeLine
    .add({
      targets: ".result, #srps-div, #srps-tag, #code-tag, .srps-tag, .code-text, .srps-logo, #startGame, .buttondiv",
      opacity: [{ value: 1 }, { value: 0, duration: 600 }],
      display: [{ value: "block" }, { value: "none", duration: 1 }],
    })
    .add({
      targets: "main",
      backgroundColor: "black",
    });

  setTimeout(() => {
    window.location.reload();
  }, 1200);
});

let playButton = document.getElementById("playAgain");
let activatePlay = (playButton.onclick = function () {
  let playAgainTL = anime.timeline({
    duration: 1300,
    direction: "forwards",
  });

  playAgainTL
    .add({
      targets: ".result",
      opacity: [{ value: 1 }, { value: 0, duration: 700 }],
      marginTop: [{ value: -40 }, { value: -40, duration: 400 }, { value: -2000, duration: 200 }],
    })
    .add({
      targets: "h1, #rock, #paper, #scissors",
      marginTop: [{ value: -2000 }, { value: 0, duration: 100 }],
      opacity: [{ value: 0 }, { value: 0, duration: 500, delay: 200 }, { value: 1, duration: 500, delay: 100 }],
      margin: [{ value: 5, duration: 500, delay: 100 }],
    });
});
