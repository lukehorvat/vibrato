const defaultRate = 5;
const defaultDepth = 10;

export default function(audioCtx, audioParam, options = {}) {
  if (audioCtx instanceof OscillatorNode) {
    options = audioParam || {};
    audioParam = audioCtx.frequency;
    audioCtx = audioCtx.context;
  } else if (!audioCtx) {
    throw new Error("AudioContext not specified.");
  } else if (!audioParam) {
    throw new Error("AudioParam not specified.");
  }

  let oscillator = new OscillatorNode(audioCtx);
  oscillator.frequency.value = options.rate || defaultRate;

  let gain = new GainNode(audioCtx);
  gain.gain.value = options.depth || defaultDepth;

  oscillator.connect(gain).connect(audioParam);
  oscillator.start();
}
