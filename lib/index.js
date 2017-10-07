const defaultRate = 5;
const defaultDepth = 10;

export default function(audioCtx, audioParam, options = {}) {
  if (window.OscillatorNode && audioCtx instanceof OscillatorNode) {
    options = audioParam || {};
    audioParam = audioCtx.frequency;
    audioCtx = audioCtx.context;
  } else if (!audioCtx) {
    throw new Error("AudioContext not specified.");
  } else if (!audioParam) {
    throw new Error("AudioParam not specified.");
  }

  let oscillator = audioCtx.createOscillator();
  oscillator.frequency.value = options.rate || defaultRate;

  let gain = audioCtx.createGain();
  gain.gain.value = options.depth || defaultDepth;

  oscillator.connect(gain).connect(audioParam);
  oscillator.start();
}
