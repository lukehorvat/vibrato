const defaultRate = 5;
const defaultDepth = 10;

export default function(audioCtx, audioParam, options = {}) {
  let oscillator = new OscillatorNode(audioCtx);
  oscillator.frequency.value = options.rate || defaultRate;

  let gain = new GainNode(audioCtx);
  gain.gain.value = options.depth || defaultDepth;

  oscillator.connect(gain).connect(audioParam);
  oscillator.start();
}
