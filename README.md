# vibrato [![NPM version](http://img.shields.io/npm/v/vibrato.svg?style=flat-square)](https://www.npmjs.com/package/vibrato)

[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) vibrato effect.

## Installation

Install the package with NPM:

```bash
$ npm install vibrato
```

## Usage

The package exposes a function that accepts an [AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) as the first argument, and an [AudioParam](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam) as the second. Optionally, an object specifying `rate` and `depth` can also be provided as the third argument. When called, the function will apply a vibrato effect to the AudioParam.

Example:

```javascript
import vibrato from "vibrato";

let context = new (window.AudioContext || window.webkitAudioContext)();
let oscillator = context.createOscillator();
oscillator.connect(context.destination);
oscillator.start();

vibrato(context, oscillator.frequency, { rate: 4, depth: 16 });
```

Furthermore, as a convenient shorthand, you can pass in an [OscillatorNode](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode) directly:

```javascript
vibrato(oscillator, { rate: 4, depth: 16 });
```
