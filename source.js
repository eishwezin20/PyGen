fetch("https://api.ai21.com/studio/v1/j1-large/complete", {
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
      "prompt": "Q: Write a Python program that calculates the sum of all positive integers smaller than 8.\nA: sum(x for x in range(8))\nQ: Write a Python program that calculates the sum of squares of all positive integers between 2 and 13.\nA: sum(x**2 for x in range(2, 13))\nQ:Write a function to compute volume of a circle.\nA: def volume(r):\n    return (2*pi*r**2)\nQ:\n\n",
      "numResults": 1,
      "maxTokens": 40,
      "temperature": 0,
      "topKReturn": 0,
      "topP":1,
      "countPenalty": {
        "scale": 0,
        "applyToNumbers": false,
        "applyToPunctuations": false,
        "applyToStopwords": false,
        "applyToWhitespaces": false,
        "applyToEmojis": false
      },
      "frequencyPenalty": {
        "scale": 0,
        "applyToNumbers": false,
        "applyToPunctuations": false,
        "applyToStopwords": false,
        "applyToWhitespaces": false,
        "applyToEmojis": false
      },
      "presencePenalty": {
        "scale": 0,
        "applyToNumbers": false,
        "applyToPunctuations": false,
        "applyToStopwords": false,
        "applyToWhitespaces": false,
        "applyToEmojis": false
      },
      "stopSequences":["Q:"]
    }),
  method: "POST"
});
