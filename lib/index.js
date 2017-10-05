const defaultRate = 5;
const defaultDepth = 10;

export default function(audioCtx, audioParam, options = {}) {
  if (audioCtx instanceof OscillatorNode) {
    options = audioParam || {};
    audioParam = audioCtx.frequency;
    audioCtx = audioCtx.context;
  }

  let oscillator = new OscillatorNode(audioCtx);
  oscillator.frequency.value = options.rate || defaultRate;

  let gain = new GainNode(audioCtx);
  gain.gain.value = options.depth || defaultDepth;

  oscillator.connect(gain).connect(audioParam);
  oscillator.start();
}
